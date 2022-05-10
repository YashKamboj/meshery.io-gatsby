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
        <p class="button-alt"><a href="https://groups.google.com/a/meshery.io/g/developers" class="button-dev">Developers</a></p>
        <p class="button-alt"><a href="https://groups.google.com/a/meshery.io/g/users" class="button-user">Users</a></p>
    </div>
    <div class="mail-row">
        <p class="button-alt"><a href="mailto:maintainers@meshery.io" class="button-maintain">Maintainer</a></p>
        <p class="button-alt"><a href="mailto:community@meshery.io" class="button-comm">Community</a></p>
    </div>	 
    
</div>
</div>
</MailingListWrapper>
  )
}

export default  MailingList