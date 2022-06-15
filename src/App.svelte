<script lang="ts">
	// UI5  Components
	import "@ui5/webcomponents-fiori/dist/ShellBar";
	import "@ui5/webcomponents/dist/Button";
	import "@ui5/webcomponents/dist/Input";
	import "@ui5/webcomponents/dist/DatePicker";
	import "@ui5/webcomponents/dist/Panel";
	import "@ui5/webcomponents/dist/Dialog";
	import "@ui5/webcomponents/dist/TextArea";
	import "@ui5/webcomponents-fiori/dist/Assets";
	import { setTheme } from "@ui5/webcomponents-base/dist/config/Theme";

	import TodoList from "./lib/TodoList.svelte";
	import { todos, doneTodos } from "./stores/stores";
	import logo from "./assets/imgs/UI5-orange-pheonix-logo.png";
	import type { TodoItemT } from "./types/TodoItem.type";

	setTheme("sap_horizon");

	const shellBarTitle: string = "UI5 Web Components Svelte Sample";
	const dialogHeaderText: string = "Edit Todo";

	// Elements
	let dialog;
	let dialogTextArea;
	let dialogDatePicker;

	// Create ToDo Fields
	let itemInputValue;
	let itemDateInputValue;

	// Edit Dialog fields
	let itemEditText: string = "";
	let itemEditDate: string = "";
	let selectedEditItem: number;

	// Event Handlers

	const handleItemInput = (event) => {
		itemInputValue = event.target.value;
	};

	const handleDateInput = (event) => {
		itemDateInputValue = event.target.value;
	};

	const handleAdd = (event) => {
		const newTodo: TodoItemT = {
			id: $todos.length + 1,
			desc: itemInputValue,
			deadline: itemDateInputValue,
			done: false,
		};
		todos.update((todos) => [...todos, newTodo]);
	};

	const handleDone = (event) => {
		const selectedItem = event.detail.selectedItems[0];
		const selectedId = selectedItem.getAttribute("data-key");

		const newlySelected = $todos.filter((todo) => {
			return selectedId === todo.id.toString();
		})[0];

		newlySelected.done = true;

		doneTodos.update((doneTodos) => [...doneTodos, newlySelected]);

		todos.update((todos) =>
			todos.filter((todo) => {
				return selectedId !== todo.id.toString();
			})
		);
	};

	const handleUndone = (event) => {
		const selectedItems = event.detail.selectedItems;
		const selectedIds = selectedItems.map((item) => item.getAttribute("data-key"));

		const newlyDeselected = $doneTodos
			.filter((todo) => {
				return selectedIds.indexOf(todo.id.toString()) === -1;
			})
			.map((item) => {
				return { ...item, done: false };
			});

		doneTodos.update((doneTodos) =>
			doneTodos.filter((todo) => {
				return selectedIds.indexOf(todo.id.toString()) > -1;
			})
		);

		todos.update((todos) => [...todos, ...newlyDeselected]);
	};

	const handleRemove = (event) => {
		const filteredTodos = $todos.filter((todo) => todo.id !== event.detail.id);
		todos.set(filteredTodos);

		const filteredDoneTodos = $doneTodos.filter((todo) => todo.id !== event.detail.id);
		doneTodos.set(filteredDoneTodos);
	};

	const handleEdit = (event) => {
		const matchedTodos = $todos.filter((todo) => todo.id === event.detail.id);

		let todoObj;
		if (matchedTodos.length) {
			todoObj = matchedTodos[0];
		} else {
			todoObj = $doneTodos.filter((todo) => todo.id === event.detail.id)[0];
		}

		itemEditText = todoObj.desc;
		itemEditDate = todoObj.deadline;
		selectedEditItem = todoObj.id;

		dialog.show();
	};

	const saveEdits = () => {
		const edittedText = dialogTextArea.value;
		const edittedDate = dialogDatePicker.value;

		todos.update((todos) =>
			todos.map((todo) => {
				if (todo.id === selectedEditItem) {
					todo.desc = edittedText;
					todo.deadline = edittedDate;
				}
				return todo;
			})
		);

		doneTodos.update((doneTodos) =>
			doneTodos.map((todo) => {
				if (todo.id === selectedEditItem) {
					todo.desc = edittedText;
					todo.deadline = edittedDate;
				}
				return todo;
			})
		);

		dialog.close();
	};

	const cancelEdits = () => {
		dialog.close();
	};
