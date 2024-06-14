import { useState } from "react";
import "./App.css";
import Comments from "./components/Comments";
import { useLocalStorage } from "usehooks-ts";
import CommentsMobile from "./components/Mobile/commentsMobile";
import CommentBox from "./components/commentBox";

function App() {
  const [counters, setCounters] = useLocalStorage("local storage", {
    amyrobson: 12,
    maxblagun: 5,
  });
  const [activeReplyIndex, setActiveReplyIndex] = useState(null);
  const [replyTo, setReplyTo] = useState("");
  const [juliuLikes, setJulioLikes] = useState(0);
  const [data, setData] = useLocalStorage("local storage for comments", []);
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <Comments
        counters={counters}
        setCounters={setCounters}
        activeReplyIndex={activeReplyIndex}
        setActiveReplyIndex={setActiveReplyIndex}
        replyTo={replyTo}
        setReplyTo={setReplyTo}
      />
      <CommentsMobile
        counters={counters}
        setCounters={setCounters}
        activeReplyIndex={activeReplyIndex}
        setActiveReplyIndex={setActiveReplyIndex}
        replyTo={replyTo}
        setReplyTo={setReplyTo}
      />
      <CommentBox
        juliuLikes={juliuLikes}
        setJulioLikes={setJulioLikes}
        data={data}
        setData={setData}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
    </>
  );
}

export default App;
