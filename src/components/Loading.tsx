import { useEffect, useState } from "react";
import "./styles/Loading.css";
import { useLoading } from "../context/LoadingProvider";
import Marquee from "react-fast-marquee";

const Loading = ({ percent }: { percent: number }) => {
  const { setIsLoading } = useLoading();
  const [loaded, setLoaded] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (percent >= 100 && !loaded) {
      setLoaded(true);
      // Short delay then auto-dismiss the loading screen
      setTimeout(() => {
        setClicked(true);
        import("./utils/initialFX").then((module) => {
          module.initialFX();
          setTimeout(() => setIsLoading(false), 900);
        });
      }, 600);
    }
  }, [percent]);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  }

  return (
    <>
      <div className="loading-header">
        <span className="loader-title">UV</span>
        <div className={`loaderGame ${clicked ? "loader-out" : ""}`}>
          <div className="loaderGame-container">
            <div className="loaderGame-in">
              {[...Array(27)].map((_, i) => (
                <div className="loaderGame-line" key={i}></div>
              ))}
            </div>
            <div className="loaderGame-ball"></div>
          </div>
        </div>
      </div>

      <div className="loading-screen">
        <div className="loading-marquee">
          <Marquee>
            <span> Data Science</span>
            <span> Machine Learning</span>
            <span> Generative AI</span>
            <span> Data Analytics</span>
          </Marquee>
        </div>
        <div
          className={`loading-wrap ${clicked ? "loading-clicked" : ""}`}
          onMouseMove={handleMouseMove}
        >
          <div className="loading-hover"></div>
          <div className={`loading-button ${loaded ? "loading-complete" : ""}`}>
            {!loaded ? (
              <div className="loading-container">
                <div className="loading-content">
                  <div className="loading-content-in">
                    Loading <span>{percent}%</span>
                  </div>
                </div>
                <div className="loading-box"></div>
              </div>
            ) : (
              <div className="loading-content2">
                <span>Welcome</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;

/* ── Progress helper (no longer tied to 3D model) ── */
export const setProgress = (setLoading: (v: number) => void) => {
  let percent = 0;

  // Fast ramp-up since there's no heavy model
  const interval = setInterval(() => {
    percent += Math.round(Math.random() * 12 + 5);
    if (percent >= 100) {
      percent = 100;
      setLoading(100);
      clearInterval(interval);
    } else {
      setLoading(percent);
    }
  }, 80);

  function clear() {
    clearInterval(interval);
    setLoading(100);
  }

  function loaded() {
    return new Promise<number>((resolve) => {
      clearInterval(interval);
      let p = percent;
      const fill = setInterval(() => {
        if (p < 100) { p++; setLoading(p); }
        else { resolve(p); clearInterval(fill); }
      }, 2);
    });
  }

  return { loaded, percent, clear };
};
