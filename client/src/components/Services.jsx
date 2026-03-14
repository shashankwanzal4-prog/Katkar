
export default function Services() {
  const services = [
    "Venue Decoration",
    "Photography",
    "Catering",
    "Entertainment",
    "Lighting & Sound",
    "Guest Management",
  ];

  return (
    <section className="py-16 text-center">
      <h2 className="text-3xl font-bold mb-10">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-8 px-10">
        {services.map((service) => (
          <div key={service} className="border p-6 rounded-lg">
            {service}
          </div>
        ))}
      </div>
    </section>
  );
}
