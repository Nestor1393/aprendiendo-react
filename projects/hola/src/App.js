
import { useState } from 'react';
import './App.css';
import TwitterFollowCard from "./components/TwitterFollowCard.jsx";

function App() {

  const [nombre, setNombre] = useState("Nes");

  const formatUsername = (userName) => `@${userName}`;
  const gravatar = {formatUsername: formatUsername,  userName: "gravatar/sindresorhus@gmail.com", name: nombre};
  
  const users = [
    {
      userName: "ricardoperez",
      name: "Ricardo Perez",
      isFollowing: true
    },

    {
      userName: "eduardorojas",
      name: "Eduardo Rojas",
      isFollowing: false
    },
    {
      userName: "luisperez",
      name: "Luis",
      isFollowing: true
    },
    {
      userName: "luisperez2",
      name: "Luis2",
      isFollowing: true
    }

  ];
  

  return (
    <section className='section-cards'> 

      {
        users.map((user) => {

          return(
            <TwitterFollowCard formatUsername={formatUsername} userName={user.userName} name={user.name} initialFollowing={user.isFollowing} key={user.userName}/>
          )
        })
      }

      { /*
      <TwitterFollowCard { ... gravatar}/>   
      <TwitterFollowCard formatUsername={formatUsername} userName="instagram/willsmith" name={nombre}/>
  */}
      <button onClick={() => setNombre("Luis")}>
        Cambiar nombre
      </button>
    </section>

  );
}

export default App;
