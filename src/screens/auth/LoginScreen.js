// LoginForm.js
import React, { useState } from 'react';
import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native';
import CustomButton from '../../components/CustomButton';

import { TouchableOpacity } from 'react-native';
import { COLORS, FONTFAMILY, FONTSIZE } from '../../assets';
import InputField from '../../components/InputField';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { AppImages } from '../../assets';
import CheckBox from '../../components/CheckBox';
import { auth } from '../../config/FirebaseConfig';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/userSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const LoginScreen = ({onLogin, navigation}) => {
  const [username, setUsername] = useState('');
  //   console.log(username);
  const [password, setPassword] = useState('');
  //   console.log(password);
  const [isCheckRemember, setisCheckRemember] = useState(false);
  const [checkError, setError] = useState({});
  const dispatch = useDispatch()

  const handleError = (error, input) => {
    setError((prevState) => ({ ...prevState, [input]: error }));
  };
  const handleCheckBox = () => setisCheckRemember(!isCheckRemember);

  const handleLogin= async()=>{
    try {
      const response = await signInWithEmailAndPassword(auth,username,password)
      dispatch(setUser(response));
      await AsyncStorage.setItem('auth',JSON.stringify(response))
      navigation.navigate('MainNavigator')
    } catch (error) {
      if(error.code=="auth/invalid-credential"){
        handleError('Tài khoản chưa được đăng ký',"email")
      }
    }
  }

  
  return (
    <KeyboardAvoidingView>
      <StatusBar hidden />

      <View style={styles.container}>
        <Image
          style={{
            width: '100%',
            height: 400,
            objectFit: 'cover',
            marginTop: -200,
          }}
          source={AppImages.background_plant}
        />
        <View style={styles.childContainer}>
          <Text
            style={{
              color: COLORS.primaryGreenHex,
              fontSize: FONTSIZE.size_28,
              fontFamily: FONTFAMILY.poppins_bold,
            }}>
            Chào mừng bạn
          </Text>
          <Text
            style={{
              color: 'black',
              fontSize: FONTSIZE.size_16,
              fontFamily: FONTFAMILY.poppins_,
              marginBottom: 20
            }}>
            Đăng nhập tài khoản
          </Text>
          <InputField
            placeholder="Email"
            onChangeText={setUsername}
            error={checkError?.email}
          />
          <InputField
            placeholder="Password"
            onChangeText={setPassword}
            password={true}
          />
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-between',
              marginTop: 20
            }}>
            <CheckBox
              isCheckRemember={isCheckRemember}
              onPress={handleCheckBox}
            />

            <TouchableOpacity
              onPress={() => {}}
              style={{
                flexDirection: 'row',
                alignItems: 'start',
                justifyContent: 'start',
              }}>
              <Text
                style={{
                  marginLeft: 10,
                  color: COLORS.primaryGreenHex,
                  fontFamily: FONTFAMILY.poppins_medium,
                  fontSize: FONTSIZE.size_14,
                }}>
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </View>
                
          <CustomButton label="Login" onPress={handleLogin} />
          <View style={{width: width - 40, alignItems: 'center'}}>
            <View
              style={{
                marginTop: 10,
                borderColor: COLORS.primaryGreenHex,
                borderWidth: 1,
                width: width - 40,
              }}></View>
            <Text
              style={{
                position: 'absolute',
                textAlign: 'center',
                backgroundColor: 'white',
                width: 50,
              }}>
              Hoặc
            </Text>
          </View>
          <View
            style={{
              width: 200,
              margin: 20,
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <TouchableOpacity>
              <Image
                style={{
                  width: 50,
                  height: 50,
                }}
                source={AppImages.facebook_icon}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={{
                  width: 50,
                  height: 50,
                }}
                source={AppImages.google_icon}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Text
              style={{
                fontFamily: FONTFAMILY.poppins_medium,
              }}>
              Bạn không có tài khoản?
            </Text>
            <TouchableOpacity onPress={() => {navigation.navigate('SignUpScreen')}}>
              <Text
                style={{
                  color: COLORS.primaryGreenHex,
                  fontFamily: FONTFAMILY.poppins_medium,
                  marginLeft: 5,
                }}>
                Tạo tài khoản
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    height: height,
  },
  childContainer: {
    paddingBottom: 200,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
