<script lang="ts">
	import "@ui5/webcomponents/dist/List";

	import TodoItem from "./TodoItem.svelte";
	import type { TodoItemT } from "../types/TodoItem.type";
	import type { ItemDeleteEvent, ItemEditEvent } from "./todoitem.event";
	import type { ListSelectionChangeEventDetail } from "@ui5/webcomponents/dist/List.js";

	interface Props {
		items: TodoItemT[];
		onEdit(item: ItemEditEvent): void;
		onDelete(item: ItemDeleteEvent): void;
		onSelectionChange(event: CustomEvent<ListSelectionChangeEventDetail>): void;
	}

	let { items, onEdit, onDelete, onSelectionChange }: Props = $props();
</script>

<ui5-list selection-mode="Multiple" onselection-change={(event: CustomEvent<ListSelectionChangeEventDetail>) => onSelectionChange(event)}>
	{#each items as item (item.id)}
		<TodoItem {item} datakey={item.id} {onEdit} {onDelete} />
	{/each}
</ui5-list>

<style scoped>
</style>
