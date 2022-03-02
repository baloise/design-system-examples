import React, { useState } from "react";
import "./App.scss";
import {
  useBaloiseDesignSystem,
  BalButton,
  BalApp,
} from "@baloise/design-system-components-react";

function App() {
  useBaloiseDesignSystem();
  const [count, setCount] = useState(0);
  return (
    <BalApp>
      <main className="container">
        <BalButton>{count}</BalButton>
        <button onClick={() => setCount(count + 1)}>Counter</button>
      </main>
    </BalApp>
  );
}

export default App;
