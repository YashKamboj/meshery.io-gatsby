import * as React from "react"
import Layout from "../Layout/layout"
import Projects from "../components/Projects-home"
import Subscribe from "../components/subscribe"
import MailingList from "../components/mailing-list"
import Programs from "../components/programs"
import { GlobalStyle } from "./app.styles";

import cncfLogo from "../assets/images/cncf-horizontal-color.svg"
import layer5logo from "../assets/images/layer5-white-no-trim.svg"
 
// markup
const IndexPage = () => {
  return(
    <>
   <GlobalStyle />
  <Layout>
    <Projects />
    
    <section class="bg-white">
		<div class="container cncf-section" >
			<h4>MESHERY IS A CLOUD NATIVE COMPUTING FOUNDATION PROJECT</h4>
			<img src={cncfLogo} class="cncf-img" alt="CNCF Logo" loading="lazy"/>
			<p>
				<span class="layer5-caption">
					Created by
						<img src={layer5logo} href="https://layer5.io/" target="_blank" alt="Layer5 Logo"/>
				and its open source community.
				</span>
			</p>
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
