import React from "react";
import { useHistory } from "react-router-dom";

export default function Nav() {
  const history = useHistory();
  return (
    <div>
      <button onClick={() => history.push("/")}>Home</button>
      <button onClick={() => history.push("/page1")}>Page 1</button>
      <button onClick={() => history.push("/page2")}>Page2</button>
    </div>
  );
}
