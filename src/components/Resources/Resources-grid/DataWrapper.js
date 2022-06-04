import React from "react";
import pattern1 from "../../../assets/images/patterns/service-mesh.svg";
import pattern2 from "../../../assets/images/patterns/circuit-breaker.svg";
import pattern3 from "../../../assets/images/patterns/rate-limit.svg";

 import Istio from "../../../assets/images/adapters/istio.svg";
 import Linkerd from "../../../assets/images/adapters/linkerd.svg";
 import AppMesh from "../../../assets/images/adapters/aws-app-mesh.svg";
 import OSM from "../../../assets/images/adapters/osm.svg";
 import Nginx from "../../../assets/images/adapters/nginx-sm.svg";
 import Kuma from "../../../assets/images/adapters/Kuma.svg";
 import Consul from "../../../assets/images/adapters/consul.svg";
 import NSM from "../../../assets/images/adapters/nsm.svg";
 import Traefik from "../../../assets/images/adapters/traefik-mesh.svg";

// Libraries
// import { useStaticQuery, graphql } from "gatsby";

const DataWrapper = (WrappedComponent) => {
  return (props) => {


const data = [
  {
    name: "Basic Istio Install",
    filters: {
      type: "Deployment",
      compatibility: ["Istio"],
      technology: "WebAssembly",
    },
    compatibility: Istio ,
    Id: "MESHERY001",
    image: pattern1,
    patternInfo:
      "A demo configuration designed to showcase Istio functionality with modest resource requirements. It is suitable to run the Bookinfo application and associated tasks. This is the configuration that is installed with the quick start instructions.",
    patternCaveats: "Not a suitable production deployment configuration. ",
    URL: "https://raw.githubusercontent.com/service-mesh-patterns/service-mesh-patterns/master/samples/IstioFilterPattern.yaml",
    downloadLink: "IstioFilterPattern.yaml",
  },
  {
    name: "Circuit Breaker",
    filters: {
      type: "Traffic Management",
      compatibility: [
        "Istio",
        "Linkerd",
        "App Mesh",
        "OSM",
        "Nginx",
        "Kuma",
        "Consul",
        "NSM",
        "Traefik",
      ],
      technology: "JWT",
    },
    compatibility: 
    {  Istio,
      Linkerd,
      AppMesh,
      OSM,
      Nginx,
      Kuma,
      Consul,
      NSM,
      Traefik,
        }    ,
    Id: "MESHERY002",
    image: pattern2,
    patternInfo:
      "Circuit breaking is a foundation pattern designed to remove endpoints that persistently return error messages from a load-balanced group.  Circuit Breakers go hand in hand with the retry pattern; while a retry attempts to recover from an endpoint returning an error when the system knows an endpoint is failing, a circuit breaker ensures that it is no longer called.",
    patternCaveats:
      "If the specific fault reported is unusual or rare, it might have been caused by unusual circumstances such as a network packet becoming corrupted while it was being transmitted. In this case, the service mesh could retry the failing request again immediately because the same failure is unlikely to be repeated and the request will probably be successful.",
    URL: "",
    downloadLink: "",
  },
  {
    name: "Local Rate Limiter",
    filters: {
      type: "Traffic Management",
      compatibility: ["Istio", "Kuma"],
      technology: "",
    },
    compatibility: {Istio, Kuma},
    Id: "MESHERY003",
    image: pattern3,
    patternInfo:
      "Local rate limiting is used to limit the rate of requests per service instance. Local rate limiting can be used in conjunction with global rate limiting to reduce load on the global rate limiting service.",
    patternCaveats:
      "Envoy supports local rate limiting of L4 connections and HTTP requests. This allows you to apply rate limits at the instance level, in the proxy itself, without calling any other service.",
    URL: "",
    downloadLink: "",
  },
  {
    name: "Duration-based Canary",
    filters: {
      type: "Traffic Management",
      compatibility: ["Linkerd"],
      technology: "",
    },
    Id: "MESHERY004",
    image: pattern1,
    patternInfo:
      "Gradual and measured introduction of a new version of an application is commonly called a Canary deployment.  With a canary deployment, you deploy a new version of your application to the production environment; however, it initially receives no user requests. The previous version continues to handle 100% of the requests.<br/><br/>Traffic is gradually distributed to the new version of the service while monitoring it for errors or anomalies. Incremental increases to the new service’s traffic continue until the new service handles 100% of all traffic, and you remove the previous service version. If you detect unsatisfactory levels of errors at any point, traffic is reverted to the old version. Because the service meshes routing later handles traffic direction, it is incredibly quick to change the traffic flow. Also, there is a dramatic reduction to risk as you hopefully catch any errors before exposure to the problem affects all users.",
    patternCaveats:
      "<em>Parallel Change</em><br/><br/> When introducing a new version of an application into production, you are often required to: <br/><br/>- Change or modify the application’s behavior.<br/>- Change the interface.<br/>- Change a model in an external data store.",
    URL: "",
    downloadLink: "",
  },
  {
    name: "Debugging the Data Plane",
    filters: {
      type: "Troubleshooting",
      compatibility: ["Linkerd"],
      technology: "",
    },
    Id: "MESHERY005",
    image: pattern1,
    Status: "ComingSoon",
    patternInfo:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar placerat tellus sed posuere. Nulla venenatis fringilla faucibus. Etiam et commodo dolor, sit amet fringilla leo. Nullam tristique tristique condimentum. Maecenas sollicitudin scelerisque egestas. Suspendisse aliquet elit quis dolor gravida, et auctor ligula ornare. Nullam et sodales ante, quis varius elit. Nullam cursus, orci eleifend tristique semper, neque nisl tincidunt purus, sed ultricies felis arcu vel metus.",
    patternCaveats:
      "llam tristique tristique condimentum. Maecenas sollicitudin scelerisque egestas. Suspendisse aliquet elit quis dolor gravida, et auctor ligula ornare. Nullam et sodales ante, quis varius elit. Nullam cursus, orci eleifend tristique semper, neque nisl tincidunt purus, sed ultricies felis arcu vel metus. ",
    URL: "",
    downloadLink: "",
  },
  {
    name: "Service Mesh Adapter",
    filters: {
      type: "Traffic Management",
      compatibility: ["Istio"],
      technology: "",
    },
    Id: "MESHERY006",
    image: pattern1,
    Status: "ComingSoon",
    patternInfo:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar placerat tellus sed posuere. Nulla venenatis fringilla faucibus. Etiam et commodo dolor, sit amet fringilla leo. Nullam tristique tristique condimentum. Maecenas sollicitudin scelerisque egestas. Suspendisse aliquet elit quis dolor gravida, et auctor ligula ornare. Nullam et sodales ante, quis varius elit. Nullam cursus, orci eleifend tristique semper, neque nisl tincidunt purus, sed ultricies felis arcu vel metus.",
    patternCaveats:
      "llam tristique tristique condimentum. Maecenas sollicitudin scelerisque egestas. Suspendisse aliquet elit quis dolor gravida, et auctor ligula ornare. Nullam et sodales ante, quis varius elit. Nullam cursus, orci eleifend tristique semper, neque nisl tincidunt purus, sed ultricies felis arcu vel metus. ",
    URL: "",
    downloadLink: "",
  },
  {
    name: "Timeouts",
    filters: {
      type: "Traffic Management",
      compatibility: ["Istio"],
      technology: "",
    },
    Id: "MESHERY007",
    image: pattern1,
    Status: "ComingSoon",
    patternInfo:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar placerat tellus sed posuere. Nulla venenatis fringilla faucibus. Etiam et commodo dolor, sit amet fringilla leo. Nullam tristique tristique condimentum. Maecenas sollicitudin scelerisque egestas. Suspendisse aliquet elit quis dolor gravida, et auctor ligula ornare. Nullam et sodales ante, quis varius elit. Nullam cursus, orci eleifend tristique semper, neque nisl tincidunt purus, sed ultricies felis arcu vel metus.",
    patternCaveats:
      "llam tristique tristique condimentum. Maecenas sollicitudin scelerisque egestas. Suspendisse aliquet elit quis dolor gravida, et auctor ligula ornare. Nullam et sodales ante, quis varius elit. Nullam cursus, orci eleifend tristique semper, neque nisl tincidunt purus, sed ultricies felis arcu vel metus. ",
    URL: "",
    downloadLink: "",
  },
  {
    name: "Egress Gateways",
    filters: {
      type: "Security",
      compatibility: ["Linkerd"],
      technology: "",
    },
    Id: "MESHERY008",
    image: pattern1,
    Status: "ComingSoon",
    patternInfo:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar placerat tellus sed posuere. Nulla venenatis fringilla faucibus. Etiam et commodo dolor, sit amet fringilla leo. Nullam tristique tristique condimentum. Maecenas sollicitudin scelerisque egestas. Suspendisse aliquet elit quis dolor gravida, et auctor ligula ornare. Nullam et sodales ante, quis varius elit. Nullam cursus, orci eleifend tristique semper, neque nisl tincidunt purus, sed ultricies felis arcu vel metus.",
    patternCaveats:
      "llam tristique tristique condimentum. Maecenas sollicitudin scelerisque egestas. Suspendisse aliquet elit quis dolor gravida, et auctor ligula ornare. Nullam et sodales ante, quis varius elit. Nullam cursus, orci eleifend tristique semper, neque nisl tincidunt purus, sed ultricies felis arcu vel metus. ",
    URL: "",
    downloadLink: "",
  },
  {
    name: "Segmenting the Monolith",
    filter: {
      type: "Workloads",
      compatibility: ["Linkerd"],
      technology: "",
    },
    Id: "MESHERY009",
    image: pattern1,
    Status: "ComingSoon",
    patternInfo:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar placerat tellus sed posuere. Nulla venenatis fringilla faucibus. Etiam et commodo dolor, sit amet fringilla leo. Nullam tristique tristique condimentum. Maecenas sollicitudin scelerisque egestas. Suspendisse aliquet elit quis dolor gravida, et auctor ligula ornare. Nullam et sodales ante, quis varius elit. Nullam cursus, orci eleifend tristique semper, neque nisl tincidunt purus, sed ultricies felis arcu vel metus.",
    patternCaveats:
      "llam tristique tristique condimentum. Maecenas sollicitudin scelerisque egestas. Suspendisse aliquet elit quis dolor gravida, et auctor ligula ornare. Nullam et sodales ante, quis varius elit. Nullam cursus, orci eleifend tristique semper, neque nisl tincidunt purus, sed ultricies felis arcu vel metus. ",
    URL: "",
    downloadLink: "",
  },
  {
    name: "Brownfield Environments",
    filter: {
      type: "Worloads",
      compatibility: ["Linkerd"],
      technology: "",
    },
    Id: "MESHERY010",
    image: pattern1,
    Status: "ComingSoon",
    patternInfo:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar placerat tellus sed posuere. Nulla venenatis fringilla faucibus. Etiam et commodo dolor, sit amet fringilla leo. Nullam tristique tristique condimentum. Maecenas sollicitudin scelerisque egestas. Suspendisse aliquet elit quis dolor gravida, et auctor ligula ornare. Nullam et sodales ante, quis varius elit. Nullam cursus, orci eleifend tristique semper, neque nisl tincidunt purus, sed ultricies felis arcu vel metus.",
    patternCaveats:
      "llam tristique tristique condimentum. Maecenas sollicitudin scelerisque egestas. Suspendisse aliquet elit quis dolor gravida, et auctor ligula ornare. Nullam et sodales ante, quis varius elit. Nullam cursus, orci eleifend tristique semper, neque nisl tincidunt purus, sed ultricies felis arcu vel metus. ",
    URL: "",
    downloadLink: "",
  },
  {
    name: "Service Mesh Adapter",
    filter: {
      type: "Traffic Management",
      compatibility: ["Linkerd"],
      technology: "",
    },
    Id: "MESHERY011",
    image: pattern1,
    Status: "ComingSoon",
    patternInfo:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar placerat tellus sed posuere. Nulla venenatis fringilla faucibus. Etiam et commodo dolor, sit amet fringilla leo. Nullam tristique tristique condimentum. Maecenas sollicitudin scelerisque egestas. Suspendisse aliquet elit quis dolor gravida, et auctor ligula ornare. Nullam et sodales ante, quis varius elit. Nullam cursus, orci eleifend tristique semper, neque nisl tincidunt purus, sed ultricies felis arcu vel metus.",
    patternCaveats:
      "llam tristique tristique condimentum. Maecenas sollicitudin scelerisque egestas. Suspendisse aliquet elit quis dolor gravida, et auctor ligula ornare. Nullam et sodales ante, quis varius elit. Nullam cursus, orci eleifend tristique semper, neque nisl tincidunt purus, sed ultricies felis arcu vel metus. ",
    URL: "",
    downloadLink: "",
  },
  {
    name: "Data Plane extensibility",
    filter: {
      type: "Observability",
      compatibility: ["Linkerd"],
      technology: "",
    },
    Id: "MESHERY012",
    image: pattern1,
    Status: "ComingSoon",
    patternInfo:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar placerat tellus sed posuere. Nulla venenatis fringilla faucibus. Etiam et commodo dolor, sit amet fringilla leo. Nullam tristique tristique condimentum. Maecenas sollicitudin scelerisque egestas. Suspendisse aliquet elit quis dolor gravida, et auctor ligula ornare. Nullam et sodales ante, quis varius elit. Nullam cursus, orci eleifend tristique semper, neque nisl tincidunt purus, sed ultricies felis arcu vel metus.",
    patternCaveats:
      "llam tristique tristique condimentum. Maecenas sollicitudin scelerisque egestas. Suspendisse aliquet elit quis dolor gravida, et auctor ligula ornare. Nullam et sodales ante, quis varius elit. Nullam cursus, orci eleifend tristique semper, neque nisl tincidunt purus, sed ultricies felis arcu vel metus. ",
    URL: "",
    downloadLink: "",
  },
  {
    name: "Debugging Control Plane",
    filter: {
      type: "Troubleshooting",
      compatibility: ["Linkerd"],
      technology: "",
    },
    Id: "MESHERY013",
    image: pattern1,
    Status: "ComingSoon",
    patternInfo:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar placerat tellus sed posuere. Nulla venenatis fringilla faucibus. Etiam et commodo dolor, sit amet fringilla leo. Nullam tristique tristique condimentum. Maecenas sollicitudin scelerisque egestas. Suspendisse aliquet elit quis dolor gravida, et auctor ligula ornare. Nullam et sodales ante, quis varius elit. Nullam cursus, orci eleifend tristique semper, neque nisl tincidunt purus, sed ultricies felis arcu vel metus.",
    patternCaveats:
      "llam tristique tristique condimentum. Maecenas sollicitudin scelerisque egestas. Suspendisse aliquet elit quis dolor gravida, et auctor ligula ornare. Nullam et sodales ante, quis varius elit. Nullam cursus, orci eleifend tristique semper, neque nisl tincidunt purus, sed ultricies felis arcu vel metus. ",
    URL: "",
    downloadLink: "",
  },
  {
    name: "Load balancing Algs",
    filter: {
      type: "Traffic Management",
      compatibility: ["Linkerd"],
      technology: "",
    },
    Id: "MESHERY014",
    image: pattern1,
    Status: "ComingSoon",
    patternInfo:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar placerat tellus sed posuere. Nulla venenatis fringilla faucibus. Etiam et commodo dolor, sit amet fringilla leo. Nullam tristique tristique condimentum. Maecenas sollicitudin scelerisque egestas. Suspendisse aliquet elit quis dolor gravida, et auctor ligula ornare. Nullam et sodales ante, quis varius elit. Nullam cursus, orci eleifend tristique semper, neque nisl tincidunt purus, sed ultricies felis arcu vel metus.",
    patternCaveats:
      "llam tristique tristique condimentum. Maecenas sollicitudin scelerisque egestas. Suspendisse aliquet elit quis dolor gravida, et auctor ligula ornare. Nullam et sodales ante, quis varius elit. Nullam cursus, orci eleifend tristique semper, neque nisl tincidunt purus, sed ultricies felis arcu vel metus. ",
    URL: "",
    downloadLink: "",
  },
  {
    name: "Retries",
    filter: {
      type: "Traffic Management",
      compatibility: ["Linkerd"],
      technology: "",
    },
    Id: "MESHERY016",
    image: pattern1,
    Status: "ComingSoon",
    patternInfo:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar placerat tellus sed posuere. Nulla venenatis fringilla faucibus. Etiam et commodo dolor, sit amet fringilla leo. Nullam tristique tristique condimentum. Maecenas sollicitudin scelerisque egestas. Suspendisse aliquet elit quis dolor gravida, et auctor ligula ornare. Nullam et sodales ante, quis varius elit. Nullam cursus, orci eleifend tristique semper, neque nisl tincidunt purus, sed ultricies felis arcu vel metus.",
    patternCaveats:
      "llam tristique tristique condimentum. Maecenas sollicitudin scelerisque egestas. Suspendisse aliquet elit quis dolor gravida, et auctor ligula ornare. Nullam et sodales ante, quis varius elit. Nullam cursus, orci eleifend tristique semper, neque nisl tincidunt purus, sed ultricies felis arcu vel metus. ",
    URL: "",
    downloadLink: "",
  },
  {
    name: "Ingress",
    filter: {
      type: "Traffic Management",
      compatibility: ["Linkerd"],
      technology: "",
    },
    Id: "MESHERY017",
    image: pattern1,
    Status: "ComingSoon",
    patternInfo:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar placerat tellus sed posuere. Nulla venenatis fringilla faucibus. Etiam et commodo dolor, sit amet fringilla leo. Nullam tristique tristique condimentum. Maecenas sollicitudin scelerisque egestas. Suspendisse aliquet elit quis dolor gravida, et auctor ligula ornare. Nullam et sodales ante, quis varius elit. Nullam cursus, orci eleifend tristique semper, neque nisl tincidunt purus, sed ultricies felis arcu vel metus.",
    patternCaveats:
      "llam tristique tristique condimentum. Maecenas sollicitudin scelerisque egestas. Suspendisse aliquet elit quis dolor gravida, et auctor ligula ornare. Nullam et sodales ante, quis varius elit. Nullam cursus, orci eleifend tristique semper, neque nisl tincidunt purus, sed ultricies felis arcu vel metus. ",
    URL: "",
    downloadLink: "",
  },
  {
    name: "Foundational Traffic Routing",
    filter: {
      type: "Security",
      compatibility: ["Linkerd"],
      technology: "",
    },
    Id: "MESHERY018",
    image: pattern1,
    Status: "ComingSoon",
    patternInfo:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar placerat tellus sed posuere. Nulla venenatis fringilla faucibus. Etiam et commodo dolor, sit amet fringilla leo. Nullam tristique tristique condimentum. Maecenas sollicitudin scelerisque egestas. Suspendisse aliquet elit quis dolor gravida, et auctor ligula ornare. Nullam et sodales ante, quis varius elit. Nullam cursus, orci eleifend tristique semper, neque nisl tincidunt purus, sed ultricies felis arcu vel metus.",
    patternCaveats:
      "llam tristique tristique condimentum. Maecenas sollicitudin scelerisque egestas. Suspendisse aliquet elit quis dolor gravida, et auctor ligula ornare. Nullam et sodales ante, quis varius elit. Nullam cursus, orci eleifend tristique semper, neque nisl tincidunt purus, sed ultricies felis arcu vel metus. ",
    URL: "",
    downloadLink: "",
  },
  {
    name: "Federation",
    filter: {
      type: "Scaling",
      compatibility: ["Linkerd"],
      technology: "",
    },
    Id: "MESHERY019",
    image: pattern1,
    Status: "ComingSoon",
    patternInfo:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar placerat tellus sed posuere. Nulla venenatis fringilla faucibus. Etiam et commodo dolor, sit amet fringilla leo. Nullam tristique tristique condimentum. Maecenas sollicitudin scelerisque egestas. Suspendisse aliquet elit quis dolor gravida, et auctor ligula ornare. Nullam et sodales ante, quis varius elit. Nullam cursus, orci eleifend tristique semper, neque nisl tincidunt purus, sed ultricies felis arcu vel metus.",
    patternCaveats:
      "llam tristique tristique condimentum. Maecenas sollicitudin scelerisque egestas. Suspendisse aliquet elit quis dolor gravida, et auctor ligula ornare. Nullam et sodales ante, quis varius elit. Nullam cursus, orci eleifend tristique semper, neque nisl tincidunt purus, sed ultricies felis arcu vel metus. ",
    URL: "",
    downloadLink: "",
  },
  {
    name: "Multi-cluster failover",
    filter: {
      type: "Scaling",
      compatibility: ["Linkerd"],
      technology: "",
    },
    Id: "MESHERY020",
    image: pattern1,
    Status: "ComingSoon",
    patternInfo:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar placerat tellus sed posuere. Nulla venenatis fringilla faucibus. Etiam et commodo dolor, sit amet fringilla leo. Nullam tristique tristique condimentum. Maecenas sollicitudin scelerisque egestas. Suspendisse aliquet elit quis dolor gravida, et auctor ligula ornare. Nullam et sodales ante, quis varius elit. Nullam cursus, orci eleifend tristique semper, neque nisl tincidunt purus, sed ultricies felis arcu vel metus.",
    patternCaveats:
      "llam tristique tristique condimentum. Maecenas sollicitudin scelerisque egestas. Suspendisse aliquet elit quis dolor gravida, et auctor ligula ornare. Nullam et sodales ante, quis varius elit. Nullam cursus, orci eleifend tristique semper, neque nisl tincidunt purus, sed ultricies felis arcu vel metus. ",
    URL: "",
    downloadLink: "",
  },
  {
    name: "Cloud bursting",
    filter: {
      type: "Scaling",
      compatibility: ["Linkerd"],
      technology: "",
    },
    Id: "MESHERY021",
    image: pattern1,
    Status: "ComingSoon",
    patternInfo:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar placerat tellus sed posuere. Nulla venenatis fringilla faucibus. Etiam et commodo dolor, sit amet fringilla leo. Nullam tristique tristique condimentum. Maecenas sollicitudin scelerisque egestas. Suspendisse aliquet elit quis dolor gravida, et auctor ligula ornare. Nullam et sodales ante, quis varius elit. Nullam cursus, orci eleifend tristique semper, neque nisl tincidunt purus, sed ultricies felis arcu vel metus.",
    patternCaveats:
      "llam tristique tristique condimentum. Maecenas sollicitudin scelerisque egestas. Suspendisse aliquet elit quis dolor gravida, et auctor ligula ornare. Nullam et sodales ante, quis varius elit. Nullam cursus, orci eleifend tristique semper, neque nisl tincidunt purus, sed ultricies felis arcu vel metus. ",
    URL: "",
    downloadLink: "",
  },
  {
    name: "Sidecar Proxies",
    filter: {
      type: "Deployment",
      compatibility: ["Linkerd"],
      technology: "",
    },
    Id: "MESHERY021",
    image: pattern1,
    Status: "ComingSoon",
    patternInfo:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar placerat tellus sed posuere. Nulla venenatis fringilla faucibus. Etiam et commodo dolor, sit amet fringilla leo. Nullam tristique tristique condimentum. Maecenas sollicitudin scelerisque egestas. Suspendisse aliquet elit quis dolor gravida, et auctor ligula ornare. Nullam et sodales ante, quis varius elit. Nullam cursus, orci eleifend tristique semper, neque nisl tincidunt purus, sed ultricies felis arcu vel metus.",
    patternCaveats:
      "llam tristique tristique condimentum. Maecenas sollicitudin scelerisque egestas. Suspendisse aliquet elit quis dolor gravida, et auctor ligula ornare. Nullam et sodales ante, quis varius elit. Nullam cursus, orci eleifend tristique semper, neque nisl tincidunt purus, sed ultricies felis arcu vel metus. ",
    URL: "",
    downloadLink: "",
  },
  {
    name: "Node Agents",
    filter: {
      type: "Deployment",
      compatibility: ["Linkerd"],
      technology: "",
    },
    Id: "MESHERY022",
    image: pattern1,
    Status: "ComingSoon",
    patternInfo:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar placerat tellus sed posuere. Nulla venenatis fringilla faucibus. Etiam et commodo dolor, sit amet fringilla leo. Nullam tristique tristique condimentum. Maecenas sollicitudin scelerisque egestas. Suspendisse aliquet elit quis dolor gravida, et auctor ligula ornare. Nullam et sodales ante, quis varius elit. Nullam cursus, orci eleifend tristique semper, neque nisl tincidunt purus, sed ultricies felis arcu vel metus.",
    patternCaveats:
      "llam tristique tristique condimentum. Maecenas sollicitudin scelerisque egestas. Suspendisse aliquet elit quis dolor gravida, et auctor ligula ornare. Nullam et sodales ante, quis varius elit. Nullam cursus, orci eleifend tristique semper, neque nisl tincidunt purus, sed ultricies felis arcu vel metus. ",
    URL: "",
    downloadLink: "",
  },
  {
    name: "Proxyless Service Mesh",
    filter: {
      type: "Deployment",
      compatibility: ["Linkerd"],
      technology: "",
    },
    Id: "MESHERY023",
    image: pattern1,
    Status: "ComingSoon",
    patternInfo:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar placerat tellus sed posuere. Nulla venenatis fringilla faucibus. Etiam et commodo dolor, sit amet fringilla leo. Nullam tristique tristique condimentum. Maecenas sollicitudin scelerisque egestas. Suspendisse aliquet elit quis dolor gravida, et auctor ligula ornare. Nullam et sodales ante, quis varius elit. Nullam cursus, orci eleifend tristique semper, neque nisl tincidunt purus, sed ultricies felis arcu vel metus.",
    patternCaveats:
      "llam tristique tristique condimentum. Maecenas sollicitudin scelerisque egestas. Suspendisse aliquet elit quis dolor gravida, et auctor ligula ornare. Nullam et sodales ante, quis varius elit. Nullam cursus, orci eleifend tristique semper, neque nisl tincidunt purus, sed ultricies felis arcu vel metus. ",
    URL: "",
    downloadLink: "",
  },
  {
    name: "Passive and Active Health Check",
    filter: {
      type: "Deployment",
      compatibility: ["Linkerd"],
      technology: "",
    },
    Id: "MESHERY024",
    image: pattern1,
    Status: "ComingSoon",
    patternInfo:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar placerat tellus sed posuere. Nulla venenatis fringilla faucibus. Etiam et commodo dolor, sit amet fringilla leo. Nullam tristique tristique condimentum. Maecenas sollicitudin scelerisque egestas. Suspendisse aliquet elit quis dolor gravida, et auctor ligula ornare. Nullam et sodales ante, quis varius elit. Nullam cursus, orci eleifend tristique semper, neque nisl tincidunt purus, sed ultricies felis arcu vel metus.",
    patternCaveats:
      "llam tristique tristique condimentum. Maecenas sollicitudin scelerisque egestas. Suspendisse aliquet elit quis dolor gravida, et auctor ligula ornare. Nullam et sodales ante, quis varius elit. Nullam cursus, orci eleifend tristique semper, neque nisl tincidunt purus, sed ultricies felis arcu vel metus. ",
    URL: "",
    downloadLink: "",
  },
  {
    name: "Tranparently Proxying TLS",
    filter: {
      type: "Traffic Management",
      compatibility: ["Linkerd"],
      technology: "",
    },
    Id: "MESHERY025",
    image: pattern1,
    Status: "ComingSoon",
    patternInfo:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar placerat tellus sed posuere. Nulla venenatis fringilla faucibus. Etiam et commodo dolor, sit amet fringilla leo. Nullam tristique tristique condimentum. Maecenas sollicitudin scelerisque egestas. Suspendisse aliquet elit quis dolor gravida, et auctor ligula ornare. Nullam et sodales ante, quis varius elit. Nullam cursus, orci eleifend tristique semper, neque nisl tincidunt purus, sed ultricies felis arcu vel metus.",
    patternCaveats:
      "llam tristique tristique condimentum. Maecenas sollicitudin scelerisque egestas. Suspendisse aliquet elit quis dolor gravida, et auctor ligula ornare. Nullam et sodales ante, quis varius elit. Nullam cursus, orci eleifend tristique semper, neque nisl tincidunt purus, sed ultricies felis arcu vel metus. ",
    URL: "",
    downloadLink: "",
  },
  {
    name: "Bulkheading with Resiliency",
    filter: {
      type: "Resiliency",
      compatibility: ["Linkerd"],
      technology: "",
    },
    Id: "MESHERY026",
    image: pattern1,
    Status: "ComingSoon",
    patternInfo:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar placerat tellus sed posuere. Nulla venenatis fringilla faucibus. Etiam et commodo dolor, sit amet fringilla leo. Nullam tristique tristique condimentum. Maecenas sollicitudin scelerisque egestas. Suspendisse aliquet elit quis dolor gravida, et auctor ligula ornare. Nullam et sodales ante, quis varius elit. Nullam cursus, orci eleifend tristique semper, neque nisl tincidunt purus, sed ultricies felis arcu vel metus.",
    patternCaveats:
      "llam tristique tristique condimentum. Maecenas sollicitudin scelerisque egestas. Suspendisse aliquet elit quis dolor gravida, et auctor ligula ornare. Nullam et sodales ante, quis varius elit. Nullam cursus, orci eleifend tristique semper, neque nisl tincidunt purus, sed ultricies felis arcu vel metus. ",
    URL: "",
    downloadLink: "",
  },
  {
    name: "Protocol Aware Meshing",
    filter: {
      type: "Traffic Management",
      compatibility: ["Linkerd"],
      technology: "",
    },
    Id: "MESHERY027",
    image: pattern1,
    Status: "ComingSoon",
    patternInfo:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar placerat tellus sed posuere. Nulla venenatis fringilla faucibus. Etiam et commodo dolor, sit amet fringilla leo. Nullam tristique tristique condimentum. Maecenas sollicitudin scelerisque egestas. Suspendisse aliquet elit quis dolor gravida, et auctor ligula ornare. Nullam et sodales ante, quis varius elit. Nullam cursus, orci eleifend tristique semper, neque nisl tincidunt purus, sed ultricies felis arcu vel metus.",
    patternCaveats:
      "llam tristique tristique condimentum. Maecenas sollicitudin scelerisque egestas. Suspendisse aliquet elit quis dolor gravida, et auctor ligula ornare. Nullam et sodales ante, quis varius elit. Nullam cursus, orci eleifend tristique semper, neque nisl tincidunt purus, sed ultricies felis arcu vel metus. ",
    URL: "",
    downloadLink: "",
  },
  {
    name: "Visualizing services",
    filter: {
      type: "Observability",
      compatibility: ["Linkerd"],
      technology: "",
    },
    Id: "MESHERY028",
    image: pattern1,
    Status: "ComingSoon",
    patternInfo:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar placerat tellus sed posuere. Nulla venenatis fringilla faucibus. Etiam et commodo dolor, sit amet fringilla leo. Nullam tristique tristique condimentum. Maecenas sollicitudin scelerisque egestas. Suspendisse aliquet elit quis dolor gravida, et auctor ligula ornare. Nullam et sodales ante, quis varius elit. Nullam cursus, orci eleifend tristique semper, neque nisl tincidunt purus, sed ultricies felis arcu vel metus.",
    patternCaveats:
      "llam tristique tristique condimentum. Maecenas sollicitudin scelerisque egestas. Suspendisse aliquet elit quis dolor gravida, et auctor ligula ornare. Nullam et sodales ante, quis varius elit. Nullam cursus, orci eleifend tristique semper, neque nisl tincidunt purus, sed ultricies felis arcu vel metus. ",
    URL: "",
    downloadLink: "",
  },
  {
    name: "Using Envoy metrics",
    filter: {
      type: "",
      compatibility: ["Linkerd"],
      technology: "",
    },
    Id: "MESHERY029",
    image: pattern1,
    Status: "ComingSoon",
    patternInfo:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar placerat tellus sed posuere. Nulla venenatis fringilla faucibus. Etiam et commodo dolor, sit amet fringilla leo. Nullam tristique tristique condimentum. Maecenas sollicitudin scelerisque egestas. Suspendisse aliquet elit quis dolor gravida, et auctor ligula ornare. Nullam et sodales ante, quis varius elit. Nullam cursus, orci eleifend tristique semper, neque nisl tincidunt purus, sed ultricies felis arcu vel metus.",
    patternCaveats:
      "llam tristique tristique condimentum. Maecenas sollicitudin scelerisque egestas. Suspendisse aliquet elit quis dolor gravida, et auctor ligula ornare. Nullam et sodales ante, quis varius elit. Nullam cursus, orci eleifend tristique semper, neque nisl tincidunt purus, sed ultricies felis arcu vel metus. ",
    URL: "",
    downloadLink: "",
  },
  {
    name: "Using Request Logs",
    filter: {
      type: "Observability",
      compatibility: ["Linkerd"],
      technology: "",
    },
    Id: "MESHERY030",
    image: pattern1,
    Status: "ComingSoon",
    patternInfo:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar placerat tellus sed posuere. Nulla venenatis fringilla faucibus. Etiam et commodo dolor, sit amet fringilla leo. Nullam tristique tristique condimentum. Maecenas sollicitudin scelerisque egestas. Suspendisse aliquet elit quis dolor gravida, et auctor ligula ornare. Nullam et sodales ante, quis varius elit. Nullam cursus, orci eleifend tristique semper, neque nisl tincidunt purus, sed ultricies felis arcu vel metus.",
    patternCaveats:
      "llam tristique tristique condimentum. Maecenas sollicitudin scelerisque egestas. Suspendisse aliquet elit quis dolor gravida, et auctor ligula ornare. Nullam et sodales ante, quis varius elit. Nullam cursus, orci eleifend tristique semper, neque nisl tincidunt purus, sed ultricies felis arcu vel metus. ",
    URL: "",
    downloadLink: "",
  },
  {
    name: "Using Traces",
    filter: {
      type: "Observability",
      compatibility: ["Linkerd"],
      technology: "",
    },
    Id: "MESHERY031",
    image: pattern1,
    Status: "ComingSoon",
    patternInfo:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar placerat tellus sed posuere. Nulla venenatis fringilla faucibus. Etiam et commodo dolor, sit amet fringilla leo. Nullam tristique tristique condimentum. Maecenas sollicitudin scelerisque egestas. Suspendisse aliquet elit quis dolor gravida, et auctor ligula ornare. Nullam et sodales ante, quis varius elit. Nullam cursus, orci eleifend tristique semper, neque nisl tincidunt purus, sed ultricies felis arcu vel metus.",
    patternCaveats:
      "llam tristique tristique condimentum. Maecenas sollicitudin scelerisque egestas. Suspendisse aliquet elit quis dolor gravida, et auctor ligula ornare. Nullam et sodales ante, quis varius elit. Nullam cursus, orci eleifend tristique semper, neque nisl tincidunt purus, sed ultricies felis arcu vel metus. ",
    URL: "",
    downloadLink: "",
  },
  {
    name: "Managing configuration change",
    filter: {
      type: "Troubleshooting",
      compatibility: ["Linkerd"],
      technology: "",
    },
    Id: "MESHERY032",
    image: pattern1,
    Status: "ComingSoon",
    patternInfo:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar placerat tellus sed posuere. Nulla venenatis fringilla faucibus. Etiam et commodo dolor, sit amet fringilla leo. Nullam tristique tristique condimentum. Maecenas sollicitudin scelerisque egestas. Suspendisse aliquet elit quis dolor gravida, et auctor ligula ornare. Nullam et sodales ante, quis varius elit. Nullam cursus, orci eleifend tristique semper, neque nisl tincidunt purus, sed ultricies felis arcu vel metus.",
    patternCaveats:
      "llam tristique tristique condimentum. Maecenas sollicitudin scelerisque egestas. Suspendisse aliquet elit quis dolor gravida, et auctor ligula ornare. Nullam et sodales ante, quis varius elit. Nullam cursus, orci eleifend tristique semper, neque nisl tincidunt purus, sed ultricies felis arcu vel metus. ",
    URL: "",
    downloadLink: "",
  },
]


    return <WrappedComponent allResources={data} {...props} />;
  };
};

export default DataWrapper;
