import type { TodoItemT } from "src/types/TodoItem.type";

export const defaultTodos: Array<TodoItemT> = [
	{
		id: 1,
		desc: "Get some carrots",
		deadline: "27/7/2018",
		done: false,
	},
	{
		id: 2,
		desc: "Do some magic",
		deadline: "22/7/2018",
		done: false,
	},
	{
		id: 3,
		desc: "Go to the gym",
		deadline: "24/7/2018",
		done: false,
	},
	{
		id: 4,
		desc: "Buy milk",
		deadline: "30/7/2018",
		done: false,
	},
	{
		id: 5,
		desc: "Eat some fruits",
		deadline: "29/7/2018",
		done: true,
	},
];
