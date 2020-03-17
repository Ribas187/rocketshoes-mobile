import styled from 'styled-components/native';

import { darken } from 'polished';
import colors from '../../styles/colors';

export const Container = styled.View`
  flex-direction: row;
`;

export const ProductList = styled.FlatList``;

export const ProductArea = styled.View`
  align-items: center;
  padding: 10px;
  margin: 2px 15px;
  background: #fff;
  border-radius: 4px;
  width: 220px;
  min-height: 375px;
`;

export const ProductImage = styled.Image`
  width: 200px;
  height: 200px;
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
  color: #333;
`;

export const ProductPrice = styled.Text`
  margin: 14px 0px;
  font-weight: bold;
  font-size: 20px;
  line-height: 21px;
  color: ${colors.dark};
  align-self: flex-start;
`;

export const AddButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: ${colors.primary};
  border-radius: 4px;
  border: 0;
  width: 100%;
  margin-top: auto;
`;

export const CartArea = styled.View`
  flex-direction: row;
  background: ${darken(0.08, colors.primary)};
  padding: 10px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;

export const CartText = styled.Text`
  margin-left: 5px;
  color: #fff;
`;

export const AddButtonText = styled.Text`
  flex: 1;
  text-align: center;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: #fff;
  text-transform: uppercase;
`;
