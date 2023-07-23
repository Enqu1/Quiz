import React from "react";
import ListGroup from "./components/ListGroup";

function App() {
  return (
    <>
      <h1>What is the capital of France?</h1>
      <ListGroup answers={["Rome", "Italy", "Paris", "London"]} />
    </>
  );
}

export default App;
