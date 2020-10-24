import React, {useEffect, useContext} from 'react';
import {Container, LoadingIcon} from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';

import {UserContext} from './../../contexts/UserContext';
import Api from './../../Api';

import BarberLogo from './../../assets/barber.svg';

export default () => {
  const {dispatch: userDispatch} = useContext(UserContext);
  const navigation = useNavigation();

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');
      let response;
      if (token) {
        response = await Api.checkToken(token);

        if (response.token) {
          await AsyncStorage.setItem('token', response.token);

          userDispatch({
            type: 'setAvatar',
            payload: {
              avatar: response.data.avatar,
            },
          });

          navigation.reset({
            routes: [{name: 'MainTab'}],
          });
        } else {
          navigation.navigate('SignIn');
        }
      } else {
        navigation.navigate('SignIn');
      }
    };
    checkToken();
  }, [navigation, userDispatch]);

  return (
    <Container>
      <BarberLogo width="100%" height="160" />
      <LoadingIcon size="large" color="#FFF" />
    </Container>
  );
};
