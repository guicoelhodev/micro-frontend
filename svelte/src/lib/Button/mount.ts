import Button from "./Button.svelte";

export function mount(el: HTMLElement, props: { title: string }) {
  return new Button({ target: el, props });
}
