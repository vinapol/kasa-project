import { useState, type ReactNode } from 'react';
import "../style/collapse.scss"

interface CollapseProps {
  title: string;
  content: ReactNode;
}

export default function Collapse({ title, content }: CollapseProps) {
  const [isOpen, setIsOpen] = useState(false);
  const arrow = "../assets/arrow.svg"

  return (
    <div className="collapse">
      <div className="collapse__header" onClick={() => setIsOpen(!isOpen)}>
        <h3>{title}</h3>
        <img 
          src={arrow} 
          alt="arrow" 
          className={isOpen ? "rotate" : ""} 
        />
      </div>
      {isOpen && (
        <div className="collapse__content">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
}