// import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
// import Form from './components/PhonebookForm';
// import ContactList from './components/ContactList';
// import Filter from './components/Filter';
// import PropTypes from 'prop-types';

import { wrapper, title, subtitle } from './App.module.scss';

function App() {
  return (
    <div className={wrapper}>
      <h1 className={title}>Phonebook</h1>
      {/* <Form onInputChange={handleInputFilter} onSubmit={handleSubmit} /> */}
      <h2 className={subtitle}>Contacts</h2>
      {/* <Filter value={filter} onChange={handleInputFilter} /> */}
      {/* <ContactList
        contacts={filteredContacts}
        filter={filter}
        onInputChange={handleInputFilter}
        onDeleteContact={handleDeleteContact}
      /> */}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    items: state.contacts.items,
    filter: state.contacts.filter,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleSubmit: () => dispatch(actions.addContact(1)),
    handleDeleteContact: () => dispatch(actions.deleteContact(5)),
    handleInputFilter: () => dispatch(actions.filterContacts(8)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

// const App = ({ initialValue }) => {
// const [contacts, setContacts] = useState(initialValue);
// const [filter, setFilter] = useState('');

// Записывает значения инпута в стейт
// const handleInputFilter = e => setFilter(e.target.value);

// // Добавляет новый контакт в стейт
// const handleSubmit = newContact =>
//   contacts.find(
//     ({ name }) => name.toLowerCase() === newContact.name.toLowerCase(),
//   )
//     ? alert(`${newContact.name} is already in contacts.`)
//     : setContacts(prevState => [newContact, ...prevState]);

// // Фильтрация контактов
// const normalizedFilter = filter.toLowerCase();
// const filteredContacts = contacts.filter(contact =>
//   contact.name.toLowerCase().includes(normalizedFilter),
// );

// const handleDeleteContact = id =>
//   setContacts(contacts.filter(contact => contact.id !== id));

//   return (
//     <div className={wrapper}>
//       <h1 className={title}>Phonebook</h1>
//       <Form onInputChange={handleInputFilter} onSubmit={handleSubmit} />
//       <h2 className={subtitle}>Contacts</h2>
//       <Filter value={filter} onChange={handleInputFilter} />
//       <ContactList
//         contacts={filteredContacts}
//         filter={filter}
//         onInputChange={handleInputFilter}
//         onDeleteContact={handleDeleteContact}
//       />
//     </div>
//   );
// };

// App.defaultProps = {
//   initialValue: [],
// };

// App.propTypes = {
//   initialValue: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     }),
//   ),
// };

// export default App;
