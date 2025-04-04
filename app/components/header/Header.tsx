import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 flex h-14 w-full items-center justify-between bg-celeste px-4">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <h1 className="font-bold text-white">Ramos UC</h1>
        </Link>
      </div>

      <div className="flex">
        <Link href="/login">
          <button className="mx-4 h-8 rounded-md bg-blue-900 px-4 text-sm text-white hover:bg-blue-700">Login</button>
        </Link>

        <Link href="/register">
          <button className="h-8 rounded-md bg-blue-900 px-4 text-sm text-white hover:bg-blue-700">Registro</button>
        </Link>
      </div>
    </header>
  );
}
