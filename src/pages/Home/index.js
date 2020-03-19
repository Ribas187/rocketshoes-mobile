import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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

export default function Home() {
  const [products, setProducts] = useState([]);

  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;

      return sumAmount;
    }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }

    loadProducts();
  }, []);

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

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

            <AddButton onPress={() => handleAddProduct(item.id)}>
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
