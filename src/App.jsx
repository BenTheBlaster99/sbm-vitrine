import React, { useState, useEffect } from "react";

/** Specs aligned with BJ Services product range, branded SBM */
const products = [
  {
    key: "ecofriendly",
    title: "SBM EcoFriendly",
    tag: "Isolation",
    icon: "🧊",
    text: "SBM a créé un isolant totalement éco-responsable et recyclable, disponible en 20 DC/40DC et 40HC (modèle breveté INPI). Produit certifié isolant — montage rapide et facile.",
    fiche: {
      subtitle: "Isolant monomatière 100% recyclable",
      formats: ["20DC", "40DC", "40HC"],
      composition: [
        "Bulles polyéthylène résistantes (PE recyclé)",
        "Parement polyester métallisé 12 microns",
        "Monomatière PE — 100% recyclable et re-valorisable",
      ],
      specs: [
        ["Matériau", "PE monomatière recyclé + parement métallisé"],
        ["Formats", "20DC / 40DC / 40HC"],
        ["Étanchéité", "Étanche à l'eau et à l'air"],
        ["Empreinte carbone", "0,89 T.CO₂ (bilan produit)"],
        ["Santé", "Sans particules volatiles, imputrescible, inodore"],
        ["Certification", "Produit certifié isolant — modèle breveté INPI"],
        ["Pose", "Montage rapide et facile"],
      ],
      avantages: [
        "Isolation été comme hiver",
        "Protection UV & IR",
        "Fin de vie 100% recyclable",
        "Ne réduit pas le volume utile du conteneur",
      ],
    },
  },
  {
    key: "bubble",
    title: "Housse Bubble Liner™",
    tag: "Isolation",
    icon: "💨",
    text: "« L'air est le matériau le plus isolant au monde ». Un avantage majeur pour la protection de vos produits grâce à des milliers de bulles d'air. 5 faces + isolation plancher en option.",
    fiche: {
      subtitle: "Le seul liner conçu avec des bulles d'air",
      formats: ["20DC", "40DC", "40HC", "5 faces", "Plancher option"],
      composition: [
        "Film PET aluminisé 12 µ",
        "Film PE 17 µ",
        "Film bulle PE 100 µ ou 200 µ",
      ],
      specs: [
        ["Versions", "Bubble Liner 100 / Bubble Liner 200"],
        ["Épaisseur (200)", "4 mm"],
        ["Poids (200)", "200 g/m² ±10 g/m²"],
        ["Plage de température", "-46°C → +86°C"],
        ["Conductivité thermique", "0,042 W/m°C"],
        ["Réflectivité", "95 – 97%"],
        ["Résistance à la perforation", "455 kPa"],
        ["Contact alimentaire", "Approuvé (sans métaux lourds, sans silicium)"],
        ["Configuration", "5 faces — isolation plancher en option"],
      ],
      avantages: [
        "Protection thermique par conduction (air dans les bulles)",
        "Réflexion des IR via surface métallisée",
        "Léger, flexible, sans EPI pour la pose",
        "Protège des intempéries, nuisibles et solvants",
      ],
    },
  },
  {
    key: "liner",
    title: "SBM Liner",
    tag: "Isolation",
    icon: "📦",
    text: "Poche intérieure 5 ou 6 faces. Revêtement ouaté anti-humidité, extérieur aluminium armé multicouche PE. Idéal pour denrées sensibles.",
    fiche: {
      subtitle: "Poche intérieure pour conteneurs maritimes",
      formats: ["20DC", "40DC", "40HC", "5 faces", "6 faces"],
      composition: [
        "Revêtement intérieur ouaté (anti-humidité)",
        "Extérieur aluminium armé + tissu tramé",
        "Plusieurs couches de PE",
      ],
      specs: [
        ["Versions", "5 faces (sans plancher) / 6 faces (avec plancher)"],
        ["Formats", "20DC / 40DC / 40HC"],
        ["Intérieur", "Ouaté — retarde la formation d'humidité"],
        ["Extérieur", "Aluminium armé multicouche PE"],
        ["Usage", "Denrées sensibles, vins & spiritueux, pharmaceutique"],
        ["Fixation", "Tendeurs / aimants haute résistance"],
      ],
      avantages: [
        "Transport de denrées dans des conditions saines",
        "Protection contre l'humidité",
        "Installation sans adhésifs doubles face",
        "Nettoyage facilité à destination",
      ],
    },
  },
  {
    key: "palette",
    title: "Housse de Palette",
    tag: "Palette",
    icon: "🛋️",
    text: "Dérivé de l'isolation maritime. Solide, léger, facile à installer. Parfaite pour groupage, fret aérien et protection palettes en stockage.",
    fiche: {
      subtitle: "Protection thermique des palettes",
      formats: ["5 panneaux"],
      composition: [
        "Bulles polyéthylène résistantes 150 microns",
        "Diamètre bulle 10 mm — hauteur 4 mm",
        "Parement polyester métallisé 12 microns (face extérieure)",
      ],
      specs: [
        ["Format type", "5 panneaux — 1150 × 1250 × 1650 mm (H)"],
        ["Épaisseur finale", "4 mm minimum"],
        ["Bulles PE", "150 µ — Ø 10 mm — H 4 mm"],
        ["Parement", "Polyester métallisé 12 µ"],
        ["Applications", "Fret aérien, groupage, stockage"],
      ],
      avantages: [
        "Solidité, légèreté et pose rapide",
        "Protection contre variations brusques de température",
        "Idéal marchandises sensibles (alimentaire, pharma, électronique)",
      ],
    },
  },
];

