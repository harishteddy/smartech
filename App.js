import React,{useEffect,useState} from 'react';
import Smartech from 'smartech-reactnative-module';
import SmartechSDK from 'smartech-reactnative-module';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AuthStack from './src/navigation/AuthStack';
import AppStack from './src/navigation/AppStack';

function App() {

  // console.log("Smmartktemvikjbiondfpibn",SmartechSDK)
// const [data,setdata]=useState("")
// console.log('Netcore  Data Response ', data);
// var netocredata="";
//    useEffect(() => {
    
//     Smartech.addListener(Smartech.SmartechDeeplinkNotification, handleDeeplinkWithPayload);
//     Smartech.getDeepLinkUrl(function (_response) {
       
//       console.log('getDeepLinkUrl Initial Deeplink Response ', _response);
//       setdata(_response)
//       console.log('Netcore  Deeplink Response ', netocredata);
//       // Handling the SDK Deeplink Callback.
//     });

//     const handleDeeplinkWithPayload = (deeplinkdata) => {
//     };
//   },[data])


Smartech.addListener(Smartech.SmartechDeeplinkNotification, handleDeeplinkWithPayload);
     Smartech.getDeepLinkUrl(function (_response) {
       
       console.log('getDeepLinkUrl Initial Deeplink Response ', _response);
      
             
    });

     const handleDeeplinkWithPayload = (deeplinkdata) => {
     };

  return (
    <NavigationContainer>
      {/* <AppStack /> */}
      <AuthStack />
    </NavigationContainer>
  );
}

export default App;
