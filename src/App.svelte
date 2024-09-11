<script lang="ts">
	// UI5  Components
	import { setTheme } from "@ui5/webcomponents-base/dist/config/Theme";
	import "@ui5/webcomponents-base/dist/features/F6Navigation";
	import applyDirection from "@ui5/webcomponents-base/dist/locale/applyDirection.js";

	import "@ui5/webcomponents/dist/Button";
	import "@ui5/webcomponents/dist/Input";
	import "@ui5/webcomponents/dist/DatePicker";
	import "@ui5/webcomponents/dist/Panel";
	import "@ui5/webcomponents/dist/Dialog";
	import "@ui5/webcomponents/dist/TextArea";
	import "@ui5/webcomponents/dist/Popover";
	import "@ui5/webcomponents/dist/Tab";
	import "@ui5/webcomponents/dist/TabContainer";
	import "@ui5/webcomponents-fiori/dist/ShellBar";
	import "@ui5/webcomponents-fiori/dist/ShellBarItem";
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
	import { todos, doneTodos } from "./stores/stores";
	import logo from "./assets/imgs/UI5-orange-pheonix-logo.png";
	import type { TodoItemT } from "./types/TodoItem.type";

	setTheme("sap_horizon");

	const shellBarTitle: string = "UI5 Web Components Svelte Sample Application";
	const dialogHeaderText: string = "Edit Todo";

	// Elements
	let dialog;
	let dialogTextArea;
	let dialogDatePicker;
	let themeSettingsPopover;
	let profileSettingsPopover;

	// Create ToDo Fields
	let itemInputValue;
	let itemDateInputValue;

	// Edit Dialog fields
	let itemEditText: string = "";
	let itemEditDate: string = "";
	let selectedEditItem: number;

	// Event Handlers

	const handleThemeSettingsToggle = (event) => {
		themeSettingsPopover.opener = event.detail.targetRef;
		themeSettingsPopover.open = true;
	};

	const handleThemeChange = (event) => {
		setTheme(event.detail.selectedItems[0].getAttribute("data-theme"));
		themeSettingsPopover = false;
	};

	const handleProfileClick = (event) => {
		profileSettingsPopover.opener = event.detail.targetRef;
		profileSettingsPopover.open = true;
	};

	const handleProfileSettingsSelect = (event) => {
		const selectedKey = event.detail.item.getAttribute("data-key");
		if (selectedKey === "settings") {
			window["settings-dialog"].opener = event.detail.targetRef;
			window["settings-dialog"].open = true;
		} else if (selectedKey === "help") {
			window["help-dialog"].opener = event.detail.targetRef;
			window["help-dialog"].open = true;
		}
	};

	const handleRtlSwitchChange = (event) => {
		document.body.dir = event.target.checked ? "rtl" : "ltr";
		applyDirection();
	};

	const handleContentDensitySwitchChange = (event) => {
		if (event.target.checked) {
			document.body.classList.add("ui5-content-density-compact");
		} else {
			document.body.classList.remove("ui5-content-density-compact");
		}
	};

	const handleSettingsDialogCloseButtonClick = () => {
		window["settings-dialog"].open = false;
	};

	const handleHelpDialogCloseButtonClick = () => {
		window["help-dialog"].open = false;
	};

	const handleItemInput = (event) => {
		itemInputValue = event.target.value;
	};

	const handleDateInput = (event) => {
		itemDateInputValue = event.detail.value;
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

		dialog.open = true;
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

		dialog.open = false;
	};

	const cancelEdits = () => {
		dialog.open = false;
	};
</script>

