'use client';

import React, { useEffect, useState } from 'react';
import { dbg } from '@/lib/debug';

export default function DebugOverlay() {
  const [lines, setLines] = useState<string[]>([]);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!dbg.enabled()) return;
    setEnabled(true);
    dbg.push('overlay mounted ua=' + navigator.userAgent.slice(0, 60));

    // Mount-level catch-all so we see events even before the keyboard
    // component has wired up its own engine listeners.
    const log = (name: string) => (e: Event) => {
      const tgt = (e.target as Element)?.tagName ?? '?';
      const cls = ((e.target as Element)?.className ?? '').toString().slice(0, 30);
      dbg.push(`[mount] ${name} tgt=${tgt} cls=${cls}`);
    };
    const handlers: [EventTarget, string, EventListener][] = [
      [window, 'touchstart', log('ts')],
      [window, 'touchend', log('te')],
      [window, 'touchcancel', log('tc')],
      [window, 'mousedown', log('md')],
      [window, 'mouseup', log('mu')],
      [window, 'pointerdown', log('pd')],
      [window, 'pointerup', log('pu')],
      [window, 'pointercancel', log('px')],
    ];
    for (const [t, n, fn] of handlers) t.addEventListener(n, fn, { passive: true });

    const unsub = dbg.subscribe(setLines);
    return () => {
      for (const [t, n, fn] of handlers) t.removeEventListener(n, fn);
      unsub();
    };
  }, []);

  if (!enabled) return null;

  const copyToClipboard = async () => {
    const text = lines.join('\n');
    try {
      await navigator.clipboard.writeText(text);
      dbg.push('[copied to clipboard]');
    } catch {
      // fallback: select via a textarea
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); } catch { /* ignore */ }
      document.body.removeChild(ta);
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        left: 8,
        right: 8,
        bottom: 8,
        zIndex: 99999,
        background: 'rgba(0,0,0,0.85)',
        color: '#0f0',
        fontFamily: 'ui-monospace, Menlo, monospace',
        fontSize: 11,
        lineHeight: 1.3,
        padding: 8,
        borderRadius: 8,
        maxHeight: '40vh',
        overflow: 'auto',
        pointerEvents: 'auto',
      }}
    >
      <div style={{ display: 'flex', gap: 6, marginBottom: 6 }}>
        <button
          onClick={copyToClipboard}
          style={{ background: '#0a0', color: '#000', border: 0, padding: '4px 10px', borderRadius: 4, fontSize: 11, fontWeight: 700 }}
        >Copy log</button>
        <button
          onClick={() => dbg.clear()}
          style={{ background: '#a00', color: '#fff', border: 0, padding: '4px 10px', borderRadius: 4, fontSize: 11, fontWeight: 700 }}
        >Clear</button>
        <span style={{ alignSelf: 'center', color: '#888' }}>{lines.length} lines</span>
      </div>
      <pre style={{ margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>{lines.join('\n')}</pre>
    </div>
  );
}
