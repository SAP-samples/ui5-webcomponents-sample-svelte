<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import "@ui5/webcomponents/dist/ListItemCustom";
	import type { TodoItemT } from "../types/TodoItem.type";
	import type { ItemEditEvent, ItemDeleteEvent } from "./todoitem.event";

	interface Props {
		// Props
		item: TodoItemT;
		datakey: number;
	}

	let { item, datakey }: Props = $props();

	// Events do not bubble from nested components
	// in svelte, we must dispatch them
	const dispatcher = createEventDispatcher();

	const handleEditPress = () => {
		const event: ItemEditEvent = {
			id: item.id,
		};
		dispatcher<string>("item-edit", event);
	};

	const handleDeletePress = () => {
		const event: ItemDeleteEvent = {
			id: item.id,
		};
		dispatcher("item-delete", event);
	};
</script>

<ui5-li-custom data-key={datakey} selected={item.done || undefined}>
	<div class="li-content">
		<span class="li-content-text">{item.desc} - finish before: {item.deadline}</span>
		<div class="li-content-actions">
			<ui5-button class="edit-btn" onclick={handleEditPress}>Edit</ui5-button>
			<ui5-button design="Negative" onclick={handleDeletePress}>Delete</ui5-button>
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

	.li-content-actions {
		display: flex;
	}
	.edit-btn {
		margin-inline-end: 1rem;
	}
</style>
