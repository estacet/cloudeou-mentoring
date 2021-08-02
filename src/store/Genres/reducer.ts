const initialState = {
    items: [],
};

export const genresReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'GENRES/SET':
            return {
                ...state,
                items: action.payload,
            };

        case 'GENRES/ADD':
            return {
                ...state,
                items: [...state.items, action.payload],
            };

        default:
            return state;
    }
};
