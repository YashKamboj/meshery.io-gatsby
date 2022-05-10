import React from 'react'

 const Programs = () => {
  return (
    <div id="gsoc-2020" class="card-content flex">
  <span class="minicard-span">
    <a
      class="smallcard-a waves-effect waves-light btn white-text darken-2 l5-dark-green z-depth-2"
      href="/programs/meshery/cncf"
    >
      <img
        src="../images/programs/cncf-icon-white.svg"
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
        src="../images/programs/gsod.svg"
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
        src="../images/programs/gsoc.svg"
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
        src="../images/programs/lfx-logo.svg"
        alt="LFX"
        class="minicard-img"
        // style="width:23%;padding-top:.4rem;padding-bottom:.4rem;"
      />
      <span class="inner-span">LFX </span></a>
  </span>
</div>
  )
}

export default Programs;
