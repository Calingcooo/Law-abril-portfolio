import React from 'react'

const data = [{
    title: "10+",
    description: "Trusted Companies"
}, {
    title: "300+",
    description: "Taken business legalities"
}, {
    title: "2+",
    description: "Years of Journey"
}]

const Achievement = () => {
  return (
    <div className='eventBg flex flex-col gap-10 justify-center items-center py-16 ' data-aos="fade-up" data-aos-duration="3000">
        <div className='text-center text-white flex flex-col gap-5'>
            <h1 className='text-5xl max-sm:text-4xl hightlightText font-bold'> Some count that matters</h1>
            <p className='text-lg'>Our achievement in the journey depicted in numbers</p>
        </div>
        <div className='flex max-sm:flex-col gap-5 max-sm:gap-y-10 w-[500px] max-sm:w-full max-sm:justify-center justify-between'>
            {data.map((items, index) => (
                <div key={index} className='flex flex-col text-center text-white gap-3'>
                    <h2 className='text-5xl font-bold'>{items.title}</h2>
                    <p>{items.description}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Achievement