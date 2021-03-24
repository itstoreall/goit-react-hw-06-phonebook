export const addContact = value => ({
  type: "ADD_CONTACT",
  payload: value,
});

export const deleteContact = value => ({
  type: "DELETE_CONTACT",
  payload: value,
});

export const filterContacts = value => ({
  type: "FILTER_CONTACTS",
  payload: value,
});
