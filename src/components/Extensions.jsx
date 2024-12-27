import { extensions } from '../utils/data'
const Extensions = () => {
  return (
     <section className='w-[80%] lg:w-[60%] mx-auto mt-24 space-y-6'>
        <h2 className='text-2xl font-[500] text-VeryDarkBlue text-center'>Download the extension</h2>
        <p className='text-[16px] md:text-lg text-GrayishBlue text-center w-full md:w-[75%] mx-auto'>We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.</p>

        <div className='flex [&>*]:relative [&>*:nth-child(3)]:-bottom-16 [&>*:nth-child(2)]:-bottom-8  flex-col gap-4 md:flex-row justify-center mt-6'>
        {
          extensions.map((ext) => {
            return <div className={'shadow-md w-[90%] mx-auto  rounded-lg'} key={ext.browser}>
              <img className='mx-auto mt-8' src={ext.icon} alt="" />
              <div className='mt-6 text-center space-y-2'>
                <h3 className='font-bold text-xl'>Add to {ext.browser}</h3>
                <p className='text-GrayishBlue text-sm'>Minimum version {ext.minVersion}</p>
              </div>
                <div className='border mt-6 border-dotted border-b-4 border-collapse' ></div>
              <div className='p-4'>
                   <button className='w-full bg-SoftBlue text-white hover:bg-white hover:text-SoftBlue hover:border hover:border-SoftBlue py-4 px-3 rounded-md mt-8 text-sm transition-all ease-in-out duration-300'>Add & install Extension</button>
              </div>
             
            </div>
          })
        }
      </div>
      </section>
  )
}

export default Extensions