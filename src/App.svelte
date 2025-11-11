<script lang="ts">
	// UI5  Components
	import { setTheme } from "@ui5/webcomponents-base/dist/config/Theme.js";
	import "@ui5/webcomponents-base/dist/features/F6Navigation";

	import "@ui5/webcomponents/dist/Button";
	import "@ui5/webcomponents/dist/Input";
	import "@ui5/webcomponents/dist/DatePicker";
	import "@ui5/webcomponents/dist/Panel";
	import "@ui5/webcomponents/dist/Dialog";
	import "@ui5/webcomponents/dist/TextArea";
	import "@ui5/webcomponents/dist/Popover";
	import "@ui5/webcomponents/dist/Tab";
	import "@ui5/webcomponents/dist/TabContainer";
	import "@ui5/webcomponents-fiori/dist/Assets.js";
	import "@ui5/webcomponents/dist/Switch";
	import "@ui5/webcomponents-icons/dist/palette.js";
	import "@ui5/webcomponents-icons/dist/settings.js";
	import "@ui5/webcomponents-icons/dist/sys-help.js";
	import "@ui5/webcomponents-icons/dist/log.js";
	import "@ui5/webcomponents-icons/dist/account.js";
	import "@ui5/webcomponents-icons/dist/private.js";
	import "@ui5/webcomponents-icons/dist/loan.js";
	import "@ui5/webcomponents-icons/dist/globe.js";
	import TodoList from "./lib/TodoList.svelte";
	import { references, todoStore } from "./stores/stores.svelte";
	import Header from "./lib/Header.svelte";
	import type { ListSelectionChangeEventDetail } from "@ui5/webcomponents/dist/List.js";
	import type { DatePickerChangeEventDetail, DatePickerInputEventDetail } from "@ui5/webcomponents/dist/DatePicker.js";
	import type { ItemDeleteEvent, ItemEditEvent } from "./lib/todoitem.event";
	import type Input from "@ui5/webcomponents/dist/Input.js";
	import type TextArea from "@ui5/webcomponents/dist/TextArea.js";

	setTheme("sap_horizon");

	// Elements

	let createTodoFields = $state({
		text: "",
		date: "",
	});

	// Edit Dialog fields
	type DialogFields = {
		id: number | null;
		text: string;
		date: string;
	};

	let dialogFields = $state<DialogFields>({
		id: null,
		text: "",
		date: "",
	});

	// Event Handlers

	const handleItemInput = (event: CustomEvent) => {
		createTodoFields.text = (event.target as Input)?.value;
	};

	const handleDateInput = (event: CustomEvent<DatePickerInputEventDetail>) => (createTodoFields.date = event.detail.value);

	const handleAdd = () =>
		todoStore.add({
			desc: createTodoFields.text,
			deadline: createTodoFields.date,
		});

	const handleToggleDone = (event: CustomEvent<ListSelectionChangeEventDetail>) => {
		const { selectedItems, previouslySelectedItems } = event.detail;

		if (selectedItems.length === previouslySelectedItems.length) {
			// No change in selection
			return;
		}

		if (selectedItems.length > previouslySelectedItems.length) {
			const newlySelectedItems = selectedItems.filter((item) => !previouslySelectedItems.includes(item));
			if (newlySelectedItems.length === 0) {
				return;
			}
			const newlySelectedItemId = newlySelectedItems[0]?.getAttribute("data-key");
			if (!newlySelectedItemId) {
				return;
			}
			todoStore.toggleDone(Number(newlySelectedItemId));
		} else if (selectedItems.length < previouslySelectedItems.length) {
			const newlyDeselectedItems = previouslySelectedItems.filter((item) => !selectedItems.includes(item));
			if (newlyDeselectedItems.length === 0) {
				return;
			}
			const newlyDeselectedItemId = newlyDeselectedItems[0]?.getAttribute("data-key");
			if (!newlyDeselectedItemId) {
				return;
			}
			todoStore.toggleDone(Number(newlyDeselectedItemId));
		} else {
			console.debug("Selection not changed");
		}
	};

	const handleRemove = (item: ItemDeleteEvent) => {
		todoStore.remove(item.id);
	};

	const handleEdit = (item: ItemEditEvent) => {
		const matchedTodo = todoStore.todos.find((todo) => todo.id === item.id);

		if (!matchedTodo) {
			console.warn(`Todo item with id ${item.id} not found.`);
			return;
		}

		dialogFields = {
			id: matchedTodo.id,
			text: matchedTodo.desc,
			date: matchedTodo.deadline,
		};

		if (references.dialog.editDialog) {
			references.dialog.editDialog.open = true;
		}
	};

	const saveEdits = () => {
		if (!dialogFields.id) {
			console.warn("No valid todo id found for editing.");
			return;
		}

		todoStore.update(dialogFields.id, {
			desc: dialogFields.text,
			deadline: dialogFields.date,
		});

		if (references.dialog.editDialog) {
			dialogFields = { id: null, text: "", date: "" };
			references.dialog.editDialog.open = false;
		}
	};

	const cancelEdits = () => {
		if (references.dialog.editDialog) {
			dialogFields = { id: null, text: "", date: "" };
			references.dialog.editDialog.open = false;
		}
	};

	// Derived Stores
	const doneTodos = $derived(todoStore.todos.filter((t) => t.done));
	const undoneTodos = $derived(todoStore.todos.filter((t) => !t.done));
