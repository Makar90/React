function Container(props){
    return (
        <div className={`container ${props.className || ""}`}></div>
    );
}

export default Container;