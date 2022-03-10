
export const configApi = {
  url: 'http://localhost:3000/',//"https://mesto.nomoreparties.co/v1/cohort-30/",
   headers: {
   authorization: `Bearer ${localStorage.getItem('token')}`,
    "content-type": "application/json",
   },
};