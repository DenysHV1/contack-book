import css from './ContactList.module.css';

import Contact from '../Contact/Contact';

import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/filters/selectors';

const ContactList = () => {
  const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contactList}>
      {visibleContacts.length > 0 ? (
        visibleContacts.map(contact => {
          return <Contact key={contact.id} contact={contact} />;
        })
      ) : (
        <li>
          <p className={css.emptyList}>List is empty</p>
        </li>
      )}
    </ul>
  );
};

export default ContactList;
