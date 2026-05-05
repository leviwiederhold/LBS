const careItems = [
  ['Facials', 'spa', ['Avoid sun exposure 48 hours prior.', 'Discontinue Retin-A or AHAs/BHAs 5 days before.', 'Avoid heavy makeup and heat for 24 hours after.']],
  ['Waxing', 'water_drop', ['Hair should be at least 1/4 inch long.', 'Gently exfoliate 24 hours before your visit.', 'Avoid hot baths, swimming, and exercise for 24 hours after.']],
  ['Permanent Makeup', 'face', ['No caffeine, alcohol, or ibuprofen 24 hours before.', 'Avoid blood thinners and fish oil for one week prior.', 'Keep the area dry and clean while healing.']],
  ['Formal & Wedding', 'brush', ['Exfoliate and hydrate your skin the night before.', 'Wear a button-down shirt to protect finished makeup.', 'Have inspiration photos ready for your artist.']],
];

export default function PrePostCare() {
  return (
    <main className="page-shell">
      <div className="section-heading centered">
        <p className="eyebrow">Pre/Post Care</p>
        <h1>Care Guide</h1>
        <p><em>Proper preparation and aftercare ensure the best possible results and lasting radiance.</em></p>
      </div>
      <div className="care-grid">
        {careItems.map(([title, icon, items]) => (
          <article className="care-card" key={title}>
            <div className="care-title"><span>{icon}</span><h2>{title}</h2></div>
            <p className="eyebrow">Pre/Post Care</p>
            <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
        ))}
      </div>
      <section className="page-section soft-panel centered">
        <h3><em>"Beauty is an experience, but care is a ritual."</em></h3>
        <p>Care instructions may vary by service. Follow Lilly's personalized instructions after your appointment.</p>
      </section>
    </main>
  );
}
