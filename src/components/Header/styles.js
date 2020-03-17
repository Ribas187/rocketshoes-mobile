import styled from 'styled-components/native';
import colors from '../../styles/colors';

import logo from '../../assets/logo.png';

export const Container = styled.SafeAreaView`
  background: ${colors.dark};
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding: 30px 20px;
`;

export const LogoButton = styled.TouchableHighlight`
  width: 185px;
  height: 24px;
`;

export const MenuLogo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 185px;
  height: 24px;
`;

export const BasketArea = styled.TouchableOpacity`
  height: 24px;
  width: 24px;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const BasketBagde = styled.Text`
  position: absolute;
  text-align: center;
  top: -8px;
  right: -8px;
  min-height: 18px;
  min-width: 18px;
  background: ${colors.primary};
  border-radius: 9px;
  color: #fff;
  font-size: 12px;
  overflow: hidden;
`;
