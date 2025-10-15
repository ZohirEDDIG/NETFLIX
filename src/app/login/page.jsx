import {  Logo, Form, Footer } from './components';

export default function Login() {
    return (
        <div className='flex flex-col gap-y-10'>

            <div className='background h-screen w-screen fixed -z-10'/>

            {/* Logo */}
            <Logo />

            {/* Form */}
            <Form />

            {/* Footer */}
            <Footer />

        </div>
    );
}