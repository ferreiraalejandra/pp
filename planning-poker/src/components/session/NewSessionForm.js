import React, { useState } from 'react';
import { isValidSessionData, sendSessionData } from '../../models/session'
import NewStoryList from './NewStoryList' 

const showSucessMessage = () => {} 
const showResponseErrorMessage = () => {}
const showValidationError = () => {}


const NewSessionForm = () => {
  const [nameFieldIsVisible, setNameFieldIsVisible] = useState(false)
  const [sessionName, setSessionName] = useState('')

  const updateSessionName = evt => {
    console.log('👾👾👾👾👾👾👾👾👾👾', evt.target, evt.target.value)
    setSessionName(evt.target.value)
  }

  const showNameField = (evt) => {
    setNameFieldIsVisible(true)
  }

  const hideNameField = evt => {
    setNameFieldIsVisible(false)
  }

  const savePlanningSession = async evt => {
    console.log('👾👾👾👾👾👾👾👾👾👾 saving...')
    // 1. valido que mis datos sean coherentes 
    if (isValidSessionData({name: sessionName})) {
      // 2. mando los datos al servidor
      const response = await sendSessionData({name: sessionName})

      if (response.status === 200) {
        return showSucessMessage()
      }

      // 3. reviso la respuesta y manejo los posibles errores
      return showResponseErrorMessage()
    }

    showValidationError()
  }

  if (nameFieldIsVisible) return (
    <div>
      <label for='session-name'>Session Name: </label>
      <input id='session-name' value={sessionName} onChange={updateSessionName} />
      <button onClick={hideNameField}>Cancel</button>
      <button onClick={savePlanningSession}>Save</button>
      <NewStoryList />
    </div>
  )
  
  return <button onClick={showNameField}>Create new session</button>
}

export default NewSessionForm