import React, { useState } from "react";

function App() {
  const players = [
    "Virat Kohli",
    "MS Dhoni",
    "Sachin Tendulkar",
    "Ben Stokes",
    "Steve Smith",
  ];

  const facts = [
    "Sachin Tendulkar is the only player to have scored 100 international centuries.",
    "Muttiah Muralitharan holds the record for most Test wickets (800).",
    "Chris Gayle hit the first ball of a Test match for six.",
    "AB de Villiers scored the fastest ODI 50 in just 16 balls.",
    "MS Dhoni is the only captain to win all ICC trophies.",
  ];

  const [fact, setFact] = useState("");

  const showRandomFact = () => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    setFact(facts[randomIndex]);
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "30px",
        fontFamily: "Arial",
        background: "#c3b3b1ff",
        minHeight: "100vh",
      }}
    >
      <h1>🏏 Cricket Lovers Hub</h1>

      <h2>Favourite Players</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {players.map((player, i) => (
          <li key={i} style={{ margin: "8px 0", fontSize: "18px" }}>
            {player}
          </li>
        ))}
      </ul>

      <button
        onClick={showRandomFact}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          marginTop: "20px",
          cursor: "pointer",
          borderRadius: "8px",
          border: "none",
          background: "green",
          color: "white",
        }}
      >
        Show Random Fact
      </button>

      {fact && (
        <p style={{ marginTop: "20px", fontSize: "18px", fontStyle: "italic" }}>
          {fact}
        </p>
      )}
    </div>
  );
}

export default App;
