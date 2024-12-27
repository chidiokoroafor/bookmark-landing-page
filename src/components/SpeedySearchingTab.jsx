import hero from '../assets/images/illustration-features-tab-2.svg'

const SpeedySearchingTab = () => {
  return (
      <section className='w-[80%] mx-auto flex gap-6 flex-col lg:flex-row items-center'>
          
             <div className='relative lg:mr-auto pb-10'>
              <img className='w-full' src={hero} alt="hero" />
              {/* <HeroImage /> */}
              <div className=' h-[70%] bg-SoftBlue rounded-r-full absolute -z-20 bottom-0 -left-80 right-20'>
    
              </div>
            </div>


            <div className='[&>*]:w-[100%] lg:[&>*]:w-[90%] [&>*]:text-center lg:[&>*]:text-left lg:w-[45%] space-y-6 border- border-blue-300'>
              <h2 className=' font-[500] text-VeryDarkBlue text-2xl md:text-2xl'>Intelligent search</h2>
              <p className=' text-GrayishBlue text-sm md:text-lg'>Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.</p>
    
              <div className='flex gap-2 justify-center lg:justify-start'>
                <a href='#' className='py-3 w-auto px-4 text-xs sm:text-m shadow-md bg-SoftBlue text-white rounded-sm hover:bg-white hover:text-SoftBlue hover:border hover:border-SoftBlue transition-all ease-in-out duration-300'>More Info</a>
               
              </div>
    
            </div>
           
          </section>
  )
}

export default SpeedySearchingTab