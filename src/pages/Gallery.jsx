import GalleryGrid from '../components/GalleryGrid';

export default function Gallery() {
  return (
    <main className="page-shell soft-panel">
      <div className="section-heading centered">
        <p className="eyebrow">Gallery</p>
        <h1>Browse recent looks by service category.</h1>
      </div>
      <GalleryGrid />
    </main>
  );
}
