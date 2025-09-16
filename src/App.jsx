import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "./index.css";
import Header from "./components/Header";
import AddItemForm from "./components/AddItemForm";
import NoItem from "./components/NoItem";
import FilterButtons from "./components/FilterButtons";
import ListItems from "./components/ListItems";
import ClearButton from "./components/ClearButton";

const products = [
  { id: 1, name: "Yumurta", completed: false },
  { id: 2, name: "Peynir", completed: true },
  { id: 3, name: "Et", completed: false },
  { id: 4, name: "Tavuk", completed: true },
  { id: 5, name: "Zeytin", completed: true },
];

export default function App() {
  return (
    <div className="container">
      <Header />
      <AddItemForm />
      <FilterButtons />
      <ListItems products={products} />
      <ClearButton />
    </div>
  );
}
