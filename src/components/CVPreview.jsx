export const CVPreview = ({ generalInfo, education, experience }) => {
  <div className="space-y-6">
    <section>
      <h2 className="text-2xl font-bold mb-2">{generalInfo.name}</h2>
      <p>{generalInfo.email}</p>
      <p>{generalInfo.phone}</p>
    </section>
  </div>;
};
