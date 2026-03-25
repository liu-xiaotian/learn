import { useState } from "react";
function Count() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* 声明式 */}
      <div>{count}</div>
      <button onClick={() => setCount((count) => count++)}>加</button>
    </div>
  );
}

export default Count;
