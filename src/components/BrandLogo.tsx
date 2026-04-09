/**
 * Mira Brand/Logo from Pencil `mira-shadcn.lib 2.pen` (Brand/Logomark + wordmark).
 * Fills use site tokens (--accent + --bg-primary), not shadcn gray primary.
 */
export function BrandLogo({
  iconPx = 28,
  wordmarkSizePx,
  className = "",
}: {
  iconPx?: number;
  /** Defaults to 18px scaled with icon (26px artboard in pen). */
  wordmarkSizePx?: number;
  className?: string;
}) {
  const textPx = wordmarkSizePx ?? (18 * iconPx) / 26;

  return (
    <span
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
      }}
    >
      <svg
        width={iconPx}
        height={iconPx}
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path
          d="M0 7.8c0-2.06869 0.82178-4.05265 2.28457-5.51543 1.46278-1.46278 3.44674-2.28457 5.51543-2.28457l10.4 0c4.30782 0 7.8 3.49218 7.8 7.8l0 10.4c0 4.30782-3.49218 7.8-7.8 7.8l-10.4 0c-4.30782 0-7.8-3.49218-7.8-7.8l0-10.4z"
          fill="var(--brand-logomark-bg)"
        />
        <g transform="translate(4.55 7.96)">
          <path
            d="M6.92409 7.25004c-0.575 0.794-0.4 1.906 0.391 2.48301 0.79 0.576 1.897 0.4 2.472-0.39401l4.71401-6.517c0.575-0.794 0.4-1.905-0.391-2.483-0.3796-0.27689-0.85393-0.39099-1.31794-0.31703-0.464 0.07395-0.87936 0.32986-1.15407 0.71103l-4.714 6.517z m-6.586 0c-0.574 0.794-0.4 1.906 0.392 2.48301 0.79 0.576 1.897 0.4 2.472-0.39401l4.714-6.517c0.575-0.794 0.4-1.905-0.391-2.483-0.3796-0.27689-0.85393-0.39099-1.31793-0.31703-0.464 0.07395-0.87936 0.32986-1.15407 0.71103l-4.715 6.517z"
            fill="var(--brand-logomark-fg)"
          />
        </g>
        <g transform="translate(17.34 13.92)" opacity={0.6}>
          <path
            d="M1.8438 0.13401c0.0345-0.08125 0.11423-0.13401 0.2025-0.13401 0.08827 0 0.168 0.05276 0.2025 0.13401l0.486 1.11601c0.022 0.05143 0.06276 0.09255 0.114 0.11499l1.111 0.488c0.08019 0.03594 0.1318 0.11562 0.13181 0.2035 0 0.08788-0.05161 0.16756-0.13181 0.2035l-1.111 0.488c-0.05106 0.02221-0.09179 0.06295-0.114 0.114l-0.486 1.11701c-0.03421 0.08188-0.11426 0.1352-0.203 0.1352-0.08874 0-0.1688-0.05332-0.203-0.1352l-0.485-1.11701c-0.02221-0.05106-0.06295-0.09179-0.114-0.114l-1.112-0.488c-0.08019-0.03594-0.1318-0.11562-0.1318-0.2035 0-0.08788 0.05161-0.16756 0.1318-0.20349l1.112-0.488c0.05124-0.02245 0.092-0.06357 0.114-0.115l0.486-1.11601z"
            fill="var(--brand-logomark-fg)"
          />
        </g>
      </svg>
      <span
        style={{
          fontFamily:
            "var(--font-geologica), var(--font-geist-sans), system-ui, sans-serif",
          fontSize: `${textPx}px`,
          fontWeight: 600,
          letterSpacing: "-0.02em",
          color: "var(--text-primary)",
        }}
      >
        Mira
      </span>
    </span>
  );
}
