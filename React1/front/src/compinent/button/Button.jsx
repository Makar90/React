import './button.css'

function Button(props){
    return(
        <button className={`button ${props.className || ''}`}> {props.text || "Text by default"} </button>
    );
}
export default Button;