</script>

<main class="app-container">
	<header class="app-header">
		<ui5-shellbar primary-title={shellBarTitle}>
			<img class="app-header-logo" slot="logo" src={logo} alt="ui5 orange pheonix logo" />
		</ui5-shellbar>
	</header>

	<section class="app-content">
		<div class="create-todo-wrapper">
			<ui5-input id="add-input" on:input={handleItemInput} placeholder="My Todo ..." />
			<ui5-date-picker id="date-picker" on:input={handleDateInput} format-pattern="dd/MM/yyyy" />
			<ui5-button id="add-btn" on:click={handleAdd} design="Emphasized"> Add Todo </ui5-button>
		</div>

		<section class="list-todo-wrapper">
			<TodoList items={$todos} on:item-edit={handleEdit} on:item-delete={handleRemove} on:selection-change={handleDone} />

			<ui5-panel header-text="Completed Tasks">
				<TodoList items={$doneTodos} on:item-edit={handleEdit} on:item-delete={handleRemove} on:selection-change={handleUndone} />
			</ui5-panel>
		</section>
	</section>

	<ui5-dialog bind:this={dialog} header-text={dialogHeaderText}>
		<div class="dialog-content">
			<div class="edit-wrapper">
				<ui5-label>Title:</ui5-label>
				<ui5-textarea class="title-textarea" show-exceeded-text maxlength="24" bind:this={dialogTextArea} value={itemEditText} />
			</div>

			<div class="edit-wrapper date-edit-fields">
				<ui5-label>Date:</ui5-label>
				<ui5-date-picker bind:this={dialogDatePicker} format-pattern="dd/MM/yyyy" value={itemEditDate} />
			</div>
		</div>

		<div class="dialog-footer" data-ui5-slot="footer">
			<ui5-button class="dialog-footer-btn--cancel" design="Transparent" on:click={cancelEdits}>Cancel</ui5-button>
			<ui5-button class="dialog-footer-btn--save" design="Emphasized" on:click={saveEdits}>Save</ui5-button>
		</div>
	</ui5-dialog>
</main>

<style scoped>
	:global(body) {
		padding: 0;
		margin: 0;
	}

	.app-header-logo {
		height: 2rem;
		max-height: 2rem;
	}

	.app-container {
		width: 100%;
	}
	.app-content {
		height: calc(100% - 3rem);
		padding: 0 1rem;
		width: calc(100% - 2rem);
	}
	.create-todo-wrapper {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		padding-top: 0.5rem;
		padding-bottom: 2rem;
		box-sizing: border-box;
		border-bottom: 1px solid #b3b3b3;
	}

	#add-input {
		flex: auto;
	}
	#date-picker {
		margin: 0 0.5rem 0 0.5rem;
		width: auto;
	}

	#add-btn {
		width: auto;
	}

	.list-todo-wrapper {
		display: flex;
		flex-direction: column;
		align-items: stretch;
	}

	.dialog-content {
		max-width: 320px;
		padding: 2rem 2rem;
	}
	.dialog-footer {
		display: flex;
		justify-content: flex-end;
		padding: 0.25rem 0.25rem 0 0.25rem;
		border-top: 1px solid #d9d9d9;
	}

	.dialog-footer-btn--cancel {
		margin-inline-end: 0.25rem;
	}

	.title-textarea {
		height: 100px;
		display: inline-block;
		width: 100%;
	}
	.date-edit-fields {
		display: flex;
		flex-direction: column;
		margin-top: 1rem;
	}

	@media (max-width: 600px) {
		.create-todo-wrapper {
			flex-direction: column;
			transition: flex ease-in-out 0.6s;
		}

		#add-input,
		#date-picker,
		#add-btn {
			margin-inline-end: 0;
			margin-bottom: 1rem;
			transition: ease-in-out 0.6s;
		}

		#add-input,
		#date-picker,
		#add-btn {
			width: 100%;
		}
	}
</style>
