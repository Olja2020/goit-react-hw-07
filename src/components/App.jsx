import { useEffect } from "react";
import ContactForm from "./contactForm/ContactForm";
import ContactList from "./contactList/ContactList";
import SearchBox from "./searchBox/SearchBox";
import { selectError, selectLoading } from "../redux/contactsSlice";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../redux/contactsOps";
import Loader from "../components/loader/Loader";
import Error from "../components/error/Error";
export default function App() {
  const dispatch = useDispatch();

  const isLoading = selectLoading;
  const isError = selectError;

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isError && <Error />}
      {isLoading && <Loader />}

      {/* {isLoading && <Loader>Loading message</Loader>}
      {isError && <Error>Error message</Error>} */}
      <ContactList />
    </div>
  );
}
