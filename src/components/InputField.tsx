import React, { useRef } from 'react';
import { TodoState } from './model';
import './styles.css';


interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({todo, setTodo, handleAdd}) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const test = TodoState();
  
  return (
    <form className='input' onSubmit={(e) => {
            // handleAdd(e)
            // test.dispatch({})
            inputRef.current?.blur();
        }}
    >
        <input
            ref={inputRef}
            type="input" 
            placeholder='Enter a task' 
            className='input__box'
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
        />
         <button className='input__submit' type='submit'>Go</button>
    </form>
  )
}

export default InputField