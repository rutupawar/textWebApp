import React, {useState} from 'react'

export default function TextForms(props) {

    const [text, setText] = useState('type here');  // This is setting initial state for variable

    const handleOnChange = (event)=>{   // event is populated here automatically when event is fired
        setText(event.target.value)
    }

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handlelowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }

  return (
    <>
    <div className="container">
        <h5>{props.Title}</h5>
        <textarea className="form-control" id="myTextBox" value={text} onChange={handleOnChange} rows="5"></textarea>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handlelowClick}>Convert to lowercase</button>
    </div>
    <div className='container my-2'>
        <h6>Text Summary</h6>
        <p>{text.split(' ').length} words and {text.length} characters</p>
    </div>
    </>
  )
}
