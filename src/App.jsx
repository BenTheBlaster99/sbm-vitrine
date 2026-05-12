import React, { useState, useEffect } from "react";

const products = [
  {
    key: "ecofriendly",
    title: "SBM EcoFriendly",
    tag: "Isolation",
    icon: "🧊",
    text: "SBM a créé un isolant totalement éco-responsable et recyclable, disponible en 20 DC/40DC et 40HC (modèle breveté INPI). Produit certifié isolant — montage rapide et facile.",
  },
  {
    key: "bubble",
    title: "Housse Bubble Liner™",
    tag: "Isolation",
    icon: "💨",
    text: "« L'air est le matériau le plus isolant au monde ». Un avantage majeur pour la protection de vos produits grâce à des milliers de bulles d'air. 5 faces + isolation plancher en option.",
  },
  {
    key: "liner",
    title: "SBM Liner",
    tag: "Isolation",
    icon: "📦",
    text: "Poche intérieure 5 ou 6 faces. Revêtement ouaté anti-humidité, extérieur aluminium armé multicouche PE. Idéal pour denrées sensibles.",
  },
  {
    key: "palette",
    title: "Housse de Palette",
    tag: "Palette",
    icon: "🛋️",
    text: "Dérivé de l'isolation maritime. Solide, léger, facile à installer. Parfaite pour groupage, fret aérien et protection palettes en stockage.",
  },
];

const securityItems = [
  { title: "Antivol SBM Block", icon: "🔐", text: "3 clés non reproductibles. Résistant à 14T de pression. Recommandé pour l'export de marchandises à haute valeur ajoutée (vins, spiritueux)." },
  { title: "Poignée antivol à glissière", icon: "🔩", text: "2 barres métalliques + cadenas 3 clés. S'ajuste aux barres des conteneurs, conforme aux normes ISO internationales." },
  { title: "Forkseal", icon: "⚓", text: "Blocage fiable des portes. La barre de blocage doit être coupée pour ouvrir — traçabilité totale des accès." },
  { title: "Poignée antivol à usage unique", icon: "🏷️", text: "2 barres métalliques sécurisées par un plomb retiré uniquement par disque électrique. Résistance à la rupture de 3,5 tonnes." },
  { title: "Plomb bouteille SBM Seal", icon: "🔏", text: "Agréé douanes internationales ISO PASS 17712-2013. Numérotation consécutive pour traçabilité de chaque empotage." },
  { title: "Plomb câble", icon: "🪢", text: "Installable sur conteneurs, châssis, chaînes, portes. Approuvé ISO PAS 17712, câble 3,5 mm. Irréversible sans coupe." },
  { title: "Plomb plastique Easytight", icon: "🔒", text: "Scellé plastique réglable pour sacs, sachets, camions bâchés, citernes et conteneurs. Doit être découpé pour être retiré." },
  { title: "Anti-vol châssis", icon: "🚛", text: "Protège votre semi-remorque contre l'attelage illicite. Impossible à désolidariser après installation. Acier peint, sans entretien." },
];

const controlItems = [
  { title: "Enregistreur de température à bande", icon: "📊", text: "Enregistrement permanent des conditions de transport. Lecture rapide et directe sur la bande d'enregistrement." },
  { title: "Enregistreur de température USB", icon: "🌡️", text: "Constate précisément les écarts de température durant le voyage import/export. Lecture directe via port USB." },
  { title: "Enregistreur temp. & humidité", icon: "💧", text: "Surveille l'humidité relative de 10% à 100% et la température de -30°C. Capteur numérique intégré." },
  { title: "Géolocalisation TT Geo Eagle", icon: "📡", text: "Traçabilité de votre fret maritime en temps réel : heure, température et localisation GPS. Peu coûteux, très efficace." },
];

const humidityItems = [
  { title: "Absorbeur d'humidité", icon: "🧲", text: "Déshydratants en barquettes absorbant jusqu'à 4× leur poids. Réduction du taux d'humidité à l'intérieur du conteneur." },
  { title: "Absorgel Hanging", icon: "🧴", text: "Chlorure de calcium absorbant l'humidité de l'air. Eau stockée en gel — élimine tout risque de fuite." },
  { title: "Absorpole", icon: "🏗️", text: "Espace minimal, efficacité maximale. Réservoir intégré évitant toute dispersion de l'eau capturée." },
  { title: "Sachet déshydratant", icon: "🛍️", text: "Idéal pour emballages fermés. Évite fermentation, moisissure, corrosion et condensation." },
];

