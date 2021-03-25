import { connect } from 'react-redux';
import ContactItem from './ContactItem';
import PropTypes from 'prop-types';
import { deleteContact } from '../../redux/contacts/contact-actions';
import { contactList } from './Contacts.module.scss';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={contactList}>
      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  contacts: state.contacts.items,
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
