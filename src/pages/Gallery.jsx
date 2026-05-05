import GalleryGrid from '../components/GalleryGrid';

export default function Gallery() {
  return (
    <main className="page-shell">
      <div className="section-heading">
        <p className="eyebrow">Gallery</p>
        <h1>Browse recent looks by service category.</h1>
      </div>
      <GalleryGrid />
    </main>
  );
}
