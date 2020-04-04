import React, { useState } from "react"
import css from "./question.module.css"

function Question() {
  const [sliderValue, setSliderValue] = useState(0)
  const [totalScore, setTotalScore] = useState(0)
  //const [question, setQuestion] = useState({})

  function handleSlide(e) {
    setSliderValue(e.target.value)
    //console.log(e.target.value)
  }

  function addToScore() {
    const updatedScore = Number(sliderValue) + Number(totalScore)
    setTotalScore(updatedScore)
    console.log(totalScore)
  }

  return (
    <>
      <div>Question 1: How do you feel on a scale of 1 - 10</div>
      <div class={css.slideContainer}>
        <input
          type="range"
          min="1"
          max="10"
          value={sliderValue}
          class="slider"
          id="myRange"
          onChange={handleSlide}
        />
        {sliderValue}
      </div>
      <button onClick={addToScore}>Submit Answer</button>
      <div>Total Score: {totalScore}</div>
    </>
  )
}

export default Question
