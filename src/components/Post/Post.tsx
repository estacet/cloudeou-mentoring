import React, { useState } from 'react';
import { PostInterface } from '../../interfaces';
import s from './Post.module.scss';
import { EditPost } from '../EditPost/EditPost';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../store/Posts/actionCreator';

export const Post: React.FC<{ content: PostInterface }> = ({ content }) => {
   const [editPostModal, setEditPostModal] = useState<boolean>(false);
   const dispatch = useDispatch();

   const removePost = () => {
      dispatch(deletePost(content));
   };

   const toggleModal = () => {
      setEditPostModal(!editPostModal);
   };

   return (
      <div className={s.post}>
         <h2>{content.title}</h2>
         <p>
            <b>{content.genre}</b>
         </p>
         <p>{content.body}</p>
         {editPostModal ? <EditPost toggleModal={toggleModal} editPostModal={editPostModal} content={content} /> : undefined}
         <button onClick={removePost}>Delete</button>
         <button onClick={toggleModal}>Edit</button>
      </div>
   );
};
