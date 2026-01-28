import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value );
    }

    const handleLoClick = ()=> {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }

    const handleClear = ()=>{
        setText('');
        props.showAlert("Text Cleared!", "success");
    }

    const handleCopy = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges(); // чтобы удалить выделение
        props.showAlert("Copied to Clipboard!", "success");
    }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/\s+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }

    const [text, setText] = useState('');
    // text = "sadsas"; // так нельзя обновлять состояние 
    // setText('sad');

    return (
        <>
        <div className="container" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
            <h1 className='mb-4'>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743'}}></textarea>
            </div>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>   {/* disabled={text.length === 0}  егер textform бос болса => батырмалар басылмайды */}
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear Text</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.trim() === "" ? 0 : text.trim().split(/\s+/).length} words and {text.length} characters</p>
            <p>{0.008 * (text.trim() === "" ? 0 : text.trim().split(/\s+/).length)} Minutes read</p> {/* statistics: 1 min = 125 words => 1/125 = 0.008 */}
            <h2>Preview</h2>
            <p>{text.length === 0 ? "Nothing to preview!" : text}</p>
        </div>
        </>
    )
}
   