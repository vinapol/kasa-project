import "../style/label-badge.scss"

interface LabelProps {
  index: number;
  content: string;
}

export default function Label({ index,content }: LabelProps) {
  return (
    <div className="label-badge" data-index={index}>
      <p>{content}</p>
    </div>
  );
}
