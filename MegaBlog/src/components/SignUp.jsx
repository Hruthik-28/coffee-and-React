import React, { useState } from 'react'
import {Logo, Input, Button} from './index'
import {Link, useNavigate} from 'react-router-dom'
import { login as authLogin, login} from '../store/authStore'
import authService from '../appwrite/auth'
import { useDispatch } from 'react-redux'
import {useForm} from 'react-hook-form'

function SignUp() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const [register, HandleSubmit] = useForm()

    const signUp = async (data) => {
        setError('')
        try {
            const session = await authService.createAccount(data)
            if (session) {
                const userData = await authService.getCurrentUser(data)
                if(userData) dispatch(login(userData))
                navigate('/')
            }
        } catch (error) {
            setError(error.message)
        }
    }
    return (
        <div className='flex items-center justify-center w-full'>
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
                <div className='mb-2 flex justify-center'>
                    <span className='inline-block w-full max-w-[100px]'>
                        <Logo width='100%'/> 
                    </span>
                </div>
                <h2 className='text-center text-2xl font-bold'>
                    Sign up to create an account
                </h2>
                <p className='mt-2 text-center text-base text-black/60'>
                    Already have an account?&nbsp;
                    <Link
                        to='/login'
                        className='font-medium text-primary transition-all duration-200 hover:underline'
                    >
                        Sign In
                    </Link>
                </p>
                {
                    error && 
                    <p className='text-red-600 mt-8 text-center'>
                        {error}
                    </p>
                }
                <form onSubmit={HandleSubmit(signUp)}
                className='mt-8'>
                    <div className='space-y-5'>
                        <Input
                        label='Name: '
                        placeholder='Your name please'
                        type='text'
                        {...register('name', {
                            required: true
                        })} 
                        
                        />
                        <Input 
                        label='Email: '
                        placeholder='Enter your email'
                        type='email'
                        {...register('email', {
                            require: true,
                            validate: {
                                matchPattern: (value) => /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/igm.test(value) || "Please Enter a valid email address"
                            }
                        })}
                        />

                        <Input 
                        label='Password'
                        placeholder='Enter your password'
                        type='password'
                        {...register('password', {
                            validate: {
                                matchPattern: (value) => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(value) || 'Password must have atleast one uppercase and number'
                            }
                        })}
                        />

                        <Button type='submit' className='w-full'>
                            SignUp
                        </Button>
                        
                    </div>

                </form>
            </div>
        </div>
    )
}

export default SignUp
