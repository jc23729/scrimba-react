import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import TodoItem from "./components/TodoItem";
import ContactCard from "./components/ContactCard";

function App(props) {
  return (
    <div>
      <ContactCard name="Juan" phone="9172348681" email="sfdsfsd@gmail.com" />
      <ContactCard name="Jessica" phone="545-243-8691" email="jessica@gmail.com" />
      <ContactCard name="Tony" phone="343-243-8691" email="Tony@gmail.com" />
      <ContactCard name="Christina" phone="914-243-8691" email="Christina@gmail.com" />
    </div>
  );
}

export default App;

// <input type="checkbox" />
// <p>Placeholder text here</p>

// <input type="checkbox" />
// <p>Placeholder text here</p>

// <input type="checkbox" />
// <p>Placeholder text here</p>

// <input type="checkbox" />
// <p>Placeholder text here</p>

// function App() {
//   return (
//     <div className="todo-list">
//       <TodoItem />
//       <TodoItem />
//       <TodoItem />
//       <TodoItem />
//     </div>
//   );
// }
