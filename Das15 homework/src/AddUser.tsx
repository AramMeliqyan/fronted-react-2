import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { IFormInput } from './types';



export const AddUser = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();
  const navigate = useNavigate();

  const onSubmit = (data: IFormInput) => {
    axios.post('http://localhost:5000/users', data).then(() => {
      navigate('/');
    });
  };

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
      <button type="submit">Add User</button>
    </form>
  );
};
