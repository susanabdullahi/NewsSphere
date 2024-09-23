import React, { useState } from "react"; 
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";

export default function App() {
  const [category, setCategory] = useState("general");
  
  return (
    <div>
      <Navbar setCategory={setCategory} />
      <Home category={category} />
    </div>
  );
}
