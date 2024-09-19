import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { IFormInput } from './types';


export const EditUser = () => {
  const { id } = useParams<{ id: string }>(); 
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<IFormInput>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:5000/users/${id}`).then(response => {
      const { name, surname, age, salary } = response.data;
      setValue('name', name);
      setValue('surname', surname);
      setValue('age', age);
      setValue('salary', salary);
      setLoading(false);
    });
  }, [id, setValue]);

  const onSubmit = (data: IFormInput) => {
    axios.put(`http://localhost:5000/users/${id}`, data).then(() => {
      navigate('/');
    });
  };

  if (loading) return <p>Loading...</p>;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name</label>
        <input {...register('name', { required: 'Name is required' })} />
        {errors.name && <p>{errors.name.message}</p>}
      </div>
      <div>
        <label>Surname</label>
        <input {...register('surname', { required: 'Surname is required' })} />
        {errors.surname && <p>{errors.surname.message}</p>}
      </div>
      <div>
        <label>Age</label>
        <input type="number" {...register('age', { required: 'Age is required', valueAsNumber: true })} />
        {errors.age && <p>{errors.age.message}</p>}
      </div>
      <div>
        <label>Salary</label>
        <input type="number" {...register('salary', { required: 'Salary is required', valueAsNumber: true })} />
        {errors.salary && <p>{errors.salary.message}</p>}
      </div>
      <button type="submit">Update User</button>
    </form>
  );
};
