import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectError, selectIsLoading } from "../../redux/contacts/selectors";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

export default function ContactPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <div>
      <ContactForm />
      <SearchBox />
      <ContactList />
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>Error! Please try again!</h2>}
    </div>
  );
}
