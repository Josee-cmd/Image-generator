import user from '../assets/user.png';
import '../Styles/Styles.scss';
/*-------------------------------------------*/

export const UserImg = ()=>{
    
    return(
        <div className='User'>
            <img src = {user} alt = "Not Found"></img>
        </div>
    )
}