import Navbar from "../component/navbar";
import Banner from "../component/banner";
import Footer from "../component/footer";
import Collapse from "../component/collapse";

export default function About() {
  return (
    <div>
      <div className="home-container">
        <Navbar />
        <Banner image="../assets/about-banner.jpg" title=" " />
        <Collapse
          title="Fiabilité"
          content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
        />
        <Collapse
          title="Respect"
          content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportemnt discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme."
        />
        <Collapse
          title="Service"
          content="La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interraction, que ce soit les hôtes ou les locataires, soit empreinte de respect et de bienveillance."
        />
        <Collapse
          title="Sécurité"
          content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établies par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifiés que les standarts sont bien respectés. Nous organisons égaement des ateliers sur la sécurité domestiques pour nos hôtes."
        />
      </div>
      <Footer />
    </div>
  );
}
