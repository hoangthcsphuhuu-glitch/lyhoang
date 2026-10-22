import React, { useMemo } from 'react';

declare global {
  interface Window {
    katex?: {
      renderToString: (tex: string, options?: { displayMode?: boolean; throwOnError?: boolean }) => string;
    };
  }
}

interface MathTexProps {
  tex: string;
  block?: boolean;
  className?: string;
}

/**
 * Renders inline or block LaTeX math expressions using KaTeX.
 * Also supports mixed text containing $...$ or $$...$$ delimiters.
 */
export const MathTex: React.FC<MathTexProps> = ({ tex, block = false, className = '' }) => {
  const htmlContent = useMemo(() => {
    if (!tex) return '';

    const katex = typeof window !== 'undefined' ? window.katex : undefined;

    // If the string contains $ delimiters, parse mixed text + math
    if (tex.includes('$')) {
      const parts = tex.split(/(\$\$[\s\S]+?\$\$|\$[^$]+?\$)/g);
      return parts
        .map((part) => {
          if (part.startsWith('$$') && part.endsWith('$$')) {
            const raw = part.slice(2, -2);
            if (katex) {
              try {
                return katex.renderToString(raw, { displayMode: true, throwOnError: false });
              } catch {
                return `<code>${raw}</code>`;
              }
            }
            return `<div class="font-mono text-blue-600 dark:text-blue-400 my-1">${raw}</div>`;
          }
          if (part.startsWith('$') && part.endsWith('$')) {
            const raw = part.slice(1, -1);
            if (katex) {
              try {
                return katex.renderToString(raw, { displayMode: false, throwOnError: false });
              } catch {
                return `<code>${raw}</code>`;
              }
            }
            return `<span class="font-mono text-blue-600 dark:text-blue-400">${raw}</span>`;
          }
          return part
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/\n/g, '<br/>');
        })
        .join('');
    }

    // Pure math expression
    if (katex) {
      try {
        return katex.renderToString(tex, { displayMode: block, throwOnError: false });
      } catch {
        return tex;
      }
    }
    return tex;
  }, [tex, block]);

  return (
    <span
      className={`${block ? 'block my-2 overflow-x-auto' : 'inline'} ${className}`}
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
};
