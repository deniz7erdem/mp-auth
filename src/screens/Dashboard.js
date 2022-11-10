import React from 'react'
import Background from '../components/Background'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'

export default function Dashboard({ navigation }) {
  return (
    <Background>
      <Header> Giriş yapıldı</Header>
      <Paragraph>
        çıkış yapmak için butona tıklayınız.
      </Paragraph>
      <Button
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'StartScreen' }],
          })
        }
      >
        ÇIKIŞ YAP 
      </Button>
    </Background>
  )
}
