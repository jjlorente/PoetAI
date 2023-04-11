import React, {useState} from 'react'
import './CSS/Form.css'
import poemTypes from './json/poem-types.json'
import { Loader } from './Loader';


export const Form = (props) => {
  const [selectedOption, setSelectedOption] = useState('Romance');
  const [selectedDescription, setSelectedDescription] = useState(poemTypes['Romance']);
  const [loading, setLoading] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option)
    setSelectedDescription(poemTypes[option])
  };

  const handleSubmit = (event) => {
    setLoading(true);
    event.preventDefault(); 
    const inputDedicated = document.getElementById("dedicado-a").value
    event.target.reset();

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({ descriptionPoem: selectedDescription, poemType: selectedOption, dedicated: inputDedicated })
    };

    fetch("/api/poems", requestOptions).then(
      response => response.json()
    ).then(
      data => {
        props.onSubmit(data, selectedOption, inputDedicated);

        setLoading(false);
      }
    ).catch(error => console.error(error));
  }
  
  const buttons = Object.keys(poemTypes).map((type, index) => (
    <button 
        key={index} 
        type="button" 
        onClick={() => handleOptionClick(type)}
        className={selectedOption === type ? 'active' : ''}
        >
            {type}
    </button>
  ));

  return (
    <div className='Form'>
        <form onSubmit={handleSubmit}>
            <div className='poem-type div-form'>
                <label htmlFor="poem-type">Selecciona un tipo de poema:</label>
                <div className='buttons-types'>
                    {buttons}
                </div>
                {selectedOption && (
                    <div>
                        <span>{selectedDescription}</span>
                    </div>
                )}
            </div>
            <div className='input-person div-form'>
                <label htmlFor="dedicado-a">Nombre al que deseas dedicar tu poema:</label>
                <input id="dedicado-a" required className='input' minLength={4} maxLength={30} placeholder='Rocío / Ismael / Toby / fútbol / mar / etc...' type="text" name="dedicado-a"/>
            </div>
            <button type="sumbit">¡Crear poema!</button>
        </form>
        {loading && (
            <div className="loader-container">
                <Loader/>
            </div>
        )}
    </div>
  )
}
