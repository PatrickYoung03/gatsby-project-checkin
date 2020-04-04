import React from "react"
import { Link } from "gatsby"
import Question from "../components/questions/question"

import Layout from "../components/layout"
import SEO from "../components/seo"

const thirdPage = () => (
  <Layout>
    <Question />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default thirdPage

// questions

// Questions 1: How are you feeling on a scale of 1 - 10?
// Answer: sliding scale input 1-10
