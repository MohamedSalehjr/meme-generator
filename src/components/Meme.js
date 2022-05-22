
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
    const [allMemeImages, setAllMemeImages] = React.useState(memesData);
    function handleClick(){
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNumber].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randImage: url
        }))
    }
    
    
        return (
        <div className="form">
                <input type="text" className="form--input" placeholder="Top text"/> 
                <input type="text" className="form--input" placeholder="Bottom text"/>
            <button onClick={handleClick} className="btn">Get a new meme image 🖼</button>
            <img className="meme--Img" src={meme.randImage} alt="meme Img"/> 
        </div>
    )
}
