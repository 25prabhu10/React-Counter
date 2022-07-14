import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button type="button" onClick={() => setCount((count) => count + 1)}>
        Counter
      </button>
    </div>
  );
}

export default App;
