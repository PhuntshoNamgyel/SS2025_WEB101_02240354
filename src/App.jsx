import React from "react";
import ProfileCard from "./components/ProfileCard";
import "./App.css";

function App() {
  return (
    <ProfileCard
      name="Phuntsho Namgyel"
      title="Software Engineering Student"
      avatar="/Sukuna.jpg"
      skills={["Python", "JavaScript", "Figma"]}
    />
  );
}

export default App;
