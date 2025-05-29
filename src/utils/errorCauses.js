// src/utils/errorCauses.js
export const generateUserErrorInfo = (user) => {
  return `
  One or more properties were incomplete or not valid.
  List of required properties:
    * first_name: needs to be a string (${user.first_name})
    * last_name: needs to be a string (${user.last_name})
    * email: needs to be a valid email (${user.email})
    * age: needs to be a number (${user.age})
  `;
};

export const generatePetErrorInfo = (pet) => {
  return `
  Invalid or missing pet data:
    * name: must be a string (${pet.name})
    * specie: must be a string (${pet.specie})
    * birthDate: must be a valid date (${pet.birthDate})
  `;
};
