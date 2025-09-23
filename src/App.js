import React, { useState, useEffect } from "react";

function App() {
  const players = ["Virat Kohli", "MS Dhoni", "Sachin Tendulkar", "Ben Stokes", "Steve Smith"];

  const facts = [
    "Sachin Tendulkar is the only player to have scored 100 international centuries.",
    "Muttiah Muralitharan holds the record for most Test wickets (800).",
    "Chris Gayle hit the first ball of a Test match for six.",
    "AB de Villiers scored the fastest ODI 50 in just 16 balls.",
    "MS Dhoni is the only captain to win all ICC trophies.",
  ];

  const [fact, setFact] = useState("");
  const [matches, setMatches] = useState([]);
  const [lastUpdated, setLastUpdated] = useState(null);

  // Mock matches (instead of API)
  useEffect(() => {
    const mockMatches = [
      {
        name: "India vs Australia",
        teams: ["India", "Australia"],
        status: "Live – India 245/3 (40.2)",
        series: "Border-Gavaskar Trophy",
      },
      {
        name: "England vs Pakistan",
        teams: ["England", "Pakistan"],
        status: "Scheduled – starts tomorrow",
        series: "World Cup 2025",
      },
    ];
    setMatches(mockMatches);
    setLastUpdated(new Date().toLocaleTimeString());
  }, []);

  const showRandomFact = () => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    setFact(facts[randomIndex]);
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "30px",
        fontFamily: "Poppins, Arial",
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <h1 style={{ fontSize: "42px", marginBottom: "10px" }}>🏏 Cricket Lovers Hub</h1>
      <p style={{ fontStyle: "italic", fontSize: "18px" }}>Where cricket passion meets fun facts!</p>

      {/* Animated Cricket Image */}
          
  <img
  src="https://media.giphy.com/media/26oqUoUe23WPHnlvOP/giphy.gif" // correct direct GIF
  alt="Bat & Ball"
  style={{ width: "600px", marginTop: "10px" }}
/>


      {/* Players */}
      <h2 style={{ marginTop: "30px" }}>🌟 Favourite Players</h2>
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "15px" }}>
        {players.map((player, i) => (
          <div
            key={i}
            style={{
              padding: "12px 20px",
              borderRadius: "12px",
              background: "#ffffff22",
              backdropFilter: "blur(8px)",
              fontSize: "18px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
            }}
          >
            {player}
          </div>
        ))}
      </div>

      {/* Random Fact */}
      <button
        onClick={showRandomFact}
        style={{
          padding: "12px 24px",
          fontSize: "18px",
          marginTop: "25px",
          cursor: "pointer",
          borderRadius: "10px",
          border: "none",
          background: "linear-gradient(90deg, #56ab2f, #a8e063)",
          color: "white",
          fontWeight: "bold",
          transition: "0.3s",
        }}
      >
        🎯 Show Random Fact
      </button>

      {fact && (
        <p style={{ marginTop: "20px", fontSize: "20px", fontStyle: "italic", color: "#ffe082" }}>
          {fact}
        </p>
      )}

      {/* Live Matches */}
      <h2 style={{ marginTop: "40px" }}>📡 Live Cricket Matches</h2>
      {matches.length === 0 ? (
        <p>No matches available right now.</p>
      ) : (
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "20px" }}>
          {matches.map((match, index) => (
            <div
              key={index}
              style={{
                width: "280px",
                padding: "20px",
                borderRadius: "15px",
                background: "#ffffff11",
                backdropFilter: "blur(6px)",
                boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
              }}
            >
              <h3 style={{ fontSize: "20px", marginBottom: "8px" }}>{match.name}</h3>
              <p>{match.teams[0]} vs {match.teams[1]}</p>
              <p><b>Status:</b> {match.status}</p>
              <p><b>Series:</b> {match.series}</p>
              {/* Small Animated Icon */}
              <img
                src="https://media.tenor.com/O9d0YztHkysAAAAi/cricket-bat-ball.gif"
                alt="Bat & Ball"
                style={{ width: "60px", marginTop: "10px" }}
              />
            </div>
          ))}
        </div>
      )}

      {lastUpdated && (
        <p style={{ marginTop: "15px", fontSize: "14px", color: "#ddd" }}>
          ⏱ Last updated at {lastUpdated}
        </p>
      )}
    </div>
  );
}

export default App;
