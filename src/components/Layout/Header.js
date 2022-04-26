import React from "react";

import mealsImage from "../../assets/meals.jpeg"
import classes from "./Header.module.css"
import HeaderCartButton from "./HeaderCartButton";

// 3. korak:
// Ovdje ćemo execute-at showCartHandler() preko "onShowCart" propsa.
// Kad god se <HeaderCartButton /> klikne, execute-at će se showCartHandler funkcija, definirana u App.js-u.
// Slijedeće što moramo napraviti jest handle-ati buttone u <HeaderCartButton/> preko propsa "onClick".

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className={classes ["main-image"]}>
        <img src={mealsImage} alt="Table food!"/>
      </div>
    </React.Fragment>
  );
};

export default Header;
