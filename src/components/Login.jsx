import React from 'react';
import { useForm } from "react-hook-form";
import cl from './Login.module.css';



export const Login = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid }
    } = useForm({
        mode: "onBlur"
    });

    const onSubmit = (data) => {
        console.log(JSON.stringify(data))
        reset();
    }

    return (
        <div className={cl.login}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>First Name:
                        <input {...register("firstName", {
                            required: "Поле обязательно для заполнения!",
                            minLength: {
                                value: 5,
                                message: "Минимум 5 символов"
                            }
                        })} />
                    </label>
                    <div style={{height: 40, color: '#FFFFFF'}}>
                        {errors?.firstName && <p>{errors?.firstName?.message|| "Error!"} </p>}
                    </div>
                </div>
                <div>
                    <label>Last Name:
                        <input {...register("lastName", {
                            required: "Поле обязательно для заполнения!",
                            minLength: {
                                value: 5,
                                message: "Минимум 5 символов"
                            }
                        })} />
                    </label>
                    <div style={{height: 40, color: '#FFFFFF'}}>
                        {errors?.lastName && <p>{errors?.lastName?.message|| "Error!"} </p>}
                    </div>
                </div>

                <select {...register("gender")}>
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="other">other</option>
                </select>
                <input type="submit" disabled={!isValid} />
            </form>
        </div>
    );
};
