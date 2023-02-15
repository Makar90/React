import { Link } from "react-router-dom";

function Contact(){
    return(
        <>
            <div className="page">                
                <h2>Contact</h2>
                <section>
                    <h2>Section 1</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, nesciunt?</p>
                </section>
                <section>
                    <h2>Section 2</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, nesciunt?</p>
                </section>                

                <Link to='/blog'  target='_blank'>Blog (from contact / open in new tab)</Link>
            </div>
         </>
    );
}

export default Contact;