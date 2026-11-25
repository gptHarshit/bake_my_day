// Sunny — BakeMyDay ka mascot: ek 3D-ish cake jiske upar icing tapakti hai
// aur ek cherry rakhi hai.
//
// variant "rise": hero ke liye — dono haath upar, pair nahi (neeche se ugta hai)
// variant "full": poora character, ek haath se wave
//
// uid: ek page par mascot do jagah ho to gradient ids alag rakhne ke liye.

const COCOA = "#2e1a10";

// Icing ki shape: upar cake ka rim, neeche tapakti hui boondein.
function icingPath() {
  const base = (x) => 180 - 30 * ((x - 150) / 100) ** 2;
  const drips = [
    { x: 222, r: 16, d: 24 },
    { x: 184, r: 19, d: 44 },
    { x: 150, r: 15, d: 26 },
    { x: 114, r: 19, d: 46 },
    { x: 76, r: 16, d: 22 },
  ];
  const n = (v) => Math.round(v * 10) / 10;

  let d = "M50 150 A100 30 0 0 1 250 150";
  let cursor = 250;

  for (const drip of drips) {
    const right = drip.x + drip.r;
    const left = drip.x - drip.r;
    const mid = (cursor + right) / 2;
    // do boondon ke beech ka halka sa curve
    d += ` Q${n(mid)} ${n(base(mid))} ${n(right)} ${n(base(right))}`;
    // boond ka gol sira
    d += ` C${n(right)} ${n(base(right) + drip.d * 1.35)} ${n(left)} ${n(
      base(left) + drip.d * 1.35
    )} ${n(left)} ${n(base(left))}`;
    cursor = left;
  }

  const last = (cursor + 50) / 2;
  d += ` Q${n(last)} ${n(base(last))} 50 150 Z`;
  return d;
}

const ICING = icingPath();

function Arm({ from, to, swing, fill, uid }) {
  return (
    <g className="sunny__arm" data-origin={`${from[0]} ${from[1]}`} data-swing={swing}>
      <path
        d={`M${from[0]} ${from[1]} Q${(from[0] + to[0]) / 2} ${
          (from[1] + to[1]) / 2 - 14
        } ${to[0]} ${to[1]}`}
        fill="none"
        stroke={COCOA}
        strokeWidth="14"
        strokeLinecap="round"
      />
      <circle cx={to[0]} cy={to[1]} r="18" fill={fill} stroke={COCOA} strokeWidth="6" />
      <ellipse cx={to[0] - 5} cy={to[1] - 6} rx="6" ry="4.5" fill="#fff8ea" opacity="0.5" />
    </g>
  );
}

