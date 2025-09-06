import type { TweenerTo } from './tweener.svelte';

type Step = {
  execute: () => {
    then: (resolve: () => void) => Promise<void>;
  };
};

export function all(...promises: ReturnType<TweenerTo<any>>[]) {
  return Promise.all(promises);
}

export class TweenStepper {
  private steps: Step[];
  private currentStep = 0;

  private isRunning = $state(false);
  private isRestarting = $state(false);
  private isPlaying = $state(false);
  private isPlayingNext = $state(false);
  private isPlayingPrevious = $state(false);
  private isPaused = $state(false);
  private isLoop = $state(false);

  constructor() {
    this.steps = [];
  }

  public addStep(stepExecute: Step['execute']) {
    this.steps.push({ execute: stepExecute });
  }

  public get running() {
    return this.isRunning;
  }

  public get restarting() {
    return this.isRestarting;
  }

  public get playingPrevious() {
    return this.isPlayingPrevious;
  }

  public get playing() {
    return this.isPlaying;
  }

  public get playingNext() {
    return this.isPlayingNext;
  }

  public get paused() {
    return this.isPaused;
  }

  public get loop() {
    return this.isLoop;
  }

  public set loop(value: boolean) {
    this.isLoop = value;
  }

  public getControls() {
    return {
      restart: () => this.restart(),
      previous: () => this.previous(),
      play: () => this.play(),
      next: () => this.next(),
      pause: () => this.pause(),
    };
  }

  private async play() {
    if (this.isPlaying) {
      return;
    }

    this.isPlaying = true;
    this.isPaused = false;

    do {
      for (let i = this.currentStep; i < this.steps.length && !this.isPaused; i++) {
        this.currentStep = i;
        await this.executeCurrentStep();
      }

      // Reset to the first if not paused to allow looping
      if (!this.isPaused) {
        this.currentStep = 0;
      }
    } while (this.isLoop && !this.isPaused);

    this.isPaused = false;
    this.isPlaying = false;
  }

  private async restart() {
    this.isRestarting = true;

    this.isPaused = false;
    this.currentStep = 0;

    await this.executeCurrentStep();

    this.isRestarting = false;
  }

  private async previous() {
    this.isPlayingPrevious = true;

    this.currentStep--;
    if (this.currentStep < 0) {
      this.currentStep = this.steps.length - 1;
    }

    await this.executeCurrentStep();

    this.isPlayingPrevious = false;
  }

  private async next() {
    this.isPlayingNext = true;

    this.currentStep++;
    if (this.currentStep === this.steps.length) {
      this.currentStep = 0;
    }

    await this.executeCurrentStep();

    this.isPlayingNext = false;
  }

  private async pause() {
    if (!this.isPlaying) {
      return;
    }

    this.isPaused = true;
  }

  private async executeCurrentStep() {
    this.isRunning = true;
    await this.steps[this.currentStep].execute();
    this.isRunning = false;
  }
}
