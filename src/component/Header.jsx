import React from 'react'
import Icon from '../images/meme-gif.GIF'

export default function Header(){
       return (
        <div className='header'> 
            <img src={Icon} className='meme--icon'/>
            <div className='header--sub'>
                <h1 className='meme--h1'>Meme Generator App</h1>
                <h3 className='meme--h3'>...Easy memes with words</h3>
            </div>
        </div>
    )
}