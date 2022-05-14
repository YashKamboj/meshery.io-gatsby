import mesherycloud from "../../assets/images/meshery-cloud.png";
import infoImage1 from "../../assets/images/configuration-best-practices.gif";
import infoImage2 from "../../assets/images/meshery-dashboard-no-shadow.png";
import infoImage3 from "../../assets/images/meshery-wasm.png";
import infoImage4 from "../../assets/images/service mesh performance example.gif";
import infoImage5 from "../../assets/images/service-mesh-performance-example.gif";
import infoImage6 from "../../assets/images/smi-conformance.png";

const Data = [
  {
    img: infoImage1,
    title: "Operate with configuration best practices",
    content:
      "Assess your service mesh configuration against deployment and operational best practices with Meshery's configuration validator.",
    button: "learn more",
  },
  {
    img: infoImage2,
    title: "Use the Service Mesh Performance standard",
    content:
      "Weigh the value of your service mesh features in-context of it's overhead.",
    button: "See the Meshery Documentation",
  },
  {
    img: infoImage3,
    title: "Is your service mesh SMI compliant?",
    content:
      "Validate your service mesh's conformance to Service Mesh Interface (SMI) specifications.",
  },
  {
    img: infoImage4,
    title: "Manage data plane intelligence with WebAssembly filters",
    content:
      "Dynamically load and manage your own WebAssembly filters in Envoy-based service meshes. ",
  },
  {
    img: infoImage5,
    title: "Which service mesh should I use and how do I get started?",
    content:
      "Learn about the functionality of different service meshes and visually manipulate mesh configuration.",
  },
  {
    img: infoImage6,
    title: "Manage the performance of your service mesh and its workloads",
    content:
      "Use performance profiles to track the historical performance of your workloads",
  },
];

export default Data;
