import * as React from "react"
import Layout from "../Layout/layout"
import Projects from "../components/Projects-home"
import Subscribe from "../components/subscribe"
import MailingList from "../components/mailing-list"
import Programs from "../components/programs"
import { GlobalStyle } from "./app.styles";

import cncfLogo from "../assets/images/cncf-horizontal-color.svg"
import layer5logo from "../assets/images/layer5-no-trim.svg"
 
const IndexPage = () => {
  return(
    <>
   <GlobalStyle />
  <Layout>

  <section class="overview-section">
		<div class="container">
			<h1 class="overview-heading" style={{textAlign: "center"}}>Overview</h1>
			<div class="google-slides">
				<iframe
					src="https://docs.google.com/presentation/d/e/2PACX-1vSJdaOJ6MdmYQCyd2c3sbGsa9h7BVqauzBpdeVIKMpAh4eHoStLTMS8hmYJdzT0YTgXzS2chyrLPRzR/embed?start=true&loop=true&delayms=5000"
					frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" loading="lazy">
				</iframe>
			</div>
		</div>
	</section> 
    
    <Projects />
    <section class="bg-white" style={{margin:"auto",maxWidth: "1140px", textAlign:"center", padding:"2rem"}}>
		<div class="container cncf-section" >
			<h4>MESHERY IS A CLOUD NATIVE COMPUTING FOUNDATION PROJECT</h4>
			<img src={cncfLogo} style={{maxWidth:"700px"}} class="cncf-img" alt="CNCF Logo" loading="lazy"/>
			<div style={{textAlign:"center"}}>
				<span class="layer5-caption" >
					Created by
						<img src={layer5logo} href="https://layer5.io/" style={{width:"110px", margin:"0 1rem"}} target="_blank" alt="Layer5 Logo"/>
				and its open source community.
				</span>
			</div>
		</div>
	</section>

    <div class="reversehero" style={{display: "flex",gap:"3rem",justifyContent: "center", color: "#ffffff", textAlign: "center", padding:"4rem 5vw" ,   background: "linear-gradient(to top, #395054 0%, #00d3a9 100%) no-repeat #a05fb7"}}>
    <Subscribe />
    <MailingList />
    </div>
     <Programs /> 
    </Layout>
    </>
  )
}

export default IndexPage
