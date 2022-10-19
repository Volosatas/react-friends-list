import "./App.css";
import { FriendsList } from "./components/FriendsList";
import { Form } from "./components/Form";

function App() {
  return (
    <div className="app">
      <h3 className="header">Welcome to your Friend List APP</h3>
      <Form />
      <FriendsList />
    </div>
  );
}

export default App;
