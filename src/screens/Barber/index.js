import {
  useNavigation,
  useRoute
} from '@react-navigation/native';
import React, {
  useEffect,
  useState
} from 'react';
import Swiper from 'react-native-swiper';
import Api from './../../Api';
import BackIcon from './../../assets/back.svg';
import FavoriteIcon from './../../assets/favorite.svg';
import Stars from './../../utils/components/Stars';
import {
  BackButtom,
  Container,
  FakeSwiper,
  PageBody,
  Scroller,
  ServiceArea,
  SwipeActiveDot,
  SwipeDot,
  SwipeImage,
  SwipeItem,
  TestimonialArea,
  UserAvatar,
  UserFavButtom,
  UserInfo,
  UserInfoArea,
  UserInfoName
} from './styles';

export default () => {
  const navigation = useNavigation();
  const route = useRoute();

  const [userInfo, setUserInfo] = useState({
    id: route.params.id,
    avatar: route.params.avatar,
    name: route.params.name,
    stars: route.params.stars,
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getBarberInfo = async () => {
      let json = await Api.getBarber(userInfo.id);
      if (json.error === '') {
        let data = json.data;
        setUserInfo(data);
      } else {
        alert('Erro: ', json.error);
      }

      setLoading(false);
    };

    getBarberInfo();
  }, []);

  const handleBackButtom = () => {
    navigation.goBack();
  };

  return ( <
    Container >
    <
    Scroller > {
      userInfo.photos && userInfo.photos.length > 0 ? ( <
        Swiper style = {
          {
            height: 240,
            backgroundColor: '#ff00aa'
          }
        }
        dot = {
          < SwipeDot / >
        }
        activeDot = {
          < SwipeActiveDot / >
        }
        paginationStyle = {
          {
            top: 15,
            right: 15,
            bottom: null,
            left: null
          }
        }
        autoplay = {
          true
        }
        loop = {
          true
        } > {
          userInfo.photos.map((item, key) => ( <
            SwipeItem key = {
              key
            } >
            <
            SwipeImage source = {
              {
                uri: item.url,
              }
            }
            resizeMode = "cover" /
            >
            <
            /SwipeItem>
          ))
        } <
        /Swiper>
      ) : ( <
        FakeSwiper / >
      )
    } <
    PageBody >
    <
    UserInfoArea >
    <
    UserAvatar source = {
      {
        uri: userInfo.avatar,
      }
    }
    /> <
    UserInfo >
    <
    UserInfoName > {
      userInfo.name
    } < /UserInfoName> <
    Stars stars = {
      userInfo.stars
    }
    showNumber = {
      true
    }
    /> <
    /UserInfo> <
    UserFavButtom >
    <
    FavoriteIcon width = "24"
    height = "24"
    fill = "#ff0000" / >
    <
    /UserFavButtom> <
    /UserInfoArea> <
    ServiceArea / >
    <
    TestimonialArea / >
    <
    /PageBody> <
    /Scroller> <
    BackButtom onPress = {
      handleBackButtom
    } >
    <
    BackIcon width = "44"
    height = "44"
    fill = "#fff" / >
    <
    /BackButtom> <
    /Container>
  );
};