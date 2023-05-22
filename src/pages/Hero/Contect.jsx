import React, { useState } from "react";
import Button from "../components/Button";

const Contect = () => {
  const [input, setInput] = useState("");
  const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const checkEmail = () => {
    if (pattern.test(input)) {
      document.querySelector(".error").classList.remove("hide-error");
      document.querySelector(".inputfield").value = "";
    } else {
      document.querySelector(".error").classList.add("hide-error");
    }
  };

  return (
    <div className="contect">
      <div className="contect__inner">
        <div className="d-f ai-c jc-c fd-c">
          <h4> Get early access today</h4>
          <p>
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
          <div className="searchBox d-f ai-c jc-sb">
            <input
              className="inputfield"
              type="text"
              placeholder="email@example.com"
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
            <span onClick={checkEmail}>
              <Button text="Get Started For Free" />
            </span>
            <p className="error">please enter a valid email address</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contect;
