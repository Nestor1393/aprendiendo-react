
import './App.css';
import TwitterFollowCard from "./components/TwitterFollowCard.jsx";

function App() {

  const formatUsername = (userName) => `@${userName}`;

  return (
    <section className='section-cards'> 
      <TwitterFollowCard formatUsername={formatUsername} userName="gravatar/sindresorhus@gmail.com" name="Nestor MJ" isFollowing={true}/>
      <TwitterFollowCard formatUsername={formatUsername} userName="instagram/willsmith" name="Will Smith" isFollowing={false}/>
    </section>
  );
}

export default App;
