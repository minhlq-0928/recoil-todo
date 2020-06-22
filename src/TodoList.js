import * as React from 'react';
import { useRecoilValue } from 'recoil';

import { filteredTodoListState } from './recoilState';
import TodoItemCreator from './TodoItemCreator';
import TodoItem from './TodoItem';
import TodoListFilters from './TodoListFilters';

function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      <TodoListFilters />
      <TodoItemCreator />

      {
        todoList.map(todo => (
          <TodoItem key={todo.id} item={todo} />
        ))
      }
    </>
  )
}

export default TodoList;
