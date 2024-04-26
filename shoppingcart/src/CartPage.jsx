import React, { useContext } from "react";
import { CartContext } from "./CartProvider";

const CartPage = () => {
  const { cartItems, updateQuantity, removeFromCart } = useContext(CartContext);

  const calculateTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const calculateTotalAmount = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h1 className="text-center">Cart</h1>
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td className="d-flex align-items-center">
                    <button
                      className="btn btn-sm btn-outline-secondary me-2"
                      disabled={item.quantity === 1}
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    {item.quantity}
                    <button
                      className="btn btn-sm btn-outline-secondary ms-2"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="2">Total</td>
                <td style={{ fontSize: "1.2rem" }}>
                  {calculateTotalQuantity()}
                </td>
                <td style={{ color: "green", fontSize: "1.5rem" }}>
                  ${calculateTotalAmount().toFixed(2)}
                </td>
                <td>
                  {" "}
                  <button style={{ background: "lightgreen" }}>Buy Now</button>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
