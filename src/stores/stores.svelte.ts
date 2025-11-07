import type Dialog from "@ui5/webcomponents/dist/Dialog.js";
import { defaultTodos } from "./todoSeed";

type TodoItemType = {
	id: number;
	desc: string;
	deadline: string;
	done: boolean;
};

class TodoStore {
	#todos = $state<TodoItemType[]>([]);

	constructor(todos: TodoItemType[]) {
		this.#todos = todos;
	}

	public get todos(): TodoItemType[] {
		return this.#todos;
	}

	add(newTodo: Pick<TodoItemType, "deadline" | "desc">) {
		const largestId = this.#todos.map((t) => t.id).reduce((a, b) => Math.max(a, b), 0);

		const item = {
			...newTodo,
			id: largestId + 1,
			done: false,
		};

		this.todos.push(item);
	}

	toggleDone(id: TodoItemType["id"]) {
		const item = this.#todos.find((t) => t.id === id);

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

	remove(id: TodoItemType["id"]) {
		this.#todos = this.#todos.filter((t) => t.id !== id);
	}

	update(id: TodoItemType["id"], item: Partial<Omit<TodoItemType, "id">>) {
		const oldItem = this.#todos.find((t) => t.id === id);

		if (!oldItem) {
			return;
		}

		const updatedItem = {
			...oldItem,
			...item,
		};

		this.#todos = [...this.#todos.filter((t) => t.id !== id), updatedItem];
	}
}

export const todoStore = new TodoStore(defaultTodos);

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
