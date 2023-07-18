import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { loginUser } from '../redux/features/user/userSlice';
import { useAppDispatch } from '../redux/hook';

interface LoginFormInputs {
  email: string;
  password: string;
}

interface LoginFormProps {
  className?: string;
}

export function LoginForm({ className }: LoginFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const [email, setEmail] = useState('');

  const dispatch = useAppDispatch();

  const onSubmit = (data: LoginFormInputs) => {
    dispatch(loginUser({email: data.email, password: data.password}));
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
          </div>
          <button className="button">Login</button>
        </div>
      </form>
    </div>
  );
}
