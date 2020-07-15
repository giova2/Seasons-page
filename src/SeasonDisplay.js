import React from "react";
import { SummerText, WinterText } from "./captions";

const seasonConfig = {
  Summer: {
    text: SummerText(),
    iconName: "sun",
  },
  Winter: {
    text: WinterText(),
    iconName: "snowflake",
  },
};

const getSeason = (lat, month) => {
  // entonces estamos
  if (month > 2 && month < 9) {
    return lat > 0 ? "Summer" : "Winter";
  } else {
    return lat <= 0 ? "Summer" : "Winter";
  }
};
const snow = (iconName) => {
  const fases = ["a", "b", "c", "d", "f", "g", "h", "i", "j"];
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return fases.map((fase) => {
    return arr.map((num) => (
      <i
        key={num}
        className={`icon-random-${fase} snow${num} ${
          Math.random() > 0.6 ? "small" : "tiny"
        } ${iconName} icon`}
      />
    ));
  });
};
const sunLight = () => {
  const rays = [1, 2, 3, 4, 5, 6];
  return (
    <div className="orbit">
      <div className="circle sun-first-layer">
        <div className="circle sun-second-layer">
          <div className="circle the-sun">
            {rays.map((elem) => {
              return <div key={elem} className={`ray-${elem}`}></div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
const SeasonDispaly = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];
  return (
    <div className={`season-display ${season}`}>
      {season === "Summer" ? sunLight() : snow(iconName)}
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDispaly;
