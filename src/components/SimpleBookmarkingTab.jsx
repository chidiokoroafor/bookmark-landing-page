import hero from '../assets/images/illustration-features-tab-1.svg'

const SimpleBookmarkingTab = () => {
  return (
      <section className=' mx-auto flex gap-10 mt-8 flex-col lg:flex-row items-center'>
             <div className=' relative pb-14 lg:mr-auto'>
              <img className='' src={hero} alt="hero" />
              <div className=' h-[70%] bg-SoftBlue rounded-r-full absolute -z-20 bottom-0 -left-80 right-20'>
    
              </div>
            </div>

            <div className='[&>*]:w-[100%] lg:[&>*]:w-[90%] [&>*]:text-center lg:[&>*]:text-left lg:w-[50%] space-y-6 '>
              <h2 className=' font-[500] text-VeryDarkBlue text-2xl md:text-2xl'>Bookmark in one click</h2>
              <p className=' text-GrayishBlue text-lg md:text-lg'>Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.</p>
    
              <div className='flex gap-2 justify-center lg:justify-start'>
                <a href='#' className='py-3 w-auto px-4 text-xs sm:text-m shadow-md bg-SoftBlue text-white rounded-sm hover:bg-white hover:text-SoftBlue hover:border hover:border-SoftBlue transition-all ease-in-out duration-300'>More Info</a>
                
              </div>
    
            </div>
           
          </section>
  )
}

export default SimpleBookmarkingTab