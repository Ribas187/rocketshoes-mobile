import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../styles/colors';

import { formatPrice } from '../../util/format';

import * as CartActions from '../../store/modules/cart/actions';

import {
  Container,
  Scroll,
  CartArea,
  TotalTitleText,
  TotalCartText,
  FinishCartButton,
  FinishButtonText,
  ProductsArea,
  ProductArea,
  ProductImage,
  ProductInfo,
  ProductInfoTitle,
  ProductInfoPrice,
  RemoveProductButton,
  ProductControls,
  ProductControlButton,
  ProductAmount,
  ProductSubtotal,
  EmptyContainer,
  EmptyText,
} from './styles';

function Cart({ cart, removeFromCart, updateAmountRequest, total }) {
  const increment = product => {
    updateAmountRequest(product.id, product.amount + 1);
  };
  const decrement = product => {
    updateAmountRequest(product.id, product.amount - 1);
  };

  return (
    <Container>
      {cart.length ? (
        <Scroll>
          <CartArea>
            {cart.map(product => (
              <ProductsArea key={product.id}>
                <ProductArea>
                  <ProductImage source={{ uri: product.image }} />
                  <ProductInfo>
                    <ProductInfoTitle>{product.title}</ProductInfoTitle>
                    <ProductInfoPrice>
                      {product.priceFormatted}
                    </ProductInfoPrice>
                  </ProductInfo>
                  <RemoveProductButton
                    onPress={() => removeFromCart(product.id)}
                  >
                    <Icon
                      name="delete-forever"
                      size={24}
                      color={colors.primary}
                    />
                  </RemoveProductButton>
                </ProductArea>

                <ProductControls>
                  <ProductControlButton onPress={() => decrement(product)}>
                    <Icon
                      name="remove-circle-outline"
                      size={20}
                      color={colors.primary}
                    />
                  </ProductControlButton>
                  <ProductAmount value={String(product.amount)} />
                  <ProductControlButton onPress={() => increment(product)}>
                    <Icon
                      name="add-circle-outline"
                      size={20}
                      color={colors.primary}
                    />
                  </ProductControlButton>
                  <ProductSubtotal>{product.subTotal}</ProductSubtotal>
                </ProductControls>
              </ProductsArea>
            ))}

            <TotalTitleText>TOTAL</TotalTitleText>
            <TotalCartText>{total}</TotalCartText>

            <FinishCartButton onPress={() => {}}>
              <FinishButtonText>Finalizar Pedido</FinishButtonText>
            </FinishCartButton>
          </CartArea>
        </Scroll>
      ) : (
        <EmptyContainer>
          <Icon name="remove-shopping-cart" size={100} color="#eee" />
          <EmptyText>Seu carrinho está vazio.</EmptyText>
        </EmptyContainer>
      )}
    </Container>
  );
}

Cart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeFromCart: PropTypes.func.isRequired,
  updateAmountRequest: PropTypes.func.isRequired,
  total: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subTotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
