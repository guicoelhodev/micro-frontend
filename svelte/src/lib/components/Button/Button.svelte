<svelte:options customElement="wc-button" />

<script lang="ts">
	let { title = "My Button" } = $props();

	function handleClick() {
		alert("Hello");
		return console.log(title);
	}
</script>

<button onclick={handleClick} class="button">
	{title}
</button>

<style>
	.button {
		background: red;
		padding: 0.5rem;
		border-radius: 5px;
		border-color: red;
	}
</style>
