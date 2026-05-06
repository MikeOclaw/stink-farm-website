/**
 * Simple in-memory rate limiter for API routes.
 * Note: This is per-instance and resets on serverless cold starts.
 * For production at scale, replace with Redis-backed rate limiting.
 */

interface RateLimitEntry {
  count: number;
  resetAt: number;
}

const store = new Map<string, RateLimitEntry>();

interface RateLimitOptions {
  maxRequests: number;
  windowMs: number;
}

export interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  resetAt: number;
}

export function rateLimit(
  identifier: string,
  options: RateLimitOptions
): RateLimitResult {
  const now = Date.now();
  const entry = store.get(identifier);

  // Clean up expired entries periodically
  if (Math.random() < 0.01) {
    for (const [key, value] of store.entries()) {
      if (value.resetAt < now) {
        store.delete(key);
      }
    }
  }

  if (!entry || entry.resetAt < now) {
    // New window
    const resetAt = now + options.windowMs;
    store.set(identifier, { count: 1, resetAt });
    return {
      allowed: true,
      remaining: options.maxRequests - 1,
      resetAt,
    };
  }

  if (entry.count >= options.maxRequests) {
    return {
      allowed: false,
      remaining: 0,
      resetAt: entry.resetAt,
    };
  }

  entry.count += 1;
  return {
    allowed: true,
    remaining: options.maxRequests - entry.count,
    resetAt: entry.resetAt,
  };
}

/**
 * Get client IP from Next.js request headers
 */
export function getClientIp(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  return request.headers.get('x-real-ip') ?? 'unknown';
}
