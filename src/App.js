import logo from "./logo.svg";
import "./App.css";
import { Landing } from "./components/Landing";
import { Card, CardContent } from "@mui/material";

function App() {
  return (
    <Card>
      <CardContent>
        <div className="App">
          <Landing />
        </div>
      </CardContent>
    </Card>
  );
}

export default App;
