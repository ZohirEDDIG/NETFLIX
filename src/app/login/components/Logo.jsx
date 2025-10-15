import Link from 'next/link';

export default function Logo() {
    return (
        <Link className='p-4 sm:px-8 md:px-16 lg:px-32 xl:px-64' href='/'>

            <img className='w-30' src='./logo.svg' alt='NETFLIX Logo'  />
        
        </Link>
    );
}