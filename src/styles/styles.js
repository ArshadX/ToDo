import {Dimensions, StyleSheet} from 'react-native';
export const dashboard = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: Dimensions.get('screen').height / 1.4,
    bottom: 0,
    alignItems: 'center',
  },
  image: {
    width: 400,
    height: 400,
    alignSelf: 'center',
  },
});
export const button = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 50,
    borderRadius: 10,
    elevation: 10,
  },
  title: {
    color: '#fff',
    fontFamily: 'Helvetica',
  },
  enable: {
    backgroundColor: '#ff0000',
  },
  disable: {
    backgroundColor: '#696969',
  },
});
export const modal = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  container: {
    width: Dimensions.get('screen').width - 20,
    height: Dimensions.get('screen').height - 655,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    elevation: 10,
  },
  box: {
    alignItems: 'stretch',
    justifyContent: 'flex-end',
    marginHorizontal: 4,
  },
  textStyle: {
    color: '#ff0000',
    fontSize: 20,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
  },
  actions: {
    flexDirection: 'row-reverse',
    flexWrap: 'nowrap',
    marginTop: 10,
    right: 10,
  },
});

export const textArea = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: '#ff0000',
    borderRadius: 5,
  },
  textInput: {
    color: '#000000',
  },
});
export const badge = StyleSheet.create({
  container: {
    width: 30,
    position: 'relative',
    top: -10,
    right: 0,
    left: Dimensions.get('window').width / 1.13,
    bottom: 0,
    backgroundColor: '#ff0000',
    borderRadius: 60,
  },
});
export const blocks = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: '#ff0000',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
    paddingVertical: 10,
    borderRadius: 5,
    paddingHorizontal: 5,
    alignItems: 'center',
    elevation: 1,
    shadowColor: '#ff0000',
  },
  textStyle: {
    fontFamily: 'Arial',
    fontWeight: 'bold',
    color: '#000000',
  },
  subtitle: {
    color: '#4cbb17',
    fontSize: 10,
  },
});
