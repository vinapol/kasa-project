import type { Property } from "../types/property";
import { Link } from "react-router-dom";
import "../style/card.scss";

interface CardProps {
  property: Property;
}

export default function Card({ property }: CardProps) {
  return (
    <Link to={`/logement/${property.id}`} className="card">
      <article className="card">
        <img src={property.cover} alt={property.title} />
        <div className="card__overlay"></div>
        <h2 className="card__title">{property.title}</h2>
      </article>
    </Link>
  );
}
