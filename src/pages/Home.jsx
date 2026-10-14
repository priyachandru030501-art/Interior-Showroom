import { Link } from "react-router-dom";
import "../assets/style/Home.css";

const categories = [
  {
    title: "Living Room",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=85",
    description: "Comfort meets character.",
  },
  {
    title: "Bedroom",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=85",
    description: "Your personal retreat.",
  },
  {
    title: "Dining Space",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=85",
    description: "Made for gathering.",
  },
];

export default function Home() {
  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="hero-content" data-aos="fade-up">
          <p className="eyebrow">INTERIOR DESIGN · FURNITURE · LIFESTYLE</p>
          <h1>Make space for <em>beautiful</em> living.</h1>
          <p className="hero-description">
            Discover thoughtful furniture and refined interiors that
            bring warmth, purpose, and personality to your home.
          </p>
          <Link to="/collection" className="button-dark">
            Explore the collection <span>↗</span>
          </Link>
        </div>
        <div className="hero-note" data-aos="fade-left" data-aos-delay="300">
          <span>01 / 03</span>
          <p>Quiet luxury.<br />Everyday comfort.</p>
        </div>
      </section>

      <section className="home-intro section-space">
        <div data-aos="fade-right">
          <p className="eyebrow">THE INTERIO APPROACH</p>
          <h2>Less noise.<br /><em>More meaning.</em></h2>
        </div>
        <div data-aos="fade-left">
          <p>
            We believe great interiors are not just about how a room looks.
            They are about how it makes you feel. Every detail should have
            a purpose, and every space should feel unmistakably yours.
          </p>
          <Link to="/about" className="text-link">Discover our story ↗</Link>
        </div>
      </section>

      <section className="category-section section-space">
        <div className="section-heading" data-aos="fade-up">
          <div>
            <p className="eyebrow">CURATED FOR YOUR HOME</p>
            <h2>Spaces to fall in love with.</h2>
          </div>
          <Link to="/collection" className="text-link">View all pieces ↗</Link>
        </div>

        <div className="category-grid">
          {categories.map((category, index) => (
            <Link
              to="/collection"
              className="category-card"
              key={category.title}
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <img src={category.image} alt={category.title} />
              <div className="category-overlay">
                <p>{category.description}</p>
                <h3>{category.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-cta" data-aos="zoom-in">
        <p className="eyebrow">YOUR HOME, YOUR STORY</p>
        <h2>A more thoughtful way<br />to live beautifully.</h2>
        <Link to="/contact" className="button-light">Let's talk ↗</Link>
      </section>
    </main>
  );
}