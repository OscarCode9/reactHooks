
export const appReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [
        ...state, 
        {
          id: Date.now(),
          text: '',
          completed: false
        }
      ]
      
    default:
      return state;
  }
}