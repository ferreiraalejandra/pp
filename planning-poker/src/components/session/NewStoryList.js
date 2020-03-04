import React, { useState } from 'react';

const NewStory = ({ onSave }) => {
  const [storyTitle, setStoryTitle] = useState('')
  const [storyDescription, setStoryDescription] = useState('')

  const updateStoryTitle = evt => {
    setStoryTitle(evt.target.value)
  }

  const updateStoryDescription = evt => {
    setStoryDescription(evt.target.value)
  }

  const saveStory = (evt) => {
    const story = {
      title: storyTitle,
      description: storyDescription,
    }
    onSave(story)
  }


  return (
    <div>
      <label for='story-title'>Story Title: </label>
      <input id='story-title' value={storyTitle} onChange={updateStoryTitle} />
      <label for='story-description'>Story Description: </label>
      <input id='story-description' value={storyDescription} onChange={updateStoryDescription} />
      <button onClick={saveStory}>Save</button>
      <button>Cancel</button>
    </div>
  )
}

const NewStoryList = () => {
  const [storyList, setStoryList] = useState([])
  const [newStoryFormIsVisible, setNewStoryFormVisibility] = useState(false)

  const showNewStoryForm = (evt) => {
    setNewStoryFormVisibility(true)
  }

  const addStoryToList = (story) => {
    setStoryList([...storyList, story])
    setNewStoryFormVisibility(false)
  }

  if (newStoryFormIsVisible) return <NewStory onSave={addStoryToList}/>

  return (
    <ul>
      <button onClick={showNewStoryForm}>Add story</button>
      {storyList.map(story => <li>{story.title} - {story.description}</li>)}
    </ul>
  )
}


export default NewStoryList