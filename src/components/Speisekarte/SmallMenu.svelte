<script lang="ts">
	import { slide } from 'svelte/transition';

	export let menu: { title: string; slug: string }[] = [];
	export let basePath: string = '';
	let isOpen = false;

	function toggleMenu() {
		isOpen = !isOpen;
	}
</script>

<div class="bg-tertiary py-4 flex">
	<div class="mx-auto self-center">
		<button class="flex items-center text-2xl gap-1" on:click={toggleMenu}>
			Menü <i
				class="i-ph-caret-up-bold transition-transform origin-center {isOpen
					? 'rotate-180'
					: ''}
            "
			/></button
		>
		{#if !isOpen}
			<nav>
				<ul class="flex flex-col space-y-4">
					{#each menu as item}
						<li transition:slide>
							<a href="/{basePath}/{item.slug}">{item.title}</a>
						</li>
					{/each}
				</ul>
			</nav>
		{/if}
	</div>
</div>
