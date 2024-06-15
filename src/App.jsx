import { useState } from "react";
import "./App.css";
import Comments from "./components/Comments";
import { useLocalStorage } from "usehooks-ts";
import CommentsMobile from "./components/Mobile/commentsMobile";
import CommentBox from "./components/commentBox";
import CommentBoxMobile from "./components/Mobile/commentBoxMobile";

function App() {
  const [counters, setCounters] = useLocalStorage("local storage", {
    amyrobson: 12,
    maxblagun: 5,
  });
  const [activeReplyIndex, setActiveReplyIndex] = useState(null);
  const [replyTo, setReplyTo] = useState("");
  const [data, setData] = useLocalStorage("local storage for comments", []);
  const [inputValue, setInputValue] = useState("");
  const [replyValue, setReplyValue] = useState("");
  const [editComment, setEditComment] = useState(null);
  const [replies, setReplies] = useState([]);
  return (
    <>
      <Comments
        counters={counters}
        setCounters={setCounters}
        activeReplyIndex={activeReplyIndex}
        setActiveReplyIndex={setActiveReplyIndex}
        replyTo={replyTo}
        setReplyTo={setReplyTo}
        replies={replies}
        setReplies={setReplies}
        replyValue={replyValue}
        setReplyValue={setReplyValue}
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
        data={data}
        setData={setData}
        inputValue={inputValue}
        setInputValue={setInputValue}
        editComment={editComment}
        setEditComment={setEditComment}
      />
      <CommentBoxMobile
        data={data}
        setData={setData}
        inputValue={inputValue}
        setInputValue={setInputValue}
        editComment={editComment}
        setEditComment={setEditComment}
      />
    </>
  );
}

export default App;
