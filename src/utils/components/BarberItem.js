import React from 'react';
import styled from 'styled-components/native';

import {useNavigation} from '@react-navigation/native';

import Stars from './Stars';

const Area = styled.TouchableOpacity`
  background-color: #fff;
  margin-bottom: 20px;
  border-radius: 20px;
  padding: 15px;
  flex-direction: row;
`;

const Avatar = styled.Image`
  width: 88px;
  height: 88px;
  border-radius: 20px;
`;

const InfoArea = styled.View`
  margin-left: 20px;
  justify-content: space-between;
`;

const UserName = styled.Text`
  font-size: 17px;
  font-weight: bold;
`;

const SeeProfileButton = styled.View`
  width: 85px;
  height: 26px;
  border: 1px solid #4eadbe;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

const SeeProfileButtonText = styled.Text`
  font-size: 12px;
  color: #268596;
`;

export default ({data}) => {
  const uriPathDefault = [
    'https://thumbs.dreamstime.com/z/bearded-man-profile-barbershop-hairstyle-haircut-hand-drawn-vector-illustration-realistic-sketch-139715170.jpg',
    'https://i.pinimg.com/originals/8f/39/63/8f39639625319c907e3e70e1eac42b30.jpg',
    'https://cdn.shopify.com/s/files/1/0158/4170/articles/Barber-Feature_1024x.jpg?v=1492111805',
    'https://www.bbb.org/ProfileImages/938fd712-62f4-462f-96bd-978f678f7508.png',
    'https://c8.alamy.com/comp/M90NXX/profile-portrait-of-young-man-having-hair-shaved-at-barber-shop-M90NXX.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdgBGHobNsrSODsFr5F-usMFO-e90t_8yzlA&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQuy6h9uzKc4uz3gx6QH5igkq3p4LQ24d5WLg&usqp=CAU',
    'https://hudsonhawkbarbers.com/wp-content/uploads/2019/08/barber-profile-ashton-mccormick-300x300.jpg',
    'https://lh3.googleusercontent.com/ub4yesiv6YIDscjVFzN8iTPkeZYnKVBclddgo7QMeShgZDT_5Yiy2Uidz4_kV72lFAsl7vp3yw=w1080-h608-p-no-v0',
    'https://image.shutterstock.com/z/stock-vector-retro-barber-shop-vintage-template-vector-chalk-illustration-with-man-s-profile-on-a-chalkboard-253055956.jpg',
  ];

  const navigation = useNavigation();

  const avatar = uriPathDefault[data.id % 10];

  const handleClick = () => {
    navigation.navigate('Barber', {
      id: data.id,
      avatar: avatar,
      name: data.name,
      start: data.stars,
    });
  };

  return (
    <Area onPress={handleClick}>
      <Avatar source={{uri: avatar}} />

      <InfoArea>
        <UserName>{data.name}</UserName>

        <Stars stars={data.stars} showNumber={true} />

        <SeeProfileButton Button>
          <SeeProfileButtonText>Ver Perfil</SeeProfileButtonText>
        </SeeProfileButton>
      </InfoArea>
    </Area>
  );
};
