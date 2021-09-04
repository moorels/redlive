import HeadzLayout from './layouts/HeadzLayout/HeadzLayout'
import { Set, Router, Route, Private } from '@redwoodjs/router'
import ContactsLayout from 'src/layouts/ContactsLayout'
import VaultsLayout from 'src/layouts/VaultsLayout'
import { useState } from 'react'
import { UserContext } from './UserContext'

const sum = Math.floor(Math.random() * 9999999)

const Routes = () => {
  const [user, setUser] = useState('test')

  return (
    <Router>
      <UserContext.Provider value={{ user, setUser }}>
        <Set wrap={HeadzLayout}>
          <Set wrap={ContactsLayout}>
            <Route path="/contacts/new" page={ContactNewContactPage} name="newContact" />
            <Route path="/contacts/{id:Int}/edit" page={ContactEditContactPage} name="editContact" />
            <Route path="/contacts/{id:Int}" page={ContactContactPage} name="contact" />
            <Route path="/contacts" page={ContactContactsPage} name="contacts" />
          </Set>
          <Private unauthenticated="login">
            <Set wrap={VaultsLayout}>
              <Route path={`/vaults/${sum}/new`} page={VaultNewVaultPage} name="newVault" />
              <Route path={`/vaults/${sum}/{id:Int}/edit`} page={VaultEditVaultPage} name="editVault" />
              <Route path={`/vaults/${sum}/{id:Int}`} page={VaultVaultPage} name="vault" />
              <Route path="/vaults" page={VaultVaultsPage} name="vaults" />
            </Set>
          </Private>

          <Route path="/about" page={AboutPage} name="about" />

          <Route path="/" page={HomePage} name="home" />
          <Route path="/login" page={LoginPage} name="login" />
          <Route path="/signup" page={SignupPage} name="signup" />
          <Route notfound page={NotFoundPage} />
        </Set>
      </UserContext.Provider>
    </Router>
  )
}

export default Routes
