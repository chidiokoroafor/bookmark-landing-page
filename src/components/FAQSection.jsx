import { questions } from '../utils/data'
import OpenArrow from '../utils/svgs/OpenArrow'
import CloseArrow from '../utils/svgs/CloseArrow'
import { useState } from 'react'

const FAQSection = () => {
     const [selected, setSelected] = useState(null)

  const handleSelected = (id) => {
    setSelected(prev => prev == id ? null : id)
  }
  return (
    <section className='w-[90%] md:w-[60%] mx-auto mt-24 space-y-6'>
        <h2 className='text-2xl font-bold text-VeryDarkBlue text-center'>Frequently Asked Questions</h2>
        <p className='text-[16px] md:text-lg text-GrayishBlue text-center w-full md:w-[75%] mx-auto'>Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.</p>
        <div>
          {questions.map((q)=>(
             <div key={q.id} className="p-2  border-b-2 last:border-b-0 border-gray-100">
                <div onClick={()=>handleSelected(q.id)} className="group flex mb-2 justify-between items-cente cursor-pointer">
                  <h4 className="font-[500] group-hover:text-SoftRed text-lg">{q.quest}</h4>
                 {q.id == selected ? <OpenArrow />  : <CloseArrow />
                  }
                </div>

                 <p className={`text-sm transition-all overflow-hidden ease-in-out duration-500 leading-8 ${q.id == selected ? 'max-h-40' : 'max-h-0'}`}>
                  {q.ans}
                </p> 
             </div>
          ))}
        </div>
         <div className='flex gap-2 justify-center'>
                <a href='#' className='py-3 w-auto px-4 text-xs sm:text-m shadow-md bg-SoftBlue text-white rounded-md hover:bg-white hover:text-SoftBlue hover:border hover:border-SoftBlue transition-all ease-in-out duration-300'>More Info</a>
                
              </div>
      </section>
  )
}

export default FAQSection