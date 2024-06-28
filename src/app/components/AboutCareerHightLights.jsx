import React, { useState } from 'react'
const careerHighlights = [{
        title: "Head of Legal and Compliance, and Data Protection Unit.",
        semiTitle: "University of the Philippines Provident Fund",
        description: " In-house Counsel with responsibility to take care of the entire legal portfolio and data privacy concerns of the P3.2Billion plus Retirement Fund of more than 10,000 University employees nationwide, i.e., from U.P. System, Diliman, Baguio, Manila, Philippine General Hospital, Los Baños, Open University, Cebu, Visayas, and Mindanao Campuses. o Trivia: At the age of 26, officially, the youngest Unit Leader in the said Institution."
    },
    {
        title: "Special Counsel",
        semiTitle: "Makati-based Law Firm",
        description: "At 27, he is hired as a Consultant at a prestigious Makati City firm managed by U.P. and Ateneo Law alumni. He provides advisory services for diverse high-profile clients, including Fintech companies, start-ups, manufacturers, franchises, e-commerce platforms, software developers, financing companies, real estate businesses, medical suppliers, petroleum companies, family estates, and non-charitable organizations. His role includes securing special permits, practicing Tariff and Customs Law, regulatory and investment advisory, contract work, due diligence, corporate tasks, tax compliance, and litigation."
    }, 
    {
        title: "Legal Consultant and Corporate Secretary to various multimillion Corporations engaged in different industries",
        items: ["Printing Press in Tarlac City; ", "Real Estate Business in Tarlac City; ", "General Engineering Contractor and Management Services in Quezon City; ", " Industrial Inspection, Building and Equipment Technology Provider in in Province of Bataan", "Manpower and Technical Services Provider in Calamba City (Province of Laguna), Metro Cebu, and Metro Manila."]
    }, {
        title:"Former Contracts Focal Person, Company Legal Officer, Discipline Committee Attorney, and Fraud Investigator.",
        semiTitle:"Aboitiz Group’s Financial Services, under Union Bank – PeraHub, Incorporated (money service provider with 3,000+ branches in the country)",
        description: "o Trivia: In 2021, Western Union Philippines commended his Investigation write ups and prescribed the same as nationwide model template for Investigative Reports involving Anti-Money Laundering infractions and Data Integrity issues. His output won the Special Recognition for Content Quality and Completeness of Report and Investigation, thereby making it a guide for all WU branches and business partners in the entire Philippines."
    }, {
        title: "Broadcasting Lawyer",
        semiTitle: "Bombo Radyo Dagupan Station / GMA News and Public Affairs’ Sumbungan ng Bayan (24 Oras and/or Facebook Live with Oscar Oida)",
        description: "Resource Person, Dura Lex Sed Lex a weekly legal segment of Bombo Radyo Baguio Station. o Frequent Resource Person on air discussing legal issues/ public interest cases"
    }, {
        title: "Teacher",
        semiTitle: "Faculty Member, Saint Louis University – Department of Political and Social Sciences",
        description: "He handles undergraduate law and General Education - Social Sciences subjects, such as Philippine History, Life and Works of Dr. Rizal, and Contemporary World, achieving a perfect Faculty Evaluation Score in A.Y. 2021-2022, as certified by the College Dean. He is also a Bar Exam Coach for LawYour Tutor, an online mentoring program for law students and bar examinees, and serves as a resource speaker at various seminars and speaking engagements.",
    }, {
        title: "Newspaper Writer",
        semiTitle: "Opinion/Feature Contributor, Baguio Midland Courier: A Newspaper of local circulation in the entire Cordillera Administrative Region.",
        description: "Trivia: o Former Editor-in-Chief of Ang Tambuli, the Filipino Campus Newspaper of Mangaldan National High School; and o Radio Anchor / Scriptwriter, MNHS’ delegation to the 2011 Division Schools Press Conference – Broadcasting Competition"
    }, {
        title: "Head Proctor, November 2022 and September 2023 ",
        semiTitle: "Philippine Bar Examinations",
        description: "o Assigned by the Supreme Court to the Saint Louis University (Baguio City) Testing Site"
    }, {
        title: "Before becoming a lawyer",
        description: "Legal Researcher: Provincial Government of Tarlac; and o General Manager and Legal Officer of a Construction Company."
    }]

const AboutCareerHightLights = () => {
   const [isViewAllShow, setIsViewAllShow] = useState(false);
   const [noToShow, setNoToShow] = useState(4);
   const handleViewMore = () => {
       setIsViewAllShow((prev) => !prev)
       if (isViewAllShow) {
        setNoToShow(4);
       } else {
        setNoToShow(careerHighlights.length);
       }
   }

  return (
    <div className='bg-[#EEEEEE]'>
        <div className='max-w-[75rem] max-lg:px-10 max-lg:flex-col m-auto flex flex-col gap-5  px-14 py-20 '>
            <h1 className='text-gray-900 font-bold text-2xl'>Career Highlights</h1>
            <div className='flex flex-wrap gap-5 justify-between'>
                {careerHighlights.map((career, index) => (
                    index < noToShow && (
                        <div className='w-[45%] max-md:w-full flex flex-col rounded-lg bg-white p-5 gap-3 shadowCareerhightlightscard' key={index} >
                            <h1 className='font-bold text-gray-900'>{career.title}</h1>
                            <h2 className='font-semibold text-sm text-gray-600'>{career.semiTitle}</h2>
                            <p className='text-xs text-gray-500'>{career.description}</p>
                            {index === 2 && (
                                <ul className='flex flex-col px-3'>
                                    {career.items.map((item) => (
                                        <li className='text-xs text-gray-500 list-disc'>{item}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    )
                ))}
            </div>
            <button onClick={handleViewMore} className='uppercase text-gray-700 font-bold hover:text-gray-500 block m-auto'>{isViewAllShow ? "View less" : "View more"}</button>
        </div>
    </div>
  )
}

export default AboutCareerHightLights