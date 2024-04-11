import css from "./Contact.module.css";
function Contact({ id, name, number, onDelete }) {
  return (
    <div className={css.contacts}>
      <p className={css.contactsInfo}>{name}: {number}</p>
      <button className={css.contactsDelete} onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}

export default Contact;