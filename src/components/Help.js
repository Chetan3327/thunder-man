// Help.js

import React from 'react';
import './Help.css'; // Import the stylesheet

  
const Help = ({header, statement, code}) => {
    const [copyButtonText, setCopyButtonText] = useState('Copy')

    const handleCopyClick = () => {
        const codeSnippet = code;
        const textArea = document.createElement('textarea');
        textArea.value = codeSnippet;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        console.log('Code snippet copied to clipboard.');
        setCopyButtonText('Copied')
        setTimeout(() => {
            setCopyButtonText('Copy');
        }, 2000);
    }

  return (
    <div className="help-container">
      <div className="help-content">
        <h2 className="help-header" style={{textAlign: 'left'}}>
            {header}
        </h2>
        <p className="dev" style={{color: 'black', paddingLeft: 0}}>
            {statement.split('|').map((ele) => {
                return(
                    <div>
                        <span>{ele}</span>
                        <br />
                    </div>
                )
            })}
        </p>
        {code && (<div className="code-container">
            <pre className="help-code">
                <button className="copy-button" onClick={handleCopyClick}>Copy</button>
                {code}
            </pre>
        </div>)}
      </div>
    </div>

  );
};

export default Help;
