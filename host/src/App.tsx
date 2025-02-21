import Button from "reactApp/Button";
import { SvelteButton } from "./components/remotes/SvelteButton";

function App() {
  return (
    <>
      <p className="text-red-500">Hello world</p>
      <Button />

      <SvelteButton />
    </>
  );
}

export default App;
