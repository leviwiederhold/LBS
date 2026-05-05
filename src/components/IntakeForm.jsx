export default function IntakeForm({ value, onChange, serviceName }) {
  function update(key, nextValue) {
    onChange({ ...value, [key]: nextValue });
  }

  return (
    <div className="form-grid">
      <label>
        Skin concerns or service goals
        <textarea value={value.goals || ''} onChange={(event) => update('goals', event.target.value)} placeholder={`What should Lilly know before your ${serviceName || 'service'}?`} />
      </label>
      <label>
        Allergies or sensitivities
        <textarea value={value.allergies || ''} onChange={(event) => update('allergies', event.target.value)} placeholder="Products, latex, adhesives, medications, or skin reactions." />
      </label>
      <label>
        Recent treatments
        <textarea value={value.recentTreatments || ''} onChange={(event) => update('recentTreatments', event.target.value)} placeholder="Peels, injectables, retinoids, waxing, permanent makeup, or procedures." />
      </label>
      <label className="checkbox-row">
        <input type="checkbox" checked={Boolean(value.consent)} onChange={(event) => update('consent', event.target.checked)} />
        I confirm this information is accurate and can be reused or updated for future bookings.
      </label>
    </div>
  );
}
