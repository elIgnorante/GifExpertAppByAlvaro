import { useState } from "react"

export const AddCategory = ({ onNewValue }) => {

  const [inputValue, setInputValue] = useState('')
  
  const onInputChange = ( event ) => {
    setInputValue( event.target.value);
  }

  const onSubmit = ( event) => {
    event.preventDefault();
    // Asegúrate de que inputValue no esté vacío
    if (inputValue.trim().length > 0) {
      onNewValue( inputValue );
      setInputValue('');
    }
  }

  return (
    <form onSubmit={ onSubmit }>
        <input 
            type="text"
            placeholder="Buscar Gifs"
            value={ inputValue }
            onChange={ onInputChange }

        />
    </form>
  )
}
