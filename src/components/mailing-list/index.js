import React from 'react'
import MailingListWrapper from "./mailingList.styles"

 const MailingList = () => {
  return (
      <MailingListWrapper>
    <div class="mailinglist">
    <h3 class = "mail-heading">Project Mailing lists</h3>
    <p class = "mail-subheading">Engage in the Meshery project. Join any of our mailing lists.</p>
    <div class= "mail-container">
    <div class="mail-row">
        <button class="button-alt button-dev" href="https://groups.google.com/a/meshery.io/g/developers" >Developers </button>
        <button class="button-alt button-user" href="https://groups.google.com/a/meshery.io/g/users" >Users</button>
    </div>
    <div class="mail-row">
        <button class="button-alt button-maintain" href="mailto:maintainers@meshery.io" >Maintainer</button>
        <button class="button-alt button-comm" href="mailto:community@meshery.io" >Community</button>
    </div>	 
    
</div>
</div>
</MailingListWrapper>
  )
}

export default  MailingList