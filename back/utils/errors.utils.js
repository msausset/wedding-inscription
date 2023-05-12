module.exports.signUpErrors = (err) => {
  let errors = {
    firstName: "",
    lastName: "",
  };

  if (err.message.includes("firstName")) {
    errors.firstName = "Veuillez renseigner votre prénom";
  }

  if (err.message.includes("lastName")) {
    errors.lastName = "Veuillez renseigner votre nom";
  }

  return errors;
};
