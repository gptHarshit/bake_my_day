// Opening animation: Bake → My → Day upar se girte hain, 70% par rukte hain,
// neeche "with Kiran" aata hai, ek second ruk kar shutter khulta hai.
// Saara timing components/Motion.jsx me hai.

import { site } from "../data/site";

const WORDS = ["Bake", "My", "Day"];

export default function Intro() {
  return (
    <div className="intro" aria-hidden="true">
      <div className="intro__panel intro__panel--l" />
      <div className="intro__panel intro__panel--r" />
      <div className="intro__rays" />
      <div className="intro__words">
        <div className="intro__line">
          {WORDS.map((word) => (
            <span className="intro__word" key={word}>
              <span className="intro__word-in">{word}</span>
            </span>
          ))}
          <span className="intro__shine" />
        </div>
        {site.byline && <p className="intro__by">{site.byline}</p>}
      </div>
    </div>
  );
}
