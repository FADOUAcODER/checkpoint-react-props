import './App.css';
import Profile from './Profile/Profile';

function App() {
  const user={fullName:'Fadoua Abderrazzek'  ,
              bio:'Full stack web development, I am a talk show host in radio and I have a master degree in computer network technology.',
              profession:'Animator radio ,Full-stack web developer'};
  const handleName=(user)=>{alert(`Your Name's : ${user.fullName}`)};


  return (
          <div className='App'>
            <h1>Profile User</h1>
            <Profile user={user} handleName={handleName}>
              <img src='/assets/image.png' alt='imageImage' className='photo'/>
            </Profile>
          </div>
  );
}

export default App;