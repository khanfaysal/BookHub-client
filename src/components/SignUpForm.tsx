import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { createUser } from '../redux/features/user/userSlice';
import { useAppDispatch } from '../redux/hook';


interface SignupFormInputs {
  email: string;
  password: string;
}

interface SignupFormProps {
  className?: string;
}

export function SignpForm({ className }: SignupFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormInputs>();

  const [email, setEmail] = useState('');
  console.log(email)

  const dispatch: any = useAppDispatch();
  const onSubmit = (data: SignupFormInputs) => {
    // Handle form submission
   dispatch(createUser({email: data.email, password: data.password}))
  };

  useEffect(() => {
    const storedEmail = localStorage.getItem('email');

    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  return (
    <div className={`grid gap-6 ${className}`}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="input"
              placeholder="name@example.com"
              {...register('email', { required: 'Email is required' })}
            />
            {errors.email && <p>{errors.email.message}</p>}
            <input
              id="password"
              type="password"
              className="input"
              placeholder="your password"
              {...register('password', { required: 'Password is required' })}
            />
            {errors.password && <p>{errors.password.message}</p>}
            <input
              id="confirmPassword"
              type="password"
              className="input"
              placeholder="confirm password"
            />
          </div>
          <button className="button">Create Account</button>
        </div>
      </form>
    </div>
  );
}




