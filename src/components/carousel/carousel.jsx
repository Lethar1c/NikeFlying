import React from "react";
import "./carousel.scss";
import nikeBg from "../../img/logo/nikeBg.svg";

export default function Carousel({ sizes, colors, sneakers }) {
  const [activeColor, setActiveColor] = React.useState(1);
  const [activeImage, setActiveImage] = React.useState(1);
  const [animationStatus, setAnimationStatus] = React.useState(0);
  const [buttonsAvailable, setButtonsAvailable] = React.useState(true)
  // 0 - no animation
  // 1 - slide to right
  // 2 - slide from left

  const onButtonClick = (index) => {
    setButtonsAvailable(false);
    setActiveColor(index);
    document.body.style.backgroundColor = colors[index];
    setAnimationStatus(1);
    document.querySelector(".sneakers-image").style.right = "70vw";
    document.querySelector(".sneakers-image").style.removeProperty("left");
    setTimeout(() => {
      setActiveImage(index);
      setAnimationStatus(2);
      setTimeout(() => {
        document.querySelector(".sneakers-image").style.left = "0%";
        document.querySelector(".sneakers-image").style.removeProperty("right");
        setAnimationStatus(0);
        setButtonsAvailable(true);
      }, 600)
    }, 600);
  }

  return (
    <div className="carousel">
      <div className="container">
        <div className="main">
          <h2>Jordan I red</h2>
          <div className="info">
            <p>Release date</p>
            <p>2016-10-16</p>
            <p>color way</p>
            <p>SAL/STARFISH-BLACK</p>
          </div>
          <div className="sizes">
            <h3>Select size</h3>
            <ul>
              {sizes.map((size) => (
                <button key={size}>{size}</button>
              ))}
            </ul>
          </div>
          <div className="colors">
            <h3>Select color</h3>
            <ul>
              {colors.map((color, index) => (
                <button
                  key={color}
                  style={{ backgroundColor: color }}
                  className={index === activeColor ? "active" : ""}
                  onClick={() => onButtonClick(index)}
                  disabled={!buttonsAvailable}
                ></button>
              ))}
            </ul>
          </div>
        </div>
        <div className="sneakers">
          <div className="highlight-circle"></div>
          <img className="image-bg" src={nikeBg} alt="NIKE" />
          <img className="sneakers-image" src={sneakers[activeImage]} alt="sneakers" animationstatus={animationStatus}/>
        </div>
        <div className="control"></div>
      </div>
    </div>
  );
}
