import React from 'react'
import ProgramsWrapper from "./programs.style"

import Gsoc from "../../assets/images/programs/gsoc.svg"
import CNCF from "../../assets/images/programs/cncf-icon-white.svg"
import Gsod from "../../assets/images/programs/gsod.svg"
import LFX from "../../assets/images/programs/lfx-logo.svg"


 const Programs = () => {
  return (
    <ProgramsWrapper>
      <section className="programs-section" >
		<h3>
			Learn about Meshery's participation in <a href="/programs">various open source
			programs</a>.
		</h3>
    <div id="gsoc-2020" className="card-content flex">
  <span className="minicard-span">
    <a className="smallcard-a waves-effect waves-light btn white-text darken-2 l5-dark-green z-depth-2">
      <img
        src={CNCF}
        alt="CNCF"
        href="/programs/meshery/cncf"
        className="minicard-img"
      />

      <span className="inner-span">CNCF</span>
    </a>
  </span>
  <span className="minicard-span">
    <a
      className="smallcard-a waves-effect waves-light btn white-text darken-2 l5-dark-green z-depth-2"
      href="/programs/gsod/2020"
    >
      <img
        src={Gsod}
        alt="GSOD2020"
        className="minicard-img"
      />
      <span className="inner-span">GSOD</span>
    </a>
  </span>
  <span className="minicard-span">
    <a
      className="smallcard-a waves-effect waves-light btn white-text darken-2 l5-dark-green z-depth-2"
      href="/programs/gsoc/2020"
    >
      <img
        src={Gsoc}
        alt="GSOC"
        clasNames="minicard-img"
      />
      <span className="inner-span">GSOC </span>
    </a>
  </span>
  <span clasNames="minicard-span">
    <a
      className="smallcard-a waves-effect waves-light btn white-text darken-2 l5-dark-green z-depth-2"
      href="/programs/lfx"
    >
      <img
        src={LFX}
        alt="LFX"
        className="minicard-img"
        // style="width:23%;padding-top:.4rem;padding-bottom:.4rem;"
      />
      <span className="inner-span">LFX </span></a>
  </span>
</div>
</section>
</ProgramsWrapper>
  )
}

export default Programs;
