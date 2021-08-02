import { useForm } from 'react-hook-form';
import s from './Form.module.scss';
import { useDispatch } from 'react-redux';
import { createGenres } from '../../store/Genres/actionCreator';

type Inputs = {
   name: string;
};

export const CreateGenre = () => {
   const { register, handleSubmit } = useForm<Inputs>();

   const dispatch = useDispatch();

   const onSubmit = async (data: Inputs, event?: any) => {
      try {
         dispatch(createGenres(data))
         alert('successfully created genre!');
         event.target.reset();
      } catch (error) {
         alert(error);
      }
   };

   return (
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
         <input placeholder="Name" {...register('name')} />
         <button type="submit">Create genre</button>
      </form>
   );
};
