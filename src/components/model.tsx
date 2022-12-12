import {  createContext, useContext, useReducer } from 'react';

export interface Todo {
    id:number;
    todo: string;
    isDone: boolean;
}

type Actions = 
 | { type: 'add', payload: string }
 | { type: 'remove', payload: number }
 | { type: 'done', payload: number }

type Props = {
    children: React.ReactNode
}

type TodoContext = {
    state: Todo[];
    dispatch: any
}


const TodoReducer = (state: Todo[], action: Actions) => {
    switch (action.type) {
        case "add":
            return [
                ...state,
                {id: Date.now(), todo: action.payload, isDone: false}
            ];
        case "remove":
            return state.filter((todo) => todo.id !== action.payload);
        case "done":
            return state.map((todo) => 
                todo.id !== action.payload ? { ...todo, isDone: !todo.isDone} : todo
            ); 
    
        default:
            return state;
    }
}

const ListTodo = createContext<TodoContext | null>(null);

export const Context = ({children}: Props) => {
    const [state, dispatch] = useReducer(TodoReducer, []);

    return <ListTodo.Provider value={{state, dispatch}}> {children} </ListTodo.Provider>
}

export const TodoState = () => {
    return useContext(ListTodo);
};
