import React, {useState} from 'react'
import { Text, View, StyleSheet, Button, TouchableOpacity, TextInput } from 'react-native'
import Checkbox from 'expo-checkbox'
const Password = () => {

  const [isLower, setIsLower] = useState(false)
  const [isUpper, setIsUpper] = useState(false) 
  const [isNumber, setIsNumber] = useState(false) 
  const [isSpecial, setIsSpecial] = useState(false)
  const [passwordLength, setPasswordLength] = useState('') 
  const [generatedPassword, setGeneratedPassword] = useState('');
    
  const pressHandler = () => {
    const pwLength = parseInt(passwordLength)  
    let character = ''
    let password = ''
    if(isLower) character += 'abcdefghijklmnopqrstuvwxyz'
    if(isUpper) character += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if(isNumber) character += '0123456789'
    if(isSpecial) character += '!@#$%^&*()_+~`|}{[]:;?><,./-='
    for(let index = 0; index < pwLength; index++){
        password += character.charAt(Math.floor(Math.random() * character.length));
    }
    console.log(password);
    
    setGeneratedPassword(password)
  }

  return (
    <View style={styles.container}>
        <Text style={styles.heading}>PASSWORD GENERATOR</Text>
        <TextInput style={{backgroundColor: '#151537', width: 300, marginVertical: 30, color:'#fff'}}
            value={generatedPassword}
            editable={false}
        />
        <View style={styles.conditionContainer}>
            <View style={styles.conditon}>
                <Text style={styles.text}>Password length</Text>
                <TextInput style={{backgroundColor: '#fff', width: 100}}
                    value={passwordLength} onChangeText={setPasswordLength}
                />
            </View>
            <View style={styles.conditon}>
                <Text style={styles.text}>Include lower case letters</Text>
                <Checkbox value={isLower} onValueChange={setIsLower}/>
            </View>
            <View style={styles.conditon}>
                <Text style={styles.text}>Include upcase letters</Text>
                <Checkbox value={isUpper} onValueChange={setIsUpper}/>
            </View>
            <View style={styles.conditon}>
            <   Text style={styles.text}>Include number</Text>
                <Checkbox value={isNumber} onValueChange={setIsNumber}/>
            </View>
            <View style={styles.conditon}>
                <Text style={styles.text}>Include special symbol</Text>
                <Checkbox value={isSpecial} onValueChange={setIsSpecial}/>
            </View>
        </View>
        <View style={{marginTop: 20}}>
            <Button title='GENERATE PASSWORD' color='#3B3B98' onPress={pressHandler}/>
        </View>
    </View>
  )
}

export default Password

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#23235B',
        padding: 20, 
        flex: 1
    },
    heading: {
        fontSize: 25,
        fontWeight: '700',
        lineHeight: 29,
        textAlign: 'center',
        color: '#fff',
        marginBottom: 60
    },
    conditionContainer:{
        
    },
    conditon:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    text:{
        fontSize: 20,
        fontWeight: '700',
        lineHeight: 23,
        color: '#fff',
        paddingRight: 40
    },

})