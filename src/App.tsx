import React, { useState } from "react";
import "./App.css";
import Articles from "./components/Articles";
import User from "./components/User";
import { Theme } from "./types/types";

function App() {
  const [themeState, setThemeState] = useState<Theme>("light");
  const toggleTheme = () => {
    if (themeState === "light") setThemeState("dark");
    if (themeState === "dark") setThemeState("light");
  };
  const classes = `App ${themeState}`;

  return (
    <div className={classes}>
      <header>
        <h1>Typescript Skeletons</h1>
        <button onClick={toggleTheme}>{themeState} </button>
      </header>
      <div className="content">
        <Articles theme={themeState} />
        <User theme={themeState} />
      </div>
    </div>
  );
}

export default App;
