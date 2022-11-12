import { useSelector } from 'react-redux';
import { getFilter } from 'redux/contacts/contactsSelectors';
import { useGetContactsQuery } from '../../services/contactsApi';
import ContactListItem from './ContactListItem';
import Loader from 'components/Loader';
import PropTypes from 'prop-types';
import style from './ContactList.module.css';

const ContactList = () => {
  const filter = useSelector(getFilter);
// console.log(useGetContactsQuery);
  const { data: contacts, isFetching, isError } = useGetContactsQuery();
  const normalizedFilter = filter.toLowerCase();
  


  const filteredContacts =
    filter ?
    contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter)):contacts;

  const isContactsEmpty = filteredContacts && filteredContacts.length > 0;

  return (
    <>
      {isFetching && <Loader color={'#3f51b5'} size={32} />}
      {isError && console.log(isError)}
      {isContactsEmpty ? (
        <ul className={style.ContactList__list}>
          {filteredContacts?.map(({ id, name, number }) => (
            <ContactListItem key={id} id={id} name={name} number={number} />
          ))}
        </ul>
      ) : (
        <ul className={style.ContactList__list}>
          <p>No contacts found...</p>
        </ul>
      )}
    </>
  );
};

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
