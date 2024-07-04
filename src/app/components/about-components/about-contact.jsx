

import React from 'react'
import { IoMdArrowDropdown } from "react-icons/io";

const AboutContact = () => {
  return (
    <div className='max-w-[75rem] max-lg:px-10 m-auto flex flex-col'>
        <form className='w-full text-sm flex flex-col gap-5'>
            <div className='flex flex-col gap-3'>
                <p className='font-bold text-gray-700'>Name</p>
                <div className='flex gap-5 w-full'>
                    <div className='flex flex-col w-1/2'>
                        <input type="text" name='first' className='border border-gray-600 rounded-md py-2 px-2'/>
                        <label htmlFor="first" className='text-gray-500'>First</label>
                    </div>
                    <div className='flex flex-col w-1/2'>
                        <input type="text" name='last' className='border border-gray-600 rounded-md py-2 px-2'/>
                        <label htmlFor="last" className='text-gray-500'>Last</label>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-3'>
                <label htmlFor="cnumber" className='font-bold text-gray-700'>Contact Number</label>
                <input type="text" name='cnumber' className='border border-gray-600 rounded-md py-2 px-2'/>
            </div>
            <div className='flex flex-col gap-3'>
                <label htmlFor="email" className='font-bold text-gray-700'>Email Address</label>
                <input type="text" name='email' className='border border-gray-600 rounded-md py-2 px-2'/>
            </div>
            <div className='flex flex-col gap-3'>
                <label htmlFor="legal-field" className='font-bold text-gray-700'>Legal Field you need help with </label>
                <div className='flex flex-col'>
                    <div className='border border-gray-600 rounded-md p-2 flex justify-between items-center'>
                        <input type="text" name='legal-field' readOnly className='border-none outline-none'/>
                        <IoMdArrowDropdown size={25} className='text-gray-500'/>
                    </div>
                    <p className='text-gray-500'>Please select the field of law you need assistance with</p>
                </div>
            </div>
            <div className='flex flex-col gap-3'>
                <label htmlFor="personal-injury" className='font-bold text-gray-700'>For Personal Injury concerns, please include the date of your injury </label>
                <div className='flex flex-col'>
                    <input type="text" name='personal-injury' className='border border-gray-600 rounded-md p-2'/>
                    <p className='text-gray-500'>For non-personal injury concerns, please include the date today</p>
                </div>
            </div>
            <div className='flex flex-col gap-3'>
                <label htmlFor="what-happen" className='font-bold text-gray-700'>What happened?</label>
                <div className='flex flex-col'>
                    <textarea rows={5} type="text" name='what-happen' className='border border-gray-600 rounded-md p-2'/>
                    <p className='text-gray-500'>Please include any information you believe is important to your case. We will do our best to answer your questions in a timely manner.</p>
                </div>
            </div>
            <div className='flex flex-col gap-3'>
                <p  className='font-bold text-gray-700'>Address</p>
                <div className='flex flex-col'>
                    <input type="text" name='address-1' className='border border-gray-600 rounded-md p-2'/>
                    <label htmlFor="address-1" className='text-gray-500'>Address Line 1</label>
                </div>
                <div className='flex flex-col'>
                    <input type="text" name='address-2' className='border border-gray-600 rounded-md p-2'/>
                    <label address-2 className='text-gray-500'>Address Line 2</label>
                </div>
                <div className='flex gap-5 w-full'>
                    <div className='flex flex-col w-1/2'>
                        <input type="text" name='city' className='border border-gray-600 rounded-md py-2 px-2'/>
                        <label htmlFor="city" className='text-gray-500'>City</label>
                    </div>
                    <div className='flex flex-col w-1/2'>
                        <div className='border border-gray-600 rounded-md py-2 px-2 flex justify-between items-center'>
                            <input type="text" name='state' className='border-none outline-none'/>
                            <IoMdArrowDropdown size={20} className='text-gray-500'/>
                        </div>
                        <label htmlFor="state" className='text-gray-500'>State</label>
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <label htmlFor="communication-pref" className='font-bold text-gray-700'>Communication Preference</label>
                    <div className='flex flex-col'>
                        <div className='border border-gray-600 rounded-md py-2 px-2 flex justify-between items-center'>
                            <input type="text" name='communication-pref' readOnly className='outline-none border-none'/>
                            <IoMdArrowDropdown size={20} className='text-gray-500'/>
                        </div>
                        <p className='text-gray-500'>How would you like to be contacted.</p>
                    </div>
                </div>
                <div className='flex flex-col gap-3 mt-5'>
                    <p className='font-bold text-gray-700'>Disclamer</p>
                    <div className='flex items-center gap-3'>
                        <input name='disclamer' type="checkbox" />
                        <label htmlFor="disclamer text-gray-500">I understand and Agree</label>
                    </div>
                    <p className='text-gray-500'>Upon submitting this form, I recognize that no Attorney-Client Relationship has been formed. I authorize the Loaiza Law Firm to view these information without any guarantees of confidentiality. (Please click the box to proceed)</p>
                </div>
                <div className='flex'>
                    <button className='bg-[#333333] text-white px-7 py-2 rounded-md hover:opacity-70'>SUBMIT</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default AboutContact;