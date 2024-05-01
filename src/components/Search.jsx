import { Image, PaperPlaneRight} from 'phosphor-react'
import React, { useState } from 'react'
import { chatWithAzureML } from '../function/post'

const Search = () => {
    const [searchValue, setSearchValue] = useState('')
    const [response, setResponse] = useState('')

    const handleInputChange = (event) => {
        setSearchValue(event.target.value)
    }

    const handleButtonClick = async () => {
        const response = await chatWithAzureML(searchValue)
        setResponse(response)
    }

    return (
        <div className='search-styled'>
            <div>
                <input 
                    autoFocus 
                    type="text" 
                    placeholder='Votre question' 
                    value={searchValue} 
                    onChange={handleInputChange}
                />
                <Image weight='bold' size={25} />
                <button onClick={handleButtonClick}>
                    <PaperPlaneRight weight='bold' size={25} />
                </button>
            </div>
            <p>{response}</p>
            <p>Il est possible de générer des informations imprécises, y compris des données sur des personnes, afin que vous deviez vérifier vos réponses.</p>
        </div>
    )
}

export default Search