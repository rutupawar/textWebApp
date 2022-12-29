import React from 'react'

export default function TextForms(props) {
  return (
    <div>
        <form>
            <div className="form-group">
                <label htmlFor='myTextBox'>{props.Title}</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
            </div>
        </form>
    </div>
  )
}
