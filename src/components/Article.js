import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  // Bonus: Minutes to read feature
  let emojis = "";
  let emojiCount;
  
  if (minutes < 30) {
    emojiCount = Math.ceil(minutes / 5);
    emojis = "☕️".repeat(emojiCount);
  } else {
    emojiCount = Math.ceil(minutes / 10);
    emojis = "🍱".repeat(emojiCount);
  }
  
  return (
    <article>
      <h3>{title}</h3>
      <small>
        {date} • {emojis} {minutes} min read
      </small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;