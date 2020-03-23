const Header = () => {
  return (
    <header className="fixed h-16 w-full mb-4 shadow bg-white inset-0">
      <div className="flex justify-between items-center h-16 mx-auto px-4 max-w-screen-sm max-w-2xl">
        <a className="text-xl text-grey-600">
          <strong className="text-primary-950">Ayu</strong>Dar
        </a>
        <nav className="flex items-center">
          <a className="text-primary-950 text-sm mr-4">
            <strong>Creá tu cuenta</strong>
          </a>
          <a className="icon text-2xl">menu</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
