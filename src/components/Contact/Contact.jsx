import css from './Contact.module.css';
import 'react-confirm-alert/src/react-confirm-alert.css';
import './react-confirm-alert.css';

import { FaUser } from 'react-icons/fa6';
import { TiDelete } from 'react-icons/ti';

import { deleteContact } from '../../redux/contacts/operations';
import { useDispatch } from 'react-redux';
import { confirmAlert } from 'react-confirm-alert';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));
  const newDeleteContact = () => {
    confirmAlert({
      title: 'Confirm',
      message: 'Are you sure to delete this?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => handleDelete(),
        },
        {
          label: 'No',
          onClick: () => {},
        },
      ],
    });
  };

  return (
    <li className={css.contactItem}>
      <p>
        <FaUser style={{ color: 'white' }} className={css.user_icon} />
      </p>
      <div className={css.info_container}>
        <p className={css.info_item}>{contact.name}</p>
        <p className={css.info_item}>{contact.number}</p>
      </div>

      <button
        className={css.contactButton}
        type="button"
        onClick={() => newDeleteContact()}
      >
        <TiDelete style={{ color: 'white' }} />
      </button>
    </li>
  );
};

export default Contact;
