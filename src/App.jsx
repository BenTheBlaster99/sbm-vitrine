import React from "react";

const solutions = [
  "Isolation pour Containers Maritimes & Terrestres",
  "Housses Palettes Éco-Friendly",
  "Accessoires pour Containers",
  "Produits Innovants",
];

const avantages = [
  "Expertise locale, qualité internationale",
  "Produits éco-conçus pour un avenir durable",
  "Solutions sur-mesure adaptées à vos besoins",
];

const products = [
  {
    key: "ecofriendly",
    title: "SBM EcoFriendly",
    text: "BJServices a créé pour vous un tout nouvel isolant totalement eco-responsable et recyclable. Nous sommes les seuls à proposer ce produit en version 20 DC/40DC et 40HC (modèle breveté INPI). BJServices vous assure une isolation de vos conteneurs via ce produit exclusif au départ de nos 30 points de poses en France et en Europe. Nous pouvons également livrer vos lieux de chargement pour que notre « BJ EcoFriendly » soit posé par vos soins (montage rapide et facile).",
  },
  {
    key: "bubble",
    title: "Bubble liner™ 20DC/40DC/40HC",
    text: "« L’air est le matériau le plus isolant au monde ». Le Bubble Liner est le seul liner conçu avec de la bulle d’air. Pour qu’une protection thermique de conteneurs maritimes soit véritablement efficace, elle doit impérativement être conçue avec des milliers de bulles d’air. Il est commercialisé en 5 faces mais peut être fourni avec une isolation plancher (en option).",
  },
  {
    key: "liner",
    title: "SBM Liner",
    text: "Le BJ Liner est une poche intérieure pour conteneurs maritimes créée en deux déclinaisons : 5 faces (sans plancher) ou 6 faces (avec plancher). Son revêtement intérieur ouaté a été conçu pour retarder la formation d’humidité et son revêtement extérieur est en aluminium armé avec un tissu tramé et plusieurs couches de PE. Cette solution permet de transporter vos denrées sensibles de façon saine.",
  },
  {
    key: "palette",
    title: "Housse de palette",
    text: "Un produit dérivé de l’isolation de conteneurs maritimes. La housse de palette possède de multiples avantages : solidité, légèreté et facilité de mise en place. Particulièrement adaptée pour le groupage ou fret aérien, elle répond parfaitement à la protection de palettes en conteneurs ou en phase de stockage.",
  },
];

const pictureOverrides = {
  "Bubble liner™ 20DC/40DC/40HC": "/pictures/Bubble liner 20dc .png",
};

const getPicturePath = (title) =>
  pictureOverrides[title] ?? `/pictures/${encodeURIComponent(title)}.png`;

function CatalogCard({ item, titleColorClass = "" }) {
  return (
    <article className="catalog-card">
      <img
        className="catalog-image"
        src={getPicturePath(item.title)}
        alt={item.title}
        loading="lazy"
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
      />
      <h3 className={titleColorClass}>{item.title}</h3>
      <p>{item.text}</p>
    </article>
  );
}

