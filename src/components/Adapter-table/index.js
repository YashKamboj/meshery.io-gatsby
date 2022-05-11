import React from 'react'
import AdapterTableWrapper from "./adapterTable.styles"

import istio from "../../assets/images/adapters/istio.svg"
import linkerd from "../../assets/images/adapters/linkerd.svg"
import consul from "../../assets/images/adapters/consul.svg"
import oct from "../../assets/images/adapters/oct.svg"
import nsm from "../../assets/images/adapters/nsm.svg"
import Kuma from "../../assets/images/adapters/Kuma.svg"
import osm from "../../assets/images/adapters/osm.svg"
import citrix from "../../assets/images/adapters/citrix.svg"
import traefikMesh from "../../assets/images/adapters/traefik-mesh.svg"
import nginx from "../../assets/images/adapters/nginx-sm.svg"
import awsappmesh from "../../assets/images/adapters/aws-app-mesh.svg"
import tanzu from "../../assets/images/adapters/tanzu.svg"
import cilium from "../../assets/images/adapters/cilium.svg"

const AdapterTable = () => {
  return (
    <AdapterTableWrapper>
        <div className="text ">
          <h2>Interoperate <strong>multiple</strong> service meshes</h2>
          <p>Service mesh adapters provision, configure, and manage their respective service meshes.
          </p></div>
        <div className="text" >
          <table className="adapters">
            <thead style={{display: "none"}} >
              <tr><th>Status</th>
                <th>Adapter</th>
              </tr></thead>
            <tbody>
              <tr>
                <td rowSpan={9} className="stable-adapters">stable</td>
              </tr>
              <tr>
                <td colSpan={2} className="stable-adapters" />
              </tr>
              <tr>
                <td><a href="https://github.com/meshery/meshery-istio">
                    <img src={istio} alt="Istio Service Mesh adapter" className="adapter-logo" loading="lazy" />Meshery adapter for Istio</a>
                </td>
              </tr>
              <tr>
                <td><a href="https://github.com/meshery/meshery-linkerd">
                    <img src={linkerd} alt="Linkerd" className="adapter-logo" loading="lazy" />Meshery adapter for Linkerd</a>
                </td>
              </tr>
              <tr>
                <td><a href="https://github.com/meshery/meshery-consul">
                    <img src={consul} alt="Consul Connect" className="adapter-logo" loading="lazy" />Meshery adapter for Consul</a>
                </td>
              </tr>
              <tr>
                <td><a href="https://github.com/meshery/meshery-octarine">
                    <img src={oct} alt="Octarine Service Mesh" className="adapter-logo" loading="lazy" />Meshery adapter for Octarine</a>
                </td>
              </tr>
              <tr>
                <td><a href="https://github.com/meshery/meshery-nsm">
                    <img src={nsm} alt="Network Mesh" className="adapter-logo" loading="lazy" />Meshery adapter for Network Service Mesh</a>
                </td>
              </tr>
              <tr>
                <td><a href="https://github.com/meshery/meshery-kuma">
                    <img src={Kuma} alt="Kuma Service Mesh" className="adapter-logo" loading="lazy" />Meshery adapter for Kuma</a>
                </td>
              </tr>
              <tr>
                <td><a href="https://github.com/meshery/meshery-osm">
                    <img src={osm} alt="Open Service Mesh" className="adapter-logo" loading="lazy" />Meshery adapter for Open Service Mesh</a>
                </td>
              </tr>
              <tr>
                <td colSpan={2} className="stable-adapters" />
              </tr>
              <tr>
                <td rowSpan={6} className="beta-adapters">beta</td>
              </tr>
              <tr>
                <td colSpan={2} className="beta-adapters" />
              </tr>
              <tr>
                <td><a href="https://github.com/meshery/meshery-cpx">
                    <img src={citrix} alt="Citrix CPX Service Mesh" className="adapter-logo" loading="lazy" />Meshery adapter for Citrix CPX</a>
                </td>
              </tr>
              <tr>
                <td><a href="https://github.com/layer5io/meshery-traefik-mesh">
                    <img src={traefikMesh} alt="Traefic Service Mesh" className="adapter-logo" loading="lazy" />Meshery adapter for
                    Traefik Mesh</a>
                </td>
              </tr>
              <tr>
                <td><a href="https://github.com/meshery/meshery-nginx-sm">
                    <img src={nginx} alt="NGINX Service Mesh" className="adapter-logo" loading="lazy" />Meshery adapter for NGINX SM</a>
                </td>
              </tr>
              <tr>
                <td><a href="https://github.com/meshery/meshery-app-mesh">
                    <img src={awsappmesh} alt="AWS App Mesh Service Mesh" className="adapter-logo" loading="lazy" />Meshery adapter for App Mesh </a>
                </td>
              </tr>
              <tr>
                <td colSpan={2} className="beta-adapters" />
              </tr>
              <tr>
                <td rowSpan={6} className="alpha-adapters">alpha</td>
              </tr>
              <tr>
                <td colSpan={2} className="alpha-adapters" />
              </tr>
              <tr>
                <td><a href="https://github.com/meshery/meshery-tanzu-sm">
                    <img src={tanzu} alt="Tanzu Service Mesh" className="adapter-logo" loading="lazy" />Meshery adapter for Tanzu SM</a>
                </td>
              </tr>
              <tr>
                <td><a href="https://github.com/meshery/meshery-cilium">
                    <img src={cilium} alt="Cilium Service Mesh" className="adapter-logo" loading="lazy" />Meshery adapter for Cilium SM</a>
                </td>
              </tr>
              <tr>
                <td colSpan={2} className="alpha-adapters" />
              </tr>
            </tbody>
          </table>
          <p />
        </div>
    </AdapterTableWrapper>
  )
}


export default AdapterTable