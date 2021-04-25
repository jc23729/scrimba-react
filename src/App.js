import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import TodoItem from "./components/TodoItem";
import  ContactCard from './components/ContactCard'

function App() {
  return (
    <div className="todo-list">
      <ContactCard name="Juan" imageURL="" phone="" email="" />
      <ContactCard
        name="Jessica"
        imageURL="https://unsplash.com/photos/aJfOuWeNzko"
        phone=""
        email=""
      />
      <ContactCard name="Tony" imageURL="" phone="" email="" />
      <ContactCard name="Christina" imageURL="" phone="" email="" />
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