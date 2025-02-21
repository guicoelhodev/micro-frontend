import Button from "./Button.svelte";

export function mount(el, props) {
  return new Button({ target: el, props });
}
