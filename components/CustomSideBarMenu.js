import React,{Component} from 'react';
import {StyleSheet,View,Text,TouchableOpacity} from 'react-native';
import {DrawerItems} from 'react-navigation-drawer';
import firebase from 'firebase';

export default class CustomSideBarMenu extends Component{
    render(){
        return(
            <View style={{flex:1}}>
                <View style={styles.drawerItemsContainer}>
                    <DrawerItems{...this.props}/>
                </View>
                <View style={styles.logOutContainer}>
                    <TouchableOpacity 
                    style={styles.logOutButton}
                    onPress={()=>{
                        this.props.navigation.navigate('SignUpScreen')
                        firebase.auth().signOut()
                    }}
                    >
                        <Text style={styles.logOutText}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    drawerItemsContainer:{
        flex:0.8
    },
    logOutContainer:{
        flex:0.2,
        justifyContent:'flex-end',
        paddingBottom:30
    },
    logOutButton:{
        width:'100%',
        height:30,
        borderRadius:10,
        padding:10,
        justifyContent:'center'
    },
    logOutText:{
        fontWeight:'bold',
        fontSize:30,
    }
})