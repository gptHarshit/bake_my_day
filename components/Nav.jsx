import { site, telHref, phoneShort } from "../data/site";
import { MiniBun } from "./Sunny";

const links = [
  { href: "#dry-cakes", label: "Dry cakes" },
  { href: "#regular-cakes", label: "Regular cakes" },
  { href: "#indian-sweets", label: "Indian sweets" },
  { href: "#desserts", label: "Tacos & desserts" },
];

export default function Nav() {
  return (
    <header className="nav">
      <div className="wrap nav__in">
        <a className="nav__brand" href="#top">
          {site.name}
        </a>
        <nav aria-label="Menu sections" className="nav__scroller">
          <ul className="nav__links">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        {telHref && (
          <a className="btn btn--small" href={telHref}>
            Call {phoneShort}
          </a>
        )}
      </div>
      <MiniBun className="nav__roller" />
    </header>
  );
}
