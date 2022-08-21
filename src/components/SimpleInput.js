import { useState } from 'react'

const SimpleInput = () => {
  const [enteredName, setEnteredName] = useState('')
  const [enteredNameTouched, setEnteredNameTouched] = useState(false)

  const [enteredEmail, setEnteredEmail] = useState('')
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false)

  // inferred state for boolean isValid. Validity not managed via state
  const enteredNameIsValid = enteredName.trim() !== ''

  const enteredEmailIsValid =
    // eslint-disable-next-line
    enteredEmail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) &&
    enteredEmail.trim() !== ''

  // boolean var to check if both enteredname is invalid and the entered name was touched by user
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched

  let formIsValid = false

  if (enteredNameIsValid && enteredEmailIsValid) {
    // Add more boolean checks w/ && for every form input that gets added
    // If all are valid whole form is valid
    formIsValid = true
  }

  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value)
  }

  const emailInputChangeHandler = (e) => {
    setEnteredEmail(e.target.value)
  }

  const nameInputBlurHandler = (e) => {
    // name was touched
    setEnteredNameTouched(true)
  }

  const emailInputBlurHandler = (e) => {
    setEnteredEmailTouched(true)
  }

  const formSubmitHandler = (e) => {
    e.preventDefault()
    // On submit, all inputs are considered "touched"
    setEnteredNameTouched(true)
    setEnteredEmailTouched(true)

    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return
    }
    // reset name and touched states
    setEnteredName('')
    setEnteredNameTouched(false)
    setEnteredEmail('')
    setEnteredEmailTouched(false)
  }

  const nameInputClasses = nameInputIsInvalid
    ? 'form-control invalid'
    : 'form-control'

  const emailInputClasses = emailInputIsInvalid
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
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p style={{ color: 'red' }}>Name must not be empty</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {emailInputIsInvalid && (
          <p style={{ color: 'red' }}>Email must be valid email</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  )
}

export default SimpleInput
