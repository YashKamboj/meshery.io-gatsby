import React from "react";
import Layout from "../Layout/layout";
import TutorialsTable from "../components/talks-and-presentation.js/tutorials";

const Talks_and_presentation_Page = () => {
  return (
    <Layout>
      <div
        class="container flex"
        style={{ maxWidth: "1140px", margin: "auto" }}
      >
        <div class="text talks-description">
          <h2>
            CNCF On-Demand Webinar:{" "}
            <strong>Meshery - The Service Mesh Manager</strong>
          </h2>
          <p>
            {" "}
            This webinar introduces Meshery, an open-source, multi-service mesh
            management plane that can provision nine different service meshes,
            their sample applications and benchmarks the performance of service
            mesh deployments.
          </p>
          <br />
          <div class="button-para">
            <button class="link open-modal-btn ">
              Find video and slides here
            </button>
          </div>
        </div>

        <TutorialsTable />
      </div>
    </Layout>
  );
};

export default Talks_and_presentation_Page;
