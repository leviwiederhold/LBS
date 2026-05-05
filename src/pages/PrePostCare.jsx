const careItems = [
  ['Before facials', 'Avoid exfoliants, retinoids, and direct sun for 48 hours before your appointment.'],
  ['Before permanent makeup', 'Avoid alcohol, caffeine, and blood-thinning medications unless prescribed.'],
  ['After waxing', 'Skip hot tubs, heavy sweat, and active exfoliation for 24 hours.'],
  ['After makeup services', 'Arrive with clean skin and share inspiration photos in your intake notes.'],
];

export default function PrePostCare() {
  return (
    <main className="page-shell">
      <div className="section-heading">
        <p className="eyebrow">Pre/Post Care</p>
        <h1>Simple prep makes every service smoother.</h1>
      </div>
      <div className="card-grid two">
        {careItems.map(([title, body]) => (
          <article className="card" key={title}>
            <h3>{title}</h3>
            <p>{body}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
