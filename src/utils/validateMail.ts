const validateMail = (email: string) => {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

export default validateMail;