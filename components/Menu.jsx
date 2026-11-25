import {
  dryCakes,
  regularCakes,
  redVelvet,
  indianCakes,
  desserts,
  rupee,
} from "../data/menu";

function Drip({ from }) {
  return <div className="drip" style={{ "--from": `var(--${from})` }} aria-hidden="true" />;
}

function Head({ id, title, sticker, children }) {
  return (
    <header className="layer__head">
      <div className="layer__title">
        <h2 id={id}>{title}</h2>
        {sticker && (
          <span className="sticker">
            <span className="sr-only">Prices are for </span>
            {sticker}
          </span>
        )}
      </div>
      <p className="layer__lede">{children}</p>
    </header>
  );
}

// kind "premix" / "scratch" ho to price ek rangeen chip me aata hai.
function Price({ value, kind }) {
  if (value === null || value === undefined) {
    return (
      <span className="na">
        <span aria-hidden="true">—</span>
        <span className="sr-only">Not available</span>
      </span>
    );
  }
  if (kind) return <span className={`chip chip--${kind}`}>{rupee(value)}</span>;
  return <span className="price">{rupee(value)}</span>;
}

function Pair({ premix, scratch }) {
  return (
    <dl className="pair">
      <div>
        <dt>Premix</dt>
        <dd>
          <Price value={premix} kind="premix" />
        </dd>
      </div>
      <div>
        <dt>Scratch</dt>
        <dd>
          <Price value={scratch} kind="scratch" />
        </dd>
      </div>
    </dl>
  );
}

export default function Menu() {
  return (
    <>
      {/* 1. Dry cakes */}
      <section className="layer layer--cream layer--first" aria-labelledby="dry-cakes">
        <div className="wrap">
          <Head id="dry-cakes" title="Dry cakes" sticker="½ kg">
            Plain, no-cream cakes. The kind that sits next to a cup of chai.
          </Head>
          <ul className="pricelist" data-reveal>
            {dryCakes.map((cake) => (
              <li key={cake.name} data-reveal-item className={cake.price === null ? "is-off" : undefined}>
                <span className="pricelist__name">{cake.name}</span>
                <span className="pricelist__dots" aria-hidden="true" />
                {cake.price === null ? (
                  <span className="pricelist__off">Not available</span>
                ) : (
                  <Price value={cake.price} />
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 2. Regular cakes */}
      <section className="layer layer--white" aria-labelledby="regular-cakes">
        <Drip from="cream" />
        <div className="wrap">
          <Head id="regular-cakes" title="Regular cakes" sticker="½ kg">
            Cream cakes, made two ways. Premix based uses a ready cake mix. Scratch
            based means we make the batter from scratch.
          </Head>

          <div className="regular">
            <table className="ptable" data-reveal>
              <thead>
                <tr>
                  <th scope="col">Cake</th>
                  <th scope="col">Premix</th>
                  <th scope="col">Scratch</th>
                </tr>
              </thead>
              <tbody>
                {regularCakes.map((cake) => (
                  <tr key={cake.name} data-reveal-item>
                    <th scope="row">
                      {cake.name}
                      {cake.note && <small>{cake.note}</small>}
                    </th>
                    <td>
                      <Price value={cake.premix} kind="premix" />
                    </td>
                    <td>
                      <Price value={cake.scratch} kind="scratch" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <aside className="velvet" data-tilt aria-labelledby="red-velvet">
              <p className="velvet__tag">Special option</p>
              <div className="velvet__head">
                <h3 id="red-velvet">{redVelvet.name}</h3>
                <span className="sticker sticker--light">
                  <span className="sr-only">Prices are for </span>½ kg
                </span>
              </div>
              <ul>
                {redVelvet.options.map((option) => (
                  <li key={option.label}>
                    <span>{option.label}</span>
                    <Price value={option.price} />
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {/* 3. Indian sweet flavour cakes */}
      <section className="layer layer--milk" aria-labelledby="indian-sweets">
        <Drip from="white" />
        <div className="wrap">
          <Head id="indian-sweets" title="Indian sweet flavour cakes" sticker="½ kg">
            Your favourite mithai, baked into a cake.
          </Head>
          <ul className="bigrows" data-reveal>
            {indianCakes.map((cake) => (
              <li key={cake.name} data-reveal-item>
                <h3>{cake.name}</h3>
                <Pair premix={cake.premix} scratch={cake.scratch} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. Special elements & desserts */}
      <section className="layer layer--dark" aria-labelledby="desserts">
        <Drip from="milk" />
        <div className="wrap">
          <Head id="desserts" title="Special elements & desserts">
            Chocolate tacos, tiramisu and little bento cakes.
          </Head>
          <ul className="treats" data-reveal>
            {desserts.map((item) => (
              <li key={item.name} data-reveal-item>
                <div>
                  <h3>{item.name}</h3>
                  {item.note && <p>{item.note}</p>}
                </div>
                <dl className="pair">
                  {item.prices.map((p) => (
                    <div key={p.label || "price"}>
                      {p.label && <dt>{p.label}</dt>}
                      <dd>
                        <Price value={p.price} />
                      </dd>
                    </div>
                  ))}
                </dl>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export { Drip };
