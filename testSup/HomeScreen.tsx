import React from "react";
import {View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity} from 'react-native'
import {StatusBar} from 'expo-status-bar'
import {Tabs} from 'expo-router'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from "react-native-gesture-handler";
import { widthPercentageToDP as wp , heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import { RootStackParamList } from "./type"


type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;


export default function HomeScreen() {
    const navigation = useNavigation<HomeScreenNavigationProp>();
    return(
        <View style={{backgroundColor:'#349EFA', flex:1}}>
            
           <ImageBackground
           source={require('./assets/Vector (14).png')}
           style={{marginTop:103, height:'89.9%', marginRight:2}}
           >
           
               
                {/* avatar and bell icon*/}
                <View style={styles.logo}>
                    <Image 
                    source = {{uri:'https://imagizer.imageshack.com/img923/4132/G0PpQl.png'}}
                    style = {styles.profile}
                    />
                    <Icon name="settings" size={40} color="white" style={styles.Icon}/>

                </View>
                {/* greetings and punchline*/}
               <View >
                <Image
                source={require('./assets/fondHome.png')}
                style={styles.fond}
                />
                </View>
                <View >
                <Image
                source={require('./assets/photoDocteur.png')}
                style={styles.docteur}
                />
                <Text style={styles.meet}>Prendre rendez-vous  </Text>
                <Text style={styles.arrow}>  ⭢ </Text>
                </View>
                <View style={{marginTop:35}}>
                <Text style={styles.Categories}>Catégories</Text>
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-between', padding:10, marginTop:20}}>
                    
                    <TouchableOpacity
                    onPress={()=>navigation.navigate('HomeTest')}
                    >
                    <Image
                    source={require('./assets/foie 1.png')}
                    style={{marginLeft:5}}
                    />
                     <Text style={styles.urgence}>Médecine</Text>
                     <Text style={styles.urgence}>générale</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={()=>navigation.navigate('HomeTest')}
                    >
                    <Image
                    source={require('./assets/urgences.png')}
                    style={{marginLeft:10}}
                    />
                    <Text style={styles.urgence}>Service des</Text>
                    <Text style={styles.urgence}>Urgences</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={()=>navigation.navigate('HomeTest')}
                    >
                    <Image
                    source={require('./assets/jambes 1.png')}
                    />
                    <Text style={styles.pediatrie}>Pédiatrie</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={()=>navigation.navigate('HomeTest')}
                    >
                    <Image
                    source={require('./assets/svg 1.png')}
                    />
                    <Text style={styles.geriatrie}>Gériatrie</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={()=>navigation.navigate('HomeTest')}
                    >
                    <Image
                    source={require('./assets/gynecologue.png')}
                    style={styles.pediatrie2}
                    />
                    <Text style={styles.pediatrie}>Gynécolgie</Text>
                    </TouchableOpacity>
                    
                    
                </View>

                <View style={{flexDirection:'row', marginTop:1, padding:10 }}>
                    <ScrollView
                    horizontal={true}
                    >
                        <Image 
                        style={{marginLeft:1}}
                        source={require('./assets/image.png')}
                        />
                        <Image
                        style={{marginLeft:15}}
                        source={require('./assets/image (2).png')}
                        />
                        <Image
                        style={{marginLeft:15}}
                        source={require('./assets/image (4).png')}
                        />
                        </ScrollView>

                </View>

                <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:50, marginLeft:10}}>
                <TouchableOpacity
                    onPress={()=>navigation.navigate('HomeTest')}
                    >
                    <Image
                    source={require('./assets/vector (3) (1).png')}
                    style={{marginLeft:48}}
                    />
                </TouchableOpacity> 
                <TouchableOpacity
                    onPress={()=>navigation.navigate('HomeTest')}
                    >
                    <Image
                    source={require('./assets/vector (2) (1).png')}
                    style={{marginLeft:15}}
                    />
                </TouchableOpacity> 
                <TouchableOpacity
                    onPress={()=>navigation.navigate('HomeTest')}
                    >
                    <Image
                    source={require('./assets/vector (11).png')}
                    style={{marginLeft:5}}
                    />
                </TouchableOpacity> 
                <TouchableOpacity
                    onPress={()=>navigation.navigate('HomeTest')}
                    >
                    <Image
                    source={require('./assets/user.png')}
                    style={{marginRight:55}}
                    />
                </TouchableOpacity> 

                </View>
                
                </ImageBackground>
                
         </View>
           
    )
}

const styles = StyleSheet.create({
    logo:{
        marginTop:-50
    },
    White:{
        marginTop:600,
        height:10
    },
    fondImage:{
            
            height:"570%",
            width:"100%"
    },
    backgroundImage: {
        flex: 1,
        width: "100%",
        height: "85%",
        marginTop: "19%",
      },
    geriatrie:{
        marginTop:5,
        fontSize:12,
        fontWeight:'bold',
        textAlign:'center'
    },
    pediatrie2:{
        marginTop:8,
        height:53,
        width:53
        
    },
    pediatrie:{
        marginTop:5,
        fontSize:12,
        fontWeight:'bold',
        textAlign:'center'
    },
    urgence:{
        fontSize:12,
        fontWeight:'bold',
        textAlign:'center'
    },
    Categories:{
        fontWeight:'bold',
        marginLeft:15,
        fontSize:20
    },
    fond:{
        marginTop:100,
        marginLeft:30
    },
    profile:{
        height: hp(5),
        width: hp(5.5),
        marginLeft:18
    },
    arrow:{
        fontWeight:'bold',
        fontSize:30,
        color:"#ffff",
        marginTop:-29,
        marginLeft:221,
    },
    
    docteur:{
        marginTop:-129,
        marginLeft:251
    },
    meet:{
        fontWeight:'bold',
        fontSize:17,
        color:"#ffff",
        marginTop:-53,
        marginLeft:40,
        textShadowColor:'black',
        textShadowOffset: { width: 3, height: 3 }, 
        textShadowRadius:2,

    },
    
    clock:{
        marginLeft:350,
        marginTop:-40
    },
    Text:{
        marginTop:40,
    },
    Icon:{
        marginLeft:350,
        marginTop:-48
    }
})