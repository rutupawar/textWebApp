import React, {useState} from 'react'

export default function TextForms(props) {

    const [text, setText] = useState('d');  // This is setting initial state for variable

    const handleOnChange = (event)=>{   // event is populated here automatically when event is fired
        setText(event.target.value)
    }

    const handleUpClick = (event)=>{   // event is populated here automatically when event is fired
        let newText = text.toUpperCase();
        setText(newText);
        event.preventDefault();     // This will prevent the page from reloading
    }

  return (
    <div>
        <form>
            <div className="form-group">
                <h5>{props.Title}</h5>
                <textarea className="form-control" id="myTextBox" value={text} onChange={handleOnChange} rows="5"></textarea>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
            </div>
        </form>
    </div>
  )
}
