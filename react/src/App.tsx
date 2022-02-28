import React, { useState } from "react";
import "./App.scss";

// import { BalButton } from "./lib";
// import { useBaloiseDesignSystem } from "./lib";
import { MyComponent } from "./src";

function App() {
  // useBaloiseDesignSystem();

  const [count, setCount] = useState(0);
  // const [color, setColor] = useState('info');

  return (
    <div className="bal-app">
      <main className="container">
        {/* <BalButton color={color as any}>{count}</BalButton> */}
        <h1 className="has-background-pink">Bubub</h1>
        <MyComponent>
          <MyComponent>{count}</MyComponent>
        </MyComponent>
        <button onClick={() => setCount(count + 1)}>Counter</button>
        {/* <button onClick={() => setColor('danger')}>Color</button> */}
      </main>
    </div>
  );
}

export default App;
