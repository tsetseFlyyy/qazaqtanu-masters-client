import "./App.css";
import { Button } from "@/components/ui/button";
import { Input } from "./components/ui/input";

function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Button>Click me</Button>
      <Input />
    </div>
  );
}

export default App;
