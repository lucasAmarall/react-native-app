import {NavigationActions} from 'react-navigation';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(routeName, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    }),
  );
}

function push(routeName, params) {
  console.log(routeName);
  console.log(_navigator._navigation.popToTop('Feed'));
}

export default {
  navigate,
  push,
  setTopLevelNavigator,
};
