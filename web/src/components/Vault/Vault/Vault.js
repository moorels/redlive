import { Link, routes } from '@redwoodjs/router'

const Vault = ({ vault }) => {
  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            {vault.vaultname} Details
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Vaultname</th>
              <td>{vault.vaultname}</td>
            </tr>
            <tr>
              <th>Vaultusername</th>
              <td>{vault.vaultusername}</td>
            </tr>
            <tr>
              <th>Vaultpassword</th>
              <td>{vault.vaultpassword}</td>
            </tr>
            <tr>
              <th>Vaultpassword2</th>
              <td>{vault.vaultpassword2}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editVault({ id: vault.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <Link to={routes.vaults()} className="rw-button rw-button-blue">
          Close
        </Link>
      </nav>
    </>
  )
}

export default Vault
