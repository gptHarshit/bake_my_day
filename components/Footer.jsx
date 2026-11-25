import { site, telHref, phoneShort, whatsappLink } from "../data/site";
import { Drip } from "./Menu";
import Sunny from "./Sunny";

export default function Footer() {
  const order = whatsappLink();

  return (
    <footer className="layer layer--cream footer">
      <Drip from="ink" />
      <div className="wrap footer__in">
        <Sunny variant="full" uid="foot" className="footer__sunny" />
        <div>
          <h2>Order your cake</h2>
          <p className="layer__lede">
            Call to place an order, or save the full price list as a PDF and
            share it with whoever is choosing the cake.
          </p>

          {site.phone && (
            <p className="footer__phone">
              <a href={telHref}>{site.phone}</a>
            </p>
          )}

          <div className="footer__actions">
            {telHref && (
              <a className="btn" href={telHref}>
                Call {phoneShort}
              </a>
            )}
            <a className="btn btn--light" href={site.pdf} download>
              Download menu PDF
            </a>
            {order && (
              <a className="btn btn--light" href={order} target="_blank" rel="noopener noreferrer">
                Order on WhatsApp
              </a>
            )}
          </div>

          {(site.instagram || site.address) && (
            <ul className="footer__contact">
              {site.instagram && (
                <li>
                  Instagram{" "}
                  <a href={`https://instagram.com/${site.instagram}`} target="_blank" rel="noopener noreferrer">
                    @{site.instagram}
                  </a>
                </li>
              )}
              {site.address && <li>{site.address}</li>}
            </ul>
          )}
        </div>
      </div>
      <p className="wrap footer__small">
        All prices are in ₹. Cakes are priced per ½ kg unless a size is shown.
      </p>
    </footer>
  );
}
