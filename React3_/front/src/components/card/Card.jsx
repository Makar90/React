import './index.css'

export function Card(props){
    const UsersCard = props.Users.map(item=>(
        //item.age>=props.ageFilter &&(
            <div key={item.id} 
                className='userCard'
                >
                <h2 className='userCard__name'>
                    {item.name}
                </h2>
                <p className='userCard__age'>
                    {item.age} years old
                </p>
                <p className='userCard__description'>
                    {item.description}
                </p>
                <img className="fit-userCard__image"
                    src={item.img}
                    alt={item.description}
                    width='200'
                />            
            </div> 
        //) 
    ));
    return(
        <>
            {UsersCard}
        </> 
    );
}
