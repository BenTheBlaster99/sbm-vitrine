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

const securityItems = [
  {
    title: "Antivol SBM Block",
    text: "Système « SBM BLOCK » avec 3 clés non reproductibles. Résistant à 14T de pression, son utilisation est hautement recommandée pour l’export de marchandises à haute valeur ajoutée (ex : vins et spiritueux). Il est possible de fournir plusieurs antivols s’ouvrant avec la même clé.",
  },
  {
    title: "Poignée antivol à glissière",
    text: "Modèle plus léger et plus économique que le SBM Block, tout en restant très résistant. Composé de 2 barres métalliques robustes sécurisées par un cadenas ne pouvant être ouvert qu’à l’aide de 3 clés. S’ajuste aux barres des conteneurs et répond aux normes internationales ISO.",
  },
  {
    title: "Forkseal",
    text: "Système fiable de blocage des portes de conteneurs qui solidarise les barres de fermeture. La fourche est percée de façon régulière pour poser le scellé de sécurité au plus précis. Il est impossible d’ouvrir les portes du conteneur sans couper la barre de blocage.",
  },
  {
    title: "Poignée antivol à usage unique",
    text: "La poignée antivol à usage unique SBM Services est destinée aux transports conteneurs ou camions. Elle est composée de 2 solides barres métalliques sécurisées l’une à l’autre par un plomb qui ne se retire qu’à l’aide d’un disque électrique. Résistance à la rupture de 3,5 tonnes.",
  },
  {
    title: "Plomb bouteille SBM Seal",
    text: "Le « SBM SEAL » est un plomb « bouteille » agréé par les douanes internationales grâce à la norme ISO PASS 17712-2013. Toute tentative d’effraction endommage de façon irrémédiable le plomb bouteille. Conditionné en numérotation consécutive pour faciliter la traçabilité de chaque empotage.",
  },
  {
    title: "Plomb câble",
    text: "Ce scellé peut être installé sur tous types de conteneurs, châssis, chaînes, cordons tir, portes, et est approuvé ISO PAS 17712 sur ce diamètre de câble (3,5 mm). Après serrage, le câble ne peut plus être retiré sans être coupé.",
  },
  {
    title: "Plomb plastique Easytight",
    text: "Ce scellé plastique réglable permet de sécuriser vos sachets, sacs, ou vos transports (camions bâchés, citernes, conteneurs). Comme il doit être découpé pour être retiré, vous êtes assuré que personne n’aura eu accès à l’ouverture protégée s’il est toujours présent.",
  },
  {
    title: "Anti-vol châssis",
    text: "Cet antivol est très facile à poser et protège du vol de votre semi-remorque en empêchant l’attelage illicite. Après installation, il est impossible de désolidariser cette protection du pivot d’attelage. En acier peint, son utilisation ne requiert aucun entretien.",
  },
];

const controlItems = [
  {
    title: "Enregistreur de température à bande",
    text: "Ce système de contrôle de température à bande est fréquemment utilisé dans la logistique de tout produit sensible aux écarts de température. Il offre un enregistrement permanent et définitif des conditions de transport, avec lecture rapide et directe des données sur la bande d’enregistrement.",
  },
  {
    title: "Enregistreur de température USB",
    text: "L’enregistreur de température USB permet de constater précisément les écarts de températures durant le voyage import ou export. La lecture est directe en le connectant à un port USB.",
  },
  {
    title: "Enregistreur de température et d’humidité",
    text: "Cet enregistreur est idéal pour toute application nécessitant la surveillance de l’humidité relative (HR) : transport, transfert, stockage. Avec son capteur d’humidité numérique intégré, il mesure et enregistre l’humidité relative sans condensation de 10 % à 100 % et la température de -30°C.",
  },
  {
    title: "Système de géolocalisation TT Geo Eagle",
    text: "L’enregistreur de données TempTale GEO Eagle permet la traçabilité de votre fret maritime pendant le voyage. Peu coûteux, il donne les informations en temps réel : l’heure, la température et la localisation.",
  },
];

const humidityItems = [
  {
    title: "Absorbeur d’humidité",
    text: "Les déshydratants en barquettes permettent de réduire et stabiliser le taux d’humidité contenu dans l’air à l’intérieur du conteneur. Ils ont un grand pouvoir d’absorption allant jusqu’à 4 fois leur poids d’origine et sont faciles à mettre en place grâce à leur système de suspension.",
  },
  {
    title: "Absorgel Hanging",
    text: "AbsorGel Hanging exploite la propension du chlorure de calcium à absorber l’humidité de l’air de façon extrêmement efficace. L’eau absorbée est stockée sous forme de gel : ce procédé élimine tout risque de fuite.",
  },
  {
    title: "Absorpole",
    text: "Absorpole exploite la capacité du chlorure de calcium à absorber efficacement l’humidité de l’air. L’eau capturée est stockée dans un réservoir conçu pour éviter toute dispersion. Facile d’utilisation, il occupe un espace minimal tout en offrant une efficacité maximale.",
  },
  {
    title: "Sachet déshydratant",
    text: "De la famille des absorbeurs d’humidité, ce produit est très efficace pour assécher et repousser toute forme d’humidité ou de condensation à l’intérieur d’emballages fermés (colis, cartons, caisses bois, tubes). Il est souvent sollicité pour éviter la fermentation, la moisissure, la corrosion des métaux et la condensation.",
  },
];

