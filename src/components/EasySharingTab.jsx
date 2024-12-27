import hero from '../assets/images/illustration-features-tab-3.svg'

const EasySharingTab = () => {
  return (
      <section className=' mx-auto flex gap-6 mt-8 flex-col lg:flex-row items-center'>
          
             <div className='w-ful  relative lg:mr-auto pb-1 border- border-red-500'>
              <img className='w-full ' src={hero} alt="hero" />
              {/* <HeroImage /> */}
              <div className=' h-[70%] bg-SoftBlue rounded-r-full absolute -z-20 bottom-0 -left-80 right-20'>
    
              </div>
            </div>

            <div className='[&>*]:w-[100%] lg:[&>*]:w-[90%] [&>*]:text-center lg:[&>*]:text-left lg:w-[45%] space-y-6 '>
              <h2 className=' font-bold text-VeryDarkBlue text-2xl md:text-2xl'>Share your bookmarks</h2>
              <p className=' text-GrayishBlue text-lg md:text-lg'>Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.</p>
    
              <div className='flex gap-2 justify-center lg:justify-start'>
                <a href='#' className='py-3 w-auto px-4 text-xs sm:text-m shadow-md bg-SoftBlue text-white rounded-sm hover:bg-white hover:text-SoftBlue hover:border hover:border-SoftBlue transition-all ease-in-out duration-300'>More Info</a>
                
              </div>
    
            </div>
           
          </section>
  )
}

export default EasySharingTab