const protectionItems = [
  { title: "Bâche pour conteneur Open-Top", icon: "☂️", text: "Recouvre le toit ouvert du conteneur open top. Protège le chargement des intempéries et des regards indiscrets." },
];

const stowageItems = [
  { title: "Bâche de retenue", icon: "🛡️", text: "Évite la chute de colis à l'ouverture des portes. Sépare et identifie les lots dans un conteneur de groupage." },
  { title: "Liner vrac + barres", icon: "🌾", text: "Charge du VRAC (céréales, poudres, granulés) dans les conteneurs maritimes. Installation directe par le chargeur." },
  { title: "Coussin de calage réutilisable", icon: "💺", text: "Coussins d'air Turbo — calent les marchandises, résistent aux chocs, gardent leur forme. Solution économique." },
  { title: "Barre télescopique", icon: "📏", text: "Cale des éléments horizontalement ou verticalement dans conteneur standard ou frigorifique. Réglage par poignée glissière." },
  { title: "Crochet reefer", icon: "🪝", text: "Acier électro-zingué, se glisse dans les T bar floor. Permet de fixer une sangle pour maintenir vos marchandises." },
  { title: "Sangle à cliquet", icon: "⛓️", text: "Ensembles à cliquet 5T, 9,50 m. Crochet J (conteneur) ou crochet U (camion). Plusieurs dimensions disponibles." },
  { title: "Sangle d'arrimage voiture", icon: "🚗", text: "Ancrage rapide via anneau d'arrimage du conteneur et jante du véhicule. Serrage par cliquet." },
  { title: "Sangle d'arrimage perdue", icon: "🧵", text: "2T ou 6T. Présentée au mètre linéaire pour optimiser l'utilisation selon vos besoins, avec boucles et crochets." },
  { title: "Boucles et crochets", icon: "🔗", text: "Indispensables au serrage et maintien des sangles. Mode d'arrimage le plus répandu quand les sangles à cliquet ne conviennent pas." },
  { title: "Film bulles", icon: "🫧", text: "Anti-statique ou classique. Disponible en 1 m × 150 m et 1,5 m × 100 m." },
];

// null = no image file exists for this item
const pictureOverrides = {
  "Housse Bubble Liner™": "/pictures/Bubble liner 20dc .png",
  "Anti-vol châssis": "/pictures/Anti-vol chassis.png",
  "Housse de Palette": "/pictures/Housse de palette.png",
  "Enregistreur temp. & humidité": "/pictures/Enregistreur de température et d'humidité.png",
  "Géolocalisation TT Geo Eagle": "/pictures/Système de géolocalisation TT Geo Eagle.png",
  "Sangle d'arrimage voiture": "/pictures/Sangle d'arrimage voiture à cliquet (1 partie).png",
  "Boucles et crochets": "/pictures/Boucles et crochets pour sangles perdues.png",
  "Liner vrac + barres": null,
};

const getPicturePath = (title) => {
  if (title in pictureOverrides) return pictureOverrides[title];
  return `/pictures/${encodeURIComponent(title)}.png`;
};

