import React, { useState } from "react";
import "./TweetBox.css";
import { Button, Avatar } from "@material-ui/core";
import db from "./firebase";
function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImg, setTweetImg] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "Peter",
      username: "Tobey",
      verified: true,
      text: tweetMessage,
      image: tweetImg,
      avatar:
        "https://img1.ak.crunchyroll.com/i/spire1/aa06851038c16a6eb3b069a4b269a1d91401716445_full.jpg",
    });

    setTweetMessage("");
    setTweetImg("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar
            alt=""
            src="https://img1.ak.crunchyroll.com/i/spire1/aa06851038c16a6eb3b069a4b269a1d91401716445_full.jpg"
          />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="what's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImg}
          onChange={(e) => setTweetImg(e.target.value)}
          className="tweetBox__inputimage"
          placeholder="enter img url"
          type="text"
        />
        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
