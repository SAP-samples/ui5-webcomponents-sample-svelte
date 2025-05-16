import type { TodoItemT } from "src/types/TodoItem.type";
import Dialog from "@ui5/webcomponents/dist/Dialog.js";

const defaultTodos: Array<TodoItemT> = [
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
];

const defaultDoneTodos: Array<TodoItemT> = [
	{
		id: 5,
		desc: "Eat some fruits",
		deadline: "29/7/2018",
		done: true,
	},
];

type TodoItemType = {
	id: number;
	desc: string;
	deadline: string;
	done: boolean;
};

class TodoStore<T extends TodoItemType> {
	#todos = $state<T[]>([]);

	constructor(todos: T[]) {
		this.#todos = todos;
	}

	public get todos(): T[] {
		return this.#todos;
	}

	add(newTodo: Pick<T, "deadline" | "desc">) {
		const item = {
			...newTodo,
			id: this.todos.length,
			done: false,
		};

		this.todos.push(item);
	}

	toggleDone(id: T["id"]) {
		const item = this.#todos.find((t) => t.id === id);

		console.log(item, id);

		if (item) {
			this.#todos = [
				...this.#todos.filter((t) => t.id !== id),
				{
					...item,
					done: !item.done,
				},
			];
		}
	}

	remove(id: T["id"]) {
		this.#todos = this.#todos.filter((t) => t.id !== id);
	}

	update(id: T["id"], updatedItem: T) {
		const oldItem = this.#todos.find((t) => t.id === id);

		if (oldItem) {
			this.#todos = [...this.#todos.filter((t) => t.id !== id), updatedItem];
		}
	}
}

export const todoStore = new TodoStore<TodoItemType>([...defaultTodos, ...defaultDoneTodos]);

interface ElementReferences {
	dialog: {
		[key: string]: Dialog | null;
	};
}

export const references = $state<ElementReferences>({
	dialog: {
		settingsDialog: null,
		helpDialog: null,
	},
});
