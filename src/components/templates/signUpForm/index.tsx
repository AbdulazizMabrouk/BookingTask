import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {AppInput} from '../../molecules';
import {STYLES} from '../../../common';
import {Button, AppText} from '../../atoms';
import {calcHeight} from '../../../utils';
import {validate} from '../../../utils/validator';

interface SignUpTempProps {}

interface logindata {
  userName: string;
  email: string;
  password: string;
}
const SignUpTemp = (props: SignUpTempProps) => {
  const [loginData, setLoginData] = React.useState<logindata>({
    userName: '',
    email: '',
    password: '',
  });

  const [submited, setSubmited] = React.useState(false);
  const onChange = (key: any, value: any) => {
    setLoginData({...loginData, [key]: value});
  };
  const onSubmit = async () => {
    setSubmited(true);
    if (validate('email', loginData.email)) {
    } else {
    }
  };
  return (
    <>
      <View style={styles.container}>
        <AppInput
          label={'Username'}
          placeholder={'Create your username'}
          onChangeText={value => onChange('email', value)}
          error={!!submited && !validate('email', loginData.email)}
          errorMessage={'Invalid username'}
        />
        <AppInput
          label={'E-mail'}
          placeholder={'Enter your e-mail'}
          onChangeText={value => onChange('email', value)}
          containerStyle={{marginTop: calcHeight(16)}}
          error={!!submited && !validate('email', loginData.email)}
          errorMessage={'Invalid Email'}
        />
        <AppInput
          label={'Password'}
          placeholder={'Create your password'}
          onChangeText={value => onChange('password', value)}
          containerStyle={{marginTop: calcHeight(16)}}
          error={!!submited && !validate('password', loginData.password)}
          errorMessage={'Invalid password'}
          secureTextEntry
        />

        <Button
          title={'Sign Up'}
          onPress={() => onSubmit()}
          style={styles.Button}
        />
      </View>
    </>
  );
};

export {SignUpTemp};

const styles = StyleSheet.create({
  container: {
    ...STYLES.center,
    marginTop: calcHeight(32),
    marginHorizontal: 16,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginTop: calcHeight(32),
    marginEnd: '5%',
  },
  Button: {
    width: '90%',
    borderRadius: 30,
    marginTop: calcHeight(32),
  },
});
