import { useLogements } from "../data/data";
import Card from "../component/card";
import Banner from "../component/banner";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import "../style/home.scss";

export default function Home() {
  const { data: properties, isLoading } = useLogements();

  if (isLoading) return <div>Chargement en cours...</div>;

  return (
    <div>
      <div className="home-container">
        <Navbar />
        <Banner image="../assets/home-banner.jpg" title="Chez vous, partout et ailleurs" />
        
        <div className="home-gallery">
          {properties.map((logement) => (
            <Card key={logement.id} property={logement} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}