const securityItems = [
  {
    title: "Antivol SBM Block",
    icon: "🔐",
    text: "3 clés non reproductibles. Résistant à 14T de pression. Recommandé pour l'export de marchandises à haute valeur ajoutée (vins, spiritueux).",
    fiche: {
      subtitle: "Système antivol haute résistance",
      specs: [
        ["Clés", "3 clés non reproductibles"],
        ["Résistance", "14 tonnes de pression"],
        ["Usage", "Export marchandises haute valeur (vins, spiritueux)"],
        ["Option", "Plusieurs antivols s'ouvrant avec la même clé"],
      ],
    },
  },
  {
    title: "Poignée antivol à glissière",
    icon: "🔩",
    text: "2 barres métalliques + cadenas 3 clés. S'ajuste aux barres des conteneurs, conforme aux normes ISO internationales.",
    fiche: {
      subtitle: "Antivol économique et robuste",
      specs: [
        ["Composition", "2 barres métalliques + cadenas"],
        ["Clés", "3 clés"],
        ["Norme", "Ajustement barres conteneurs — normes ISO"],
      ],
    },
  },
  {
    title: "Forkseal",
    icon: "⚓",
    text: "Blocage fiable des portes. La barre de blocage doit être coupée pour ouvrir — traçabilité totale des accès.",
    fiche: {
      subtitle: "Blocage des portes de conteneur",
      specs: [
        ["Fonction", "Solidarise les barres de fermeture"],
        ["Scellé", "Fourche percée pour pose précise du scellé"],
        ["Sécurité", "Ouverture impossible sans couper la barre"],
      ],
    },
  },
  {
    title: "Poignée antivol à usage unique",
    icon: "🏷️",
    text: "2 barres métalliques sécurisées par un plomb retiré uniquement par disque électrique. Résistance à la rupture de 3,5 tonnes.",
    fiche: {
      subtitle: "Antivol réutilisable / usage contrôlé",
      specs: [
        ["Composition", "2 barres métalliques + plomb"],
        ["Retrait", "Disque électrique uniquement"],
        ["Résistance rupture", "3,5 tonnes"],
        ["Usage", "Conteneurs et camions"],
      ],
    },
  },
  {
    title: "Plomb bouteille SBM Seal",
    icon: "🔏",
    text: "Agréé douanes internationales ISO PASS 17712-2013. Numérotation consécutive pour traçabilité de chaque empotage.",
    fiche: {
      subtitle: "Scellé douanier ISO",
      specs: [
        ["Norme", "ISO PASS 17712-2013"],
        ["Type", "Plomb bouteille"],
        ["Traçabilité", "Numérotation consécutive"],
        ["Effraction", "Endommagement irrémédiable en cas de tentative"],
      ],
    },
  },
  {
    title: "Plomb câble",
    icon: "🪢",
    text: "Installable sur conteneurs, châssis, chaînes, portes. Approuvé ISO PAS 17712, câble 3,5 mm. Irréversible sans coupe.",
    fiche: {
      subtitle: "Scellé câble réglable",
      specs: [
        ["Diamètre câble", "3,5 mm"],
        ["Norme", "ISO PAS 17712"],
        ["Supports", "Conteneurs, châssis, chaînes, portes"],
        ["Retrait", "Coupe du câble uniquement"],
      ],
    },
  },
  {
    title: "Plomb plastique Easytight",
    icon: "🔒",
    text: "Scellé plastique réglable pour sacs, sachets, camions bâchés, citernes et conteneurs. Doit être découpé pour être retiré.",
    fiche: {
      subtitle: "Scellé plastique réglable",
      specs: [
        ["Type", "Plastique réglable"],
        ["Usage", "Sacs, sachets, bâches, citernes, conteneurs"],
        ["Retrait", "Découpe obligatoire"],
      ],
    },
  },
  {
    title: "Anti-vol châssis",
    icon: "🚛",
    text: "Protège votre semi-remorque contre l'attelage illicite. Impossible à désolidariser après installation. Acier peint, sans entretien.",
    fiche: {
      subtitle: "Protection pivot d'attelage",
      specs: [
        ["Fonction", "Empêche l'attelage illicite"],
        ["Matériau", "Acier peint"],
        ["Entretien", "Aucun"],
        ["Pose", "Facile — indémontable après installation"],
      ],
    },
  },
];

