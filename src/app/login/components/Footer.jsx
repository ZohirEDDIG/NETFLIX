import Link from 'next/link';

import { IoMdArrowDropdown } from 'react-icons/io'
import { IoLanguage } from 'react-icons/io5';


export default function Footer() {

    return (
        <footer className='bg-[#161616]'> 

            <div className='px-4 py-16 sm:px-8 md:px-16 lg:px-32 xl:px-64 flex flex-col gap-y-6'>

                <h1 className='text-gray-400'>Questions? <Link className='underline' href=''>Contact-us</Link></h1>

                <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4'>

                    <Link className='text-gray-400 underline' href=''>FAQ</Link>

                    <Link className='text-gray-400 underline' href=''>Help Center</Link>
                    
                    <Link className='text-gray-400 underline' href=''>Terms of Use</Link>
                    
                    <Link className='text-gray-400 underline' href=''>Privacy</Link>

                    <Link className='text-gray-400 underline' href=''>Cookie Preferences</Link>
                    
                    <Link className='text-gray-400 underline' href=''>Corporate Information</Link>

                </div>

                <div className='w-fit relative'>

                    <IoLanguage className='text-white absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none'/>

                    <select className='text-white w-fit pl-8 pr-20 py-2 border-2 border-gray-300 rounded-md  flex items-center appearance-none' name='language' id='language'>

                        <option className='text-black' value='en'>English</option>

                        <option className='text-black' value='fr'>Français</option>

                        <option className='text-black' value='ar'>العربية</option>

                    </select>

                    <IoMdArrowDropdown className='text-white absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none' />
                
                </div>

            </div>

        </footer>
    );
}