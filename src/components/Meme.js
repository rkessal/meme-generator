import React from "react"
//import memesData from "../memesData"


const Meme = () => {


    const [meme, setMeme] = React.useState(
        {
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg"
        }
    )

    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    console.log(allMemes)

    function getRandomMeme() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }


    return (
        <div className="meme">
            <div className="meme--form">
                <input className="meme--form--input" 
                    placeholder="Top text"
                    onChange={handleChange}
                    value={meme.topText}
                    name="topText"
                    
                />
                <input className="meme--form--input"
                    placeholder="Bottom text"
                    onChange={handleChange}
                    value={meme.bottomText}
                    name="bottomText"
                />
                <button onClick={getRandomMeme} className="meme--form--button">
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </div>
    )
}


export default Meme