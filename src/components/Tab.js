import React, { useState } from 'react';

const Tab = ({ tabData }) => {
  const [data, setData] = useState(tabData);
  const [selectedContent, setSelectedContent] = useState('');

  const handleItemClick = (content) => {
    setSelectedContent(content);
  };

  return (
    <div>
      <h1 style={{ textDecoration: 'underline' }}>Output:</h1>

      <ul>
        {data.map((item, index) => (
          <li key={index} onClick={() => handleItemClick(item.content)}>
            {item.title}
          </li>
        ))}
      </ul>

      <p>{selectedContent}</p>
    </div>
  );
};

export default Tab;
 
