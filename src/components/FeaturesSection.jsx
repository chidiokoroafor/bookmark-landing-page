import { useState } from "react"
import EasySharingTab from "./EasySharingTab"
import SimpleBookmarkingTab from "./SimpleBookmarkingTab"
import SpeedySearchingTab from "./SpeedySearchingTab"

const FeaturesSection = () => {
    const [activeTab, setActiveTab] = useState("Simple Bookmarking")
  return (
     <section className='w-[80%] mx-auto mt-24 space-y-6'>
            <h2 className='text-3xl font-[500] text-VeryDarkBlue text-center'>Features</h2>
            <p className='text-sm md:text-lg text-GrayishBlue text-center w-full md:w-[70%] mx-auto'>Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
            <div className='flex justify-center flex-col md:flex-row'>
            {
                ["Simple Bookmarking", "Speedy Searching", "Easy Sharing"].map((tab) => {
                  return <div onClick={()=>setActiveTab(tab)} className={`py-3 px-6 cursor-pointer text-center   ${tab == activeTab ? 'border-b-4 border-b-SoftRed':'border-b-2 border-b-GrayishBlue'}`} key={tab}>{ tab}</div>
              })
            }
            </div>
            <div>
              {activeTab == "Simple Bookmarking" && <SimpleBookmarkingTab />}
              {activeTab == "Speedy Searching" && <SpeedySearchingTab />}
              {activeTab == "Easy Sharing" && <EasySharingTab />}
            </div>
          </section>
  )
}

export default FeaturesSection