import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  LogoButton,
  MenuLogo,
  BasketArea,
  BasketBagde,
} from './styles';

function Header({ navigation, cartSize }) {
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
  cartSize: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  cartSize: state.cart.length,
});

export default connect(mapStateToProps)(Header);
