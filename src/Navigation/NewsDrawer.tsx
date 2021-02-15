import {
    createDrawerNavigator,
    DrawerNavigationProp
} from '@react-navigation/drawer'
import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Dimensions, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { COLORS } from '../Constants/colors'
import { getDateDMY } from '../Constants/date'
import { FONTS } from '../Constants/font'
import Home from '../Screens/Home'
import Weather from '../Assets/Weather.png'
const { height: HEIGHT, width: WIDTH } = Dimensions.get('window')

export type CartDrwerParamList = {
    default: undefined
    CartStack: undefined
}

type NavigationProps<
    T extends keyof CartDrwerParamList = 'default'
    > = DrawerNavigationProp<CartDrwerParamList, T>

function DrawerContent(props: any) {
    const { navigation } = props
    const [isDrawerOpen, setDrawerOpen] = useState(true)
    const [location, setLocation] = useState({})
    const [current, setCurrent] = useState({})

    useEffect(() => {
        Axios.get('http://api.weatherstack.com/current?access_key=ee0b2834a5b698bee9d443afc257aebf&query=Bangalore')
            .then(response => {
                //console.log('weather response'+JSON.stringify(response.data));
                setLocation(response.data.location)
                setCurrent(response.data.current)
            }).catch(error => {
                console.log('weather error' + JSON.stringify(error));
            });
    }, [])

    return (
        <>
            <View style={[styles.container, isDrawerOpen ? styles.shadow : null]}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 8 }}>
                    <TouchableOpacity style={[styles.topButtonLeft, styles.topButton]}>
                        <Text style={[styles.textStyle, { color: COLORS.WHITE }]}>News</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.topButtonRight, styles.topButton]}>
                        <Text style={styles.textStyle}>Sports</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.menuContent}>
                    <View style={styles.weatherWindow}>
                        <ImageBackground source={Weather} style={styles.weatherImg}>
                        <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: 14 }}>
                            <Text style={{ fontSize: FONTS.FONT_22, color: COLORS.WHITE, marginVertical: 4 }}>{location.name}</Text>
                            <Text style={{ fontSize: FONTS.FONT_16, color: COLORS.WHITE }}>{current.weather_descriptions}</Text>
                            <Text style={{ fontSize: FONTS.FONT_35, color: COLORS.WHITE }}>{current.temperature}ᵒ</Text>
                        </View>
                        <View style={styles.dateView}>
                            <Text style={{ fontSize: FONTS.FONT_16, color: COLORS.WHITE, marginTop: 4 }}>{getDateDMY()}</Text>
                            <View>
                                <Text style={{ fontSize: FONTS.FONT_16, color: COLORS.WHITE, marginTop: 4 }}>Max : {current.temperature + 1}</Text>
                                <Text style={{ fontSize: FONTS.FONT_16, color: COLORS.WHITE, marginTop: 4 }}>Min : {current.temperature - 1}</Text>
                            </View>
                        </View>
                        </ImageBackground>
                    </View>
                </View>
                <View style={styles.menuView}>
                    <TouchableOpacity style={styles.menuButtons}>
                        <Text style={{ color: COLORS.STEELBLUE }}>Home</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.menuView, { marginTop: 2 }]}>
                    <TouchableOpacity style={styles.menuButtons}>
                        <Text style={{ color: COLORS.STEELBLUE }}>Edit Profile</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.menuView, { marginTop: 2 }]}>
                    <TouchableOpacity style={styles.menuButtons}>
                        <Text style={{ color: COLORS.STEELBLUE }}>Logout</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </>
    )
}

const Drawer = createDrawerNavigator()

const NewsDrawer = () => {
    return (
        <Drawer.Navigator
            drawerStyle={{ width: '77%', backgroundColor: 'transparent' }}
            drawerContent={(props) => <DrawerContent {...props} />}
            screenOptions={{ gestureEnabled: true }}
            overlayColor='rgba(0,0,0,0.6)'
        >
            <Drawer.Screen name={'Home'} component={Home} />
        </Drawer.Navigator>
    )
}

export default NewsDrawer

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.WHITE,
        flex: 1,
        width: '98%',

    },
    shadow: {
        shadowOpacity: 0.8,
        shadowRadius: 8.0,
        shadowOffset: {
            width: 0,
            height: 2,
        },
    },
    menuContent: {
        paddingHorizontal: 3,
        marginBottom: 8,
        marginTop: 15
    },
    closeIconStyle: {
        position: 'absolute',
        right: 10,
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    topButton: {
        borderWidth: 1,
        borderColor: COLORS.STEELBLUE,
        height: 32,
        alignItems: 'center',
        justifyContent: 'center',
    },
    topButtonLeft: {
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        backgroundColor: COLORS.STEELBLUE
    },
    topButtonRight: {
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5
    },
    textStyle: {
        color: COLORS.STEELBLUE,
        marginHorizontal: 14
    },
    weatherWindow: {
        height: HEIGHT * 0.28,
        backgroundColor: COLORS.STEELBLUE,
        borderRadius: 5,
        flexDirection: 'column',
    },
    menuButtons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
    },
    menuView: {
        borderWidth: 0.8,
        borderBottomColor: COLORS.GRAY,
        borderColor: COLORS.WHITE
    },
    dateView: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        marginLeft: 14,
        marginRight: 28,
        marginTop: 10
    },
    weatherImg: {
        height: HEIGHT * 0.28
      },
})