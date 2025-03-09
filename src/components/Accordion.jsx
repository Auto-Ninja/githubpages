import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full text-left p-4 focus:outline-none">
        {title}
      </button>
      {isOpen && (
        <div className="p-4">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
