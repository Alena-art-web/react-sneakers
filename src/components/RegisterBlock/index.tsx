import React from 'react'
import { Link } from 'react-router-dom'
import s from './index.module.scss'
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
    email: string,
    password: string,
};

const RegisterBlock = () => {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { 
            errors,
            isValid, 
        }
    } = useForm<Inputs>({
        mode: 'onBlur'
    })

    const onSubmit: SubmitHandler<Inputs> = data => {
        console.log(JSON.stringify(data))
        reset()
    }

    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/

    return (
        <div className={s.page_login}>
            <div className={s.container}>
                <div className={s.login_block}>
                    <div className={s.title}>
                        <span>Welcome</span>
                        <h1>Registration</h1>
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
                                <button className={s.button} disabled={!isValid}>Sign In</button>
                            </div>
                        </form>
                    </div>
                    <div className={s.link}>
                        <a href='#'>Forgot Password?</a>
                    </div>
                    <p>I have an account? <Link to='/login'>Sign In</Link></p>
                </div>
            </div>
        </div>
    )
}

export default RegisterBlock