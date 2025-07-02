import classes from "./home.module.css"
import {Link} from "react-router-dom"

const Banner = () => {
    return (
        <section className="relative h-[90vh] flex items-center justify-center bg-brand-primary text-white overflow-hidden">
  {/* Background Image Layer */}
  <div
    className="absolute inset-0 bg-cover bg-center opacity-60"
    style={{ backgroundImage: "url('/your-banner-image.jpg')" }}
  ></div>

  {/* Overlay Content */}
  <div className="relative z-10 text-center px-6 max-w-3xl">
    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
      Power Up Your Tech Life with <span className="text-brand-accent">Top Electronics</span>
    </h1>
    <p className="text-lg md:text-xl text-white/90 mb-6">
      Discover high-performance laptops, accessories, and gear — all handpicked for quality and value.
    </p>

    <div className="flex justify-center gap-4">
      <button className="bg-brand-accent hover:bg-emerald-600 text-white px-6 py-3 rounded-full font-semibold transition">
        Shop Deals
      </button>
    </div>
  </div>

  {/* Optional overlay tint */}
  <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
</section>

    )
}

export default Banner
