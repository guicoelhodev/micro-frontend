import { useEffect, useRef } from "react";

export function SvelteButton() {
  const buttonRef = useRef(null);
  useEffect(() => {
    import("svelteApp/WCButton");
  }, []);
  return (
    <div ref={buttonRef}>
      <wc-button title="Coelho"></wc-button>
    </div>
  );
}
