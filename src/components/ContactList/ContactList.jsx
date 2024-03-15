import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ contactsArray, deleteContact }) => {
  return (
    <ul className={css.contactListWrapper}>
      {contactsArray.map((contact) => (
        <li key={contact.id}>
          <Contact data={contact} deleteContact={deleteContact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
