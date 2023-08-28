import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(fab);

/* const SocialB = ({ text, icon, color }) => {
  return (
    <button className={`social-button ${color}`}>
      <span className="icon">{icon}</span>
      {text}
    </button>
  );
}; */

const SocialB = ({ icon, icon2, icon3 }) => {
  return (
    <div className="icons fa-xl">
      <FontAwesomeIcon icon={["fab", icon]} />
      <FontAwesomeIcon icon={["fab", icon3]} />
      <FontAwesomeIcon icon={["fab", icon2]} />
    </div>
  );
};

export default SocialB;
