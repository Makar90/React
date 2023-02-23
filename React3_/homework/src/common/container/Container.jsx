import './index.css';

function Container(props){
    return(
        <div className={`container ${props.containerClassName || ''}`}>
            {props.containerContents}
        </div>
    );
}

export default Container;