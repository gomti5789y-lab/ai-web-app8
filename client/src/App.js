import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const sendData = async () => {
    const res = await fetch("http://localhost:5000/api/ai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ prompt: input })
    });

    const data = await res.json();
    setResponse(data.reply);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>AI Web App 🤖</h1>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Kuch likho..."
      />

      <button onClick={sendData}>Send</button>

      <p>{response}</p>
    </div>
  );
}

export default App;
