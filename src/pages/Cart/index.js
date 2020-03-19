import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
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

export default function Cart() {
  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subTotal: formatPrice(product.price * product.amount),
    }))
  );

  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((sumTotal, product) => {
        return sumTotal + product.price * product.amount;
      }, 0)
    )
  );

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }
  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

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
                    onPress={() =>
                      dispatch(CartActions.removeFromCart(product.id))
                    }
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
