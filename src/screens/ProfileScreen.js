import React from 'react'
import { View, Text , SafeAreaView, TouchableOpacity, StyleSheet, ToastAndroid} from 'react-native'
import Smartech from 'smartech-reactnative-module';
import SmartechSDK from 'smartech-reactnative-module';

const ProfileScreen = () => {

   

console.log("Smmartktemvikjbiondfpibn",SmartechSDK)

 
  
    const payloadata = {
      // NAME: "abhi",
            EMAILID: "abc@xyz.com",
            // AGE: "30",
            // MOBILE: "4545748"
    };
   
    // Sample code for reference purpose only
  const payloadata2 = {
    name: "Galaxy1",
    description: "20gram bars",
    payload_id: "1",
    event_id:21
  };
  SmartechSDK.trackEvent("Harish", payloadata2);
  
    const setUser = () => {
    Smartech.setUserIdentity('1234@gmail.com');
    //Hansel.getUser().setUserId("123456@gmail.com");
    console.log("setting Identity");
    ToastAndroid.show(`"User Identity Is Set successfully"`, ToastAndroid.LONG);
    }
  
    const getUser = () => {
    
        Smartech.getUserIdentity()
        
         if( typeof (Smartech.getUserIdentity()) ===  "undefined") {
           ToastAndroid.show(`"User Identity Is--> if",${Smartech.getUserIdentity()}`, ToastAndroid.LONG);
         }else{
            ToastAndroid.show(`"User Identity Is--> else",${Smartech.getUserIdentity()}`, ToastAndroid.LONG);
           }
          
        console.log(Smartech.getUserIdentity());
      
     
    }
  
    const logout = () => {

      ToastAndroid.show(`"Logout"`, ToastAndroid.LONG);
      
      console.log("logutett");
     
      
    }
  
    const clerUser = () => {
      //navigation.navigate('Login')
      Smartech.clearUserIdentity()
      ToastAndroid.show(`"User Identity Is Clear"`, ToastAndroid.LONG);
      console.log(Smartech.clearUserIdentity());
   }
  
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, padding: 16, alignContent: 'center'}}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 20,
                textAlign: 'center',
                marginBottom: 16,
              }}>
              Example of  React Native
              {'\n\n'}
              This is the Home Screen
            </Text>
  
            <TouchableOpacity
                style={styles.buttonStyle}
                activeOpacity={0.5}
                onPress={() => {
                  console.log('pressed')
                  SmartechSDK.updateUserProfile(payloadata)
                  
                 SmartechSDK.trackEvent("Page Browse", payloadata2);
                 //For string attribute
               
                  console.log("payloads");
                  
              }}
                >
                <Text style={styles.buttonTextStyle}>PAYLOAD</Text>
              </TouchableOpacity>
  
             
  
              <TouchableOpacity
                style={styles.buttonStyle}
                activeOpacity={0.5}
                onPress={() => {getUser()}}
                >
                <Text style={styles.buttonTextStyle}>GET USER IDENTITY</Text>
              </TouchableOpacity>
  
  
  
              <TouchableOpacity
                style={styles.buttonStyle}
                activeOpacity={0.5}
                onPress={() => {setUser()}}
                >
                <Text style={styles.buttonTextStyle}>SET USER IDENTITY</Text>
              </TouchableOpacity>
  
               <TouchableOpacity
                style={styles.buttonStyle}
                activeOpacity={0.5}
                onPress={() => {clerUser(), logout()}} >
                <Text style={styles.buttonTextStyle}>LOGOUT</Text>
               </TouchableOpacity>
  
  
              
            </View>
            </View>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  buttonStyle: {
      backgroundColor: '#7DE24E',
      borderWidth: 0,
      color: '#FFFFFF',
      borderColor: '#7DE24E',
      height: 40,
      width: 200,
      alignItems: 'center',
      alignSelf: 'center',
      borderRadius: 30,
      marginLeft: 35,
      marginRight: 35,
      marginTop: 20,
      marginBottom: 25,
    },
    buttonTextStyle: {
      color: '#FFFFFF',
      paddingVertical: 10,
      fontSize: 16,
    }
})

export default ProfileScreen
