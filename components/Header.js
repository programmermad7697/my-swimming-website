import Link from 'next/link'

function Header() {
  return (
    <header className="sticky flex h-24 w-full justify-between bg-gradient-to-r from-blue-200 via-blue-300 to-blue-500 p-7 text-white">
      {/* Left */}
      <div>
        <Link href={'/'}>
          <h1 className="cursor-pointer font-bold text-black sm:text-xl md:text-xl lg:text-2xl xl:text-3xl">
            Swimming Madness
          </h1>
        </Link>
      </div>

      {/* Right */}
      <div className="flex space-x-7">
        <Link href={'/logBook'}>
          <h1 className="cursor-pointer text-2xl font-bold">Log Book</h1>
        </Link>
      </div>
    </header>
  )
}

export default Header
