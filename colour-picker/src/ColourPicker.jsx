import React,{useState} from "react"
function ColourPicker(){
    const[color,setColor] = useState("#FFFFFF");

    function handleColorChange(event){
        setColor(event.target.value);
    }

    return(<div className="color-picker-container">
        <h1>Colour Picker</h1>
        <div className="colour-picker" style={{backgroundColor:color}}>
            <p>selected Colour:{color}</p>
        </div>
        <label>Select a colour:</label>
        <input type="color" value={color} onChange={handleColorChange}/>

    </div>);

}
export default ColourPicker