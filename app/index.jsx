
import { View, Text, Button} from "react-native-web";
import { StyleSheet,TextInput } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Input } from 'react-native-elements';
import { Pressable } from "react-native";
import Home from "./MenuPrincipal";
import { Link,router } from "expo-router";
import styles from "./Design/Estilos";
import Stack from "./Export/stack";

//pagina de login
//precisa validar a senha e deixar como tipo "password"


export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: 'index.jsx',


  
};



function Login(){
  function navegar(){
    router.replace("/MenuPrincipal")

  }



  return(

  
<View style={styles.NavigationContainer}>
  <View style={styles.InputArea}>
   


  <TextInput
    style={styles.Input2}
    placeholder="insira o nome do usuario"
    placeholderTextColor="grey"
    />

    <TextInput
    secureTextEntry={true}
    style={styles.Input2}
    placeholder="insira a sua senha"
    placeholderTextColor="grey"
    /> 
    <Button color="crimson"
    style={styles.botao}
    title="Entrar"
    onPress={navegar}
    />
    </View>
   
</View>

  ) 
}



function App_Login(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen name="Login" component={Login}/>
        
       
      </Stack.Navigator>
    </NavigationContainer>
  )
}







export default App_Login
