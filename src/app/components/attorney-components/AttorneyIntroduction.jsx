import React from 'react'
import Image from 'next/image';
import attyAbout from "../../../../public/attyAbout.png";


const AttorneyIntroduction = () => {
  return (
    <div className='max-w-[75rem] max-lg:px-10 max-lg:flex-col m-auto flex items-center max-sm:text-center justify-between'>
        <div className='w-[40%] max-lg:w-[60%] max-md:w-[80%] max-sm:w-full flex flex-col justify-center relative px-5 max-sm:p-0'>
            <div className='flex flex-col h-full absolute w-full justify-center max-sm:justify-start items-center 
              before:w-[100%] before:max-sm:w-[110%] before:h-[85%] before:max-sm:h-[85%] before:bg-gray-300 before:rounded-full before:opacity-50 before:-z-10
              after:absolute after:top-[10%] after:max-sm:top-3 after:w-[80%] after:max-sm:w-[90%] after:h-[60%] after:max-sm:h-[70%] after:bg-gray-300 after:rounded-full after:opacity-50 after:-z-10'
            >
            </div>
            <Image alt='atty profile' src={attyAbout} className='max-h-[700px] max-w-[700px] w-full'/>
        </div>
        <div className='w-[50%] max-lg:w-full flex-col flex gap-7 max-sm:items-center max-lg:py-5'>
          <div className='flex flex-col gap-10 items-end max-lg:items-center'>
            <div className='flex flex-col items-end max-lg:items-center'>
                <h1 className='text-6xl font-bold max-sm:text-5xl text-gray-900 hightlightText'>Francis Dominick</h1>
                <h1 className='text-6xl font-bold max-sm:text-5xl text-gray-900 hightlightText'>P. Abril</h1>
            </div>
            <p className='text-gray-900 text-md font-semibold'>
                0906-968-0910 | fdpabril.law@gmail.com
            </p>
            <div className='flex flex-col items-end max-lg:items-start w-[80%] max-lg:w-full gap-5'>
                <p className='text-gray-900 font-semibold'>Active legal practitioner with intensive exposure to diverse special practice areas</p>
                <div className='w-full'>
                    <p className='text-gray-900 font-semibold'>Such as:</p>
                </div>
                <div className='text-gray-500 text-sm'>
                    <p>Corporate Governance / Company Legal Housekeeping | Business Compliance & Regulatory Advisory | Labor & HR Consultancy |</p>
                    <p>Data Privacy & Cybersecurity | Taxation | Land Titling and/or Property Management | Contracts |</p>
                    <p>Construction or Engineering Industry and Government Procurement | Civil & Criminal Litigation | Alternative Dispute Resolution |</p>
                    <p>Legal Counselling and Public Relations or Advocacy | Radio or TV Broadcasting | Newspaper Writing | University Teaching.</p>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default AttorneyIntroduction