import "../css/landing.css";
import main from "../assets/LandImg.png";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();
  return (
    <div className="landing">
      <span className="left">
        <div className="caption1">
          <hr />
          <h4>WE SBA</h4>
        </div>
        <div className="titles">
          <div className="caption2">
            <p>
              At <span>SBA,</span> we work towards the betterment of our{" "}
              <span>world</span>{" "}
            </p>
          </div>
          <div className="caption3">
            <p>
            MySBA is a digital platform of Swavalambi Bharat Abhiyan. It aims at spreading entrepreneurship awareness among young citizens, motivating them to become job creators rather than job seekers and making India a self-reliant nation.
            </p>
          </div>
          <div className="btns">
            <button
              //   onClick={() =>
              //     window.open(
              //       "",
              //       "_blank",
              //       "noopener noreferrer",
              //     )
              //   }
              type="button"
              className="btn btn-outline-info"
            >
              Know More
            </button>
            <button
              type="button"
              className="btn btn-success"
              onClick={() => navigate("/donate") ,   console.log("DONATE button clicked")}
            >
              DONATE
            </button>
          </div>
        </div>
      </span>
      <span className="right">
        <img src={main} alt="Smiling Faces" />
      </span>
    </div>
  );
}
