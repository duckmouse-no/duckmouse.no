import React, { useState } from "react";
import { validateEmail } from "../../utils/email";
import { addEmail } from "../../utils/firestore";
import { Button } from "../Button";

export const EmailForm = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (validateEmail(email)) {
      addEmail(email);
      setShowSuccessMessage(true);
    } else {
      setError("Ugyldig epost adresse");
      setShowSuccessMessage(false);
    }
    setEmail("");
  };

  const handleInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
    if (error !== "") setError("");
    setEmail(evt.target.value);
  };

  return (
    <div className="h-12">
      <div className="flex flex-col sm:flex-row">
        <input
          className="email-form h-full mr-4 drop-shadow-btnA text-gray-600 p-2 w-full mb-2 sm:mb-0 sm:w-56 focus:outline-none"
          type="text"
          placeholder="Skriv inn epost_"
          value={email}
          onChange={handleInput}
        />
        <Button size="s" label="Send" type="squere" onClick={handleSubmit} />
      </div>
      <span className="block mt-4 text-red-800">{error}</span>
      {showSuccessMessage && (
        <span className="block mt-4">Takk, vi holder deg oppdatert!</span>
      )}
    </div>
  );
};
