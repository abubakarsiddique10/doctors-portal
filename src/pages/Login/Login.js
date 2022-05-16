import React, { useEffect } from "react";
import auth from "../../firebase.init";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Loading from "../Shared/Loading";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useToken from "../hooks/useToken";

const Login= () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    let errorMessage;

    const [token] = useToken(gUser || user);

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from.pathname || "/";
    useEffect(() => {
        if (token) {
            navigate(from, { replace: true })
        }
    }, [token, from, navigate]);

    if(error || gError) {
        errorMessage = <p>{error.message || gError.message}</p>
    }
    if(loading || gLoading) {
        return <Loading/>
    }
    const onSubmit = handleSubmit(data => {
        signInWithEmailAndPassword(data.email, data.password);
    });
   

    
    return(
        <section className="h-screen flex justify-center items-center">
            <div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Login</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input 
                                type="email"
                                placeholder="Your email" 
                                className="input input-bordered w-full max-w-xs" 
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Email is required'
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Provide a valid email'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                </label>
                            </div>

                            { <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input 
                                type="password"
                                placeholder="Your password" 
                                className="input input-bordered w-full max-w-xs" 
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: 'Password is required'
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Password must be 6 character or longer'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.password?.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password?.message}</span>}

                                </label>
                            </div> }
                            {errorMessage}
                                <button className="w-full max-w-sm btn" type="submit" value="Login">Login</button>
                            <p><small>New to doctors protla? </small> <Link className="text-secondary" to='/signup'>Please create account</Link></p>
                        </form>
                        <div className="divider">OR</div>
                        <button onClick={() => signInWithGoogle()} className="btn btn-primary w-full">continue with google</button>
                    
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Login;
