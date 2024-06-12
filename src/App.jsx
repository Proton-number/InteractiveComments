import { useState } from "react";
import "./App.css";
import Comments from "./components/Comments";
import CommentsMobile from "./components/commentsMobile";
import { useLocalStorage } from "usehooks-ts";

function App() {
  const [counters, setCounters] = useLocalStorage("local storage", {
    amyrobson: 12,
    maxblagun: 5,
  });
  return (
    <>
      <Comments counters={counters} setCounters={setCounters} />
      <CommentsMobile counters={counters} setCounters={setCounters} />
    </>
  );
}

export default App;
