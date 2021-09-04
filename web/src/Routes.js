import HeadzLayout from './layouts/HeadzLayout/HeadzLayout'

import { Set, Router, Route } from '@redwoodjs/router'
import ContactsLayout from 'src/layouts/ContactsLayout'
import VaultsLayout from 'src/layouts/VaultsLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={HeadzLayout}>
        <Set wrap={ContactsLayout}>
          <Route path="/contacts/new" page={ContactNewContactPage} name="newContact" />
          <Route path="/contacts/{id:Int}/edit" page={ContactEditContactPage} name="editContact" />
          <Route path="/contacts/{id:Int}" page={ContactContactPage} name="contact" />
          <Route path="/contacts" page={ContactContactsPage} name="contacts" />
        </Set>
        <Set wrap={VaultsLayout}>
          <Route path="/vaults/new" page={VaultNewVaultPage} name="newVault" />
          <Route path="/vaults/{id:Int}/edit" page={VaultEditVaultPage} name="editVault" />
          <Route path="/vaults/{id:Int}" page={VaultVaultPage} name="vault" />
          <Route path="/vaults" page={VaultVaultsPage} name="vaults" />
        </Set>
        <Route path="/about" page={AboutPage} name="about" />

        <Route path="/" page={HomePage} name="home" />
        <Route path="/login" page={LoginPage} name="login" />
        <Route path="/signup" page={SignupPage} name="signup" />
        <Route notfound page={NotFoundPage} />
      </Set>
    </Router>
  )
}

export default Routes
