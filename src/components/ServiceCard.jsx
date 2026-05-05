import { Link } from 'react-router-dom';

export default function ServiceCard({ service, onSelect }) {
  return (
    <article className="card service-card">
      <div className="card-icon" aria-hidden="true">✦</div>
      <div>
        <p className="eyebrow">{service.category}</p>
        <h3>{service.name}</h3>
        <p>{service.description}</p>
      </div>
      <div className="service-meta">
        <span>{service.duration} min</span>
        <span>${service.price}</span>
      </div>
      <Link className="button secondary" to="/services" onClick={() => onSelect?.(service)}>
        Book Online
      </Link>
    </article>
  );
}
