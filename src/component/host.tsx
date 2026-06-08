import "../style/host.scss";

interface HostProps {
  id: string;
  firstName: string;
  name: string;
  image: string;
}

export default function Host({ id, firstName, name, image }: HostProps) {
  return (
    <div className="hostCard" data-index={id}>
      <div className="hostName">
        <span>{name}</span>
        <span>{firstName}</span>
      </div>
      <img src={image}></img>
    </div>
  );
}