const controlItems = [
  {
    title: "Enregistreur de température à bande",
    icon: "📊",
    text: "Enregistrement permanent des conditions de transport. Lecture rapide et directe sur la bande d'enregistrement.",
    fiche: {
      subtitle: "Surveillance température — bande",
      specs: [
        ["Type", "Enregistreur à bande"],
        ["Lecture", "Directe sur bande"],
        ["Usage", "Contrôle permanent des conditions de transport"],
      ],
    },
  },
  {
    title: "Enregistreur de température USB",
    icon: "🌡️",
    text: "Constate précisément les écarts de température durant le voyage import/export. Lecture directe via port USB.",
    fiche: {
      subtitle: "Surveillance température — USB",
      specs: [
        ["Type", "Enregistreur USB"],
        ["Lecture", "Via port USB"],
        ["Usage", "Import / export — écarts de température"],
      ],
    },
  },
  {
    title: "Enregistreur temp. & humidité",
    icon: "💧",
    text: "Surveille l'humidité relative de 10% à 100% et la température de -30°C. Capteur numérique intégré.",
    fiche: {
      subtitle: "Température + humidité",
      specs: [
        ["Humidité relative", "10% – 100% HR"],
        ["Température", "À partir de -30°C"],
        ["Capteur", "Numérique intégré"],
      ],
    },
  },
  {
    title: "Géolocalisation TT Geo Eagle",
    icon: "📡",
    text: "Traçabilité de votre fret maritime en temps réel : heure, température et localisation GPS. Peu coûteux, très efficace.",
    fiche: {
      subtitle: "Géolocalisation fret maritime",
      specs: [
        ["Données", "Heure, température, position GPS"],
        ["Temps réel", "Oui"],
        ["Usage", "Traçabilité du fret maritime"],
      ],
    },
  },
];

