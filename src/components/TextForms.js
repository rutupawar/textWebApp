import React, {useState} from 'react'

export default function TextForms(props) {

    const [text, setText] = useState('Enter text');
    const handleOnChange = ()=>{
        console.log(12);
    }

    const handleOnChange1 = ()=>{
        console.log(13);
    }

  return (
    <div>
        <form>
            <div className="form-group">
                <h5>{props.Title}</h5>
                <textarea className="form-control" id="myTextBox" value={text} onChange={handleOnChange} rows="5"></textarea>
                <button className="btn btn-primary">Convert to uppercase</button>
            </div>
        </form>
    </div>
  )
}
