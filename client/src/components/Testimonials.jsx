
export default function Testimonials() {
  const testimonials = [
    { name: "Rahul Sharma", review: "Amazing wedding arrangement!" },
    { name: "Priya Patel", review: "Best event planners in Pune." },
  ];

  return (
    <section className="py-16 text-center">
      <h2 className="text-3xl font-bold mb-10">Client Testimonials</h2>
      <div className="grid md:grid-cols-2 gap-8 px-10">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-white p-6 shadow rounded-xl">
            <p>"{t.review}"</p>
            <h4 className="mt-4 font-semibold">{t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