const humidityItems = [
  {
    title: "Absorbeur d'humidité",
    icon: "🧲",
    text: "Déshydratants en barquettes absorbant jusqu'à 4× leur poids. Réduction du taux d'humidité à l'intérieur du conteneur.",
    fiche: {
      subtitle: "Déshydratant en barquette",
      specs: [
        ["Absorption", "Jusqu'à 4× son poids"],
        ["Format", "Barquette"],
        ["Effet", "Réduit l'humidité dans le conteneur"],
      ],
    },
  },
  {
    title: "Absorgel Hanging",
    icon: "🧴",
    text: "Chlorure de calcium absorbant l'humidité de l'air. Eau stockée en gel — élimine tout risque de fuite.",
    fiche: {
      subtitle: "Absorbeur gel suspendu",
      specs: [
        ["Principe", "Chlorure de calcium"],
        ["Stockage eau", "En gel — sans fuite"],
        ["Pose", "Suspendu (hanging)"],
      ],
    },
  },
  {
    title: "Absorpole",
    icon: "🏗️",
    text: "Espace minimal, efficacité maximale. Réservoir intégré évitant toute dispersion de l'eau capturée.",
    fiche: {
      subtitle: "Absorbeur vertical compact",
      specs: [
        ["Avantage", "Faible encombrement"],
        ["Réservoir", "Intégré — pas de dispersion"],
      ],
    },
  },
  {
    title: "Sachet déshydratant",
    icon: "🛍️",
    text: "Idéal pour emballages fermés. Évite fermentation, moisissure, corrosion et condensation.",
    fiche: {
      subtitle: "Protection emballages fermés",
      specs: [
        ["Usage", "Emballages fermés"],
        ["Protège contre", "Fermentation, moisissure, corrosion, condensation"],
      ],
    },
  },
];

const protectionItems = [
  {
    title: "Bâche pour conteneur Open-Top",
    icon: "☂️",
    text: "Recouvre le toit ouvert du conteneur open top. Protège le chargement des intempéries et des regards indiscrets.",
    fiche: {
      subtitle: "Couverture open-top",
      specs: [
        ["Usage", "Conteneurs open-top"],
        ["Fonction", "Protection intempéries et discrétion"],
      ],
    },
  },
];

const stowageItems = [
  {
    title: "Bâche de retenue",
    icon: "🛡️",
    text: "Évite la chute de colis à l'ouverture des portes. Sépare et identifie les lots dans un conteneur de groupage.",
    fiche: {
      subtitle: "Sécurité à l'ouverture des portes",
      specs: [
        ["Fonction", "Retenue des colis / séparation des lots"],
        ["Usage", "Groupage"],
      ],
    },
  },
  {
    title: "Liner vrac + barres",
    icon: "🌾",
    text: "Charge du VRAC (céréales, poudres, granulés) dans les conteneurs maritimes. Installation directe par le chargeur.",
    fiche: {
      subtitle: "Chargement vrac maritime",
      formats: ["20DC", "30DC", "40DC", "40HC"],
      specs: [
        ["Formats", "20DC / 30DC / 40DC / 40HC"],
        ["Produits", "Céréales, poudres, granulés"],
        ["Pose", "Par le chargeur"],
      ],
    },
  },
  {
    title: "Coussin de calage réutilisable",
    icon: "💺",
    text: "Coussins d'air Turbo — calent les marchandises, résistent aux chocs, gardent leur forme. Solution économique.",
    fiche: {
      subtitle: "Coussins d'air Turbo",
      specs: [
        ["Type", "Réutilisable"],
        ["Fonction", "Calage + absorption des chocs"],
      ],
    },
  },
  {
    title: "Barre télescopique",
    icon: "📏",
    text: "Cale des éléments horizontalement ou verticalement dans conteneur standard ou frigorifique. Réglage par poignée glissière.",
    fiche: {
      subtitle: "Calage télescopique",
      specs: [
        ["Orientation", "Horizontale ou verticale"],
        ["Conteneurs", "Standard et frigorifique"],
        ["Réglage", "Poignée glissière"],
      ],
    },
  },
  {
    title: "Crochet reefer",
    icon: "🪝",
    text: "Acier électro-zingué, se glisse dans les T bar floor. Permet de fixer une sangle pour maintenir vos marchandises.",
    fiche: {
      subtitle: "Ancrage plancher reefer",
      specs: [
        ["Matériau", "Acier électro-zingué"],
        ["Fixation", "T bar floor"],
        ["Usage", "Fixation de sangles"],
      ],
    },
  },
  {
    title: "Sangle à cliquet",
    icon: "⛓️",
    text: "Ensembles à cliquet 5T, 9,50 m. Crochet J (conteneur) ou crochet U (camion). Plusieurs dimensions disponibles.",
    fiche: {
      subtitle: "Arrimage à cliquet",
      specs: [
        ["Capacité", "5 tonnes"],
        ["Longueur type", "9,50 m"],
        ["Crochets", "J (conteneur) / U (camion)"],
      ],
    },
  },
  {
    title: "Sangle d'arrimage voiture",
    icon: "🚗",
    text: "Ancrage rapide via anneau d'arrimage du conteneur et jante du véhicule. Serrage par cliquet.",
    fiche: {
      subtitle: "Arrimage véhicules",
      specs: [
        ["Ancrage", "Anneau conteneur + jante véhicule"],
        ["Serrage", "Cliquet"],
      ],
    },
  },
  {
    title: "Sangle d'arrimage perdue",
    icon: "🧵",
    text: "2T ou 6T. Présentée au mètre linéaire pour optimiser l'utilisation selon vos besoins, avec boucles et crochets.",
    fiche: {
      subtitle: "Sangle au mètre",
      specs: [
        ["Capacités", "2T / 6T"],
        ["Conditionnement", "Mètre linéaire"],
        ["Accessoires", "Boucles et crochets"],
      ],
    },
  },
  {
    title: "Boucles et crochets",
    icon: "🔗",
    text: "Indispensables au serrage et maintien des sangles. Mode d'arrimage le plus répandu quand les sangles à cliquet ne conviennent pas.",
    fiche: {
      subtitle: "Accessoires d'arrimage",
      specs: [
        ["Usage", "Serrage et maintien des sangles perdues"],
      ],
    },
  },
  {
    title: "Film bulles",
    icon: "🫧",
    text: "Anti-statique ou classique. Disponible en 1 m × 150 m et 1,5 m × 100 m.",
    fiche: {
      subtitle: "Film de protection",
      specs: [
        ["Versions", "Classique / anti-statique"],
        ["Formats", "1 m × 150 m / 1,5 m × 100 m"],
      ],
    },
  },
];

