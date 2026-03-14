
const events = [
  "Indian Weddings",
  "Corporate Events",
  "Birthday Parties",
  "Engagement Ceremonies",
  "Cultural Festivals",
  "College Events",
];

export default function EventCategories() {
  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-10">Event Categories</h2>
      <div className="grid md:grid-cols-3 gap-8 px-10">
        {events.map((event) => (
          <div key={event} className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold">{event}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