function CatalogCard({ item, accentColor = "#0f4d97" }) {
  const picSrc = getPicturePath(item.title);
  return (
    <article className="catalog-card">
      <div className="catalog-card-icon" style={{ color: accentColor }}>
        {item.icon || "📦"}
      </div>
      {picSrc && (
        <img
          className="catalog-image"
          src={picSrc}
          alt={item.title}
          loading="lazy"
          onError={(e) => { e.currentTarget.style.display = "none"; }}
        />
      )}
      <h3 className="catalog-card-title" style={{ color: accentColor }}>
        {item.title}
      </h3>
      <p>{item.text}</p>
    </article>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "À propos", href: "#apropos" },
    { label: "Produits", href: "#produits" },
    { label: "Éco-Friendly", href: "#eco" },
    { label: "Sécurité", href: "#securite" },
  ];

  return (
    <nav className={`navbar${scrolled ? " navbar-scrolled" : ""}`}>
      <a href="#top" className="navbar-brand">
        <img src="/assets/a better logo.png" alt="SBM Logo" className="navbar-logo" />
      </a>
      <button
        className="navbar-burger"
        onClick={() => setMenuOpen((v) => !v)}
        aria-label="Menu"
      >
        <span /><span /><span />
      </button>
      <ul className={`navbar-links${menuOpen ? " open" : ""}`}>
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
          </li>
        ))}
        <li>
          <a href="#devis" className="navbar-cta" onClick={() => setMenuOpen(false)}>
            Demander un devis
          </a>
        </li>
      </ul>
    </nav>
  );
}

function DevisForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="devis-success">
        <span>✅</span>
        <h3>Demande envoyée !</h3>
        <p>Merci pour votre message. Notre équipe vous contactera dans les 24 heures.</p>
        <p>Pour toute urgence : <strong>+213 7 81 86 12 88</strong></p>
      </div>
    );
  }

  return (
    <form className="devis-form" onSubmit={handleSubmit}>
      <div className="devis-row">
        <label>
          NOM *
          <input type="text" name="nom" placeholder="Votre nom" required />
        </label>
        <label>
          SOCIÉTÉ
          <input type="text" name="societe" placeholder="Votre entreprise" />
        </label>
      </div>
      <div className="devis-row">
        <label>
          EMAIL *
          <input type="email" name="email" placeholder="votre@email.com" required />
        </label>
        <label>
          TÉLÉPHONE
          <input type="tel" name="tel" placeholder="+213 ..." />
        </label>
      </div>
      <div className="devis-row">
        <label>
          PRODUIT(S) SOUHAITÉ(S) *
          <select name="produit" required defaultValue="">
            <option value="" disabled>Sélectionnez un produit…</option>
            <option>SBM EcoFriendly (isolant)</option>
            <option>Bubble Liner™ 20DC/40DC/40HC</option>
            <option>SBM Liner (5 ou 6 faces)</option>
            <option>Housse de palette</option>
            <option>Absorbeurs d'humidité</option>
            <option>Antivol / Sécurité</option>
            <option>Calage & Arrimage</option>
            <option>Enregistreurs température / humidité</option>
            <option>Géolocalisation TT Geo Eagle</option>
            <option>Plusieurs produits</option>
          </select>
        </label>
        <label>
          FORMAT CONTENEUR
          <select name="format" defaultValue="">
            <option value="" disabled>Format…</option>
            <option>20 pieds (20DC)</option>
            <option>40 pieds (40DC)</option>
            <option>40 pieds High Cube (40HC)</option>
            <option>Autre / Multiple</option>
          </select>
        </label>
      </div>
      <label className="devis-full">
        QUANTITÉ ESTIMÉE
        <input type="text" name="quantite" placeholder="ex : 10 unités" />
      </label>
      <label className="devis-full">
        MESSAGE / DÉTAILS SUPPLÉMENTAIRES
        <textarea
          name="message"
          rows={5}
          placeholder="Décrivez votre besoin, vos contraintes spécifiques…"
        />
      </label>
      <button type="submit" className="devis-submit">
        ENVOYER MA DEMANDE →
      </button>
      <p className="devis-note">Réponse garantie sous 24h — vos données restent confidentielles</p>
    </form>
  );
}

