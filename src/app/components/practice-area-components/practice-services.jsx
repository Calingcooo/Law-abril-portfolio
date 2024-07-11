import React from 'react'
import Image from 'next/image'



import practiceImg1 from "../../../../public/practiceImg1.png"
import practiceImg2 from "../../../../public/practiceImg2.png"
import practiceImg3 from "../../../../public/practiceImg3.png"
import practiceImg4 from "../../../../public/practiceImg4.png"
import practiceImg5 from "../../../../public/practiceImg5.png"
import practiceImg6 from "../../../../public/practiceImg6.png"
import practiceImg7 from "../../../../public/practiceImg7.png"
import practiceImg8 from "../../../../public/practiceImg8.png"
import practiceImg9 from "../../../../public/practiceImg9.png"
import practiceImg10 from "../../../../public/practiceImg10.png"


const listOfPractices = [{
    icon: practiceImg1,
    title: "Litigation and Alternative Dispute Resolution",
    description: "Our litigation team represents clients in court, handling cases with a strategic approach to achieve the best possible outcomes. We also offer alternative dispute resolution methods, including arbitration and mediation, to resolve conflicts efficiently and amicably."
}, {
    icon: practiceImg2,
    title: "Corporate Governance and Housekeeping",
    description: "We assist businesses in adhering to corporate laws and regulations, maintaining accurate corporate records, and implementing best governance practices. Our services ensure your company operates smoothly and remains compliant with all legal requirements."
}, {
    icon: practiceImg3,
    title: "Legal Risk Management",
    description: "Our attorneys specialize in identifying, assessing, and mitigating legal risks that could impact your business. We provide comprehensive risk management strategies to safeguard your interests and minimize potential liabilities."
}, {
    icon: practiceImg4,
    title: "Business Compliance & Regulatory Advisory",
    description: "We offer expert advice on industry-specific regulations and standards, helping your business stay compliant and avoid legal issues. Our team keeps you informed of regulatory changes and ensures your operations meet all legal requirements."
}, {
    icon: practiceImg5,
    title: "Taxation",
    description: "Our tax specialists provide strategic tax planning, compliance, and dispute resolution services. We help you navigate complex tax laws, optimize your financial position, and resolve any tax-related issues efficiently."
}, {
    icon: practiceImg6,
    title: "Labor & HR Consultancy",
    description: "We advise on employment laws, workplace policies, and human resource management. Our services include drafting employment contracts, managing disputes, and ensuring compliance with labor regulations to create a fair and lawful work environment."
}, {
    icon: practiceImg7,
    title: "Data Protection",
    description: "Ensuring your business complies with data privacy laws is crucial in today’s digital age. Our attorneys provide guidance on protecting sensitive information, implementing data protection policies, and addressing data breaches."
}, {
    icon: practiceImg8,
    title: "Contracts",
    description: "Our team drafts, reviews, and negotiates contracts to safeguard your interests. We ensure that all agreements are legally sound and provide robust protection for your business dealings."
}, {
    icon: practiceImg9,
    title: "Counseling and/or Retainer Engagements",
    description: "We offer ongoing legal advice and support through retainer agreements. Our attorneys are available to provide counsel on various legal matters, ensuring you have reliable legal assistance when you need it."
}, {
    icon: practiceImg10,
    title: "Client Representation",
    description: "We advocate on behalf of clients in various legal matters and proceedings. Our representation includes court appearances, negotiations, and mediation, ensuring your interests are effectively represented."
}]

const PracticeServices = () => {
  return (
    <div className='flex flex-col max-w-[75rem] w-full max-lg:px-10 m-auto gap-10 justify-center items-center py-20'>
        <div className='flex-wrap flex gap-5'>
            {listOfPractices.map((list, index) => (
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

export default PracticeServices;