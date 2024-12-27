import hero from '../assets/images/illustration-hero.svg'

const HeroSection = () => {
  return (
    <section className='w-[80%] mx-auto flex gap-6 mt-8 flex-col-reverse lg:flex-row items-center'>
        <div className='[&>*]:w-[100%] lg:[&>*]:w-[95%] [&>*]:text-center lg:[&>*]:text-left lg:w-[50%] space-y-6 border- border-blue-300'>
          <h2 className=' font-bold text-VeryDarkBlue text-2xl md:text-4xl'>A Simple Bookmark Manager</h2>
          <p className=' text-GrayishBlue text-lg md:text-lg'>A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>

          <div className='flex gap-2 justify-center lg:justify-start'>
            <a href='#' className='py-3 w-auto px-4 text-xs sm:text-m shadow-md bg-SoftBlue text-white rounded-sm hover:bg-white hover:text-SoftBlue hover:border hover:border-SoftBlue transition-all ease-in-out duration-300 '>Get it on Chrome</a>
            <a href='#' className='py-3 w-auto px-4 shadow-md text-xs sm:text-m rounded-sm  hover:border-2 hover:border-GrayishBlue transition-all ease-in-out duration-300'>Get it on Firefox</a>
          </div>

        </div>
        <div className=' border- border-back] relative '>
          <img className='border- border-rd-500' src={hero} alt="hero" />
          <div className=' h-[70%] bg-SoftBlue rounded-l-full absolute -z-20 bottom-0 -right-48 left-20'>

          </div>
        </div>
      </section>
  )
}

export default HeroSection