import "../assets/style/Collection.css";

const products = [
  { id: 1, name: "The Cloud Sofa", category: "Living", price: 42999, image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=85" },
  { id: 2, name: "Form Lounge Chair", category: "Seating", price: 18999, image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=900&q=85" },
  { id: 3, name: "Oak Coffee Table", category: "Tables", price: 12499, image: "https://images.unsplash.com/photo-1499933374294-4584851497cc?auto=format&fit=crop&w=900&q=85" },
  { id: 4, name: "Soft Light Lamp", category: "Lighting", price: 4999, image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=85" },
  { id: 5, name: "Everyday Dining Chair", category: "Dining", price: 7499, image: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=900&q=85" },
  { id: 6, name: "The Calm Bedroom", category: "Bedroom", price: 35999, image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=85" },
];

export default function Collection({ addToCart }) {
  return (
    <main className="collection-page">
      <section className="collection-banner" data-aos="fade-down">
        <p className="eyebrow">THE INTERIO EDIT</p>
        <h1>Objects with <em>intention.</em></h1>
        <p>Considered pieces for a home that feels like you.</p>
      </section>

      <section className="collection-content">
        <div className="collection-toolbar" data-aos="fade-up">
          <p>Our collection <span>— {products.length} pieces</span></p>
          <p>Designed for everyday living</p>
        </div>

        <div className="product-grid">
          {products.map((product, index) => (
            <article
              className="product-card"
              key={product.id}
              data-aos={index % 2 === 0 ? "fade-up" : "zoom-in"}
              data-aos-delay={(index % 3) * 100}
            >
              <div className="product-image-wrap">
                <img src={product.image} alt={product.name} />
                <span className="product-category">{product.category}</span>
              </div>
              <div className="product-info">
                <div>
                  <h3>{product.name}</h3>
                  <p>₹{product.price.toLocaleString("en-IN")}</p>
                </div>
                <button
                  className="add-button"
                  onClick={() => addToCart(product)}
                  aria-label={`Add ${product.name} to cart`}
                >
                  +
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}