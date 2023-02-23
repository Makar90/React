import './index.css'

function ChapterButton (props){
    /*  const content = props.data.map(item=>(
        <div className="chapterButton">
            <div className="chapterButton__iconTable" src="" alt="" style={item.iconTableColor}>
                {/* <svg className="chapterButton__icon" fill="currentColor">{props.icon}</svg>
                {item.icon}
            </div>
            <p className="chapterButton__title">{item.title}</p>
            <p className="chapterButton__content">{item.content}</p>
        </div>        
    ));
    
    return (
        {buttons}
    ); */
    
    
    return(
        <>
        <div className="chapterButton">
            <div className="chapterButton__iconTable" src="" alt="" style={props.color}>
                {/* <svg className="chapterButton__icon" fill="currentColor">{props.icon}</svg> */}
                {props.icon}
            </div>
            <p className="chapterButton__title">{props.title}</p>
            <p className="chapterButton__content">{props.content}</p>
        </div>
        </>
    ); 
   
}

export default ChapterButton;