
export default function Hero() {
  return (
    <section className="bg-[url('/images/wedding.jpg')] bg-cover bg-center h-[600px] flex items-center justify-center text-white text-center">
      <div className="bg-black/50 p-10 rounded-xl">
        <h1 className="text-5xl font-bold">Katkar Event Management</h1>
        <p className="mt-4 text-lg">Making Your Special Moments Unforgettable</p>
        <button className="mt-6 bg-yellow-500 text-black px-6 py-3 rounded-lg">
          Book Your Event
        </button>
      </div>
    </section>
  );
}
