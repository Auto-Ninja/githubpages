import React, { useState } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { title: "Tab 1", content: "This is the content of Tab 1." },
    { title: "Tab 2", content: "This is the content of Tab 2." },
    { title: "Tab 3", content: "This is the content of Tab 3." },
  ];

  return (
    <div>
      <div className="flex border-b border-gray-200">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`p-4 ${activeTab === index ? "border-b-2 border-blue-600" : ""}`}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="p-4">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default Tabs;
