import s from './EditPost.module.scss';
import React  from "react";
import {PostInterface} from "../../interfaces";
import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { editPost } from '../../store/Posts/actionCreator';

type Inputs = {
    id: number;
    title: string;
    genre: string;
    body: string;
};

export const EditPost: React.FC<{ content: PostInterface, toggleModal: () => void, editPostModal: boolean}> = ({ content , toggleModal, editPostModal}) => {
    const dispatch = useDispatch();

    const modalRef = React.useRef<HTMLDivElement>(null);

    const nonModalClick = (event: any) => {
        const path = event.path || (event.composedPath && event.composedPath());
        if (!path.includes(modalRef.current)) toggleModal();
    };
    React.useEffect(() => {
        document.body.addEventListener('click', nonModalClick);
        return () => document.body.removeEventListener('click', nonModalClick);
    }, []);

    const { register, handleSubmit } = useForm<Inputs>({
        defaultValues: {
            id: content.id,
            title: content.title,
            genre: content.genre,
            body: content.body,
        }
    });

    const edit: SubmitHandler<Inputs> = (data, event?: any) => {
        dispatch(editPost(data));
        toggleModal();
    };

    return (
        <div className={editPostModal? s.modal: s.hidden}>
            <div  ref={modalRef}>
                <form onSubmit={handleSubmit(edit)} className={s.form}>
                    <input type="text" required {...register('title')} />
                    <textarea required {...register('body')} />
                    <button type="submit">Edit post</button>
                </form>
            </div>
        </div>
    );
}