const protectionItems = [
  {
    title: "Bâche pour conteneur Open-Top",
    text: "Lorsque vous avez besoin de protéger votre chargement à l’intérieur d’un conteneur open top, vous utilisez une bâche spécifique pour open top. Cette bâche recouvre le toit ouvert du conteneur et protège le chargement des intempéries et des curieux.",
  },
];

const stowageItems = [
  {
    title: "Bâche de retenue",
    text: "La bâche de retenue préserve directement la sécurité en évitant la chute de colis à l’ouverture des portes, lors du dépotage à destination, ou pendant la ramasse de différents lots dans un conteneur de groupage. Elle permet aussi de séparer et d’identifier les différents lots dans un chargement.",
  },
  {
    title: "Liner vrac + barres 20DC/30DC/40DC/40HC",
    text: "Ce liner permet de charger du VRAC (céréales, poudres, granulés et autres) dans les conteneurs maritimes. Facile à installer, il peut être mis en place directement par le chargeur.",
  },
  {
    title: "Coussin de calage réutilisable",
    text: "Pendant le transport, vos marchandises fragiles peuvent glisser et s’endommager. Les coussins de calage Turbo offrent une sécurité optimale tout au long du transport : ils calent les marchandises, résistent aux chocs, gardent leur forme initiale et restent économiques.",
  },
  {
    title: "Barre télescopique",
    text: "La barre de maintien ajustable est une barre télescopique qui permet de caler des éléments horizontalement ou verticalement à l’intérieur d’un conteneur standard ou frigorifique. Elle se place facilement grâce à sa poignée glissière et au serrage final.",
  },
  {
    title: "Crochet reefer",
    text: "Notre crochet reefer en acier électro-zingué se glisse dans les T bar floor et se verrouille à l’endroit souhaité en vissant l’œillet. Il permet d’y glisser une sangle pour assurer le bon maintien des marchandises.",
  },
  {
    title: "Sangle à cliquet",
    text: "Dans sa gamme calage et arrimage, SBM propose des ensembles à cliquet 5 tonnes 9,50 m avec utilisation conteneurs (crochet J) ou camions (crochet U), disponibles en plusieurs dimensions et formats.",
  },
  {
    title: "Sangle d’arrimage voiture à cliquet (1 partie)",
    text: "Les sangles d’arrimage pour voiture sont simples d’utilisation et permettent un ancrage rapide. Il suffit de former une boucle via l’anneau d’arrimage du conteneur et la jante du véhicule, puis d’ajuster le serrage avec le cliquet.",
  },
  {
    title: "Sangle d’arrimage perdue",
    text: "La sangle d’arrimage 2 T ou 6 T permet le maintien de charges lourdes pendant leur transport en conteneurs ou camions. Présentée au mètre linéaire, elle s’optimise selon vos besoins, avec boucles et crochets adaptés.",
  },
  {
    title: "Boucles et crochets pour sangles perdues",
    text: "Les boucles d’arrimage sont indispensables au serrage et au maintien des sangles sur les colis à stabiliser pendant le transport. Simple d’utilisation, c’est le mode d’arrimage le plus répandu quand les sangles à cliquet ne sont pas adaptées.",
  },
  {
    title: "Film bulles",
    text: "Anti-statique ou classique, disponible en 1 m x 150 m et 1,5 m x 100 m.",
  },
];

const pictureOverrides = {
  "Anti-vol châssis": "/pictures/Anti-vol chassis.png",
  "Bubble liner™ 20DC/40DC/40HC": "/pictures/Bubble liner 20dc .png",
  "Liner vrac + barres 20DC/30DC/40DC/40HC": "/pictures/Liner vrac + barres 20DC",
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

      <section className="catalog-section security section-card">
        <div className="content-wrap">
          <h2 className="section-banner section-banner-red">La sécurité</h2>
          <div className="catalog-grid">
            {securityItems.map((item) => (
              <CatalogCard
                key={item.title}
                item={item}
                titleColorClass="security-title"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="catalog-section control section-card">
        <div className="content-wrap">
          <h2 className="section-banner section-banner-orange">Le contrôle</h2>
          <div className="catalog-grid catalog-grid-control">
            {controlItems.map((item) => (
              <CatalogCard
                key={item.title}
                item={item}
                titleColorClass="control-title"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="catalog-section humidity section-card">
        <div className="content-wrap">
          <h2 className="section-banner section-banner-orange">
            La gestion de l’humidité
          </h2>
          <div className="catalog-grid">
            {humidityItems.map((item) => (
              <CatalogCard key={item.title} item={item} titleColorClass="control-title" />
            ))}
          </div>
        </div>
      </section>

      <section className="catalog-section protection section-card">
        <div className="content-wrap">
          <h2 className="section-banner section-banner-orange">La Protection</h2>
          <div className="catalog-grid catalog-grid-single">
            {protectionItems.map((item) => (
              <CatalogCard key={item.title} item={item} titleColorClass="control-title" />
            ))}
          </div>
        </div>
      </section>

      <section className="catalog-section stowage section-card">
        <div className="content-wrap">
          <h2 className="section-banner section-banner-orange">
            Le calage et l’arrimage
          </h2>
          <div className="catalog-grid">
            {stowageItems.map((item) => (
              <CatalogCard key={item.title} item={item} titleColorClass="control-title" />
            ))}
          </div>
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
