import React, { useState, useEffect } from "react";
import img1 from "./assets/Ben.png";
import img2 from "./assets/dhoni.png";
import img3 from "./assets/kohli.png";
import img4 from "./assets/sachin.png";
import img5 from "./assets/steve.png";


import { Card, CardContent, CardMedia, Typography, CardActions, Button } from '@mui/material';
// ✅ Local mock data
const players = ["Virat Kohli", "MS Dhoni", "Sachin Tendulkar", "Ben Stokes", "Steve Smith"];

const images = [img3, img2, img4, img1, img5];

const facts = [
  "Sachin Tendulkar is the only player to have scored 100 international centuries.",
  "Muttiah Muralitharan holds the record for most Test wickets (800).",
  "Chris Gayle hit the first ball of a Test match for six.",
  "AB de Villiers scored the fastest ODI 50 in just 16 balls.",
  "MS Dhoni is the only captain to win all ICC trophies.",
];

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

const newsItems = [
  "India announces squad for Asia Cup 2025.",
  "Virat Kohli scores his 75th ODI century.",
  "Pakistan wins thrilling T20 against England.",
  "MS Dhoni appointed brand ambassador for new cricket league.",
  "Australia vs India 3rd Test postponed due to rain.",
  "Women's cricket World Cup 2025 schedule released.",
];

function App() {
  const [fact, setFact] = useState("");
  const [matches, setMatches] = useState([]);
  const [lastUpdated, setLastUpdated] = useState(null);

  const showRandomFact = () => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    setFact(facts[randomIndex]);
  };

  useEffect(() => {
    setMatches(mockMatches);
    setLastUpdated(new Date().toLocaleTimeString());
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "30px",
        fontFamily: "Arial, sans-serif",
        minHeight: "100vh",
        color: "white",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* 🔥 Animated Background */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(-45deg, #270f25ff, #203a43, #4e585cff, #1c1c1c)",
          backgroundSize: "400% 400%",
          backgroundImage: "url('https://www.transparenttextures.com/patterns/asfalt-light.png'), linear-gradient(-45deg, #270f25ff, #203a43, #4e585cff, #1c1c1c)",
          animation: "gradientBG 15s ease infinite",
          zIndex: -1,
        }}
      ></div>

      {/* Main content */}
      <div style={{ flex: 3, paddingRight: "20px" }}>
        <h1 style={{ fontSize: "36px", marginBottom: "10px" , textAlign: "center" }}>
          🏏 Cricket Lovers Hub
        </h1>
        <p style={{ fontStyle: "italic", fontSize: "16px", color: "#ccc", textAlign: "center" }}>
          Where cricket passion meets fun facts!
        </p>

        {/* AI Animation */}
        <img
          src="https://media.giphy.com/media/26oqUoUe23WPHnlvOP/giphy.gif"
          alt="Cricket Animation"
          style={{ width: "600px", margin: "20px auto", borderRadius: "20px",alignItems: "center", display: "block" }}
        />

        {/* Players */}
        <h2 style={{ marginTop: "20px" }}>🌟 Favourite Players</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {players.map((player, i) => (
            <div
              key={i}
              style={{
                padding: "10px 15px",
                borderRadius: "8px",
                background: "#ffffff22",
                backdropFilter: "blur(6px)",
              }}
            >
               <Card sx={{ maxWidth: 345 }}>
       <CardMedia
                component="img"
                height="140"
                image={images[i % images.length]} // cycles through 5 images
                alt={player}
                backgroundColor="#4e0505ff"
              />
      <CardContent style={{ backgroundColor: "orange" }}  >
        <Typography gutterBottom variant="h5" component="div">
          {player}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This is a brief description about {player}. A legendary cricketer known for exceptional skills and sportsmanship.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
              {player}
              <a href={`https://www.google.com/search?q=${encodeURIComponent(player)}`} target="_blank" rel="noopener noreferrer" style={{ marginLeft: "8px", textDecoration: "none", color: "#00f" }}>🔍</a>
            </div>
          ))}
        </div>

        {/* Random Fact */}
        <button
          onClick={showRandomFact}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            marginTop: "20px",
            cursor: "pointer",
            borderRadius: "8px",
            border: "none",
            background: "#56ab2f",
            color: "white",
          }}
        >
          🎯 Show Random Fact
        </button>
        {fact && (
          <p style={{ marginTop: "15px", fontStyle: "italic" }}>{fact}</p>
        )}

        {/* Live Matches */}
        <h2 style={{ marginTop: "30px" }}>📡 Live Matches</h2>
        {matches.map((match, i) => (
          <div
            key={i}
            style={{
              margin: "12px 0",
              padding: "12px",
              borderRadius: "10px",
              background: "#ffffff11",
              backdropFilter: "blur(6px)",
            }}
          >
            <h3>{match.name}</h3>
            <p>
              {match.teams[0]} vs {match.teams[1]}
            </p>
            <p>Status: {match.status}</p>
            <p>Series: {match.series}</p>
            {/* Small AI Bat-Ball Animation */}
            <img
              src="https://media.giphy.com/media/3o7qE1YN7aBOFPRw8E/giphy.gif"
              alt="Bat & Ball"
              style={{ width: "60px", marginTop: "10px" }}
            />
          </div>
        ))}

        {lastUpdated && (
          <p style={{ marginTop: "10px", fontSize: "12px", color: "#ccc" }}>
            ⏱ Last updated at {lastUpdated}
          </p>
        )}
      </div>

      {/* Right Side: Cricket News Banner */}
      <div style={{ flex: 1, marginLeft: "20px" }}>
        <h2 style={{ borderBottom: "2px solid #fff", paddingBottom: "5px" }}>
          📰 Cricket News
        </h2>
        <div
          style={{
            marginTop: "15px",
            height: "400px",
            overflow: "hidden",
            borderRadius: "8px",
            background: "#ffffff11",
            padding: "10px",
            backdropFilter: "blur(6px)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              animation: "scrollNews 20s linear infinite",
            }}
          >
            {newsItems.map((news, i) => (
              <p
                key={i}
                style={{
                  padding: "8px 0",
                  borderBottom: "1px solid #ffffff33",
                }}
              >
                {news}
              </p>
            ))}
          </div>
        </div>
      </div>

     {/* Example Card for a player */}
   

      {/* Animations */}
      <style>
        {`
          @keyframes gradientBG {
            0% {background-position: 0% 50%;}
            50% {background-position: 100% 50%;}
            100% {background-position: 0% 50%;}
          }

          @keyframes scrollNews {
            0% { transform: translateY(0); }
            100% { transform: translateY(-100%); }
          }
        `}
      </style>
    </div>
  );
}

export default App;
