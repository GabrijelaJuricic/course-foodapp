import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./components/store/CartProvider";

// 1. korak:
// U <App/> se rendera <Card/> komp. zato u App.js-u koristim useState() za prikazivanje/neprikazivanje <Cart-a />. 
// U funkcijama showCartHandler() i hideCartHandler() koristim updating func. setCartIsShown() i tu upravljam "state-ovima".//
// S obzirom da želim renderat <Cart /> conditionally, koristim "{dynamic expression}", trenutni state value ("cartIsShown") i "&&" operator.

// 2. korak:
// showCartHandler() trebamo pozvati kad se klikne button koji je u <Handler/> komponenti. Uz <Handler /> u App.js-u dodajemo "pointer" preko propsa "onShowCart" na showCartHandler (bez () jer je ne želimo execute-at ovdje nego u Handler.js komponenti)!

// 5. korak:
// Da bismo zatvorili <Cart/>, trebamo pozvati hideCartHandler() u <Cart/> komponenti i to ćemo napraviti preko propsa "onClose". U <Cart/> se nalazi "Close" button i tamo ćemo execute-ati funkciju hideCartHandler() datu preko propsa. 

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
