module.exports.registerErrors = (err) => {
  let errors = {
    firstName: "",
    lastName: "",
  };

  if (err.message.includes("firstName")) {
    errors.firstName = "Le prénom doit faire au moins 3 caractères.";
  }

  if (err.message.includes("lastName")) {
    errors.lastName = "Le nom doit faire au moins 3 caractères.";
  }

  return errors;
};
module.exports.contactErrors = (err) => {
  let errors = {
    firstName: "",
    lastName: "",
    text: "",
  };

  if (err.message.includes("firstName")) {
    errors.firstName = "Le prénom doit faire au moins 3 caractères.";
  }

  if (err.message.includes("lastName")) {
    errors.lastName = "Le nom doit faire au moins 3 caractères.";
  }

  if (err.message.includes("text")) {
    errors.text = "Le message doit faire au moins 3 caractères.";
  }

  return errors;
};
