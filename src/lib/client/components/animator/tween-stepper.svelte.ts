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
  private isPaused = false;
  private isPlaying = $state(false);
  private isLoop = $state(false);
  private currentStep = 0;

  constructor() {
    this.steps = [];
  }

  public addStep(stepExecute: Step['execute']) {
    this.steps.push({ execute: stepExecute });
  }

  public get playing() {
    return this.isPlaying;
  }

  public get loop() {
    return this.isLoop;
  }

  public set loop(value: boolean) {
    this.isLoop = value;
  }

  public getControls() {
    return {
      play: () => this.play(),
      pause: () => this.pause(),
      restart: () => this.restart(),
      previous: () => this.previous(),
      next: () => this.next(),
    };
  }

  private async play() {
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
  }

  private async pause() {
    this.isPaused = true;
  }

  private async restart() {
    this.isPaused = false;
    this.currentStep = 0;
    await this.executeCurrentStep();
  }

  private async previous() {
    this.currentStep--;
    if (this.currentStep < 0) {
      this.currentStep = this.steps.length - 1;
    }

    await this.executeCurrentStep();
  }

  private async next() {
    this.currentStep++;
    if (this.currentStep === this.steps.length) {
      this.currentStep = 0;
    }

    await this.executeCurrentStep();
  }

  private async executeCurrentStep() {
    this.isPlaying = true;
    await this.steps[this.currentStep].execute();
    this.isPlaying = false;
  }
}
