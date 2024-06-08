import { useEffect } from "react";
import ContactForm from "./contactForm/ContactForm";
import ContactList from "./contactList/ContactList";
import SearchBox from "./searchBox/SearchBox";
//import { selectError, selectLoading } from "../redux/contactsSlice";
import { useDispatch } from "react-redux";
import { fetchTasks } from "../redux/contactsOps";
export default function App() {
  const dispatch = useDispatch();

  // const isLoading = selectLoading;
  // const isError = selectError;

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {/* {isLoading && <p>Loading message</p>}
      {isError && <p>Error message</p>} */}
      <ContactList />
    </div>
  );
}
