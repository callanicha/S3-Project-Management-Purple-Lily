import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { flowerData } from "../FlowerData/Data";
import './ResultsPage.css'; // Add CSS for styling

export default function Results() {
    // Example formData (to be passed via context or props)
    const [formData, setFormData] = useState({
      occasion: "Birthday",
      recipient: "Friend",
      budget: "Under $50",
      symbolicMeaning: "Very Important",
      longevity: "1-3 days",
      colorScheme: "Pastels",
      style: "Classic",
      fragrance: "Very Important",
      sustainable: "Yes",
      flowerType: "Unique",
    });
  
    const navigate = useNavigate();
  
    // Function to filter and find matching bouquets
    const getMatchingBouquets = () => {
      const matches = flowerData.filter((bouquet) => {
        return (
          bouquet.occasion === formData.occasion &&
          bouquet.recipient === formData.recipient &&
          bouquet.budget === formData.budget
        );
      });
      return matches.length > 0 ? matches : null;
    };
  
    const matches = getMatchingBouquets();
  
    return (
      <div className="results-container">
        <h1>Your Customized Flower Recommendation</h1>
        {matches ? (
          matches.map((bouquet, index) => (
            <div key={index} className="bouquet-card">
              <h2 className="bouquet-name">{bouquet.bouquet}</h2>
              <p className="bouquet-description">{bouquet.description}</p>
              <p className="bouquet-meaning"><strong>Meaning:</strong> {bouquet.meaning}</p>
            </div>
          ))
        ) : (
          <p>We couldn’t find an exact match for your preferences. Try refining your choices!</p>
        )}
        <button className="restart-button" onClick={() => navigate("/")}>
          Restart Questionnaire
        </button>
      </div>
    );
  }