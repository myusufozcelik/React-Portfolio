import { init } from "ityped";
import { useRef } from "react";
import { useEffect } from "react";
import "./intro.scss";

function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1000,
      // eslint-disable-next-line no-dupe-keys
      showCursor: true,
      strings: [" Java Developer", " JavaScript Developer", " Full Stack Developer"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi Everyone, I'm</h2>
          <h1>M. Yusuf Ozcelik</h1>
          <h3>
            and I'm a 
            <span ref= {textRef}> </span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}

export default Intro;
