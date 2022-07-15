import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
const [isDark, setIsDark] = useState(false);
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = isDark ? "App dark" : "App light"
  const appText = isDark ? "Light Mode" : "Dark Mode";
  function handleDark(){
    setIsDark((isDark) => !isDark);
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDark}>{appText}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
