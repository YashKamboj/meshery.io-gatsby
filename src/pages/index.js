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

    <section class="reversehero">
    <Subscribe />
    <MailingList />
    </section>
     <Programs /> 
    </Layout>
    </>
  )
}

export default IndexPage
