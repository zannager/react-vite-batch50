const initialState = { 
    users: [
        {
            id: 1,
            name: 'user 1'
        },
        {
            id: 2,
            name: 'user 2'
        },
        {
            id: 3,
            name: 'user 3'
        }
    ]
 };

function reducer(state, action) {
  switch (action.type) {
    case 'add-user':
      return { 
        users: [...state.users, action.data]
      };
    case 'remove-user':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

export {
    reducer, initialState
}