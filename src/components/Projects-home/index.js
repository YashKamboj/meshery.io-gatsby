import React from "react";
import ProjectItemWrapper from "./projectSection.style";

import projectImage3 from "../../assets/images/meshery-logo-light.png";


const Projects = () => {
  return (
    <ProjectItemWrapper id="projects">
      <div class="callout">
        <a class="card" href="https://bit.ly/2SbrRhe" target="_blank">
          <h3>Community Calendar</h3>
          <p class="small">Join the weekly meetings by subscribing to our community calendar</p>
          <img class="go-corner" src={projectImage3} href="https://bit.ly/2SbrRhe" />
        </a>
        <a class="card" href="https://www.youtube.com/c/Layer5io?sub_confirmation=1" target="_blank">
          <h3>Community Meetings</h3>
          <p class="small">Watch community meeting recordings on our YouTube channel</p>
          <img class="go-corner" src={projectImage3} href="https://www.youtube.com/channel/UCFL1af7_wdnhHXL1InzaMvA" />
        </a>
        <a class="card" href="https://discuss.layer5.io" target="_blank">
          <h3>Join the Conversation</h3>
          <p class="small">Ask questions, find answers and share knowledge on our Discussion Forum</p>
          <img class="go-corner" src={projectImage3} href="https://discuss.layer5.io" />
        </a>
        <a class="card" href="https://docs.google.com/document/d/17OPtDE_rdnPQxmk2Kauhm3GwXF1R5dZ3Cj8qZLKdo5E/edit" target="_blank">
          <h3>Community Guide</h3>
          <p class="small">Read the Welcome Guide to familiarize yourself with the community</p>
          <img class="go-corner" src={projectImage3} href="https://docs.google.com/document/d/17OPtDE_rdnPQxmk2Kauhm3GwXF1R5dZ3Cj8qZLKdo5E/edit" />
        </a>
      </div>

    </ProjectItemWrapper>
  );
};

export default Projects;
