/* homework: 45 React: Routing start*/
import SinglePost from '../../components/singlePost/SinglePost';
/* homework: 45 React: Routing end*/

function Blog(props){
    return(
        <>
            <div className="page">
                <h2>Blog</h2>
                <section>  
                    {/* homework: 45 React: Routing start*/}                  
                    <SinglePost post={`${props.post || 'post1'}`} />
                    {/* homework: 45 React: Routing end*/}
                </section>
                <section>
                    <h2>Section 2</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, nesciunt?</p>
                </section>
                <section>
                    <h2>Section 3</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, nesciunt?</p>
                </section>                
            </div>
        </>
    );     
}

export default Blog;