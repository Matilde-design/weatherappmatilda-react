import React from "react";
import "./container.css";

import Wrapper from "./Wrapper";



export default function Container() {
  return (
    <div className="container">
     <Wrapper />
      <small>
        {" "}
        👩🏻‍💻{" "}
        <a
          href="https://github.com/Matilde-design/weatherappmatilda-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open-Source code
        </a>
        , by <a href="https://matildemaia.netlify.app/" target="_blank" rel="noopener noreferrer"> Matilde Maia </a>
      </small>
    </div>
  );
}