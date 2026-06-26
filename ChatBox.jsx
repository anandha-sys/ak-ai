import { useState } from "react";

function ChatBox() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = () => {
    if (!message) return;

    setMessages([
      ...messages,
      { sender: "user", text: message }
    ]);

    setMessage("");
  };

  return (
    <div>
      {messages.map((m, i) => (
        <p key={i}>
          <b>{m.sender}:</b> {m.text}
        </p>
      ))}

      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ask AK AI..."
      />

      <button onClick={sendMessage}>
        Send
      </button>
    </div>
  );
}

export default ChatBox;
