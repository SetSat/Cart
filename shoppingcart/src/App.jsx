import React from "react";
import CartPage from "./CartPage";
import { CartProvider } from "./CartProvider";

function App() {
  return (
    <CartProvider>
      <div>
        <CartPage></CartPage>
      </div>
    </CartProvider>
  );
}

export default App;
