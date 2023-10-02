import React from 'react'

export default function Meme(){
    const[meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        newImage: "https://i.imgflip.com/1c1uej.jpg"
    })

    const [memeImage, setMemeImage] = React.useState([])
    
    React.useEffect(()=>{

        async function getMemesFromApi (){

            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setMemeImage(data.data.memes)  
        }
    
        getMemesFromApi()

        return () => {

        }
    }, [])

    function handleSubmit(event){
        event.preventDefault()
    }
    function handleChange(event){
        const {name, value} = event.target

        setMeme(prevMeme=> {
            return {...prevMeme, [name]: value}
        })
    }

    function getMeme(){
        const randomNumber = Math.floor(Math.random() * memeImage.length)
        const url = memeImage[randomNumber].url

        setMeme(prevMemeImage =>{
            return {...prevMemeImage, newImage: url}
        })
    }
   console.log(meme.newImage)
    return (
        <div className='meme'>
            <form className='meme--form' onSubmit={handleSubmit}>
               <div className='meme--input'>
                    <input
                        className='top'
                        type='text'
                        name="topText"
                        placeholder='Enter Top Text'
                        value={meme.topText}
                        onChange={handleChange}
                    />

                    <input
                        className='bottom'
                        type='text'
                        name="bottomText"
                        placeholder='Enter Bottom Text'
                        value={meme.bottomText}
                        onChange={handleChange}
                    />
               </div>
                <button className='meme--button' onClick={getMeme}>Fetch Your Meme</button>

            </form>
            <div className='meme--column'>
                <h2 className='top--text'>{meme.topText}</h2>
                <img className='meme--image' src={meme.newImage}/>
                <h2 className='bottom--text'>{meme.bottomText}</h2>
            </div>
        </div>
    )

}