function App() {
  return (
    <>
      <Navbar />

      <section id="top" className="hero">
        <div className="content-wrap hero-inner">
          <div className="hero-text">
            <div className="hero-badge">SBM PRODUCTS & SCES · CANASTEL, ORAN</div>
            <h1 className="hero-title">
              Isolation &amp;<br />Équipement<br />Conteneurs
            </h1>
            <p className="hero-subtitle">
              SBM Fabrication conçoit des solutions d'isolation haute performance,
              des accessoires de sécurité et des systèmes de contrôle pour
              conteneurs maritimes et terrestres — 20' à 40'HC.
            </p>
            <div className="hero-actions">
              <a href="#devis" className="btn-primary">Demander un devis</a>
              <a href="#produits" className="btn-ghost">Voir nos produits</a>
            </div>
          </div>
        </div>
      </section>

      <section id="apropos" className="section section-light">
        <div className="content-wrap">
          <div className="section-label">À PROPOS DE SBM</div>
          <h2 className="section-title">L'expertise au<br />service du terrain</h2>
          <p className="section-lead">
            Basée à Canastel–Oran, SBM Fabrication est une entreprise innovante
            spécialisée dans la fabrication de solutions d'isolation pour conteneurs
            et d'accessoires logistiques haut de gamme. Depuis notre création, nous
            mettons notre expertise au service des professionnels du transport, de
            la logistique et de l'industrie.
          </p>
          <div className="about-grid">
            {[
              { icon: "🏭", title: "Fabrication Algérienne", desc: "Production locale, qualité internationale. Certification ISO 9001." },
              { icon: "🌿", title: "Éco-responsable", desc: "Matières recyclées, PE monomatière 100% re-valorisable." },
              { icon: "⚙️", title: "Solutions sur-mesure", desc: "Adaptation à tous les formats et secteurs d'activité." },
            ].map((item) => (
              <div key={item.title} className="about-card">
                <div className="about-card-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="about-badges">
            <div className="about-badge"><strong>ISO 9001</strong><span>Fabrication certifiée</span></div>
            <div className="about-badge"><strong>♻️ PE Recyclé</strong><span>Monomatière 100% valorisable</span></div>
            <div className="about-badge"><strong>🌊 Étanche</strong><span>Eau & air — protection totale</span></div>
          </div>

          <h3 className="subsection-title">Nos Solutions</h3>
          <ul className="solutions-list">
            <li><strong>Isolation Containers Maritimes & Terrestres :</strong> Housses isolantes 20 et 40 pieds — protection contre variations thermiques et humidité.</li>
            <li><strong>Housses Palettes Éco-Friendly :</strong> Matières recyclées et éco-responsables pour une logistique durable.</li>
            <li><strong>Accessoires pour Containers :</strong> Coussins de calage gonflables + solutions sur mesure.</li>
            <li><strong>Produits Innovants :</strong> Catalogue en constante expansion, adapté à tous les secteurs.</li>
          </ul>

          <h3 className="subsection-title">Pourquoi choisir SBM Fabrication ?</h3>
          <ul className="why-list">
            {["Expertise locale, qualité internationale", "Produits éco-conçus pour un avenir durable", "Solutions sur-mesure adaptées à vos besoins"].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="eco" className="section section-dark">
        <div className="content-wrap">
          <div className="section-label light">ÉCO-FRIENDLY</div>
          <h2 className="section-title light">Un isolant<br />vraiment vert</h2>
          <p className="section-lead light">Notre SBM EcoFriendly est le seul isolant à proposer un bilan CO₂ certifié et une fin de vie 100% recyclable. Produit certifié isolant, idéal pour la protection de vos produits en conteneur.</p>
          <div className="eco-grid">
            {[
              { icon: "♻️", title: "Monomatière PE recyclé", desc: "100% recyclable et re-valorisable en fin de vie. Zéro mélange de matériaux." },
              { icon: "🫁", title: "Sans particules volatiles", desc: "Sans danger pour la santé — imputrescible, inodore, n'attire pas les nuisibles." },
              { icon: "⚡", title: "Économie d'énergie", desc: "Isolation durable réduisant les pertes thermiques, été comme hiver." },
              { icon: "☀️", title: "Protection UV & IR", desc: "Bouclier contre rayonnements UV, infrarouge et variations thermiques." },
            ].map((item) => (
              <div key={item.title} className="eco-card">
                <span className="eco-icon">{item.icon}</span>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="eco-result">
            <div className="co2-badge">
              <span className="co2-number">0.89</span>
              <span className="co2-unit">Tonnes CO₂</span>
              <span className="co2-label">Empreinte carbone</span>
            </div>
            <div className="thermal-table">
              <h4>Résistance thermique</h4>
              <table>
                <thead><tr><th>Modèle</th><th>λ PET [W/m.k]</th><th>λ PEMHD [W/m.k]</th></tr></thead>
                <tbody>
                  <tr><td>Film 1 bulle</td><td>0.02846</td><td>0.02949</td></tr>
                  <tr><td>Film 2 bulles</td><td>0.03012</td><td>0.03559</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section id="produits" className="section section-light">
        <div className="content-wrap">
          <div className="section-label">NOS PRODUITS</div>
          <h2 className="section-title">L'isolation &amp;<br />l'équipement</h2>
          <p className="section-lead">De l'isolation thermique aux accessoires de calage, SBM couvre l'ensemble de vos besoins conteneurs.</p>
          <div className="products-grid">
            {products.map((p) => {
              const picSrc = getPicturePath(p.title);
              return (
                <article key={p.key} className="product-card">
                  <div className="product-card-tag">{p.icon} {p.tag}</div>
                  {picSrc && (
                    <img
                      className="product-img"
                      src={picSrc}
                      alt={p.title}
                      loading="lazy"
                      onError={(e) => { e.currentTarget.style.display = "none"; }}
                    />
                  )}
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="securite" className="section section-gray">
        <div className="content-wrap">
          <div className="section-label">SÉCURITÉ & CONTRÔLE</div>
          <h2 className="section-title">Protégez vos<br />marchandises</h2>
          <div className="catalog-grid">
            {securityItems.map((item) => (
              <CatalogCard key={item.title} item={item} accentColor="#b22544" />
            ))}
          </div>

          <div className="section-divider" />
          <div className="section-label" style={{ marginTop: "2rem" }}>LE CONTRÔLE</div>
          <div className="catalog-grid">
            {controlItems.map((item) => (
              <CatalogCard key={item.title} item={item} accentColor="#cc7f1a" />
            ))}
          </div>

          <div className="section-divider" />
          <div className="section-label" style={{ marginTop: "2rem" }}>GESTION DE L'HUMIDITÉ</div>
          <div className="catalog-grid">
            {humidityItems.map((item) => (
              <CatalogCard key={item.title} item={item} accentColor="#1a7fc1" />
            ))}
          </div>

          <div className="section-divider" />
          <div className="section-label" style={{ marginTop: "2rem" }}>PROTECTION & CALAGE</div>
          <div className="catalog-grid">
            {[...protectionItems, ...stowageItems].map((item) => (
              <CatalogCard key={item.title} item={item} accentColor="#2a8a3e" />
            ))}
          </div>
        </div>
      </section>

      <section id="devis" className="section section-devis">
        <div className="devis-split">
          <div className="devis-info">
            <div className="section-label light">NOUS CONTACTER</div>
            <h2 className="section-title light devis-heading">Demandez votre<br />devis personnalisé</h2>
            <p className="section-lead light devis-intro">
              Notre équipe vous répond dans les 24h. Précisez vos besoins et la taille de vos conteneurs pour une offre sur-mesure.
            </p>
            <ul className="contact-list">
              <li><span>📞</span><div><strong>Téléphone</strong><br />+213 7 81 86 12 88</div></li>
              <li><span>✉️</span><div><strong>Email</strong><br />sbm31dz@gmail.com</div></li>
              <li><span>📍</span><div><strong>Adresse</strong><br />Canastel · Oran · Algérie 31000</div></li>
              <li><span>👤</span><div><strong>Directeur commercial</strong><br />Bouzerouata Mohammed</div></li>
            </ul>
          </div>
          <div className="devis-form-column">
            <div className="devis-box">
              <h3>Demande de devis</h3>
              <p>Remplissez ce formulaire et nous vous recontactons rapidement.</p>
              <DevisForm />
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="content-wrap footer-inner">
          <span className="footer-brand">SBM PRODUCTS &amp; SCES</span>
          <span className="footer-copy">© 2025 SBM Fabrication — Canastel, Oran, Algérie</span>
          <nav className="footer-nav">
            <a href="#apropos">À PROPOS</a>
            <a href="#produits">PRODUITS</a>
            <a href="#devis">CONTACT</a>
          </nav>
        </div>
      </footer>
    </>
  );
}

export default App;
