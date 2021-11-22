import React from 'react';
import {
  View,
  TextInput,
  ViewStyle,
  TextStyle,
  TextInputProps,
} from 'react-native';
import styles from './styles';
import {AppText} from '../../atoms';
import {COLORS} from '../../../common';

interface InputProps {
  inputRef?: any;
  label?: string;
  error?: string | boolean;
  errorMessage?: string;
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle | Array<TextStyle>;
}

export type AppInputProps = TextInputProps & InputProps;

let AppInput: React.FC<AppInputProps> = ({
  containerStyle,
  label,
  inputRef,
  inputStyle,
  error,
  errorMessage,
  ...props
}: AppInputProps) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {label && <AppText style={styles.labelStyle}>{label}</AppText>}
      <TextInput
        ref={inputRef}
        style={[
          styles.input,
          error ? styles.errorStyle : undefined,
          inputStyle,
        ]}
        placeholderTextColor={COLORS.silverChalice}
        underlineColorAndroid={COLORS.transparent}
        blurOnSubmit={false}
        autoCapitalize={'none'}
        autoCorrect={false}
        {...props}
      />
      {error && (
        <AppText style={styles.errorText} numberOfLines={1}>
          {errorMessage}
        </AppText>
      )}
    </View>
  );
};

AppInput = React.memo(AppInput);
export {AppInput};
