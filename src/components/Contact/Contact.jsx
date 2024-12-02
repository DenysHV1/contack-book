import css from './Contact.module.css';
import 'react-confirm-alert/src/react-confirm-alert.css';
import './react-confirm-alert.css';

import { FaUser } from 'react-icons/fa6';
import { TiDelete } from 'react-icons/ti';
import { FaPhoneAlt } from 'react-icons/fa';

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
        <FaUser style={{ color: 'white' }} /> {contact.name}
      </p>

      <p>
        <FaPhoneAlt style={{ color: 'white' }} /> {contact.number}
      </p>
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
