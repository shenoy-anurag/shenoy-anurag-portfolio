import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// Components
import Work from "../components/Work"
import Footer from "../components/Footer"

const WorkPage = () => (
  <Layout>
    <SEO title="Anurag Shenoy" />
    {/* <Header></Header> */}
    <Work></Work>
    {/* <About></About> */}
    {/* <Skills></Skills> */}
    {/* <Promotion></Promotion> */}
    <Footer></Footer>
  </Layout>
)

export default WorkPage
