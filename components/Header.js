import Link from 'next/link'
import { useMoralis } from 'react-moralis'

function Header() {
  const { authenticate, isAuthenticated, logout } = useMoralis()

  return (
    <header className="sticky flex h-24 w-full justify-between bg-gradient-to-r from-blue-200 via-blue-300 to-blue-500 p-7 text-white">
      {/* Left */}
      <div>
        <h1 className="font-bold text-black sm:text-xl md:text-xl lg:text-2xl xl:text-3xl">
          <Link href={'/'}>Swimming Madness</Link>
        </h1>
      </div>

      {/* Right */}
      <div className="flex space-x-7">
        <h1 className="text-2xl font-bold">
          <Link href={'/logBook'}>Log Book</Link>
        </h1>

        {!isAuthenticated ? (
          <button
            className="rounded-full bg-white px-5 py-3 text-center text-xl font-bold text-black"
            onClick={() => authenticate()}
          >
            Login
          </button>
        ) : (
          <button
            className="rounded-full bg-white px-5 py-3 text-center text-xl font-bold text-black"
            onClick={() => logout()}
          >
            Logout
          </button>
        )}
      </div>
    </header>
  )
}

export default Header
