<script lang="ts">
	interface Item {
		name: string;
		id: string;
	}
	export let items: Item[] = [
		{
			name: 'Vorspeisen',
			id: 'vorspeisen',
		},
		{
			name: 'Hauptgerichte',
			id: 'hauptgerichte',
		},
		{
			name: 'Desserts',
			id: 'desserts',
		},
		{
			name: 'Getränke',
			id: 'getraenke',
		},
	];

	let isOpen = false;
</script>

<div class="fixed bottom-1 right-1 bg-primary w-10 h-10">
	<div class="flex items-center justify-center">
		<i
			class="i-ph-dots-three-outline-vertical text-white h-6 aspect-square m-auto"
		/>
	</div>
</div>
