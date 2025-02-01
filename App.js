import { useState } from "react";
import { motion } from "framer-motion";

const activities = [
  "Build a pillow fort!",
  "Draw your favorite animal.",
  "Make up a dance routine!",
  "Create a new superhero.",
  "Write a short story.",
  "Learn a new magic trick!",
  "Try a scavenger hunt.",
  "Make up a secret handshake.",
  "Play hide and seek.",
  "Create an obstacle course."
];

export default function App() {
  const [activity, setActivity] = useState("Tap the button for a fun idea!");

  const getNewActivity = () => {
    const randomIndex = Math.floor(Math.random() * activities.length);
    setActivity(activities[randomIndex]);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh", backgroundColor: "#cfe8fc" }}>
      <motion.h1 
        style={{ fontSize: "24px", fontWeight: "bold", color: "#0077cc", marginBottom: "20px" }} 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        I'm Bored!
      </motion.h1>
      
      <div style={{ width: "300px", padding: "20px", backgroundColor: "#ffffff", borderRadius: "15px", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", textAlign: "center" }}>
        <motion.p 
          style={{ fontSize: "18px", fontWeight: "medium", marginBottom: "15px" }}
          key={activity} 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {activity}
        </motion.p>
        
        <button 
          onClick={getNewActivity} 
          style={{ backgroundColor: "#0077cc", color: "white", fontSize: "16px", fontWeight: "bold", padding: "10px 15px", borderRadius: "8px", cursor: "pointer", border: "none" }}
        >
          Give me an idea!
        </button>
      </div>
    </div>
  );
}
