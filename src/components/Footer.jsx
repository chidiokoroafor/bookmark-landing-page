import WhiteBookmarlLogo from '../utils/svgs/WhiteBookmarlLogo'
import FacebookIcon from '../utils/svgs/FacebookIcon'
import TwitterIcon from '../utils/svgs/TwitterIcon'

const Footer = () => {
  return (
    <footer className='bg-VeryDarkBlue p-4 '>
        <div className='w-[80%] flex flex-col md:flex-row justify-between items-center mx-auto gap-8'>
        <div className='flex flex-col md:flex-row gap-4 items-center'>
        <WhiteBookmarlLogo />
         <ul className='flex flex-col md:flex-row items-center gap-4 md:gap-10 text-GrayishBlue'>
            <li>
              <a className='hover:text-SoftRed' href="#">FEATURES</a>
            </li>
            <li>
              <a className='hover:text-SoftRed' href="#">PRICING</a>
            </li>
            <li>
              <a className='hover:text-SoftRed' href="#">CONTACT</a>
            </li>
          </ul>
          </div>
        <div className='flex gap-4 items-center'>
          <FacebookIcon />
          <TwitterIcon />
          </div>
        </div>
      </footer>
  )
}

export default Footer