<script lang="ts">
	import { slide } from 'svelte/transition';

	export let menu: { title: string; slug: string }[] = [];
	export let basePath: string = '';
	let isOpen = false;

	function toggleMenu() {
		isOpen = !isOpen;
	}
</script>

<div class="bg-tertiary py-4 flex items-center flex-col">
	<button
		class="flex items-center text-2xl gap-1 md:hidden"
		on:click={toggleMenu}
	>
		Menü <i
			class="i-ph-caret-up-bold transition-transform origin-center {isOpen
				? 'rotate-180'
				: ''}
            "
		/></button
	>
	{#if !isOpen}
		<nav class="px-4">
			<ul
				class="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 lg:space-x-8 text-base lg:text-xl"
			>
				{#each menu as item, i}
					{#key item.slug}
						<li transition:slide={{ delay: i * 50 }} class="text-center">
							<a href="/{basePath}/{item.slug}">{item.title}</a>
						</li>
					{/key}
				{/each}
			</ul>
		</nav>
	{/if}
</div>
