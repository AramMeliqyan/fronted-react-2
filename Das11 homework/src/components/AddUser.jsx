import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

// Схема валидации
const schema = yup.object().shape({
  firstName: yup.string().required('Имя обязательно для заполнения'),
  lastName: yup.string().required('Фамилия обязательна для заполнения'),
  login: yup.string().email('Введите действительный email').required('Логин обязателен'),
  age: yup.number().required('Возраст обязателен').positive().integer(),
  password: yup.string().min(8, 'Пароль должен содержать не менее 8 символов').required('Пароль обязателен'),
});

const AddUser = ({ addUser }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    addUser(data);
    toast.success('Пользователь успешно добавлен');
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>name</label>
        <input {...register('firstName')} />
        <p>{errors.firstName?.message}</p>
      </div>
      <div>
        <label>surname</label>
        <input {...register('lastName')} />
        <p>{errors.lastName?.message}</p>
      </div>
      <div>
        <label>login</label>
        <input {...register('login')} />
        <p>{errors.login?.message}</p>
      </div>
      <div>
        <label>age</label>
        <input type="number" {...register('age')} />
        <p>{errors.age?.message}</p>
      </div>
      <div>
        <label>password</label>
        <input type="password" {...register('password')} />
        <p>{errors.password?.message}</p>
      </div>
      <button type="submit">Add User</button>
    </form>
  );
};

AddUser.propTypes = {
  addUser: PropTypes.func.isRequired,
};

export default AddUser;