// Filenames use curly apostrophe (’) — must match public/pictures exactly
const pictureOverrides = {
  "Housse Bubble Liner™": "/pictures/Bubble liner 20dc .png",
  "SBM EcoFriendly": "/pictures/SBM EcoFriendly.png",
  "Anti-vol châssis": "/pictures/Anti-vol chassis.png",
  "Housse de Palette": "/pictures/Housse de palette.png",
  "Absorbeur d'humidité": "/pictures/Absorbeur d\u2019humidité.png",
  "Enregistreur temp. & humidité":
    "/pictures/Enregistreur de température et d\u2019humidité.png",
  "Géolocalisation TT Geo Eagle":
    "/pictures/Système de géolocalisation TT Geo Eagle.png",
  "Sangle d'arrimage voiture":
    "/pictures/Sangle d\u2019arrimage voiture à cliquet (1 partie).png",
  "Sangle d'arrimage perdue": "/pictures/Sangle d\u2019arrimage perdue.png",
  "Boucles et crochets": "/pictures/Boucles et crochets pour sangles perdues.png",
  "Liner vrac + barres": null,
};

const getPicturePath = (title) => {
  if (title in pictureOverrides) return pictureOverrides[title];
  return `/pictures/${encodeURIComponent(title)}.png`;
};

