import React, { useState } from 'react';

export default function TextForm(props) {

  let contentStyle = {
    "backgroundColor": props.color,
    "color": (props.color === 'black' ? 'white' : 'black')
  }
  const [text, setText] = useState('');

  let buttonStyle = {
    display: 'flex',
    justifyContent: 'center'
  }

  let buttonClass = () => {
    return "btn btn-" + (props.color === 'black' ? 'dark' : 'primary');
  }

  let handleDownload = (filename, content) => {

    if (!text.trim().length) {
      props.onShowAlert("Your text is empty", "warning");
      return;
    }

    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();
    document.body.removeChild(element);
    props.onShowAlert("File downloaded", "success");
  }

  let handleUpperCase = () => {
    if (text.length) {
      setText(text.toUpperCase());
    }
  }

  let wordCountHelper = (words) => {
    return words.filter(word => word !== "")
  }

  let handleWordCount = () => {
    const textVal = text.trim();
    if (!textVal.length) return 0;
    let words = textVal.split(" ");
    words = wordCountHelper(words);
    return words.length;
  }

  let handleRemoveSpaces = () => {
    if (!text.trim().length) return;
    let words = text.split(" ");
    words = wordCountHelper(words);
    setText(words.join(" "));
  }

  let handleLowerCase = () => {
    if (text.length) {
      setText(text.toLowerCase());
    }
  }

  let handleClipboard = () => {
    if (text && text.trim() !== "") {
      navigator.clipboard.writeText(text);
      props.onShowAlert("Text copied to clipboard", "success");
    }
    props.onShowAlert("Empty text", "warning");
  }

  return (
    <>
      <div className="mb-3" style={contentStyle}>
        <center><label htmlFor="textArea" className="form-label"><h1 style={{ color: contentStyle.color }}>Enter your text to analyze</h1></label></center>
        <textarea className="form-control" id="textArea" rows="10" placeholder="Enter the text" value={text} onChange={(e) => setText(e.target.value)}></textarea>
        <div className='mt-3' style={buttonStyle}>
          <button className={buttonClass()} onClick={() => handleUpperCase()}>Upper Case</button>
          <button className={buttonClass() + " mx-2"} onClick={() => handleLowerCase()}>Lower Case</button>
          <button className={buttonClass()} onClick={() => handleRemoveSpaces()}>Remove ExtraSpaces</button>
          <button className={buttonClass() + " mx-2"} onClick={() => setText("")}>Clear Text</button>
          <button className={buttonClass() + " mx-2"} onClick={() => handleClipboard()}>Copy To Clipboard</button>
          <button className={buttonClass() + " mx-2"} onClick={() => { handleDownload("textutil.txt", text) }}>Download File</button>
        </div>
      </div>
      <div className="container" style={{ color: contentStyle.color }}>
        <h1>Your Text insights</h1>
        <h3>{handleWordCount()} words,{text.length} characters</h3>
        <small>Note: Empty space is treated as a character</small>
        <h1>Preview</h1>
        <p>{text}</p>
        <small>{handleWordCount() / 250} mins read</small>
      </div>
    </>
  )
}

