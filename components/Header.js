import Link from 'next/link'

function Header() {
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
          <Link href={'/review'}>Review</Link>
        </h1>

        <button className="rounded-full bg-white px-4 py-2 text-xs font-bold text-black lg:px-5 lg:py-3 lg:text-base">
          Login
        </button>
      </div>
    </header>
  )
}

export default Header
