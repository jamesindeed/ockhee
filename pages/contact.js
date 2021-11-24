import React, { useState } from "react";

const contact = () => {
  const [error, setError] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  return (
    <div>
      <p>Contact</p>
    </div>
  );
};

export default contact;
