import { site, telHref, phoneShort, whatsappLink } from "../data/site";
import Sunny from "./Sunny";

export default function Hero() {
  const order = whatsappLink();

  return (
    <section className="hero" id="top">
      <div className="hero__rays" aria-hidden="true" />

      <div className="wrap hero__content">
        <h1 className="hero__title">{site.name}</h1>
        {site.byline && <p className="hero__by hero__fade">{site.byline}</p>}
        <p className="hero__tagline hero__fade">{site.tagline}</p>
        <div className="hero__actions hero__fade">
          <a className="btn" href="#dry-cakes">
            See the menu
          </a>
          {telHref && (
            <a className="btn btn--light" href={telHref}>
              Call {phoneShort}
            </a>
          )}
          {order && (
            <a className="btn btn--light" href={order} target="_blank" rel="noopener noreferrer">
              Order on WhatsApp
            </a>
          )}
        </div>
      </div>

      <div className="hero__sunny">
        <div className="hero__sunny-bob">
          <Sunny variant="rise" uid="hero" />
        </div>
      </div>
      <div className="hero__edge" aria-hidden="true" />
    </section>
  );
}
