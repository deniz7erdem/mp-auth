import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import Background from '../components/Background'
import BackButton from '../components/BackButton'
import Header from '../components/Header'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import { theme } from '../theme'
import { passwordValidator } from '../helpers/passwordValidator'
import { emailValidator } from '../helpers/emailValidator'
import { nameValidator } from '../helpers/nameValidator'

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState({ value: '', error: '' });
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });

  const sendRegister = () => {
    const nameError = nameValidator(name.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    if (emailError|| passwordError || nameError) {
        setName({ ...name, error: nameError });
        setEmail({ ...email, error: emailError });
        setPassword({ ...password, error: passwordError });
        return;
      }
    navigation.navigate('LoginScreen')
  }

  return (
    <Background>
      <BackButton goBack={navigation.LoginScreen} />
      
      <Header>Merhaba, Hesap Oluştur</Header>
      
      <TextInput
        label="Adınız"
        returnKeyType="next"
        value={name.value}
        onChangeText={text => setName({ value: text, error: '' })}
        error={!!name.error}
        errorText={name.error}
      />

      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={text => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <TextInput
        label="Şifre"
        returnKeyType="done"
        value={password.value}
        onChangeText={text => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />

      <Button
        mode="contained"
        onPress={sendRegister}
        style={{ marginTop: 20 }}
      >
        Üye Ol
      </Button>

      <View style={{flexDirection: 'row', marginTop: 4}}>
        <Text style={{ color: theme.colors.secondary}}>Hesabınız var mı? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={{fontWeight: 'bold', color: theme.colors.primary}}>Giriş Yap</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}
