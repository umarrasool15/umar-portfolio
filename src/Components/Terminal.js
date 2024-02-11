import React, { useState, useEffect } from 'react';
import './Terminal.css';
import { useNavigate } from 'react-router-dom';

function TerminalStart() {
    const [lines, setLines] = useState([]);
    const navigate = useNavigate();
  
    useEffect(() => {
        const messages = [
            'npm start',
            'portfolio@0.1.0 start /umar',
            'react-scripts start',
            'Starting the development server...'
        ];
  
      let charIndex = 0;
      let lineIndex = 0;
  
      const getPrefix = (lineType) => {
        if (lineType === 'command' || lineType === 'info') return '> ';
        else return '';
    };
    
    const interval = setInterval(() => {
        if (charIndex < messages[lineIndex].length) {
            setLines((prevLines) => {
                let newLines = [...prevLines];
                let lineType = (lineIndex === 0 ? 'command' : (lineIndex === 1 ? 'info' : (lineIndex === 2 ? 'info' : ('output'))));
                let prefix = getPrefix(lineType);
                
                if (newLines[lineIndex]) {
                    newLines[lineIndex].text = prefix + messages[lineIndex].substring(0, charIndex + 1);
                } else {
                    newLines.push({ text: prefix + messages[lineIndex][charIndex], type: lineType });
                }
    
                return newLines;
            });
            charIndex++;
        } else {
            lineIndex++;
            charIndex = 0;
    
            if (lineIndex === 2) { // add space after the second line
                setLines(prevLines => [...prevLines, { text: '', type: 'empty' }]);
            }
    
            if (lineIndex === 3) { // add two spaces before the fourth line
                setLines(prevLines => [...prevLines, { text: '', type: 'empty' }]);
            }
    
            if (lineIndex >= messages.length) {
                clearInterval(interval);
                setTimeout(() => {
                    setLines([]);
                    navigate('/home');
                }, 2000);
            }
        }
    }, (lineIndex === 0 ? 100 : 500));

      return () => clearInterval(interval);
    }, [navigate]);
  
    return (
      <div className="terminal">
        <div className="terminal-header">
          <span className="terminal-button red"></span>
          <span className="terminal-button yellow"></span>
          <span className="terminal-button green"></span>
        </div>
        {lines.map((line, idx) => (
          <div key={idx} className={line.type}>{line.text}</div>
        ))}
        <span className="blink-cursor">|</span>
      </div>
    );
}

export default TerminalStart;
