import Link from 'next/link';

const Nav = () => {
  return (
    <nav className="relative flex w-full flex-nowrap items-center justify-between bg-neutral-100 py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:flex-wrap lg:justify-start lg:py-4">
        <Link href='/' className="flex gap-2 flex-center">
        </Link>
        <div className="flex w-full items-center">
            <Link href='/create-prompt' className="black_btn px-5">Create Post</Link>
            <Link href='/savings' className="black_btn">Manage Savings</Link>
            <Link href='/savings' className="black_btn px-5">Manage Savings</Link>
        </div>
    </nav>
  )
}

export default Nav