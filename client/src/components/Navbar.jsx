
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Katkar Events</h1>

      <div className="hidden md:flex gap-6">
        <a href="/">Home</a>
        <a href="/events">Events</a>
        <a href="/gallery">Gallery</a>
        <a href="/booking">Booking</a>
        <a href="/contact">Contact</a>
      </div>

      <button className="md:hidden" onClick={() => setOpen(!open)}>☰</button>

      {open && (
        <div className="absolute top-16 left-0 w-full bg-black flex flex-col items-center gap-4 py-6 md:hidden">
          <a href="/">Home</a>
          <a href="/events">Events</a>
          <a href="/gallery">Gallery</a>
          <a href="/booking">Booking</a>
          <a href="/contact">Contact</a>
        </div>
      )}
    </nav>
  );
}
