type Bucket = { count: number; resetAt: number };

/** In-memory fixed-window rate limiter. State lives in process memory and resets on restart. */
export class RateLimiter {
  private readonly buckets = new Map<string, Bucket>();

  constructor(
    private readonly maxAttempts: number,
    private readonly windowMs: number
  ) {
    setInterval(() => this.cleanup(), windowMs).unref();
  }

  /** Registers an attempt for `key`. Returns false if `key` has already hit the limit for the current window. */
  public consume(key: string): boolean {
    const now = Date.now();
    const bucket = this.buckets.get(key);

    if (!bucket || bucket.resetAt <= now) {
      this.buckets.set(key, { count: 1, resetAt: now + this.windowMs });
      return true;
    }

    if (bucket.count >= this.maxAttempts) {
      return false;
    }

    bucket.count++;
    return true;
  }

  private cleanup() {
    const now = Date.now();
    for (const [key, bucket] of this.buckets) {
      if (bucket.resetAt <= now) {
        this.buckets.delete(key);
      }
    }
  }
}