function App() {
  return (
    <main>
      <img
        className="top-logo"
        src="/assets/a better logo.png"
        alt="Logo SBM"
      />

      <section className="hero">
        <div className="content-wrap">
          <div className="hero-badge">SBM PRODUCTS & SCES</div>
          <h1 className="hero-title">
            Les spécialistes de l’isolation, l’équipement & accessoires pour
            conteneurs
          </h1>
          <p className="hero-subtitle">
            SBM Fabrication accompagne les professionnels du transport et de la
            logistique avec des solutions durables et performantes.
          </p>
        </div>
      </section>

      <section className="about section-card">
        <div className="content-wrap">
          <h1>
            SBM Fabrication – Spécialiste de l’isolation et des solutions
            logistiques éco-responsables à Oran
          </h1>

          <h2>À propos de nous</h2>
          <p>
            Basée à Canastel–Oran, SBM Fabrication est une entreprise innovante
            spécialisée dans la fabrication de solutions d’isolation pour
            containers et d’accessoires logistiques haut de gamme. Depuis notre
            création, nous mettons notre expertise au service des professionnels
            du transport, de la logistique et de l’industrie, en proposant des
            produits performants, durables et respectueux de l’environnement.
          </p>

          <h2>Nos Solutions</h2>
          <ul className="check-list">
            <li>
              <strong>{solutions[0]} :</strong> Nous concevons et fabriquons des
              housses isolantes adaptées aux containers de 20 pieds et 40
              pieds, garantissant la protection de vos marchandises contre les
              variations thermiques et l’humidité pendant le transport ou le
              stockage.
            </li>
            <li>
              <strong>{solutions[1]} :</strong> Nos housses pour palettes sont
              fabriquées à partir de matières recyclées et éco-responsables,
              pour une logistique durable sans compromis sur la qualité.
            </li>
            <li>
              <strong>{solutions[2]} :</strong>
              <ul>
                <li>
                  Coussins de calage gonflables pour sécuriser vos chargements
                </li>
                <li>
                  Solutions sur mesure pour répondre à tous vos besoins
                  spécifiques
                </li>
              </ul>
            </li>
            <li>
              <strong>{solutions[3]} :</strong> SBM Fabrication élargit
              constamment son catalogue avec des solutions sur mesure et
              performantes, adaptées à tous les secteurs d’activité.
            </li>
          </ul>

          <h2>Pourquoi choisir SBM Fabrication ?</h2>
          <ul className="icon-list">
            {avantages.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="eco section-card">
        <div className="content-wrap">
          <div className="eco-header">
            <h2>ISOLANT ÉCO-FRIENDLY</h2>
            <p>Produit monomatière recyclable et re-valorisable à 100 %.</p>
          </div>
          <div className="eco-content">
            <article className="eco-panel">
              <h3>Avantages</h3>
              <ul>
                <li>Isolation hiver/été performante</li>
                <li>Découpe souple, légère, simple à poser</li>
                <li>Sans particules volatiles, inodore</li>
                <li>Produit 100 % recyclable et valorisable</li>
              </ul>
            </article>
            <article className="eco-panel eco-panel-highlight">
              <h3>Bilan CO² / Empreinte carbone</h3>
              <p>Résultat de l’empreinte carbone : 0,89 T.CO²</p>
            </article>
          </div>
        </div>
      </section>

      <section className="products section-card">
        <div className="content-wrap">
          <h2 className="section-banner section-banner-green">L’isolation</h2>
          <div className="products-grid">
            {products.map((product) => (
              <CatalogCard
                key={product.key}
                item={product}
                titleColorClass="products-title"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="quote-section section-card">
        <div className="content-wrap">
          <h2 className="section-banner section-banner-blue">Demande de devis</h2>
          <p className="quote-intro">
            Besoin d’une solution d’isolation ou d’accessoires logistiques ?
            Envoyez-nous votre demande, nous vous répondons rapidement.
          </p>
          <form className="quote-form" action="#" method="post">
            <label>
              Nom complet
              <input type="text" name="fullName" required />
            </label>
            <label>
              Entreprise
              <input type="text" name="company" />
            </label>
            <label>
              Email
              <input type="email" name="email" required />
            </label>
            <label>
              Téléphone
              <input type="tel" name="phone" />
            </label>
            <label>
              Besoin principal
              <select name="need" defaultValue="Isolation">
                <option>Isolation</option>
                <option>Housses palettes</option>
                <option>Accessoires logistiques</option>
                <option>Solution sur mesure</option>
              </select>
            </label>
            <label className="quote-full">
              Détails de votre demande
              <textarea
                name="message"
                rows={5}
                placeholder="Type de marchandise, dimensions, destination, délai, etc."
                required
              />
            </label>
            <button type="submit" className="quote-submit">
              Envoyer la demande
            </button>
          </form>
        </div>
      </section>

      <section className="contact-section section-card">
        <div className="content-wrap contact-wrap">
          <img className="contact-logo" src="/assets/LOGO.png" alt="Logo SBM" />
          <div className="contact-content">
            <h2>Contact</h2>
            <p>BOUZEROUATA MOHAMMED</p>
            <p>DIRECTEUR COMMERCIAL</p>
            <p>Tel : +213 7 81861288</p>
            <p>e-mail : sbm31dz@gmail.com</p>
            <p>CANASTEL - ORAN - ALGERIE</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
