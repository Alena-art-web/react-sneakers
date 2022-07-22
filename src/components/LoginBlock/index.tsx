import React, { useEffect } from 'react'
import { Link, Navigate } from 'react-router-dom'
import s from './index.module.scss'
import { useForm, SubmitHandler } from "react-hook-form"
import { useAppDispatch } from '../../redux/store';
import { fetchUserData, selectCurrentUser } from '../../redux/slices/auth';
import { useSelector } from 'react-redux';
import { User } from '../../@types';

// type Inputs = {
//     email: string,
//     password: string,
// };

const LoginBlock = () => {
    const dispatch = useAppDispatch()
    const isAuth = useSelector(selectCurrentUser)
    const {
        register,
        handleSubmit,
        reset,
        formState: { 
            errors,
            isValid, 
        }
    } = useForm<User>({
        mode: 'onBlur',
    })

    if (isAuth) {
        return <Navigate to='/'/>
    }
    
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/

    const onSubmit: SubmitHandler<User> = async (data) => {
        const values = await dispatch(fetchUserData(data))

        if ('token' in values.payload) {
            window.localStorage.setItem('token', values.payload.token)
        } else {
            alert('Не удалось авторизоваться!')
        }
         
        reset()
    }

    

    return (
        <div className={s.page_login}>
            <div className={s.container}>
                <div className={s.login_block}>
                    <div className={s.title}>
                        <span>Welcome</span>
                        <h1>Login to your account</h1>
                    </div>
                    <div className={s.input_block}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <p className={s.input_title}>Email</p>
                                {errors?.email && 
                                <div className={s.error}>{errors?.email?.message || "Error"}</div>
                                }
                                <input 
                                    {...register("email", { 
                                        required: "Это поле обязательное для заполнения",
                                        pattern: {
                                            value: emailRegex,
                                            message: "Некорректный email"
                                        }
                                    })}
                                />
                            </div>
                            <div>
                                <p className={s.input_title}>Password</p>
                                {errors?.password && 
                                    <div className={s.error}>{errors?.password?.message || "Error"}</div>
                                }
                                <input type="password"
                                    {...register("password", { 
                                        required: "Это поле обязательное для заполнения", 
                                        minLength: {
                                            value: 5,
                                            message: "Минимум 5 символов"
                                        },
                                        maxLength: {
                                            value: 10,
                                            message: "Максимум 10 символов"
                                        }
                                    })} 
                                />
                            </div>

                            <div>
                                <button 
                                    type='submit'
                                    className={s.button} 
                                    disabled={!isValid}
                                >
                                    Sign In
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className={s.link}>
                        <a href='#'>Forgot Password?</a>
                    </div>
                    <p>I don’t have an account? <Link to='/registration'>Sign Up</Link></p>
                </div>
            </div>
        </div>
    )
}

export default LoginBlock