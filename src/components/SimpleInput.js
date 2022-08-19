import { useState } from 'react'

const SimpleInput = () => {
  const [enteredName, setEnteredName] = useState('')
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false)
  const [enteredNameTouched, setEnteredNameTouched] = useState(false)

  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value)
  }

  const formSubmitHandler = (e) => {
    e.preventDefault()

    // On submit, all inputs are considered "touched"
    setEnteredNameTouched(true)

    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false)
      return
    }
    setEnteredNameIsValid(true)
    console.log(enteredName)
  }

  // boolean var to check if both enteredname is invalid and the entered name was touched by user
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched

  const nameInputClasses = nameInputIsInvalid
    ? 'form-control invalid'
    : 'form-control'

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p style={{ color: 'red' }}>Name must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  )
}

export default SimpleInput
