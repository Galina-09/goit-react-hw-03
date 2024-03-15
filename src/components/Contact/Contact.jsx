import css from "./Contact.module.css";
import { IoPersonSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = ({ data: { name, number, id }, deleteContact }) => {
  return (
    <div className={css.contactItem}>
      <div className={css.contactInfo}>
        <p>
          <IoPersonSharp className={css.icon} />
          {name}
        </p>
        <p>
          <FaPhoneAlt className={css.icon} />
          {number}
        </p>
      </div>
      <button className={css.contactBtn} onClick={() => deleteContact(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