</script>

<main class="app">
	<Header />

	<ui5-tabcontainer collapsed>
		<ui5-tab text="My Todos"></ui5-tab>
	</ui5-tabcontainer>

	<section class="app-content">
		<div class="create-todo-wrapper">
			<ui5-input id="add-input" oninput={handleItemInput} placeholder="Type a task..."></ui5-input>
			<ui5-date-picker id="date-picker" oninput={handleDateInput} onchange={handleDateInput} format-pattern="dd/MM/yyyy"></ui5-date-picker>
			<ui5-button
				tabindex="0"
				role="button"
				type="button"
				id="add-btn"
				onclick={handleAdd}
				onkeydown={(e: KeyboardEvent) => {
					if (e.key === "Enter" || e.key === " ") {
						handleAdd();
						e.preventDefault();
					}
				}}
				design="Emphasized">Add Todo</ui5-button
			>
		</div>

		<section class="list-todo-wrapper">
			<ui5-panel class="list-todos-panel" header-text="Incompleted Tasks" collapsed={!undoneTodos.length || undefined}>
				<TodoList items={undoneTodos} onEdit={handleEdit} onDelete={handleRemove} onSelectionChange={handleToggleDone} />
			</ui5-panel>

			<ui5-panel class="list-todos-panel" header-text="Completed Tasks" collapsed={!doneTodos.length || undefined}>
				<TodoList items={doneTodos} onEdit={handleEdit} onDelete={handleRemove} onSelectionChange={handleToggleDone} />
			</ui5-panel>
		</section>
	</section>

	<ui5-dialog bind:this={references.dialog.editDialog} header-text="Edit Todo">
		<div class="dialog-content">
			<div class="edit-wrapper">
				<ui5-label>Title:</ui5-label>
				<ui5-textarea
					class="title-textarea"
					show-exceeded-text
					maxlength={24}
					value={dialogFields.text}
					onchange={(event: CustomEvent) => (dialogFields.text = (event.target as TextArea)?.value)}
				></ui5-textarea>
			</div>

			<div class="edit-wrapper date-edit-fields">
				<ui5-label>Date:</ui5-label>
				<ui5-date-picker
					bind:this={dialogFields.date}
					format-pattern="dd/MM/yyyy"
					value={dialogFields.date}
					onchange={(event: CustomEvent<DatePickerChangeEventDetail>) => (dialogFields.date = event.detail.value)}
				></ui5-date-picker>
			</div>
		</div>

		<div class="dialog-footer" data-ui5-slot="footer">
			<ui5-button
				class="dialog-footer-btn--cancel"
				role="button"
				tabindex="0"
				design="Transparent"
				onclick={cancelEdits}
				onkeydown={(e: KeyboardEvent) => {
					if (e.key === "Enter" || e.key === " ") {
						cancelEdits();
						e.preventDefault();
					}
				}}
			>
				Cancel
			</ui5-button>
			<ui5-button
				class="dialog-footer-btn--save"
				role="button"
				tabindex="0"
				design="Emphasized"
				onclick={saveEdits}
				onkeydown={(e: KeyboardEvent) => {
					if (e.key === "Enter" || e.key === " ") {
						saveEdits();
						e.preventDefault();
					}
				}}>Save</ui5-button
			>
		</div>
	</ui5-dialog>
</main>

<style scoped>
	:global(html) {
		padding: 0;
		margin: 0;
		height: 100%;
		background-color: var(--sapBackgroundColor);
	}

	:global(body) {
		padding: 0;
		margin: 0;
		height: 100%;
		background-color: var(--sapBackgroundColor);
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	*:not(:defined) {
		display: none;
	}

	.app {
		width: 100%;
	}

	.app-content {
		height: calc(100% - 3rem);
		padding: 0 1rem;
		width: calc(100% - 2rem);
	}

	.create-todo-wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 2rem 1rem;
		margin: 2rem 0;
		box-sizing: border-box;
		background-color: var(--sapObjectHeader_Background);
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
		margin: 1rem 0;
	}

	.list-todos-panel {
		margin-bottom: 2rem;
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
		#date-picker {
			margin-bottom: 0.5rem;
			transition: ease-in-out 0.6s;
		}

		#add-btn {
			margin-bottom: 0;
		}

		#add-input,
		#date-picker,
		#add-btn {
			width: 100%;
		}
	}
</style>
