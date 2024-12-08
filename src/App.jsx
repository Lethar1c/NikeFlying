import React from "react";

import Header from "./components/header/header";
import Carousel from "./components/carousel/carousel";

import sneakers1 from "./img/sneakers/sneakers-1.png";
import sneakers2 from "./img/sneakers/sneakers-2.png";
import sneakers3 from "./img/sneakers/sneakers-3.png";

import "./App.scss";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Carousel
        sizes={[
          "8",
          "8,5",
          "9",
          "9,5",
          "10",
          "10,5",
          "11",
          "11,5",
          "12",
          "12,5",
        ]}
        colors={["#2BE3B8", "#E32C2C", "#2B5FE3"]}
        sneakers={[sneakers3, sneakers1, sneakers2]}
      />
    </div>
  );
}
