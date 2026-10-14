import { Link } from "react-router-dom";
import "../assets/style/About.css";

export default function About() {
  return (
    <main className="about-page">
      <section className="about-banner" data-aos="fade-up">
        <p className="eyebrow">A LITTLE ABOUT US</p>
        <h1>We believe a home<br />should <em>feel like you.</em></h1>
      </section>

      <section className="about-story">
        <div className="story-image" data-aos="zoom-in">
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"
            alt="Warm, thoughtfully designed interior"
          />
        </div>

        <div className="story-content" data-aos="fade-left">
          <p className="eyebrow">OUR STORY</p>
          <h2>Good design lives in the details.</h2>
          <p>
            INTERIO was created around a simple belief: your surroundings
            shape how you feel every day. We curate furniture and interior
            inspiration that balance clean design, comfort, and lasting style.
          </p>
          <p>
            From a quiet reading corner to a welcoming living room, we
            believe every space deserves care, intention, and personality.
          </p>
          <Link to="/collection" className="text-link">Explore our collection ↗</Link>
        </div>
      </section>

      <section className="about-values">
        <div className="values-heading" data-aos="fade-up">
          <p className="eyebrow">WHAT GUIDES US</p>
          <h2>Our values, in every detail.</h2>
        </div>

        <div className="values-grid">
          <article data-aos="fade-up" data-aos-delay="100">
            <span className="value-number">01</span>
            <h3>Thoughtful design</h3>
            <p>Every piece should be beautiful, useful, and considered.</p>
          </article>

          <article data-aos="fade-up" data-aos-delay="250">
            <span className="value-number">02</span>
            <h3>Everyday comfort</h3>
            <p>Great spaces make ordinary moments feel a little more special.</p>
          </article>

          <article data-aos="fade-up" data-aos-delay="400">
            <span className="value-number">03</span>
            <h3>Timeless character</h3>
            <p>We favour enduring materials and styles over passing trends.</p>
          </article>
        </div>
      </section>

      <section className="about-cta" data-aos="zoom-in">
        <p className="eyebrow">LET'S CREATE SOMETHING BEAUTIFUL</p>
        <h2>Your space has a story.<br />Let's tell it together.</h2>
        <Link to="/contact" className="button-light">Get in touch ↗</Link>
      </section>
    </main>
  );
}