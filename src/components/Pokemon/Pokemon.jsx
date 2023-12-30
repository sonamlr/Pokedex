import './Pokemon.css'
function Pokemon({name, image}) {
    return (
        <div className='pokemon'>
            <div className='pokemon-name'>{name}</div>
            <div><img src={image}  alt={name} id='pokemon-image' /></div>
        </div>
    );
}
export default Pokemon;