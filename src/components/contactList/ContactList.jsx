import Contact from "../contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
//import { selectNameFilter } from "../../redux/filtersSlice";

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  //const filters = useSelector(selectNameFilter);

  return (
    <ul className={css.list}>
      {contacts.map((contact) => (
        <li className={css.item} key={contact.id}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  );
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++

// import {
//   selectContacts,
//   selectFilteredContacts,
// } from "../../redux/contactsSlice";

// const ContactList = () => {
//   const contacts = useSelector(selectContacts);
//   const filteredContacts = useSelector(selectFilteredContacts);

//   return (
//     <ul className={css.contactList}>
//       {filteredContacts.map(contact => {
//         return (
//           <li className={css.contactItem} key={contact.id}>
//             <Contact
//               name={contact.name}
//               number={contact.number}
//               id={contact.id}
//             />
//           </li>
//         );
//       })}
//     </ul>
//   );
// };

// export default ContactList;
