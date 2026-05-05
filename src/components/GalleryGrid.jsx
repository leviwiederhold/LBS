import { useState } from 'react';
import { galleryItems } from '../data/siteData';

const categories = ['All', 'Permanent Makeup', 'Lifts & Tints', 'Makeup'];

export default function GalleryGrid() {
  const [category, setCategory] = useState('All');
  const items = category === 'All' ? galleryItems : galleryItems.filter((item) => item.category === category);

  return (
    <div>
      <div className="filter-row">
        {categories.map((name) => (
          <button key={name} className={category === name ? 'pill selected' : 'pill'} onClick={() => setCategory(name)}>
            {name}
          </button>
        ))}
      </div>
      <div className="gallery-grid">
        {items.map((item) => (
          <figure key={item.id} className="gallery-card">
            <img src={item.image} alt={item.title} />
            <figcaption>
              <span>{item.category}</span>
              <strong>{item.title}</strong>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
