
const ContactSection = () => {
  return (
   <section className='py-16 bg-SoftBlue text-white mt-12 space-y-6 '>
        <p className='text-center text-sm tracking-[5px] uppercase'>35,000+ already joined</p>
        <h3 className='text-center text-3xl font-[500] max-w-[400px] mx-auto'>Stay up-to-date with what we’re doing</h3>
        <div className='flex flex-col sm:flex-row justify-center gap-2 px-4'>
          <input className='py-2 px-4 rounded' type="text" placeholder='Enter your email address' />
          <button className='bg-SoftRed hover:bg-white hover:text-SoftRed hover:border-SoftRed hover:border-[1px] transition-all ease-in-out duration-300  text-white py-2 px-4 rounded'>Contact Us</button>
        </div>
      </section>
  )
}

export default ContactSection