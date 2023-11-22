import './App.css'
import {TwitterFollowCard} from './TwitterFollowCard.jsx'

export function App(){
    //es esta creando una array con los datos de cada usuario
    const user = [
        {
            userName: 'midudev',
            name: 'Miguel Angel Duran',
            isFollowing: true
        },
        {
            userName: 'pheralb',
            name: 'Pablo Hernandez',
            isFollowing: false
        }, 
        {
            userName: 'PacoHdezs',
            name: 'Paco Hernandez',
            isFollowing: true
        },
        {
            userName: 'TMChein',
            name: 'Tomar',
            isFollowing: false
        },

    ]

    
    return( /*los menor y mayor que equvalent a React Fragment que permite renderizar 2 objetos*/
        <section className="App">
            {
                user.map(({userName, name, isFollowing}) => (
                    <TwitterFollowCard
                        key={userName}
                        userName={userName}
                        initialIsFollowing={isFollowing}
                    >
                        {name}
                    </TwitterFollowCard>
                ))
            }
        </section>
    )
}


/* codigo para crear varias tarjetas pero es ir una por una
export function App(){
    return( los menor y mayor que equvalent a React Fragment que permite renderizar 2 objetos
        <selection className="App">
            <TwitterFollowCard isFollowing  userName ='midudev' >Miguel Angel Duran</TwitterFollowCard>
            <TwitterFollowCard isFollowing = {false} userName ='pheralb'>Pablo Hernandez</TwitterFollowCard> 
            <TwitterFollowCard isFollowing = {false} userName ='elonmusk'>Elon Musk"</TwitterFollowCard>
            <TwitterFollowCard isFollowing = {false} userName ='vxnder'>"Vanderhear"</TwitterFollowCard>
        </selection>
    )
}
*/



/* Codigo solo para un tarjeta de twitter pero esta individualizado
export function App(){
    return(
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                    className='tw-followCard-avatar'
                    alt= "El avatar de midudev" 
                    src="https://unavatar.io/midudev"/>
                <div className='tw-followCard-info'> 
                    <strong>Miguel Angel Duran</strong>
                    <span className='tw-followCard-infoUserName'> 
                        @midudev
                    </span>
                </div>
            </header>
        <aside>
            <button className='tw-followCard-button'>
                Seguir
            </button>
        </aside>
        </article>
    )
}*/