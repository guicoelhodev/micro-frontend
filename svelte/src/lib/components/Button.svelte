<script lang="ts">
	const attr = $props<{ text: string }>();

	function sendAlert() {
		alert('Clicked');
	}
</script>

<button onclick={sendAlert} class="rounded-md bg-red-100 p-2 text-red-500">
	{attr.text}
</button>
