import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { saveAs } from 'file-saver';

function App() {
  const [meme, setMeme] = useState("")
  const [title, setTitle] = useState("")

  useEffect(() => {
    axios.get('https://meme-api.herokuapp.com/gimme')
      .then(function (response) {
        setMeme(response.data.url);
        setTitle(response.data.title)
      })
  }, []);

  function newMeme(e) {

    e.preventDefault();

    axios.get('https://meme-api.herokuapp.com/gimme')
      .then((response) => {
        setMeme(response.data.url);
      })

  }

  const downloadMeme = (e) => {
    saveAs(`https://whispering-lowlands-76105.herokuapp.com/${meme}`, title);
  }



  return (
    <>
      <div className='main-container'>
        <h2>Get, Download and Share Random Memes</h2>
        <img className='meme' alt='Meme is Loading' src={meme} />

        <form className='form' onSubmit={newMeme}>
          <button className='newMeme'>Get New Meme</button>
        </form>

        <button onClick={downloadMeme} type='submit' className='newMeme download'>Download</button>
      </div>
    </>
  );
}

export default App;


