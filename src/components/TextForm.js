import React, { useState } from 'react'

export default function TextForm(props) {

    const handleupclick = () => {
        let newtext = text.toUpperCase();
        settext(newtext);
        props.showalert1("Converted to uppercase", "success");
    };

    const handleloclick = () => {
        let newtext = text.toLowerCase();
        settext(newtext);
        props.showalert1("Converted to lowercase", "success");
    };

    const handleCapitalclick = () => {
        let newText = text.split(" ").map(currentvalue => currentvalue.charAt(0).toUpperCase() + currentvalue.slice(1)).join(" ");
        settext(newText);
        props.showalert1("Converted to capitalize", "success");
    };

    const RemoveExtraSpaces = () => {
        let newtext = text.split(/[ ]+/);
        settext(newtext.join(" "));
        props.showalert1("Extra Spaces are removed", "success");
    };

    const Copytext = () => {
        let newtext = document.getElementById('mybox');
        newtext.select();
        navigator.clipboard.writeText(newtext.value);
        props.showalert1("Copied to clipbord", "success");
    };

    const clearText = () => {
        let newtext = ("");
        settext(newtext);
    };

    const handleonchange = (event) => {
        settext(event.target.value);
    };

    const [text, settext] = useState('');
    // text = "new text"; wrong way to change the state 
    // settext('new text'); correct way to change the state 

    return (
        <>
            <div className="conatiner my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} showalert={props.showalert1} placeholder="Enter Text Here" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#042743', color: props.mode === 'dark' ? 'white' : 'black' }}
                        onChange={handleonchange} id="mybox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2 " onClick={handleupclick}>Convert To UpperCase</button>

                <button className="btn btn-primary mx-2" onClick={handleloclick}>Convert To LowerCase</button>

                <button className="btn btn-primary mx-2" onClick={handleCapitalclick}>Convert To Captalize</button>

                <button className="btn btn-primary mx-2" onClick={RemoveExtraSpaces}>Remove Extra Spaces</button>

                <button className="btn btn-primary mx-2" onClick={Copytext}>Copy Text</button>

                <button className="btn btn-primary mx-2" onClick={clearText}>Clear Text</button>
            </div>

            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your Text Summary</h2>
                <p> {text.split(' ').length - 1} Words and {text.length} Characters</p>
                <p>{0.008 * text.split(' ').length} Minuets to read</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Enter Text for Preview Here"}</p>
            </div>

        </>
    )
}
