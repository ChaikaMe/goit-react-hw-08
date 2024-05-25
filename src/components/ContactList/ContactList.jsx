import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import { useSelector } from "react-redux";

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
  return (
    <ul className={css.list}>
      {contacts.map((ContactItem) => (
        <li key={ContactItem.id}>
          <Contact data={ContactItem} />
        </li>
      ))}
    </ul>
  );
}
