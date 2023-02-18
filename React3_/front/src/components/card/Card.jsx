import {Users} from '../../data/user/Users';
import './index.css'

const UsersCard = Users.map(item=>(
    <div key={item} className='card'>
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <img class="fit-picture"
            src={item.img}
            alt={item.description}
            width='200'/>
    </div>
    
)); 

{console.log(Users)}


export function Card(props){
    return(
        <>
            {UsersCard}
        </>
       /*  <> 
        <div key={props.key} className='card'>
            <h2>{props.item.name}</h2>
            <p>{item.description}</p>
            <img class="fit-picture"
                src={item.img}
                alt={item.description}
                width='200'/>
        </div>
        </> */
    );
}
