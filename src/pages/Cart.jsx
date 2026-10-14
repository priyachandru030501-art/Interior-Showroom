import { Link } from "react-router-dom";
import "../assets/style/Cart.css";

export default function Cart({
  cartItems,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
}) {
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <main className="cart-page">
      <section className="cart-heading" data-aos="fade-down">
        <p className="eyebrow">YOUR PERSONAL EDIT</p>
        <h1>Shopping <em>bag.</em></h1>
        <p>Good design is worth bringing home.</p>
      </section>

      {cartItems.length === 0 ? (
        <section className="cart-empty" data-aos="zoom-in">
          <p className="eyebrow">NOTHING HERE JUST YET</p>
          <h2>Your next favourite piece is waiting.</h2>
          <p>Explore the collection and find something you love.</p>
          <Link to="/collection" className="button-dark">
            Explore collection ↗
          </Link>
        </section>
      ) : (
        <section className="cart-layout">
          <div className="cart-items-list">
            <div className="cart-list-heading">
              <h2>Your selections</h2>
              <span>{cartItems.length} product types</span>
            </div>

            {cartItems.map((item, index) => (
              <article
                className="cart-item"
                key={item.id}
                data-aos="fade-right"
                data-aos-delay={index * 100}
              >
                <img src={item.image} alt={item.name} />

                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>₹{item.price.toLocaleString("en-IN")}</p>

                  <div className="quantity-control">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      aria-label="Decrease quantity"
                    >−</button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      aria-label="Increase quantity"
                    >+</button>
                  </div>

                  <button
                    className="remove-button"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>

                <strong className="item-total">
                  ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                </strong>
              </article>
            ))}
          </div>

          <aside className="order-summary" data-aos="fade-left">
            <p className="eyebrow">THE DETAILS</p>
            <h2>Order summary</h2>
            <div><span>Subtotal</span><span>₹{subtotal.toLocaleString("en-IN")}</span></div>
            <div><span>Delivery</span><span>Complimentary</span></div>
            <div><span>Taxes</span><span>Included</span></div>
            <hr />
            <div className="summary-total">
              <strong>Total</strong>
              <strong>₹{subtotal.toLocaleString("en-IN")}</strong>
            </div>
            <button
              className="button-dark checkout-button"
              onClick={() => window.alert("Demo checkout only. No payment was taken.")}
            >
              Continue to checkout ↗
            </button>
            <Link to="/collection" className="continue-shopping">
              Continue shopping
            </Link>
          </aside>
        </section>
      )}
    </main>
  );
}
