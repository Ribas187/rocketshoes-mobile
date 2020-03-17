import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';

import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';

import {
  Container,
  ProductList,
  ProductArea,
  ProductImage,
  ProductTitle,
  ProductPrice,
  AddButton,
  CartArea,
  CartText,
  AddButtonText,
} from './styles';

class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('/products');

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({ products: data });
  }

  handleAddProduct = id => {
    const { addToCartRequest } = this.props;

    addToCartRequest(id);
  };

  render() {
    const { products } = this.state;
    const { amount } = this.props;

    return (
      <Container>
        <ProductList
          horizontal
          data={products}
          renderItem={({ item }) => (
            <ProductArea>
              <ProductImage source={{ uri: item.image }} />

              <ProductTitle>{item.title}</ProductTitle>

              <ProductPrice>{item.priceFormatted}</ProductPrice>

              <AddButton onPress={() => this.handleAddProduct(item.id)}>
                <CartArea>
                  <Icon name="add-shopping-cart" color="#fff" size={20} />
                  <CartText>{amount[item.id] || 0}</CartText>
                </CartArea>
                <AddButtonText>Adicionar</AddButtonText>
              </AddButton>
            </ProductArea>
          )}
          keyExtractor={item => String(item.id)}
          showsHorizontalScrollIndicator={false}
        />
      </Container>
    );
  }
}

Home.propTypes = {
  addToCartRequest: PropTypes.func.isRequired,
  amount: PropTypes.objectOf(PropTypes.number).isRequired,
};

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;

    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
