export const validate = (key: string, value: string) => {
  switch (key) {
    case 'email':
      return regex.email.test(value);

    case 'password':
      console.log(value, value.length > 8);

      return value.length > 8;

    default:
      break;
  }
};

const regex = {
  email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
};
