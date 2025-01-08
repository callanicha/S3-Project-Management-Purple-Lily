import React from "react";
import { Link } from 'react-router-dom';


const WelcomeCard: React.FC = () => {


  return (
    <div className="welcomeCard">
      <h2>Welcome to Purple Lilies!</h2>
      <p>
          Discover the perfect bouquet for any occasion and recipient. Our
          expert system will guide you through a series of questions to find the
          ideal flowers that express your sentiments.
      </p>
      <div className="buttonContainer">
        <Link to="/Questionnaires/1">
          <button className="StartButton">
            <p>Start Your Floral Journey</p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default WelcomeCard;
