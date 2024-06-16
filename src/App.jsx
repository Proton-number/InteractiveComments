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
  const [data, setData] = useLocalStorage("data", []);
  const [inputValue, setInputValue] = useState("");
  const [replyValue, setReplyValue] = useState("");
  const [editComment, setEditComment] = useState(null);
  const [replies, setReplies] = useLocalStorage(
    "local storage for replies",
    {}
  );
  const timeAgo = (timestamp) => {
    const now = new Date();
    const commentTime = new Date(timestamp);
    const timeDifference = now - commentTime;
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
      return `${days} ${days === 1 ? "day" : "days"} ago `;
    } else if (hours > 0) {
      return `${hours} ${hours === 1 ? "hr" : "hrs"} ago `;
    } else if (minutes > 0) {
      return `${minutes} ${minutes === 1 ? "min" : "mins"} ago `;
    } else {
      return `${seconds} ${seconds === 1 ? "second" : "seconds"} ago `;
    }
  };

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
        editComment={editComment}
        setEditComment={setEditComment}
        timeAgo={timeAgo}
      />
      <CommentsMobile
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
        editComment={editComment}
        setEditComment={setEditComment}
        timeAgo={timeAgo}
      />
      <CommentBox
        data={data}
        setData={setData}
        inputValue={inputValue}
        setInputValue={setInputValue}
        editComment={editComment}
        setEditComment={setEditComment}
        timeAgo={timeAgo}
      />
      <CommentBoxMobile
        data={data}
        setData={setData}
        inputValue={inputValue}
        setInputValue={setInputValue}
        editComment={editComment}
        setEditComment={setEditComment}
        timeAgo={timeAgo}
      />
    </>
  );
}

export default App;
