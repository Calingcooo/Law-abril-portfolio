import React from 'react'
import Image from 'next/image'

import subPractice1 from "../../../../public/subPracImg1.png"
import subPractice2 from "../../../../public/subPracImg2.png"
import subPractice3 from "../../../../public/subPracImg3.png"
import subPractice4 from "../../../../public/subPracImg4.png"
import subPractice5 from "../../../../public/subPracImg5.png"
import subPractice6 from "../../../../public/subPracImg6.png"

const listSubPractice = [{
    icon: subPractice1,
    title: "Real Estate, Property Transfers, and Conveyances",
    description: "Our real estate services include handling transactions, property transfers, and all legal aspects of property ownership. We guide you through the complexities of real estate law to ensure smooth and secure property dealings."
}, {
    icon: subPractice2,
    title: "Construction or Engineering Industry",
    description: "We manage legal issues in construction projects, from contracts to disputes. Our expertise covers all phases of construction, ensuring your projects comply with legal standards and run smoothly."
}, {
    icon: subPractice3,
    title: "Special Projects",
    description: "Our attorneys provide legal support for unique and complex projects tailored to your specific needs. We offer specialized services to address the distinctive challenges of your project, ensuring successful outcomes."
}, {
    icon: subPractice4,
    title: "Government Procurement",
    description: "We advise on compliance and legalities in government contracting and procurement. Our team helps you navigate the regulatory landscape to secure government contracts and meet all legal obligations."
}, {
    icon: subPractice5,
    title: "Legal Forms and Notarial",
    description: "We prepare legal documents and provide notarial services to ensure authenticity and legal validity. Our services include drafting, reviewing, and notarizing a wide range of legal forms."
}, {
    icon: subPractice6,
    title: "Legal Education Advocacy and/or Policy-making",
    description: "We promote legal education, advocacy, and involvement in policy-making initiatives. Our attorneys engage in activities that advance the legal profession and contribute to the development of sound legal policies."
}]



const PracticeSub = () => {
  return (
    <div className='flex flex-col max-w-[75rem] w-full max-lg:px-10 m-auto gap-10 justify-center items-center py-20'>
        <div className='flex-wrap flex gap-5'>
            {listSubPractice.map((list, index) => (
                <div className='flex flex-col w-[45%] card-shadow p-5 gap-5 rounded-sm max-md:w-full' key={index}>
                    <div className='flex w-full justify-center '>
                        <Image alt='images' className='w-[10rem]' src={list.icon}/>
                    </div>
                    <h3 className='hightlightText font-bold text-gray-700'>{list.title}</h3>
                    <p className='text-xs text-gray-500 leading-loose'>{list.description}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default PracticeSub;