import React, { useState } from 'react'
const careerHighlights = [{
    title: "Head of Legal and Compliance, and Data Protection Unit.",
    semiTitle: "University of the Philippines Provident Fund",
    description: " In-house Counsel with responsibility to take care of the entire legal portfolio and data privacy concerns of the P3.2Billion plus Retirement Fund of more than 10,000 University employees nationwide, i.e., from U.P. System, Diliman, Baguio, Manila, Philippine General Hospital, Los Baños, Open University, Cebu, Visayas, and Mindanao Campuses. o Trivia: At the age of 26, officially, the youngest Unit Leader in the said Institution."
    },
    {
        title: "Special Counsel",
        semiTitle: "Makati-based Law Firm",
        description: "At the age of 27, he is privileged to be invited and hired as a Consultant to a reputable firm in Makati City established and managed by certain U.P. Law and Ateneo Law Alumni lawyers.",
        description2: "He is entrusted with big responsibilities as follows: ▪ Retainer work covering advisory work for day-to-day operations of diverse high-profile corporate clients such as:",
        items: ["Financial Technology (Fintech) Companies;", "Start-up Incubators;", "Cement Manufacturing;", "Food and Service Franchise Operators;", "E-Commerce Platforms;", "Software Developers;", "Financing and Lending Companies;", "Real Estate Businesses and/or Condominium Association;", "Medical Equipment Supplies;", "Downstream Petroleum Companies;", "Family Estates; and", "Non-charitable organizations."],
        items2: ["Secure special permits for the business of the clients;", "Tariff and Customs Law Practice for importer-clients;", "Regulatory advisory for local and foreign clients/ Foreign investment advisory;", "Contract drafting, review, and negotiation;", "Limited due diligence;", "Other general corporate and commercial work including tax compliance concerns for special projects;", "Litigation;"]
    }, 
    {
        title: "Legal Consultant and Corporate Secretary to various multimillion Corporations engaged in different industries",
        items: ["Printing Press in Tarlac City; ", "Real Estate Business in Tarlac City; ", "General Engineering Contractor and Management Services in Quezon City; ", " Industrial Inspection, Building and Equipment Technology Provider in in Province of Bataan", "Manpower and Technical Services Provider in Calamba City (Province of Laguna), Metro Cebu, and Metro Manila."]
    }, {
        title:"Former Contracts Focal Person, Company Legal Officer, Discipline Committee Attorney, and Fraud Investigator.",
        semiTitle:"Aboitiz Group’s Financial Services, under Union Bank – PeraHub, Incorporated (money service provider with 3,000+ branches in the country)",
        description: "o Trivia: In 2021, Western Union Philippines commended his Investigation write ups and prescribed the same as nationwide model template for Investigative Reports involving Anti-Money Laundering infractions and Data Integrity issues. His output won the Special Recognition for Content Quality and Completeness of Report and Investigation, thereby making it a guide for all WU branches and business partners in the entire Philippines."
    },{
        title: "Trial Lawyer and Legal Advocate",
        description: "Collaborating Counsel of Cariño Law Office (Baguio City): Assigned to handle Civil and Criminal Cases, and appearing before Election and Administrative Bodies;",
        items: ["Freelance General Practitioner and Retained Counsel of different business entities;", "Significant situations or cases managed:", "200+victims of Syndicated Estafa in San Carlos City, Pangasinan (mostly public school teachers, farmers, and other individuals belonging to the marginalized sector);", "Appeared as Legal Counsel in the 2022 Election Canvass, for and on behalf of a Congressman in La Union;", "Secured the conviction of an Electric Cooperative Director accused of the crime Estafa.", "Lawyer of a local electric cooperative protesting in Court a 25M local tax assessment by a Provincial Government. Their Team was able to successfully reduce the said amount to a P10M amount, resulting in millions of savings for the said business.", "Advocacies: Women and Gender Sensitivity, Welfare of Persons with Disabilities, Legal Awareness, and fighting historical disinformation."]
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
    }, ]



const AttorneyCareerHightLights = () => {
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
            <h1 className='text-gray-800 font-bold text-2xl hightlightText'>Career Highlights</h1>
            <div className='flex flex-wrap gap-5 justify-between'>
                {careerHighlights.map((career, index) => (
                    <div className='w-[45%] max-md:w-full flex flex-col rounded-lg bg-white p-5 gap-3 shadowCareerhightlightscard' key={index} >
                        <h1 className='font-bold text-gray-800 hightlightText'>{career.title}</h1>
                        <h2 className='font-semibold text-sm text-gray-600'>{career.semiTitle}</h2>
                        <p className='text-xs text-gray-500'>{career.description}</p>
                        {index === 1 && (
                            <div className='flex flex-col gap-5'>
                                <p className='mb-2 text-xs text-gray-500'>{career.description2}</p>
                                <ul className='flex flex-col gap-1'>
                                    {career.items.map((item, index) =>(
                                      <li className='text-xs text-gray-500' key={index}>o {item}</li>
                                    ))}
                                </ul>
                                <ul className='flex flex-col gap-1 px-4'>
                                    {career.items2.map((item, index) => (
                                        <li className="text-xs text-gray-500 list-disc" key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        {(index === 2 || index === 4) && (
                            <ul className='flex flex-col px-4'>
                                {index === 0 && (
                                    <p className='text-xs text-gray-500'>{career.description}</p>
                                )}
                                {career.items.map((item) => (
                                    <li className='text-xs text-gray-500 list-disc'>{item}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default AttorneyCareerHightLights