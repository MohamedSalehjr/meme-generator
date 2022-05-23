
/**
 * Challenge: 
 * - Create a Meme component.
 * - Inside the Meme component, render a styled form
 *   with our 2 inputs and the button.
 * - Don't worry about adding any functionality yet
 */
import React from "react"
import memesData from "../memesData.js"
import "../style.css" 

export default function Meme() {
    
    // const [memeImg, setMemeImage] = React.useState("http://i.imgflip.com/1bij.jpg");
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randImage: "http://i.imgflip.com/1bij.jpg",
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function handleClick(){
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNumber].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randImage: url
        }))
    }

    function handleChange(event){
        const {name, value} = event.target
        setMeme( prevMeme => ({
           ...prevMeme,
           [name] : value
        }))
    }
    

        return (
        <div className="form">
                <input type="text" className="form--input" name="topText" onChange={handleChange} value={meme.topText} placeholder="Top text"/> 
                <input type="text" className="form--input" name="bottomText" onChange={handleChange} value={meme.bottomText}  placeholder="Bottom text"/>
            <button onClick={handleClick} className="btn">Get a new meme image 🖼</button>
            <div className="meme">
                <img className="meme--Img" src={meme.randImage} alt="meme Img"/> 
                <h2 className="meme--text top"  >{meme.topText} </h2>
                <h2 className="meme--text bottom" onChange={handleChange} >{meme.bottomText}</h2> 
            </div>
            
        </div>
    )
}
