import { useState } from 'react';
import styled from "styled-components";


function Timeline(props) {
  const [activeTab, setActiveTab] = useState(props.defaultActiveTab || 0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <Wrapper className="section">
      <div className="tab-menu">
        
        {props.tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab-menu-item ${index === activeTab ? 'active' : ''}`}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div className="tab-content">
        {props.tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab-content-item ${index === activeTab ? 'active' : ''}`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </Wrapper>
    );
};

const Wrapper = styled.section`
font-family:Microsoft Sans Serif;
    padding: 9rem 0;
    box-sizing: border-box;
    justify-content: center;
    margin-top:0;

.tab-menu {
  display: flex;
  justify-content: center;

  font-size:2rem;
  
}

.tab-menu-item {
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: #555;
}

.tab-menu-item:hover {
  background-color: #eee;
}

.tab-menu-item.active {
  border-bottom: 3px solid #0099ff;
  color: #0099ff;
}

.tab-content {
  margin-top:2rem;

  border: 2px solid black;
  padding: 4rem;
  font-size:2rem;
  justify-content: center;
  display: flex;
  margin: auto;
  width: 80%; 
}


.tab-content-item {
  display: none;
  padding: 2rem;
}

.tab-content-item.active {
  display: block;
}

`;

export default Timeline ;