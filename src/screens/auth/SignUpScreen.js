import React, {useEffect, useState} from 'react';
import {
  View,
  KeyboardAvoidingView,
  Alert,
  Image,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import CustomButton from '../../components/CustomButton';

import { COLORS, FONTFAMILY, FONTSIZE } from '../../assets'; 
import InputField from '../../components/InputField';

import { AppImages } from '../../assets';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const SignUpScreen = ({ navigation}) => {
  const [fullname, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [fullnameError, setFullnameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // const setDataCoffeeList = (arrCoffee) => dispatch(setCoffeeList(arrCoffee));
  // const setDataBeanList = (arrBean) => dispatch(setBeanList(arrBean));
  // const setUsers = (users) => dispatch(setUsers(users));
  // const users = useSelector((state) => state.Products.Users);
  // console.log(users);

  //   const getInfor = async () => {
  //     try {
  //       const account = await AsyncStorage.getItem("account");
  //       const isRemember = await AsyncStorage.getItem("isRemember");

  //       console.log(account);
  //       if (isRemember !== null) {
  //         const parsedAccount = JSON.parse(account);
  //         setUsername(parsedAccount.username);
  //         setPassword(parsedAccount.password);
  //         setisCheckRemember(true);
  //       } else {
  //         console.log('Không có dữ liệu');
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   useEffect(() => {
  //     getInfor();
  //   }, [isCheckRemember]);

  //   const handleLogin = async () => {
  //     const validateUsername = Validator.username(username,setUsernameError);
  //     const validatePassword= Validator.password(password,setPasswordError);
  //     if(!validateUsername && !validatePassword){
  //       const user = await login(username, password);
  //       console.log('USER line 60',user.users);
  //       if(user.users && user.users.length > 0) {
  //         const firstUser = user.users[0];
  //         console.log('FIRST USER',firstUser);
  //         try {
  //           const accountData = JSON.stringify({
  //             id: firstUser.idKhachHang,
  //             username: firstUser.username,
  //             password: firstUser.password
  //           });
  //           console.log('accountData', accountData);
  //           AsyncStorage.setItem("account", accountData);
  //           if(isCheckRemember) {
  //             AsyncStorage.setItem("isRemember", JSON.stringify({isRemember: true}));
  //           } else {
  //             AsyncStorage.removeItem("isRemember");
  //           }
  //           onLogin(firstUser); // Truyền người dùng đầu tiên vào hàm onLogin

  //         } catch (error) {
  //           console.log(error);
  //         }
  //       }
  //     }
  // }

  return (
    <ScrollView>
<KeyboardAvoidingView>
      <StatusBar hidden />
    
      <View style={styles.container}>
      <Image
        style={{
          width: '100%',
          height: 400,
          objectFit: 'cover',
          position: 'absolute',
          top: width - 600
        }}
        source={AppImages.background_plant}
      />
      <View 
      style={{
        padding: 20,
        alignItems: 'center'
      }}
      >
      <Text
          style={{
            color: COLORS.primaryGreenHex,
            fontSize: FONTSIZE.size_28,
            fontFamily: FONTFAMILY.poppins_bold,
            position: 'absolute',
            width: '100%'
          }}>
          Đăng Ký
        </Text>
        <View
        style={{
            paddingTop: 30
        }}
        >
        <InputField
          placeholder="Full name"
          onChangeText={setFullName}
          message={fullnameError}
        />
        <InputField 
        placeholder="Email" 
        onChangeText={setEmail} 
        message={emailError} />
        <InputField 
        placeholder="Phone" 
        onChangeText={setPhone}
         message={phoneError} 
         />
        <InputField
          inputType={'password'}
          placeholder="Password"
          password={true}
          onChangeText={setPassword}
          message={passwordError}
        />

        </View>
        <Text style= {{
            marginTop: 10,
            textAlign:'center',
            fontFamily: FONTFAMILY.poppins_medium
        }}>Để đăng ký tài khoản, bạn đồng ý 
          <Text style={{
            textDecorationLine: 'underline',
            color: COLORS.primaryGreenHex,
            fontFamily: FONTFAMILY.poppins_bold,
          }}>
         {` `} Terms &  Conditions {'\n'}
            </Text>  and 
            <Text style={{
                color: COLORS.primaryGreenHex,
            textDecorationLine: 'underline',
            fontFamily: FONTFAMILY.poppins_bold,

          }}>
         {` `} Privacy Policy 
            </Text>
        </Text>
        <CustomButton label="SignUp" onPress={() => {}} />
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
            Bạn đã có tài khoản?
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                color: COLORS.primaryGreenHex,
                fontFamily: FONTFAMILY.poppins_medium,
                marginLeft: 5,
              }}>
              Đăng nhập
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      </View>
    </KeyboardAvoidingView>
    </ScrollView>
    
  );
};
export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    height: height,
    paddingTop: width -200
  },
});
