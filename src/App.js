import image from "../src/assets/images.jpg";
import './App.css';
import UserCard from './components/users';

function App() {
  let data = "frontend developer and" + "<br/>" + " social media manager";
  const users = [
    {
      img: image,
      firstName: "taha",
      lastName: "ali",
      address: "pakistan",
      desig: data,
  },
  {
    img: image,
    firstName: "taha",
    lastName: "ali",
    address: "pakistan",
    desig: data,
},
{
  img: image,
  firstName: "taha",
  lastName: "ali",
  address: "pakistan",
  desig: data,
},
{
  img: image,
  firstName: "taha",
  lastName: "ali",
  address: "pakistan",
  desig: data,
},
{
  img: image,
  firstName: "taha",
  lastName: "ali",
  address: "pakistan",
  desig: data,
},
{
  img: image,
  firstName: "taha",
  lastName: "ali",
  address: "pakistan",
  desig: data,
},
{
  img: image,
  firstName: "taha",
  lastName: "ali",
  address: "pakistan",
  desig: data,
},
{
  img: image,
  firstName: "taha",
  lastName: "ali",
  address: "pakistan",
  desig: data,
},
{
  img: image,
  firstName: "taha",
  lastName: "ali",
  address: "pakistan",
  desig: data,
},
{
  img: image,
  firstName: "taha",
  lastName: "ali",
  address: "pakistan",
  desig: data,
}
]
  return (
    <div className='App'>
      <h1>Active Users</h1>

      {users.map((user) => {
        return <UserCard u={user} key={user.id}/>
      }

      )}

    </div>
    
  );
}

export default App;