export default function Sunny({ variant = "full", uid = "s", className = "" }) {
  const rise = variant === "rise";
  const g = (n) => `${uid}-${n}`;
  const u = (n) => `url(#${g(n)})`;

  return (
    <svg
      className={`sunny ${className}`}
      viewBox={rise ? "0 0 300 304" : "0 0 300 344"}
      role="img"
      aria-label="Sunny, the BakeMyDay cake mascot"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* cake ka side — beech me roshni, kinare par gehra: round dikhta hai */}
        <linearGradient id={g("side")} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#a85c1e" />
          <stop offset="0.3" stopColor="#f0ad55" />
          <stop offset="0.6" stopColor="#dd9138" />
          <stop offset="1" stopColor="#9d5419" />
        </linearGradient>
        <radialGradient id={g("icing")} cx="0.34" cy="0.18" r="0.95">
          <stop offset="0" stopColor="#fffdf7" />
          <stop offset="0.5" stopColor="#fff1d4" />
          <stop offset="1" stopColor="#edca92" />
        </radialGradient>
        <radialGradient id={g("cherry")} cx="0.32" cy="0.26" r="0.85">
          <stop offset="0" stopColor="#e8736a" />
          <stop offset="0.42" stopColor="#b8352c" />
          <stop offset="1" stopColor="#6d1a14" />
        </radialGradient>
        <radialGradient id={g("hand")} cx="0.35" cy="0.3" r="0.8">
          <stop offset="0" stopColor="#f6bd72" />
          <stop offset="1" stopColor="#d08b31" />
        </radialGradient>
        <radialGradient id={g("cheek")} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#f4738f" stopOpacity="0.85" />
          <stop offset="1" stopColor="#f4738f" stopOpacity="0" />
        </radialGradient>
        <filter id={g("blur")} x="-30%" y="-60%" width="160%" height="220%">
          <feGaussianBlur stdDeviation="8" />
        </filter>
      </defs>

      {/* zameen ki parchhai */}
      {!rise && (
        <ellipse
          cx="154"
          cy="330"
          rx="98"
          ry="13"
          fill={COCOA}
          opacity="0.3"
          filter={`url(#${g("blur")})`}
        />
      )}

      {!rise && (
        <g>
          <path d="M118 296 L116 322" stroke={COCOA} strokeWidth="11" strokeLinecap="round" />
          <path d="M182 296 L184 322" stroke={COCOA} strokeWidth="11" strokeLinecap="round" />
          <ellipse cx="108" cy="328" rx="21" ry="11" fill={COCOA} />
          <ellipse cx="192" cy="328" rx="21" ry="11" fill={COCOA} />
        </g>
      )}

      {/* peeche wala haath */}
      {rise ? (
        <Arm from={[64, 206]} to={[26, 156]} swing={14} fill={u("hand")} uid={uid} />
      ) : (
        <Arm from={[64, 212]} to={[26, 168]} swing={20} fill={u("hand")} uid={uid} />
      )}

      {/* cake ka body */}
      <path
        d="M50 150 L50 268 C50 288 95 300 150 300 C205 300 250 288 250 268 L250 150 Z"
        fill={u("side")}
        stroke={COCOA}
        strokeWidth="6"
        strokeLinejoin="round"
      />

      {/* icing + tapakti boondein */}
      <path d={ICING} fill={u("icing")} stroke={COCOA} strokeWidth="6" strokeLinejoin="round" />
      <ellipse cx="108" cy="140" rx="38" ry="13" fill="#ffffff" opacity="0.5" />

      {/* cherry */}
      <path
        d="M150 92 C150 74 162 66 172 62"
        fill="none"
        stroke={COCOA}
        strokeWidth="6"
        strokeLinecap="round"
      />
      <circle cx="150" cy="104" r="22" fill={u("cherry")} stroke={COCOA} strokeWidth="6" />
      <ellipse cx="142" cy="96" rx="7" ry="5" fill="#fff8ea" opacity="0.75" transform="rotate(-25 142 96)" />

      {/* chehra */}
      <ellipse cx="103" cy="263" rx="20" ry="13" fill={u("cheek")} />
      <ellipse cx="197" cy="263" rx="20" ry="13" fill={u("cheek")} />
      <g className="sunny__eye">
        <ellipse cx="122" cy="247" rx="9" ry="12" fill={COCOA} />
        <circle cx="118.5" cy="242" r="3.4" fill="#fff8ea" />
      </g>
      <g className="sunny__eye">
        <ellipse cx="178" cy="247" rx="9" ry="12" fill={COCOA} />
        <circle cx="174.5" cy="242" r="3.4" fill="#fff8ea" />
      </g>
      <path
        d="M136 266 Q150 283 164 266"
        fill="none"
        stroke={COCOA}
        strokeWidth="6"
        strokeLinecap="round"
      />

      {/* aage wala haath */}
      {rise ? (
        <Arm from={[236, 206]} to={[274, 156]} swing={-14} fill={u("hand")} uid={uid} />
      ) : (
        <Arm from={[236, 212]} to={[278, 240]} swing={0} fill={u("hand")} uid={uid} />
      )}
    </svg>
  );
}

// Chhota cake — nav me scroll ke saath ludhakta hai.
export function MiniBun({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 32 32" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="13" fill="#e39a3b" stroke={COCOA} strokeWidth="2.5" />
      <path d="M4 13 Q8 17 12 13 Q16 17 20 13 Q24 17 28 13 L28 9 Q16 2 4 9 Z" fill="#fff1d4" stroke={COCOA} strokeWidth="2" strokeLinejoin="round" />
      <circle cx="11.5" cy="19" r="1.9" fill={COCOA} />
      <circle cx="20.5" cy="19" r="1.9" fill={COCOA} />
    </svg>
  );
}
