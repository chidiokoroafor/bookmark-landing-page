import bookmarkLogo from '../assets/images/logo-bookmark.svg'
import hamburger from '../assets/images/icon-hamburger.svg'



const Header = ({showMobileMenu,openMobileMenu}) => {
  return (
     <header className='w-[80%] mx-auto flex justify-between items-center py-8'>
            <img src={bookmarkLogo} alt="bookmark logo" />
           {!openMobileMenu && <nav className='hidden md:block'>
              <ul className='flex items-center gap-10 text-GrayishBlue'>
                <li>
                  <a className='hover:text-SoftRed' href="#">FEATURES</a>
                </li>
                <li>
                  <a className='hover:text-SoftRed' href="#">PRICING</a>
                </li>
                <li>
                  <a className='hover:text-SoftRed' href="#">CONTACT</a>
                </li>
                <li>
                  <button className='bg-SoftRed py-2 px-6 shadow-md text-white rounded hover:text-SoftRed hover:border-2 hover:border-SoftRed hover:bg-white transition-all ease-in-out duration-300' >LOGIN</button>
                </li>
              </ul>
            </nav>}
            <img  onClick={()=>showMobileMenu(true)} className='md:hidden cursor-pointer' src={hamburger} alt="" />
          </header>
  )
}

export default Header