import { useLogements } from "../data/data";
import { useParams, Navigate } from "react-router-dom";
import "../style/logement.scss";
import Carousel from "../component/carroussel";
import Collapse from "../component/collapse";
import Label from "../component/label";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import Host from "../component/host";
import Rating from "../component/rating";

export default function Logement() {
  const { id } = useParams();
  const { data: logements, isLoading } = useLogements();

  if (isLoading) return <div>Chargement...</div>;

  const logement = logements.find((item) => item.id === id);

  if (!logement) {
    return <Navigate to="/not-found" />;
  }

  const hostFullName = logement.host.name;
  const [firstName, name] = hostFullName.split(" ");

  return (
    <div>
      <Navbar />
      <div className="property-details">
        <Carousel images={logement.pictures} />

        <div className="info">
          <div className="property-info">
            <h1>{logement.title}</h1>
            <p className="logement-location">{logement.location}</p>
            <div className="label-list">
              {logement.tags.map((tag, index) => (
                <Label key={`${tag}-${index}`} index={index} content={tag} />
              ))}
            </div>
          </div>
          <div className="host-rating">
            <Host
              id={logement.id}
              firstName={firstName}
              name={name}
              image={logement.host.picture}
            />
            <Rating score={logement.rating} />
          </div>
        </div>
        <div className="property-collapses">
          <Collapse title="Description" content={logement.description} />
          <Collapse
            title="Équipements"
            content={
              <ul>
                {logement.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            }
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
