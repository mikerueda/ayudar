import { FC, ReactElement, useState, useEffect } from 'react'
import { getUsers } from '../services/firebase'
import { User } from '../services/firebase'

const UserBox: FC<User> = ({
  avatarUrl,
  name,
  occupation,
  description,
  target,
  paymentMethods
}): ReactElement => (
  <li className="bg-white rounded shadow p-4 mb-4">
    <header className="flex flex-row mb-4">
      <img src={avatarUrl} className="w-16 rounded-full" />
      <div className="ml-4 flex flex-col justify-center w-full">
        <h3 className="text-xl text-primary-950 leading-none">
          <strong>{name}</strong>
        </h3>
        <em className="text-sm text-grey-700">{occupation}</em>
      </div>
      <a className="icon mt-1 py-2 h-10 text-2xl text-primary-950">more_vert</a>
    </header>
    <p className="text-sm mb-4">{description}</p>
    <footer className="flex justify-between border-t border-grey-400 pt-4">
      <ul>
        <li className="text-sm text-grey-700">
          Vive con <span className="text-primary-950">{target}</span> por mes
        </li>
        <li className="text-sm text-grey-700">
          <span className="text-primary-950">{paymentMethods.length} </span>
          Medios de recaudo
        </li>
      </ul>
      <button className="btn primary">Donar</button>
    </footer>
  </li>
)

const UsersList = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    getUsers(setUsers) // listener, trigger on every database change
  }, [])

  return (
    <ul className="mb-4 px-4 max-w-lg mx-auto">
      {users.map((e, i) => (
        <UserBox key={i} {...e} />
      ))}
    </ul>
  )
}

export default UsersList
