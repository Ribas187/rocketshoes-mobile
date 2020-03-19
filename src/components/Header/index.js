import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  LogoButton,
  MenuLogo,
  BasketArea,
  BasketBagde,
} from './styles';

function Header({ navigation }) {
  const cartSize = useSelector(state => state.cart.length);

  return (
    <Container>
      <LogoButton onPress={() => navigation.navigate('Home')}>
        <MenuLogo />
      </LogoButton>

      <BasketArea onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-basket" size={24} color="#FFF" />
        <BasketBagde>{cartSize}</BasketBagde>
      </BasketArea>
    </Container>
  );
}

Header.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default Header;
