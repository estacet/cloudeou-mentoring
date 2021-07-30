const initialState = {
   items: [],
};

export const postsReducer = (state = initialState, action: any) => {
   switch (action.type) {
      case 'POSTS/SET':
         return {
            ...state,
            items: action.payload,
         };

         case 'POSTS/ADD':
         return {
            ...state,
            items: [...state.items, action.payload],
         };

         case 'POSTS/PUT':
         return {
            ...state,
            items: [...state.items, action.payload],
         };

      default:
         return state;
   }
};
