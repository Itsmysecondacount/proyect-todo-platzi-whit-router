import React from 'react';
import { useTodos } from '../useTodos';
import { TodoHeader } from '../../ui/TodoHeader';
import { TodoCounter } from '../../ui/TodoCounter';
import { TodoSearch } from '../../ui/TodoSearch';
import { TodoList } from '../../ui/TodoList';
import { TodoItem } from '../../ui/TodoItem';
import { TodosError } from '../../ui/TodosError';
import { TodosLoading } from '../../ui/TodosLoading';
import { EmptyTodos } from '../../ui/EmptyTodos';
import { TodoForm } from '../../ui/TodoForm';
import { CreateTodoButton } from '../../ui/CreateTodoButton';
import { Modal } from '../../ui/Modal';
import { ChangeAlert } from '../../ui/ChangeAlert';
import { useNavigate } from 'react-router-dom';

function HomePage() {
	const { state, stateUpdaters } = useTodos();

	const {
		error,
		loading,
		searchedTodos,
		totalTodos,
		completedTodos,
		openModal,
		searchValue,
	} = state;

	const {
		setOpenModal,
		addTodo,
		deleteTodo,
		completeTodo,
		setSearchValue,
		sincronizeTodos,
	} = stateUpdaters;

	const navigate = useNavigate();

	const toEdit = (text) => {
		navigate(`/edit/${text}`);
	};

	return (
		<React.Fragment>
			<TodoHeader loading={loading}>
				<TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
				<TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
			</TodoHeader>

			<TodoList
				error={error}
				loading={loading}
				totalTodos={totalTodos}
				searchedTodos={searchedTodos}
				searchText={searchValue}
				onError={() => <TodosError />}
				onLoading={() => <TodosLoading />}
				onEmptyTodos={() => <EmptyTodos />}
				onEmptySearchResults={(searchText) => <p>No hay resultados para {searchText}</p>}
			>
				{(todo) => (
					<TodoItem
						key={todo.id}
						text={todo.text}
						completed={todo.completed}
						onComplete={() => completeTodo(todo.id)}
						onDelete={() => deleteTodo(todo.id)}
						toEdit={() => toEdit(todo.text)}
					/>
				)}
			</TodoList>

			{!!openModal && (
				<Modal>
					<TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
				</Modal>
			)}

			<CreateTodoButton setOpenModal={setOpenModal} />

			<ChangeAlert sincronize={sincronizeTodos} />
		</React.Fragment>
	);
}

export { HomePage };
