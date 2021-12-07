import "./styles.css";
import React, { useState } from "react";
import iron from "./assets/iron.jpg";
import spiderweb from "./assets/spiderweb.jpg";
import pink from "./assets/pink.jpg";

const images = [iron, spiderweb, pink];

const Loading = ({ calculatedWidth }) => (
  <aside>
    <div className="loading-bar">
      <label htmlFor="images-loaded">Loading all your images...</label>
      <progress id="images-loaded" max="100" value={calculatedWidth}></progress>
    </div>
  </aside>
);

const App = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [numLoaded, setNumLoaded] = useState(0);

  const handleClik = () => {
    const length = images.length - 1;

    setCurrentImage((currentImage) =>
      currentImage < length ? currentImage + 1 : 0
    );
  };

  const handleImageLoad = () => {
    setNumLoaded((numLoaded) => numLoaded + 1);
  };

  return (
    <section>
      <header>
        <h1>Title</h1>
        <h2>
          Start editing to see some magic <br /> happen!
        </h2>
      </header>

      <figure>
        {numLoaded < images.length && (
          <Loading calculatedWidth={(numLoaded / images.length) * 100} />
        )}
        <figcaption>
          {currentImage + 1} / {images.length}
        </figcaption>
        {images.map((imageURL, index) => (
          <img
            alt=""
            key={imageURL}
            src={imageURL}
            onClick={handleClik}
            onLoad={handleImageLoad}
            // style={{ opacity: currentImage === index ? 1 : 0 }}
            className={currentImage === index ? "display" : "hide"}
          />
        ))}
      </figure>
    </section>
  );
};

export default App;
