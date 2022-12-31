import React, { useEffect, useState } from 'react';
import "./App.css";

//MovingLine function, which controls the "moving line" in the ALT indicator
function MovingLine(props) {
  const { height } = props;
  const lineHeight = {
    transform: `translate(0px, ${(-height/6)+416}px)`,
  };

  return (
    <div style={lineHeight}>
      <div className="line"></div>
    </div>
  );
};


//RotatedCircle function, which controls the rotation of the circle in the HIS indicator
function RotatedCircle(props) {
  const { angle } = props;
  const circleStyle = {
    transform: `rotate(${-angle}deg)`,
  };

  return (
    <div style={circleStyle}>
      <div className="circle">
        <div className="numbers">
          <div className="txt0">0</div>
          <div className="txt90">90</div>
          <div className="txt180">180</div>
          <div className="txt270">270</div>
        </div>
      </div>
    </div>
  );
};


//MovingBoxbox function, which controls the movement of the 2 boxes in the ADI indicator
function MovingBoxbox(props) {
  const {ADIStat} = props;
  const boxboxHeight = {
    transform: `translate(0px, ${ADIStat}px)`,
  };

  return(
    <div className="boxbox" style={boxboxHeight}></div>
  );
};


//App function, the HTML data that is shown on the webpage (localhost:3000, can be uploaded to a server)
function App() {
  const [backendData, setBackendData] = useState([{}]);
  const [showText, setShowText] = useState(false);
  const [showVisual, setShowVisual] = useState(true);

  const textContent = document.getElementById('text');
  const visContent = document.getElementById('ADIIndicator');

  const toggleShowText = () => {
    if (textContent.style.display === "none"){
      setShowText(!showText);
      setShowVisual(!showVisual);
    };
  };

  const toggleShowVisual = () => {
    if (visContent.style.display === "none"){
      setShowText(!showText);
      setShowVisual(!showVisual);
    };
  };

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, []);
  
  return (
    <div id='body' className="body">


        <div style={{marginLeft: 70}} id='buttonSide'>
          <button onClick={toggleShowText}>Text</button>
          <button onClick={toggleShowVisual}>Visual</button>
        </div>


        <div id='contentSide'>

          {(typeof backendData.stats === 'undefined') ? (
            <p>Loading...</p>
          ) : (
          <div className="body">
            <div id='text' className="TText" style={{display: showText ? 'block' : 'none'}}>
              <div><ins>Text Data:</ins>
                <li>
                  ALT: {backendData.stats[0]}
                </li>
                <li>
                  HIS: {backendData.stats[1]}
                </li>
                <li>
                  ADI: {backendData.stats[2]}
                </li>
              </div>
            </div>
            

            <div className="collumn" id='ALTIndicator' style={{display: showVisual ? 'block' : 'none'}}>
              <div className='altText'>
                <div>3000</div>
                <div className='alt2000'><ins>2000</ins></div>
                <div className='alt1000'><ins>1000</ins></div>
                <div className='alt0'><ins>0</ins></div>
              </div>
              <MovingLine height={backendData.stats[0]}></MovingLine>
            </div>


            <div className="circleFrame" id='HISIndicator' style={{display: showVisual ? 'block' : 'none'}}>
              <RotatedCircle angle={backendData.stats[1]}></RotatedCircle>
              <div className="circleArrow"></div>
            </div>


            <div className="overlay" id='ADIIndicator' style={{display: showVisual ? 'block' : 'none'}}>
              <MovingBoxbox ADIStat={backendData.stats[2]}></MovingBoxbox>
            </div>

          </div>
        )}
        </div>
    </div>
  );
};

export default App;