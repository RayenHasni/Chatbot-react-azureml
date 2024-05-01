import React from 'react'
import Navbar from '../components/Navbar'
import Search from '../components/Search'
import { CodeSimple, Lightbulb, Lightning, PencilSimple } from 'phosphor-react'

const Home = () => {
    return (
        <div className='home-styled'>
            <Navbar />
            <div className='content'>
                <div className='title'>
                    <h1>Bonjour, Rayen !</h1>
                    <h2>En quoi je peux aider aujourd'hui ?</h2>
                </div>
                <div className='grid'>
                    <div className='item'>
                        <p>Quelques idées</p>
                        <span><PencilSimple weight='bold' size={25} /></span>
                    </div>
                    <div className='item'>
                        <p>Comment fonctionne quelque chose</p>
                        <span><Lightbulb weight='bold' size={25} /></span>
                    </div>
                    <div className='item'>
                        <p>Conseils de voyage</p>
                        <span><Lightning weight='bold' size={25} /></span>
                    </div>
                    <div className='item'>
                        <p>Code en React Js</p>
                        <span><CodeSimple weight='bold' size={25} /></span>
                    </div>
                </div>
            </div>
            <Search />
        </div>
    )
}

export default Home