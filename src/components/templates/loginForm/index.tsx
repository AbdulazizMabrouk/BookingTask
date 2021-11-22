import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {AppInput} from '../../molecules';
import {STYLES} from '../../../common';
import {Button, AppText} from '../../atoms';
import {calcHeight} from '../../../utils';
import {validate} from '../../../utils/validator';

interface LoginFormTemProps {}

interface logindata {
  email: string;
  password: string;
}
const LoginFormTem = (props: LoginFormTemProps) => {
  const [loginData, setLoginData] = React.useState<logindata>({
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
      {console.log(loginData)}
      <View style={styles.container}>
        <AppInput
          label={'Username or E-mail'}
          onChangeText={value => onChange('email', value)}
          error={!!submited && !validate('email', loginData.email)}
          errorMessage={'Invalid Email'}
        />
        <AppInput
          containerStyle={{marginTop: calcHeight(32)}}
          label={'Password'}
          onChangeText={value => onChange('password', value)}
          error={!!submited && !validate('password', loginData.password)}
          errorMessage={'Invalid password'}
          secureTextEntry
        />
        <AppText style={styles.forgotPassword} onPress={() => {}}>
          {'Forgot Password?'}
        </AppText>
        <Button
          title={'Login'}
          onPress={() => onSubmit()}
          style={styles.Button}
        />
      </View>
    </>
  );
};

export {LoginFormTem};

const styles = StyleSheet.create({
  container: {...STYLES.center, marginHorizontal: 16},
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