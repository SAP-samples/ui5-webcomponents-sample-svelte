<script lang="ts">
	import "@ui5/webcomponents/dist/ListItemCustom";
	import type { TodoItemT } from "../types/TodoItem.type";
	import type { ItemEditEvent, ItemDeleteEvent } from "./todoitem.event";

	interface Props {
		// Props
		item: TodoItemT;
		datakey: number;
		onDelete(item: ItemDeleteEvent): void;
		onEdit(item: ItemEditEvent): void;
	}

	let { item, datakey, onEdit, onDelete }: Props = $props();

	const handleEditPress = () => {
		onEdit({ id: item.id });
	};

	const handleDeletePress = () => {
		onDelete({ id: item.id });
	};
</script>

<ui5-li-custom data-key={datakey} selected={item.done || undefined}>
	<div class="li-content">
		<span class="li-content-text">{item.desc} - finish before: {item.deadline}</span>
		<div class="li-content-actions">
			<ui5-button
				role="button"
				tabindex="0"
				class="edit-btn"
				onclick={handleEditPress}
				onkeydown={(e: KeyboardEvent) => {
					if (e.key === "Enter" || e.key === " ") {
						handleEditPress();
						e.preventDefault();
					}
				}}>Edit</ui5-button
			>
			<ui5-button
				role="button"
				tabindex="0"
				design="Negative"
				onclick={handleDeletePress}
				onkeydown={(e: KeyboardEvent) => {
					if (e.key === "Enter" || e.key === " ") {
						handleDeletePress();
						e.preventDefault();
					}
				}}>Delete</ui5-button
			>
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
