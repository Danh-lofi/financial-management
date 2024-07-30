import {StackActions, CommonActions} from '@react-navigation/native';

let navigationRef: any = null;

export function setNavigationRef(ref: any) {
  navigationRef = ref;
}

export function navigate(name: string, params?: object) {
  if (navigationRef?.current) {
    navigationRef.current.navigate(name, params);
  }
}

export function goBack() {
  if (navigationRef?.current) {
    navigationRef.current.goBack();
  }
}

export function reset(
  index: number,
  routes: Array<{name: string; params?: object}>,
) {
  if (navigationRef?.current) {
    navigationRef.current.dispatch(
      CommonActions.reset({
        index,
        routes,
      }),
    );
  }
}
