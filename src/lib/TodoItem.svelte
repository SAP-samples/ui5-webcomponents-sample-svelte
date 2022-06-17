<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import "@ui5/webcomponents/dist/CustomListItem";
	import type { TodoItemT } from "../types/TodoItem.type";

	// Props
	export let item: TodoItemT;
	export let datakey: number;

	// Events do not bubble from nested components
	// in svelte, we must dispatch them
	const dispatcher = createEventDispatcher();

	const handleEditPress = () => {
		dispatcher("item-edit", {
			id: item.id,
		});
	};

	const handleDeletePress = () => {
		dispatcher("item-delete", {
			id: item.id,
		});
	};
</script>

<ui5-li-custom data-key={datakey} selected={item.done || undefined}>
	<div class="li-content">
		<span class="li-content-text">{item.desc} - finish before: {item.deadline}</span>
		<div class="li-content-actions">
			<ui5-button class="edit-btn" on:click={handleEditPress}>Edit</ui5-button>
			<ui5-button design="Negative" on:click={handleDeletePress}>Delete</ui5-button>
		</div>
	</div>
</ui5-li-custom>

<style scoped>
	.li-content {
		display: flex;
		flex-direction: row;
		width: 100%;
		justify-content: space-between;
		align-items: center;
	}
	.li-content-text {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.edit-btn {
		margin-inline-end: 1rem;
	}
</style>
