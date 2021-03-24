export const addContact = value => ({
  type: 'contact/add',
  payload: value,
});

export const deleteContact = value => ({
  type: 'contact/del',
  payload: value,
});

export const filterContacts = value => ({
  type: 'contact/filt',
  payload: value,
});

// export const addContact = value => ({
//   type: "ADD_CONTACT",
//   payload: value,
// });

// export const deleteContact = value => ({
//   type: "DELETE_CONTACT",
//   payload: value,
// });

// export const filterContacts = value => ({
//   type: "FILTER_CONTACTS",
//   payload: value,
// });
