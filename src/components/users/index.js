import UserSkills from "../skills";
const UserCard = (props) => {
    const user = props.u;
    return(
    <div className="user-card">
        <img src={user.img} alt="profile" className="pic"></img> 
        <h2> {user.firstName}  {user.lastName}</h2>
        <p> {user.address}</p>
        <p dangerouslySetInnerHTML={{ __html: user.desig }}></p>
        <button className="orange button2">Message</button><button className="button2">Following</button>
        <UserSkills />
    </div>
)
}

export default UserCard;