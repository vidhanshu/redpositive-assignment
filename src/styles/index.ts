import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
  stack: {
    flex: 1,
    gap: 10,
  },
  flex: {
    flex: 1,
  },
  text: {
    fontFamily: 'NunitoSans-Regular',
    fontSize: 16,
  },
  title: {
    fontFamily: 'NunitoSans-Semibold',
    fontSize: 25,
    color: '#000',
  },
  textCenter: {
    textAlign: 'center',
  },
});

export const Colors = {
  primary: {
    main: '#f40b51',
    light: '#efd0d1',
    dark: '#ab0738',
  },
  title: '#0007fa',
  subTitle: '#6d747d',
  placeholderIcon: '#f40b51',
  success: '#00b300',
};
