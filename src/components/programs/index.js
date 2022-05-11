import React from 'react'
import ProgramsWrapper from "./programs.style"

import Gsoc from "../../assets/images/programs/gsoc.svg"
import CNCF from "../../assets/images/programs/cncf-icon-white.svg"
import Gsod from "../../assets/images/programs/gsod.svg"
import LFX from "../../assets/images/programs/lfx-logo.svg"


 const Programs = () => {
  return (
    <ProgramsWrapper>
      <section class="programs-section" style={{padding: "4rem auto 4rem auto", background:"#3c494f"}}>
		<h3 style={{textAlign: "center", color:"aliceblue"}}>

			Learn about Meshery's participation in <a href="/programs" style={{textDecoration: "none", color: "gold"}}>various open source
			programs</a>.
		</h3>
    <div id="gsoc-2020" className="card-content flex">
  <span class="minicard-span">
    <a
      class="smallcard-a waves-effect waves-light btn white-text darken-2 l5-dark-green z-depth-2"
      href="/programs/meshery/cncf"
    >
      <img
        src={CNCF}
        alt="CNCF"
        class="minicard-img"
      />

      <span class="inner-span">CNCF</span>
    </a>
  </span>
  <span class="minicard-span">
    <a
      class="smallcard-a waves-effect waves-light btn white-text darken-2 l5-dark-green z-depth-2"
      href="/programs/gsod/2020"
    >
      <img
        src={Gsod}
        alt="GSOD2020"
        class="minicard-img"
      />
      <span class="inner-span">GSOD</span>
    </a>
  </span>
  <span class="minicard-span">
    <a
      class="smallcard-a waves-effect waves-light btn white-text darken-2 l5-dark-green z-depth-2"
      href="/programs/gsoc/2020"
    >
      <img
        src={Gsoc}
        alt="GSOC"
        class="minicard-img"
      />
      <span class="inner-span">GSOC </span>
    </a>
  </span>
  <span class="minicard-span">
    <a
      class="smallcard-a waves-effect waves-light btn white-text darken-2 l5-dark-green z-depth-2"
      href="/programs/lfx"
    >
      <img
        src={LFX}
        alt="LFX"
        class="minicard-img"
        // style="width:23%;padding-top:.4rem;padding-bottom:.4rem;"
      />
      <span class="inner-span">LFX </span></a>
  </span>
</div>
</section>
</ProgramsWrapper>
  )
}

export default Programs;
