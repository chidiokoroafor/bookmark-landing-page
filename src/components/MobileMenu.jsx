import WhiteBookmarlLogo from "../utils/svgs/WhiteBookmarlLogo"
import closeIcon from '../assets/images/icon-close.svg'

const MobileMenu = ({closeMobileMenu}) => {
  return (
    <div className='w-full pt-4  h-screen bg-[rgba(37_,43_,70_,0.96)] z-50 fixed top-0 left-0'>
            <div className=' w-[80%] mx-auto'>
              <div className='flex py-8 justify-between items-center'>
                
                <WhiteBookmarlLogo />
                <img className='cursor-pointer' onClick={()=>closeMobileMenu(false)} src={closeIcon} alt="close icon" />
              </div>
              {/* <hr /> */}
              <ul className='flex flex-col text-center gap-4 text-white [&>*]:border-t-[0.5px] [&>*]:py-4  justify-center border-t-gray-50'>
                <li>
                  <a href="#">FEATURES</a>
                </li>
                <li>
                  <a href="#">PRICING</a>
                </li>
                <li>
                  <a href="#">CONTACT</a>
                </li>
                <li>
                  <button className='bg-transparent border-2 border-white py-2 px-6 shadow-md text-white rounded-lg w-full' >LOGIN</button>
                </li>
              </ul>
            </div>
          </div>
  )
}

export default MobileMenu