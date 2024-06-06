import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteTask } from "../../redux/contactsOps";
import { RiPhoneFill } from "react-icons/ri";
import { RiUserFill } from "react-icons/ri";

const Contact = ({ data: { name, number, id } }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteTask(id));
  };
  return (
    <div className={css.container}>
      <div className={css.card}>
        <p className={css.name}>
          <RiUserFill size="25" className={css.icon} />
          {name}
        </p>
        <p className={css.number}>
          <RiPhoneFill size="25" className={css.icon} />
          {number}
        </p>
      </div>
      <button className={css.btn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};
export default Contact;
