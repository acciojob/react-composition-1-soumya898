import React, { useState } from 'react';

const Tab = ({ tabData}) => {
  const [content, setContent] = useState(tabData[0].content);

  return (
    <div>
      <ul>
        {tabData.map((tab,index) => (
          <li key={index} onClick={() => setContent(tab.content)}>{tab.title}</li>
        ))}
      </ul>
      <p>{content}</p>
    </div>
  );
};

export default Tab;
