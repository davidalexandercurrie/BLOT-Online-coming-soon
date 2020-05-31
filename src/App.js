import React, { useState, Suspense } from "react";
import { useSpring, a } from "react-spring";
import Ticker from "react-ticker";
import PageVisibility from "react-page-visibility";

import "./App.css";
import logo from "./Images/logo.png";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const calc2 = (x2, y2) => [
  x2 - window.innerWidth / 2,
  y2 - window.innerHeight / 2,
];
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;
const trans2 = (x2, y2) => `translate3d(${x2 / 10}px,${y2 / 10}px,0)`;

export default function App() {
  const [pageIsVisible, setPageIsVisible] = useState(true);

  const handleVisibilityChange = (isVisible) => {
    setPageIsVisible(isVisible);
  };
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 5, tension: 750, friction: 20 },
  }));
  return (
    <Suspense>
      <PageVisibility onChange={handleVisibilityChange}>
        {pageIsVisible && (
          <>
            <div className="header-scroller">
              <Ticker>
                {() => (
                  <span className="scrolling-span">
                    COMING SOON&nbsp;&nbsp;&nbsp;
                  </span>
                )}
              </Ticker>
            </div>
            <div className="header-scroller2">
              <Ticker speed={2.5} direction="toRight">
                {() => (
                  <span className="scrolling-span">
                    COMING SOON&nbsp;&nbsp;
                  </span>
                )}
              </Ticker>
            </div>
            <div className="header-scroller3">
              <Ticker speed={2.7}>
                {() => (
                  <span className="scrolling-span">COMING SOON&nbsp;</span>
                )}
              </Ticker>
            </div>
            <div
              className="container"
              onMouseMove={({ clientX: x, clientY: y }) =>
                set({ xy: calc(x, y) })
              }
            >
              <a.img
                className="logo"
                src={logo}
                alt="BLOT-Online-Logo"
                style={{ transform: props.xy.interpolate(trans1) }}
              />
            </div>
            <div className="footer-scroller2">
              <Ticker>
                {() => (
                  <span className="scrolling-span">
                    COMING SOON&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;
                  </span>
                )}
              </Ticker>
            </div>
            <div className="footer-scroller3">
              <Ticker speed={2.1} direction="toRight">
                {() => (
                  <span className="scrolling-span">
                    COMING SOON&nbsp;&nbsp;
                  </span>
                )}
              </Ticker>
            </div>
            <div className="footer-scroller">
              <Ticker speed={2}>
                {() => (
                  <span className="scrolling-span">
                    COMING SOON&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
                  </span>
                )}
              </Ticker>
            </div>
          </>
        )}
      </PageVisibility>
    </Suspense>
  );
}
