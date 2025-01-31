const checkValidData = (email, password) => {
  const checkEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  // console.log(checkEmail)
  const checkPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );
  // console.log(checkPassword);

  if (!checkEmail) return "Invalid Email";
  if (!checkPassword) return "Invalid Password";
  if (checkEmail && checkPassword) return null;
};

export default checkValidData;

// https://newgpt-402fd.web.app
