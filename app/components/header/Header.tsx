export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full flex h-14 items-center justify-between bg-celeste px-4 z-50">
      <div className="flex items-center space-x-2">
        <a href="/"> 
          <h1 className="text-white font-bold">Ramos UC</h1>
        </a>
      </div>

      <div className="flex">
        <a href="/login">
          <button className="mx-4 rounded-md bg-blue-900 px-4 h-8 text-sm text-white hover:bg-blue-700">
            Login
          </button>
        </a>

        <a href="/register">
          <button className="rounded-md bg-blue-900 px-4 h-8 text-sm text-white hover:bg-blue-700">
            Registro
          </button>
        </a>
      </div>
    </header>
  );
}


