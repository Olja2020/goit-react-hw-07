import { useEffect } from "react";
import ContactForm from "./contactForm/ContactForm";
import ContactList from "./contactList/ContactList";
import SearchBox from "./searchBox/SearchBox";

import { useDispatch } from "react-redux";
import { fetchTasks } from "../redux/contactsOps";
export default function App() {
  const dispatch = useDispatch();
  //const isLoading = useSelector((state) => state.tasks.loading);
  // const isError = useSelector((state) => state.tasks.error);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
