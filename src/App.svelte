<script lang='ts'>
    // UI5  Components
    import '@ui5/webcomponents-fiori/dist/ShellBar'
    import '@ui5/webcomponents/dist/Button'
    import '@ui5/webcomponents/dist/Input'
    import '@ui5/webcomponents/dist/DatePicker'
    import '@ui5/webcomponents/dist/Panel'
    import '@ui5/webcomponents/dist/Dialog'
    import '@ui5/webcomponents/dist/TextArea'

    import TodoList from './lib/TodoList.svelte'
    import { todos, doneTodos } from './stores/stores';
    import logo from './assets/imgs/UI5-orange-pheonix-logo.png'
    import type { TodoItemT } from './types/TodoItem.type';

    const shellBarTitle: string = 'UI5 Web Components Svelte Sample';
    const dialogHeaderText: string = 'Edit Todo Item'

    // Elements
    let dialog;
    let dialogTextArea;
    let dialogDatePicker;
    
    // Create ToDo Fields
    let itemInputValue;
    let itemDateInputValue;

    // Edit Dialog fields
    let itemEditText: string = ""
    let itemEditDate: string = ""
    let selectedEditItem: number;

    // Event Handlers

    const handleItemInput = (event) => {
        itemInputValue = event.target.value
    }

    const handleDateInput = (event) => {
        itemDateInputValue = event.target.value
    }

    const handleAdd = (event) => {
        const newTodo: TodoItemT = {
            id: ($todos.length + 1),
            desc: itemInputValue,
            deadline: itemDateInputValue,
            done: false
        }
        todos.update(todos => [...todos, newTodo])
    }

    const handleDone = (event) => {
        const selectedItem = event.detail.selectedItems[0];
        const selectedId = selectedItem.getAttribute("data-key");

        const newlySelected = $todos.filter(todo => {
            return selectedId === todo.id.toString();
        })[0];

        newlySelected.done = true;

        doneTodos.update(doneTodos => [...doneTodos, newlySelected])

        todos.update(todos => todos.filter(todo => {
            return selectedId !== todo.id.toString();
        }))
    }

    const handleUndone = (event) => {
        const selectedItems = event.detail.selectedItems;
        const selectedIds = selectedItems.map(item => item.getAttribute("data-key"));

        const newlyDeselected = $doneTodos.filter(todo => {
            return selectedIds.indexOf(todo.id.toString()) === -1;
        }).map(item => {
            return { ...item, done: false };
        });

        doneTodos.update(doneTodos => doneTodos.filter(todo => {
            return selectedIds.indexOf(todo.id.toString()) > -1;
        }));

        todos.update(todos => [...todos, ...newlyDeselected])
    }

    const handleRemove = (event) => {
        const filteredTodos = $todos.filter(todo => todo.id !== event.detail.id);
        todos.set(filteredTodos)

        const filteredDoneTodos = $doneTodos.filter(todo => todo.id !== event.detail.id);
        doneTodos.set(filteredDoneTodos);
    }

    const handleEdit = (event) => {
        const matchedTodos = $todos.filter(todo => todo.id=== event.detail.id);

        let todoObj;
        if (matchedTodos.length) { 
            todoObj = matchedTodos[0];
        } else {
            todoObj = $doneTodos.filter(todo => todo.id === event.detail.id)[0];
        }

        itemEditText= todoObj.desc;
        itemEditDate = todoObj.deadline;
        selectedEditItem = todoObj.id;

        dialog.show();
    }

    const saveEdits = () => {
        const edittedText = dialogTextArea.value;
        const edittedDate = dialogDatePicker.value;

        todos.update(todos => todos.map((todo) => {
            if (todo.id === selectedEditItem) {
                todo.desc = edittedText;
                todo.deadline = edittedDate;
            }
            return todo;
        }))

        doneTodos.update(doneTodos => doneTodos.map((todo) => {
            if (todo.id === selectedEditItem) {
                todo.desc = edittedText;
                todo.deadline = edittedDate;
            }
            return todo;
        }))

        dialog.close();
    }

    const cancelEdits = () => {
        dialog.close();
    }

</script>

<main class="app-container">

    <header class="app-header">
        <ui5-shellbar primary-title={shellBarTitle}>
            <img slot="logo" src={logo} alt="ui5 orange pheonix logo" />
        </ui5-shellbar>
    </header>

    <section class="app-content">
        
        <div class="create-todo-wrapper">
            <div id="add-input">
                <ui5-input on:input={handleItemInput} placeholder="My todo ..." ></ui5-input>
            </div>
            <div id="date-picker">
                <ui5-date-picker on:input={handleDateInput} format-pattern="dd/MM/yyyy"></ui5-date-picker>
            </div>
            <div id="add-btn">
                <ui5-button on:click={handleAdd} design="Emphasized" > Add Todo </ui5-button>
            </div>
        </div>

    </section>

    <section class="list-todo-wrapper">

        <TodoList 
            items={$todos}
            on:item-edit={handleEdit}
            on:item-delete={handleRemove}
            on:selection-change={handleDone} />

        <ui5-panel header-text="Completed Tasks">
            <TodoList 
                items={$doneTodos}
                on:item-edit={handleEdit}
                on:item-delete={handleRemove}
                on:selection-change={handleUndone} />
        </ui5-panel>

    </section>

    <ui5-dialog bind:this={dialog} header-text={dialogHeaderText}>
        <div class="dialog-content">

            <div class="edit-wrapper">
                <ui5-label>Title:</ui5-label>
                <ui5-textarea
                    class="title-textarea"
                    show-exceeded-text
                    maxlength="24"
                    bind:this={dialogTextArea}
                    value={itemEditText}>
                </ui5-textarea>
            </div>

            <div class="edit-wrapper date-edit-fields">
                <ui5-label>Date:</ui5-label>
                <ui5-datepicker 
                    bind:this={dialogDatePicker}
                    format-pattern="dd/MM/yyyy" 
                    value={itemEditDate} >
                </ui5-datepicker>
            </div>

        </div>

        <div class="dialog-footer" data-ui5-slot="footer">
            <ui5-button design="Transparent" on:click={cancelEdits}>Cancel</ui5-button>
            <ui5-button design="Emphasized" on:click={saveEdits}>Save</ui5-button>
        </div>

    </ui5-dialog>
</main>

<style scoped>
    ui5-input, ui5-date-picker, ui5-button {
        width: 100%;
    }

    .app-container {
        width: 100%;
    }
    .app-content {
        display: flex;
        flex-direction: column;
        justify-content: stretch;
        margin-top: 1rem;
    }
    .create-todo-wrapper {
        display: flex;
        flex-direction: row;
        align-items: stretch;
        justify-content: flex-start;
        margin-bottom: 1rem;
    }

    #add-input {
        flex: 3;
        margin-right: 1rem;
    }
    #date-picker {
        flex: 1;
        margin-right: 1rem;
    }

    #add-btn {
        flex: 0;
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
    .title-textarea {
        height: 100px;
        display: inline-block;
        width: 100%;
    }
    .date-edit-fields {
        margin-top: 1rem;
    }

    @media(max-width: 600px) {
        .create-todo-wrapper {
            flex-direction: column;
            transition: flex ease-in-out .6s 
        }
        
        #add-input, #date-picker {
            margin-right: 0;
            margin-bottom: 1rem;
            transition: ease-in-out .6s
        }
    }

</style>