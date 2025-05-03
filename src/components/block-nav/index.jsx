import { usePathname } from 'next/navigation'
import Image from "next/image"
import Link from 'next/link'
import LoeSVG from "../../images/loe-logo.svg";
import folder from "../../images/folder.svg";
import profile from "../../images/profile.svg";
import bento from "../../images/bento.svg";
 
export function Nav() {
  const pathname = usePathname()
 
  return (
    <>
      <Link className='hidden md:block fixed top-0 cursor-pointer w-100 mt-[1rem] ms-[1rem]' href="/">
        <Image className='w-[8rem] h-[8rem] filter dark:invert' src={LoeSVG} alt="nav back to home" />
      </Link>
      <nav className='flex align-center justify-center bottom-0 right-0 z-10 right-0 rounded-tl-[20px] bg-black w-[100%] lg:w-[40%] p-5 text-center fixed'>
      <Link
        className={`hover:opacity-50 hover:ease-in-out link ${pathname === '/work' ? 'active' : ''} px-2`}
        href="/work"
      >
        <Image className='filter dark:invert' src={folder}/>
      </Link>
      <Link
        className={`hover:opacity-50 hover:ease-in-out link ${pathname === '/about' ? 'active' : ''} px-2`}
        href="/about"
      >
        <Image className='filter dark:invert' src={profile}/>
      </Link>
      <Link className='block md:hidden' href="/">
        <Image className='w-[70px] h-[70px] filter dark:invert hover:opacity-50 hover:ease-in-out' src={LoeSVG} alt="nav back to home" />
      </Link>
    </nav>
    </>

  )
}