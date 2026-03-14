import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <motion.h1
          initial={{ opacity:0,y:50 }}
          animate={{ opacity:1,y:0 }}
          transition={{ duration:1 }}
        >
          Katkar Events
        </motion.h1>

        <p>Creating unforgettable experiences for every occasion</p>

        <div className="hero-buttons">
          <button>Book Your Event</button>
          <button className="outline">View Portfolio</button>
        </div>
      </div>
    </section>
  )
}
