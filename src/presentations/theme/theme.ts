import {Dimensions, StyleSheet} from 'react-native';
const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    position: 'absolute',
    bottom: 0,
    right: 0,
    padding: 15,
  },
  button: {
    height: 60,
    width: 60,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonClose: {
    height: 15,
    width: 15,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  buttonModal: {
    borderRadius: 5,
    padding: 5,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 5,
  },
  textButton: {
    color: '#ffffff',
    fontSize: 35,
  },
  photoContainer: {
    margin: 5,
    flex: 1,
  },
  photo: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
  },
  modalcontent:{
    flex: 1,
    backgroundColor:'rgba(1,1,1, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal:{
    height: '25%',
    width:'80%',
    backgroundColor:'#fff'
  },
  modalHeader:{
    height: 45,
    width:'100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: width * 0.9,
    height: height * 0.7,
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  photoModal: {
    width: 100,
    height: 100,
    margin: 5,
  },
});
