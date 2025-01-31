import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Language = ({ navigateTo }) => {

  const [selectedLanguage, setSelectedLanguage] = useState('english');
  const [error, setError] = useState('');

  
  return (
    <>
      <div className="language-bg">
        <div className="header">
          <button className="logout" onClick={() => {navigateTo('home')}}>Logout</button>
          <h2 className="select-language"><b>Select a language you want to learn</b></h2>
        </div>
        <div className="languages">

          <div className="language-container">
            <button className="language-button" onClick={() => { navigateTo('english') }}>
              <img className="flag"
                src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
              />
              <p><b>ENGLISH</b></p></button>
          </div>

          <div className="language-container">
            <button className="language-button" onClick={() => { navigateTo('french') }}>
              <img className="flag"
                src="https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg"
              />
              <p><b>FRENCH</b></p></button>
          </div>

          <div className="language-container">
            <button className="language-button" onClick={() => { navigateTo('german') }}>
              <img className="flag"
                src="https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg"
              />
              <p><b>GERMAN</b></p></button>
          </div>

          <div className="language-container">
            <button className="language-button" onClick={() => { navigateTo('italian') }}>
              <img
                className="flag"
                src="https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg" />
              <p><b>ITALIAN</b></p>
            </button>
          </div>

          <div className="language-container">
            <button className="language-button" onClick={() => { navigateTo('spanish') }}>
              <img
                className="flag"
                src="https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg" />
              <p><b>SPANISH</b></p>
            </button>
          </div>

          <div className="language-container">
            <button className="language-button" onClick={() => { navigateTo('japanese') }}>
              <img
                className="flag"
                src="https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg" />
              <p><b>JAPANESE</b></p>
            </button>
          </div>

        </div>
      </div>
    </>
  );
};

export default Language;
