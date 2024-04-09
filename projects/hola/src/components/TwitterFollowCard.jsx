

function TwitterFollowCard({formatUsername, userName, name, isFollowing}){
    const imgSrc = `https://unavatar.io/${userName}`
    console.log(isFollowing);
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
                <button className='tw-follow-card-btn'>
                seguir
                </button>
            </aside>
        </article>
    );
}

export default TwitterFollowCard;