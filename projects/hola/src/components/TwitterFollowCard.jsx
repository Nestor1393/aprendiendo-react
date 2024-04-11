import { useState } from "react";

function TwitterFollowCard({children ,formatUsername, userName, name, initialFollowing}){

    const [isFollowing, setIsFollowing] = useState(initialFollowing);
    const imgSrc = `https://unavatar.io/${userName}`;

    const text = isFollowing? "Siguiendo" : "seguir";
    const buttonClassName = isFollowing? "tw-follow-card-btn is-following" : "tw-follow-card-btn";

    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }

    return(
        <article className='tw-follow-card'>
            <header className='tw-follow-card-header'>
                <img className='tw-follow-card-avatar' alt='oso' src={imgSrc}/>
                <div className='tw-follow-card-info'>
                <strong>{name}</strong>
                <span className='tw-follow-card-username'>{formatUsername(userName)}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>

                <span className="tw-follow-card-text">{text}</span>
                <span className="tw-follow-card-unfollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    );
}

export default TwitterFollowCard;