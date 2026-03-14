
export default function Gallery() {
  const images = [
    "/images/event1.jpg",
    "/images/event2.jpg",
    "/images/event3.jpg",
    "/images/event4.jpg",
  ];

  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-10">Event Gallery</h2>
      <div className="grid md:grid-cols-4 gap-6 px-10">
        {images.map((img) => (
          <img key={img} src={img} className="rounded-lg shadow" />
        ))}
      </div>
    </section>
  );
}
