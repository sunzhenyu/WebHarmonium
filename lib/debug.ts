// Tiny in-page debug log for diagnosing mobile audio bugs.
// Enable by adding ?debug=1 to the URL. The DebugOverlay component reads
// from here and renders the lines on screen.

type Listener = (lines: string[]) => void;

class DebugLog {
  private lines: string[] = [];
  private listeners: Set<Listener> = new Set();
  private startedAt = 0;

  enabled(): boolean {
    if (typeof window === 'undefined') return false;
    return new URLSearchParams(window.location.search).has('debug');
  }

  push(msg: string): void {
    if (!this.enabled()) return;
    if (this.startedAt === 0) this.startedAt = performance.now();
    const t = ((performance.now() - this.startedAt) / 1000).toFixed(3);
    const line = `[${t}s] ${msg}`;
    this.lines.push(line);
    if (this.lines.length > 80) this.lines.shift();
    for (const l of this.listeners) l(this.lines);
  }

  clear(): void {
    this.lines = [];
    this.startedAt = 0;
    for (const l of this.listeners) l(this.lines);
  }

  subscribe(fn: Listener): () => void {
    this.listeners.add(fn);
    fn(this.lines);
    return () => { this.listeners.delete(fn); };
  }
}

export const dbg = new DebugLog();
