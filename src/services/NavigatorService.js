import { CommonActions } from '@react-navigation/native';

let navigator;

function setNavigation(ref) {
  navigator = ref;
}

function navigate(name, params) {
  navigator.dispatch(
    CommonActions.navigate({
      name,
      params,
    })
  );
}

export default {
  setNavigation,
  navigate,
};