function FicheTechniqueModal({ item, accentColor = "#0f4d97", onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  if (!item) return null;

  const picSrc = getPicturePath(item.title);
  const fiche = item.fiche || {};
  const specs = fiche.specs || [];
  const composition = fiche.composition || [];
  const avantages = fiche.avantages || [];
  const formats = fiche.formats || [];

  return (
    <div className="fiche-overlay" onClick={onClose} role="presentation">
      <div
        className="fiche-modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="fiche-title"
      >
        <button type="button" className="fiche-close" onClick={onClose} aria-label="Fermer">
          ×
        </button>

        <div className="fiche-header">
          <div className="fiche-header-text">
            <span className="fiche-badge" style={{ background: accentColor }}>
              Fiche technique
            </span>
            <h2 id="fiche-title">{item.title}</h2>
            {fiche.subtitle && <p className="fiche-subtitle">{fiche.subtitle}</p>}
            {formats.length > 0 && (
              <div className="fiche-tags">
                {formats.map((f) => (
                  <span key={f}>{f}</span>
                ))}
              </div>
            )}
          </div>
          {picSrc && (
            <img className="fiche-image" src={picSrc} alt={item.title} />
          )}
        </div>

        <p className="fiche-desc">{item.text}</p>

        {composition.length > 0 && (
          <div className="fiche-block">
            <h3>Composition</h3>
            <ul>
              {composition.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        )}

        {specs.length > 0 && (
          <div className="fiche-block">
            <h3>Caractéristiques techniques</h3>
            <table className="fiche-table">
              <tbody>
                {specs.map(([label, value]) => (
                  <tr key={label}>
                    <th>{label}</th>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {avantages.length > 0 && (
          <div className="fiche-block">
            <h3>Avantages</h3>
            <ul className="fiche-avantages">
              {avantages.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="fiche-actions">
          <a href="#devis" className="fiche-cta" onClick={onClose}>
            Demander un devis →
          </a>
        </div>
      </div>
    </div>
  );
}

function CatalogCard({ item, accentColor = "#0f4d97", onOpen }) {
  const picSrc = getPicturePath(item.title);
  return (
    <article
      className="catalog-card catalog-card-clickable"
      onClick={() => onOpen?.(item)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen?.(item);
        }
      }}
      role="button"
      tabIndex={0}
    >
      <div className="catalog-card-icon" style={{ color: accentColor }}>
        {item.icon || "📦"}
      </div>
      {picSrc && (
        <img
          className="catalog-image"
          src={picSrc}
          alt={item.title}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      )}
      <h3 className="catalog-card-title" style={{ color: accentColor }}>
        {item.title}
      </h3>
      <p>{item.text}</p>
      <span className="fiche-link" style={{ color: accentColor }}>
        Voir la fiche technique →
      </span>
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
        <span />
        <span />
        <span />
      </button>
      <ul className={`navbar-links${menuOpen ? " open" : ""}`}>
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
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
        <p>
          Pour toute urgence : <strong>+213 7 81 86 12 88</strong>
        </p>
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
            <option value="" disabled>
              Sélectionnez un produit…
            </option>
            <option>SBM EcoFriendly (isolant)</option>
            <option>Bubble Liner™ 20DC/40DC/40HC</option>
            <option>SBM Liner (5 ou 6 faces)</option>
            <option>Housse de palette</option>
            <option>Absorbeurs d&apos;humidité</option>
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
            <option value="" disabled>
              Format…
            </option>
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
      <p className="devis-note">
        Réponse garantie sous 24h — vos données restent confidentielles
      </p>
    </form>
  );
}

function App() {
  const [selected, setSelected] = useState(null);
  const [selectedAccent, setSelectedAccent] = useState("#0f4d97");

  const openFiche = (item, accent = "#0f4d97") => {
    setSelected(item);
    setSelectedAccent(accent);
  };

  return (
    <>
      <Navbar />

      <section id="top" className="hero">
        <div className="content-wrap hero-inner">
          <div className="hero-text">
            <div className="hero-badge">SBM PRODUCTS & SCES · CANASTEL, ORAN</div>
            <h1 className="hero-title">
              Isolation &amp;
              <br />
              Équipement
              <br />
              Conteneurs
            </h1>
            <p className="hero-subtitle">
              SBM Fabrication conçoit des solutions d&apos;isolation haute performance,
              des accessoires de sécurité et des systèmes de contrôle pour conteneurs
              maritimes et terrestres — 20&apos; à 40&apos;HC.
            </p>
            <div className="hero-actions">
              <a href="#devis" className="btn-primary">
                Demander un devis
              </a>
              <a href="#produits" className="btn-ghost">
                Voir nos produits
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="apropos" className="section section-light">
        <div className="content-wrap">
          <div className="section-label">À PROPOS DE SBM</div>
          <h2 className="section-title">
            L&apos;expertise au
            <br />
            service du terrain
          </h2>
          <p className="section-lead">
            Basée à Canastel–Oran, SBM Fabrication est une entreprise innovante
            spécialisée dans la fabrication de solutions d&apos;isolation pour
            conteneurs et d&apos;accessoires logistiques haut de gamme. Depuis notre
            création, nous mettons notre expertise au service des professionnels du
            transport, de la logistique et de l&apos;industrie.
          </p>
          <div className="about-grid">
            {[
              {
                icon: "🏭",
                title: "Fabrication Algérienne",
                desc: "Production locale, qualité internationale. Certification ISO 9001.",
              },
              {
                icon: "🌿",
                title: "Éco-responsable",
                desc: "Matières recyclées, PE monomatière 100% re-valorisable.",
              },
              {
                icon: "⚙️",
                title: "Solutions sur-mesure",
                desc: "Adaptation à tous les formats et secteurs d'activité.",
              },
            ].map((item) => (
              <div key={item.title} className="about-card">
                <div className="about-card-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="about-badges">
            <div className="about-badge">
              <strong>ISO 9001</strong>
              <span>Fabrication certifiée</span>
            </div>
            <div className="about-badge">
              <strong>♻️ PE Recyclé</strong>
              <span>Monomatière 100% valorisable</span>
            </div>
            <div className="about-badge">
              <strong>🌊 Étanche</strong>
              <span>Eau & air — protection totale</span>
            </div>
          </div>

          <h3 className="subsection-title">Nos Solutions</h3>
          <ul className="solutions-list">
            <li>
              <strong>Isolation Containers Maritimes & Terrestres :</strong> Housses
              isolantes 20 et 40 pieds — protection contre variations thermiques et
              humidité.
            </li>
            <li>
              <strong>Housses Palettes Éco-Friendly :</strong> Matières recyclées et
              éco-responsables pour une logistique durable.
            </li>
            <li>
              <strong>Accessoires pour Containers :</strong> Coussins de calage
              gonflables + solutions sur mesure.
            </li>
            <li>
              <strong>Produits Innovants :</strong> Catalogue en constante expansion,
              adapté à tous les secteurs.
            </li>
          </ul>

          <h3 className="subsection-title">Pourquoi choisir SBM Fabrication ?</h3>
          <ul className="why-list">
            {[
              "Expertise locale, qualité internationale",
              "Produits éco-conçus pour un avenir durable",
              "Solutions sur-mesure adaptées à vos besoins",
            ].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="eco" className="section section-dark">
        <div className="content-wrap">
          <div className="section-label light">ÉCO-FRIENDLY</div>
          <h2 className="section-title light">
            Un isolant
            <br />
            vraiment vert
          </h2>
          <p className="section-lead light">
            Notre SBM EcoFriendly est le seul isolant à proposer un bilan CO₂ certifié
            et une fin de vie 100% recyclable. Produit certifié isolant, idéal pour la
            protection de vos produits en conteneur.
          </p>
          <div className="eco-grid">
            {[
              {
                icon: "♻️",
                title: "Monomatière PE recyclé",
                desc: "100% recyclable et re-valorisable en fin de vie. Zéro mélange de matériaux.",
              },
              {
                icon: "🫁",
                title: "Sans particules volatiles",
                desc: "Sans danger pour la santé — imputrescible, inodore, n'attire pas les nuisibles.",
              },
              {
                icon: "⚡",
                title: "Économie d'énergie",
                desc: "Isolation durable réduisant les pertes thermiques, été comme hiver.",
              },
              {
                icon: "☀️",
                title: "Protection UV & IR",
                desc: "Bouclier contre rayonnements UV, infrarouge et variations thermiques.",
              },
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
                <thead>
                  <tr>
                    <th>Modèle</th>
                    <th>λ PET [W/m.k]</th>
                    <th>λ PEMHD [W/m.k]</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Film 1 bulle</td>
                    <td>0.02846</td>
                    <td>0.02949</td>
                  </tr>
                  <tr>
                    <td>Film 2 bulles</td>
                    <td>0.03012</td>
                    <td>0.03559</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section id="produits" className="section section-light">
        <div className="content-wrap">
          <div className="section-label">NOS PRODUITS</div>
          <h2 className="section-title">
            L&apos;isolation &amp;
            <br />
            l&apos;équipement
          </h2>
          <p className="section-lead">
            Cliquez sur un produit pour ouvrir sa fiche technique — composition,
            caractéristiques et avantages.
          </p>
          <div className="products-grid">
            {products.map((p) => {
              const picSrc = getPicturePath(p.title);
              return (
                <article
                  key={p.key}
                  className="product-card product-card-clickable"
                  onClick={() => openFiche(p, "#0f4d97")}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      openFiche(p, "#0f4d97");
                    }
                  }}
                  role="button"
                  tabIndex={0}
                >
                  <div className="product-card-tag">
                    {p.icon} {p.tag}
                  </div>
                  {picSrc && (
                    <img
                      className="product-img"
                      src={picSrc}
                      alt={p.title}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  )}
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                  <span className="fiche-link">Voir la fiche technique →</span>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="securite" className="section section-gray">
        <div className="content-wrap">
          <div className="section-label">SÉCURITÉ & CONTRÔLE</div>
          <h2 className="section-title">
            Protégez vos
            <br />
            marchandises
          </h2>
          <div className="catalog-grid">
            {securityItems.map((item) => (
              <CatalogCard
                key={item.title}
                item={item}
                accentColor="#b22544"
                onOpen={(i) => openFiche(i, "#b22544")}
              />
            ))}
          </div>

          <div className="section-divider" />
          <div className="section-label" style={{ marginTop: "2rem" }}>
            LE CONTRÔLE
          </div>
          <div className="catalog-grid">
            {controlItems.map((item) => (
              <CatalogCard
                key={item.title}
                item={item}
                accentColor="#cc7f1a"
                onOpen={(i) => openFiche(i, "#cc7f1a")}
              />
            ))}
          </div>

          <div className="section-divider" />
          <div className="section-label" style={{ marginTop: "2rem" }}>
            GESTION DE L&apos;HUMIDITÉ
          </div>
          <div className="catalog-grid">
            {humidityItems.map((item) => (
              <CatalogCard
                key={item.title}
                item={item}
                accentColor="#1a7fc1"
                onOpen={(i) => openFiche(i, "#1a7fc1")}
              />
            ))}
          </div>

          <div className="section-divider" />
          <div className="section-label" style={{ marginTop: "2rem" }}>
            PROTECTION & CALAGE
          </div>
          <div className="catalog-grid">
            {[...protectionItems, ...stowageItems].map((item) => (
              <CatalogCard
                key={item.title}
                item={item}
                accentColor="#2a8a3e"
                onOpen={(i) => openFiche(i, "#2a8a3e")}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="devis" className="section section-devis">
        <div className="devis-split">
          <div className="devis-info">
            <div className="section-label light">NOUS CONTACTER</div>
            <h2 className="section-title light devis-heading">
              Demandez votre
              <br />
              devis personnalisé
            </h2>
            <p className="section-lead light devis-intro">
              Notre équipe vous répond dans les 24h. Précisez vos besoins et la taille
              de vos conteneurs pour une offre sur-mesure.
            </p>
            <ul className="contact-list">
              <li>
                <span>📞</span>
                <div>
                  <strong>Téléphone</strong>
                  <br />
                  +213 7 81 86 12 88
                </div>
              </li>
              <li>
                <span>✉️</span>
                <div>
                  <strong>Email</strong>
                  <br />
                  sbm31dz@gmail.com
                </div>
              </li>
              <li>
                <span>📍</span>
                <div>
                  <strong>Adresse</strong>
                  <br />
                  Canastel · Oran · Algérie 31000
                </div>
              </li>
              <li>
                <span>👤</span>
                <div>
                  <strong>Directeur commercial</strong>
                  <br />
                  Bouzerouata Mohammed
                </div>
              </li>
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
          <span className="footer-copy">
            © 2025 SBM Fabrication — Canastel, Oran, Algérie
          </span>
          <nav className="footer-nav">
            <a href="#apropos">À PROPOS</a>
            <a href="#produits">PRODUITS</a>
            <a href="#devis">CONTACT</a>
          </nav>
        </div>
      </footer>

      {selected && (
        <FicheTechniqueModal
          item={selected}
          accentColor={selectedAccent}
          onClose={() => setSelected(null)}
        />
      )}
    </>
  );
}

export default App;
