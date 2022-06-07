<script lang="ts">
	import "@ui5/webcomponents/dist/List";

	import TodoItem from "./TodoItem.svelte";
	import type { TodoItemT } from "../types/TodoItem.type";

	export let items: TodoItemT[];
</script>

<ui5-list mode="MultiSelect" on:selection-change>
	{#each items as item (item.id)}
		<TodoItem {item} datakey={item.id} on:item-edit on:item-delete />
	{/each}
</ui5-list>

<style scoped>
</style>
