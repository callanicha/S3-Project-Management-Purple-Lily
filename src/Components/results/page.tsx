import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { flowerData } from "../FlowerData/Data";
import './ResultsPage.css';

export default function Results() {
    const location = useLocation();
    const navigate = useNavigate();

    // Retrieve formData from location state
    const formData = location.state?.formData || {
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
    };

    // Function to filter and find matching bouquets
    const getMatchingBouquets = () => {
        const matches = flowerData.filter((bouquet) => {
            return (
                bouquet.occasion === formData.occasion &&
                bouquet.recipient === formData.recipient &&
                bouquet.budget === formData.budget
            );
        });

        // If no exact match, broaden the search by excluding the budget
        if (matches.length === 0) {
            const fallbackMatches = flowerData.filter((bouquet) => {
                return (
                    bouquet.occasion === formData.occasion &&
                    bouquet.recipient === formData.recipient
                );
            });

            // If still no match, show the ones closest to the occasion and recipient
            return fallbackMatches.length > 0 ? fallbackMatches : flowerData.filter(bouquet => bouquet.occasion === formData.occasion);
        }
        return matches;
    };

    const matches = getMatchingBouquets();

    return (
        <div className="results-container">
            <h1>Your Customized Flower Recommendation</h1>
            {matches.length > 0 ? (
                matches.map((bouquet, index) => (
                    <div key={index} className="bouquet-card">
                        <h2 className="bouquet-name">{bouquet.bouquet}</h2>
                        <p className="bouquet-description">{bouquet.description}</p>
                        <p className="bouquet-meaning"><strong>Meaning:</strong> {bouquet.meaning}</p>
                    </div>
                ))
            ) : (
                <p>No bouquets found for your selection, please try adjusting your preferences.</p>
            )}
            <button className="restart-button" onClick={() => navigate("/")}>
                Restart Questionnaire
            </button>
        </div>
    );
}