<main class="app">
	<header class="app-header">
		<ui5-shellbar primary-title={shellBarTitle} show-notifications notifications-count="2" on:profile-click={handleProfileClick}>
			<img class="app-header-logo" slot="logo" src={logo} alt="ui5 orange pheonix logo" />
			<ui5-shellbar-item icon="palette" text="Theme" on:click={handleThemeSettingsToggle} />
			<ui5-avatar slot="profile" size="XS" initials="JD" />
		</ui5-shellbar>
	</header>

	<ui5-tabcontainer collapsed>
		<ui5-tab text="My Todos" />
	</ui5-tabcontainer>

	<section class="app-content">
		<div class="create-todo-wrapper">
			<ui5-input id="add-input" on:input={handleItemInput} placeholder="Type a task..." />
			<ui5-date-picker id="date-picker" on:input={handleDateInput} on:change={handleDateInput} format-pattern="dd/MM/yyyy" />
			<ui5-button id="add-btn" on:click={handleAdd} design="Emphasized"> Add Todo </ui5-button>
		</div>

		<section class="list-todo-wrapper">
			<ui5-panel class="list-todos-panel" header-text="Incompleted Tasks" collapsed={!$todos.length || undefined}>
				<TodoList items={$todos} on:item-edit={handleEdit} on:item-delete={handleRemove} on:selection-change={handleDone} />
			</ui5-panel>

			<ui5-panel class="list-todos-panel" header-text="Completed Tasks" collapsed={!$todos.length || undefined}>
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

	<ui5-popover bind:this={themeSettingsPopover} class="app-bar-theming-popover" placement="Bottom" horizontal-align="End" header-text="Theme">
		<ui5-list selection-mode="Single" on:selection-change={handleThemeChange}>
			<ui5-li icon="palette" data-theme="sap_horizon" selected>SAP Horizon Morning</ui5-li>
			<ui5-li icon="palette" data-theme="sap_horizon_dark">SAP Horizon Evening</ui5-li>
			<ui5-li icon="palette" data-theme="sap_horizon_hcb">SAP Horizon HCB</ui5-li>
			<ui5-li icon="palette" data-theme="sap_horizon_hcw">SAP Horizon HCW</ui5-li>
			<ui5-li icon="palette" data-theme="sap_fiori_3">SAP Quartz Light</ui5-li>
			<ui5-li icon="palette" data-theme="sap_fiori_3_dark">SAP Quartz Dark</ui5-li>
			<ui5-li icon="palette" data-theme="sap_fiori_3_hcb">SAP Quartz HCB</ui5-li>
			<ui5-li icon="palette" data-theme="sap_fiori_3_hcw">SAP Quartz HCW</ui5-li>
		</ui5-list>
	</ui5-popover>

	<ui5-popover bind:this={profileSettingsPopover} id="profile-pop" class="app-bar-profile-popover" placement="Bottom" horizontal-align="End">
		<div class="profile-settings">
			<ui5-avatar size="M" initials="JD" />
			<div class="profile-text">
				<ui5-title level="H3">John Doe</ui5-title>
				<ui5-label>Svelte Developer</ui5-label>
			</div>
		</div>

		<div class="profile-settings-list">
			<ui5-list selection-mode="Single" separators="None" on:item-click={handleProfileSettingsSelect} bind:this={profileSettingsPopover}>
				<ui5-li icon="settings" data-key="settings">Settings</ui5-li>
				<ui5-li icon="sys-help" data-key="help">Help</ui5-li>
				<ui5-li icon="log" data-key="sign-out">Sign out</ui5-li>
			</ui5-list>
		</div>
	</ui5-popover>

	<ui5-dialog id="settings-dialog" header-text="Profile Settings" draggable>
		<div>
			<div class="profile-rtl-switch centered">
				<div class="profile-rtl-switch-title">
					<ui5-label class="profile-rtl-switch-text">RTL</ui5-label>
				</div>
				<ui5-switch on:change={handleRtlSwitchChange} />
			</div>
		</div>

		<div class="profile-rtl-switch centered">
			<div class="profile-rtl-switch-title">
				<ui5-label class="profile-rtl-switch-text">Compact</ui5-label>
			</div>
			<ui5-switch on:change={handleContentDensitySwitchChange} />
		</div>

		<div class="dialog-button">
			<ui5-button on:click={handleSettingsDialogCloseButtonClick} design="Emphasized">Close</ui5-button>
		</div>
	</ui5-dialog>

	<ui5-dialog id="help-dialog">
		<div slot="header" class="help-header" id="header-title-align">
			<ui5-icon name="sys-help" />
			Help
		</div>

		<div class="help-header" id="header-logo-align">
			<img class="app-header-logo" alt="logo" slot="logo" src={logo} />
			<ui5-title level="H5">UI5 Web Components Svelte Sample App</ui5-title>
		</div>

		<p class="help-dialog-text">
			<b>Release</b>: b225.20220729335 <br />
			<b>Server</b>: pk21443x3132 <br />
			<b>Timestamp</b>: 2022-08-18T10:29:03.159+0200 <br />
			<b>Company ID</b>: SAP <br />
			<b>UI version</b>: SAP Fiori <br />
			<b>Edition</b>: Enterprise <br />
			<b>Admin version</b>: Svelte Admin <br />
		</p>
		<hr />
		<span class="help-dialog-text">For more information, please visit our <a href="https://github.com/SAP-samples/ui5-webcomponents-sample-svelte" target="_blank">documentation</a>.</span>
		<p />
		<div class="dialog-button">
			<ui5-button design="Emphasized" on:click={handleHelpDialogCloseButtonClick}>Close</ui5-button>
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

	.app-header-logo {
		height: 2rem;
		max-height: 2rem;
	}

	.app-bar-theming-popover {
		width: 250px;
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
	.app-bar-profile-popover {
		width: 250px;
	}

	#settings-dialog {
		max-width: 300px;
	}

	.dialog-button {
		display: flex;
		justify-content: flex-end;
		margin-top: 0.625rem;
		margin-bottom: -0.425rem;
	}

	.profile-settings,
	.help-header {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
	}

	.profile-text {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-inline-start: 1rem;
	}

	.app-header-logo {
		height: 2rem;
	}

	.profile-settings-list {
		margin-top: 1.25rem;
	}

	.help-dialog-text {
		font-size: 0.875rem;
	}

	.profile-rtl-switch {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	#header-title-align {
		margin: 1rem 0;
		gap: 0.225rem;
	}

	#header-logo-align {
		margin: 0.225rem 3.225rem 0.225rem 0;
		align-items: center;
		gap: 0.435rem;
	}

	#help-dialog::part(header) {
		justify-content: flex-start;
	}
</style>
