import React from "react";
import img from "../images/lo.png";

function Loadingscreen() {
  return (
    <div
      style={{
        background: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <img
        src={img}
        style={{ width: "80%", maxWidth: "400px", opacity: "1" }}
        alt="j"
        className="loa"
      />
      <style>
        {`
          @keyframes fadeOut {
            from {
              opacity: 1;
            }
            to {
              opacity: 0;
            }
          }
          .loa {
            animation: fadeOut 2s ease-in-out forwards;
          }
          @media only screen and (max-width: 768px) {
            .loa {
              width: 60%;
              max-width: 200px;
            }
            div {
              font-size: 18px;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Loadingscreen;
