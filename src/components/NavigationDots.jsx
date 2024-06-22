import React from "react";

//dots appear on the right side of the website
//active prop tells which section in the website is currently active
const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {["home", "work", "skills","blog", "contact"].map(
        (item, index) => (
          <a
            href={`#${item}`}
            key={index}
            className="app__navigation-dot"
            style={active === item ? { backgroundColor: "313BAC" } : {}}
          />
        )
      )}
    </div>
  );
};

export default NavigationDots;
