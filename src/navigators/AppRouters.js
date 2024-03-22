import { useAsyncStorage, } from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../store/userSlice';
import MainNavigator from './MainNavigator';
import { SplashScreen } from '../screens';
import AuthNavigator from './AuthNavigator';

const AppRouters = () => {
  const [isShowSplash, setIsShowSplash] = useState(true);

  const {getItem} = useAsyncStorage('auth');
  const dispatch = useDispatch(); // của thèn react-redux
  const user = useSelector((state) => state.auth.user);
  console.log(user)
  useEffect(() => {
    checkLogin();
    const timeout = setTimeout(() => {
      setIsShowSplash(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  const checkLogin = async () => {
    const res = await getItem();

    res && dispatch(setUser(JSON.parse(res)));
  };
 
  return (
    <>
      {isShowSplash ? (
        <SplashScreen />
      ) :  user ? (
        <MainNavigator />
      ) : (
        <AuthNavigator />
      )}
    </>
  );
}

export default AppRouters