import React from "react";

const ContactCard: React.FC = () => {


  return (
    <div className="contactCard">
      <h2>Contact us!</h2>
      <p><strong>Name :</strong> Natthanicha VONGJARIT</p>
      <p><strong>Base in :</strong> Paris, France</p>
      <p><strong>Email :</strong> calla2547@gmail.com</p>
      <p><strong>School Email :</strong> natthanicha.vongjarit@EPITA.fr</p>
      <p>
        <strong>GitHub:</strong>{" "}
        <a href="https://github.com/callanicha" target="_blank" rel="noopener noreferrer">
          github.com/callanicha
        </a>
      </p>
      
    </div>
  );
};

export default ContactCard;
