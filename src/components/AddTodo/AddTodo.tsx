
import png from "../../assets/plus.png";
import './AddTodo.scss'
import { useState } from "react";
import { addTodo } from "../../store/reducers/post/todoAction";
import {useAppDispatch } from '../../hooks/useAppDispatch'

const AddTodo = () => { 
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<string>('');

  const onChangeInput = (e:React.FormEvent<HTMLInputElement>)=>{
    setValue(e.currentTarget.value);
  }

const handlEAddTodo = () => {
  dispatch(addTodo({ title: value }));
  setValue('');
}

const handleKeyPress = (e:React.KeyboardEvent<HTMLInputElement>)=>{
  if(e.key === 'Enter'){
    handlEAddTodo();
}
}
  return (
    <div>
      <div className="AddTodo">
        <input
          className="AddTodo-Imput"
          placeholder="Что вы планируете сделать?"
           value={value}
          onChange={onChangeInput}
          onKeyDown={handleKeyPress}
        />
        <button className="AddTodo-Button" onClick={handlEAddTodo}>
          Добавить
          <img className="AddTodo-Img" src={png} />
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
