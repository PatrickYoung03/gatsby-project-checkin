import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <h1>Welcome to your isolation "check up". How are you doing?</h1>
    <Link to="/page-3/">Questions></Link>
  </Layout>
)

export default IndexPage

// a title descrbinig what the webpage does
// 'a check in' for isolation.
// a set of questions as you answer each one it takes you to the next question
// questions include 'have you had breakfast', 'have you spoken to anyone on the phone'
// collates a score based on your answers, reccomends things to do if your score is shit
// caluclates your score each day, reviews it, can display daily, weekly and monhtly 'scores/progression'
