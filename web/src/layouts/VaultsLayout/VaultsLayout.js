import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'
import VaultsCell from 'src/components/Vault/VaultsCell/VaultsCell'
import { UserContext } from '../../UserContext'
import { useContext } from 'react'

const VaultsLayout = ({ children }) => {
  const { user } = useContext(UserContext)

  var today = new Date()
  var date =
    today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear()

  return (
    <div className="py-2 px-4 ">
      <div>
        <div className="">
          <header className="">
            <h2 className="rw-heading text-red-800">{date} Your Vault</h2>
          </header>

          <Link
            to={routes.newVault()}
            className="rw-button rw-button-large rw-button-blue"
          >
            <div className="rw-button-icon">+</div> New Entry
          </Link>
        </div>

        <VaultsCell userEmailId={user} />
      </div>

      <div className="rw-scaffold">
        <Toaster />
        <header className="rw-header">
          <h1 className="rw-heading rw-heading-primary">
            <Link to={routes.vaults()} className="rw-link">
              Your Vaults
            </Link>
          </h1>
        </header>
        <main className="rw-main">{children}</main>
      </div>
    </div>
  )
}

export default VaultsLayout
