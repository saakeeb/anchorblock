import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginIconButton from '../Common/LoginIconButton';
import googleIcon from "../../assets/google icon.svg";
import appleIcon from "../../assets/apple icon.svg";
import { useForm } from 'react-hook-form';
import classNames from 'classnames';
import eyeOpenIcon from '../../assets/eye open icon.svg';
import eyeCloseIcon from '../../assets/eye close icon.svg';
import LoginSidebar from '../Sidebar/LoginSidebar';

type FormValues = {
    username: string
    email: string;
    password: string;
};

const SignUp = () => {
    let isFetching = true;
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
    const [isVisible, setIsVisible] = useState(false);

    const handleVisibility = () => {
        setIsVisible(!isVisible);
    };

    const onSubmit = (data: any) => {
        console.log('onSubmit data', data);
        // dispatch(signUpUser(data));
        // dispatch(setEmailAuth(data.email));
        // dispatch(setUserAuth(data.username));
    };

    return (
        <div className='reletive'>
            <div className="bg-white">
                <LoginSidebar />
            </div>
            <div className="flex justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className=" flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                    <div className="flex flex-col my-3">
                        <h2 className="my-2 text-center text-2xl font-extrabold text-header-text">
                            Getting Started
                        </h2>
                        <p className='text-paragraph-text text-center'>Create an account to continue!</p>
                    </div>
                    <div className="flex justify-center items-center gap-4 my-4 min-[120px]:flex-col md:flex-row">
                        <button className='text-paragraph-text text-sm bg-link-bg lg:p-4 min-[120px]:p-2 rounded-md'>
                            <LoginIconButton text="Sign In with Google" img={googleIcon} />
                        </button>
                        <button className='text-paragraph-text text-sm bg-link-bg lg:p-4 min-[320px]:p-2 rounded-md'>
                            <LoginIconButton text="Sign In with Apple Id" img={appleIcon} />
                        </button>
                    </div>
                    <div className=" gap-4 my-4 relative">
                        <div className='block border-2 border-b-link-bg w-full'></div>
                        <p
                            className='text-paragraph-text absolute z-20 inline-block bg-white w-16 -top-3 -translate-x-1/2 left-1/2 text-center'
                        >
                            OR
                        </p>
                    </div>
                    <div className=" gap-4 my-4 relative">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <input
                                    type="email"
                                    id="email"
                                    {...register("email", { required: true })}
                                    placeholder='@ Your Email'
                                    className={classNames('border-2', 'rounded-xl', 'py-1', 'px-2', 'block', 'w-full', 'text-base::placeholder', 'mb-2', 'border-paragraph-text', 'focus:border-red-600', { 'focus:border-red-600': errors.email }, { 'border-red-600': errors.email }, { 'focus:outline-red-600': errors.email })}
                                />
                                {errors.email && <span className='text-warning-text'>Please enter a valid email address.</span>}
                            </div>
                            <div>
                                <input
                                    type="text"
                                    id="username"
                                    {...register("username", { required: true })}
                                    placeholder='Φ Your Name'
                                    className={classNames('border-2', 'rounded-xl', 'py-1', 'px-2', 'block', 'w-full', 'text-base::placeholder', 'my-2', 'border-paragraph-text', 'focus:border-red-600', { 'focus:border-red-600': errors.email }, { 'border-red-600': errors.email }, { 'focus:outline-red-600': errors.email })}
                                />
                                {errors.email && <span className='text-warning-text'>Please enter your name.</span>}
                            </div>
                            <div className='relative'>
                                <div className='relative'>
                                    <button className='absolute z-20 right-4 top-1/2 -translate-y-1/2' onClick={handleVisibility}>
                                        {/* <img className='inline-block w-4' src={eyeOpenIcon} alt="Eye Icon" /> */}
                                        {isVisible ? (
                                            <img src={eyeOpenIcon} alt="eye open Icon" className='inline-block w-4' />
                                        ) : (
                                            <img src={eyeCloseIcon} alt="eye close Icon" className='inline-block w-4' />
                                        )}
                                    </button>
                                    <input
                                        type={isVisible ? 'text' : 'password'}
                                        id="password"
                                        {...register("password", { required: true })}
                                        placeholder='θ Password'
                                        className={classNames('border-2', 'rounded-xl', 'py-1', 'pl-2', "pr-12", 'block', 'w-full', 'text-base::placeholder', 'my-2', 'border-paragraph-text', 'focus:border-red-600', { 'focus:border-red-600': errors.password }, { 'border-red-600': errors.password }, { 'focus:outline-red-600': errors.password })}
                                    />
                                </div>
                                {errors.password && <span className='text-warning-text'>Please enter a valid password.</span>}
                            </div>
                            <div className='flex justify-start items-center gap-4 my-2'>
                                <input type="checkbox" name="remeber-me" id="remeber-me" />
                                <p className='text-paragraph-text'>Remember Me</p>
                            </div>
                            <button
                                type="submit"
                                className='border-2 rounded-xl py-2 text-sm px-2 block w-full bg-blue-badge my-3 text-white focus:border-blue-badge'
                            >
                                Sign Up
                            </button>
                            <div className='flex justify-center items-center gap-4 my-2'>
                                <p
                                    className='text-paragraph-text text-sm'
                                >
                                    Already have an account? <Link to="/sign-in" className='text-blue-badge'>Sign In</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;