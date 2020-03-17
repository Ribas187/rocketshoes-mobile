import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const Container = styled.View`
  background: ${colors.dark};
`;

export const Scroll = styled.ScrollView`
  margin: 10px 0;
`;

export const CartArea = styled.View`
  align-items: center;
  padding: 10px;
  margin: 0 15px;
  background: #fff;
  border-radius: 4px;
  width: auto;
`;

export const ProductsArea = styled.View`
  width: 100%;
  flex-direction: column;
`;

export const ProductArea = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ProductImage = styled.Image`
  width: 100px;
  height: 100px;
`;

export const ProductInfo = styled.View`
  flex: 1;
  margin-left: 10px;
  padding: 10px;
`;

export const ProductInfoTitle = styled.Text`
  font-size: 16px;
  color: #333;
`;

export const ProductInfoPrice = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: ${colors.dark};
`;

export const RemoveProductButton = styled.TouchableOpacity`
  padding: 6px;
`;

export const ProductControls = styled.View`
  flex-direction: row;
  align-items: center;
  background: #eee;
  border-radius: 4px;
  padding: 8px;
`;

export const ProductControlButton = styled.TouchableOpacity``;

export const ProductAmount = styled.TextInput.attrs({
  readOnly: true,
})`
  background: #fff;
  padding: 5px;
  margin: 0 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
  height: 30px;
  min-width: 50px;
`;

export const ProductSubtotal = styled.Text`
  font-weight: bold;
  font-size: 16px;
  flex: 1;
  text-align: right;
`;

export const TotalTitleText = styled.Text`
  margin-top: 15px;
  font-size: 18px;
  font-weight: bold;
  color: #999;
`;

export const TotalCartText = styled.Text`
  font-weight: bold;
  font-size: 28px;
  color: ${colors.dark};
  margin-bottom: 15px;
`;

export const FinishCartButton = styled.TouchableOpacity`
  margin-top: auto;
  flex-direction: row;
  align-items: center;
  background: ${colors.primary};
  border-radius: 4px;
  border: 0;
  width: 100%;
  margin-top: auto;
  padding: 10px;
`;

export const FinishButtonText = styled.Text`
  flex: 1;
  text-align: center;
  font-weight: bold;
  font-size: 15px;
  line-height: 16px;
  color: #fff;

  text-transform: uppercase;
`;

export const EmptyContainer = styled.View`
  align-items: center;
  padding: 10px;
  margin: 0 15px;
  background: #fff;
  border-radius: 4px;
  width: auto;
`;

export const EmptyText = styled.Text`
  font-size: 22px;
  font-weight: bold;
  margin-top: 18px;
`;
