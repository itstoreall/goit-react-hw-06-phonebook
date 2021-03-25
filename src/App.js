import { connect } from 'react-redux';
import * as actions from './redux/contacts/contact-actions';
// import dataBase from './components/dataBase/dataBase.json';
import Form from './components/PhonebookForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import PropTypes from 'prop-types';

import { wrapper, title, subtitle } from './App.module.scss';

function App({ handleSubmit, handleInputFilter }) {
  return (
    <div className={wrapper}>
      <h1 className={title}>Phonebook</h1>
      <Form onInputChange={handleInputFilter} onSubmit={handleSubmit} />
      <h2 className={subtitle}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

App.defaultProps = {
  initialValue: [],
};

App.propTypes = {
  initialValue: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    handleSubmit: newContact => dispatch(actions.addContact(newContact)),
    handleDeleteContact: () => dispatch(actions.deleteContact()),
    handleInputFilter: () => dispatch(actions.filterContacts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
