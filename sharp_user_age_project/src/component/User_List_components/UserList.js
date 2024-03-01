
import './UserList.css'
function UserList(props){
   return(<ul className='list-container'>
   {props.userData.map((data)=>{
     return <li key={data.name}>{data.name}({data.age} years old) {data.collage}</li>
    })}
   </ul>)
}
export default UserList;