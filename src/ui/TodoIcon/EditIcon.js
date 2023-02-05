import React from 'react';
import { TodoIcon } from './';

function EditIcon({ toEdit }) {
	return <TodoIcon type="edit" color="black" onClick={toEdit} />;
}

export { EditIcon };
