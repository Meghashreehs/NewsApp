import { NavigationContainer, useNavigation } from '@react-navigation/native'
import React from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { COLORS } from '../Constants/colors'
import { FONTS } from '../Constants/font'
const { height: HEIGHT, width: WIDTH } = Dimensions.get('window')

interface Props {
    pressed: string
}

const ContentTab = (props: Props) => {
    const { pressed } = props
    const navigation = useNavigation()
    const LOCAL_CONSTANTS = {
        MOVIES: 'MOVIES',
        FASHION: 'FASHION',
        MODELS: 'MODELS',
        LOCAL: 'LOCAL'
    }

    const onMovies = () => {
        navigation.navigate('Home')
    }

    const onFashion = () => {
        navigation.navigate('Fashion')
    }

    const onModels = () => {
        navigation.navigate('Model')
    }

    const onLocal = () => {
        navigation.navigate('Local')
    }
    return (
        <View style={styles.container}>
            <View style={styles.tabContainer}>
                <TouchableOpacity style={{ width: (WIDTH / 4) - 20, marginHorizontal: 14, marginTop: 10 }} onPress={onMovies}>
                    <Text style={styles.textStyle}>{LOCAL_CONSTANTS.MOVIES}</Text>
                    <View style={pressed == LOCAL_CONSTANTS.MOVIES ? styles.underLine : {}} />
                </TouchableOpacity>
                <TouchableOpacity style={{ width: (WIDTH / 4) - 18, marginRight: 14, marginTop: 10 }} onPress={onFashion}>
                    <Text style={styles.textStyle}>{LOCAL_CONSTANTS.FASHION}</Text>
                    <View style={pressed == LOCAL_CONSTANTS.FASHION ? styles.underLine : {}} />
                </TouchableOpacity>
                <TouchableOpacity style={{ width: (WIDTH / 4) - 18, marginRight: 14, marginTop: 10 }} onPress={onModels}>
                    <Text style={styles.textStyle}>{LOCAL_CONSTANTS.MODELS}</Text>
                    <View style={pressed == LOCAL_CONSTANTS.MODELS ? styles.underLine : {}} />
                </TouchableOpacity>
                <TouchableOpacity style={{ width: (WIDTH / 4) - 18, marginRight: 14, marginTop: 10 }} onPress={onLocal}>
                    <Text style={styles.textStyle}>{LOCAL_CONSTANTS.LOCAL}</Text>
                    <View style={pressed == LOCAL_CONSTANTS.LOCAL ? styles.underLine : {}} />
                </TouchableOpacity>
            </View>
        </View>

    )
}

export default ContentTab

const styles = StyleSheet.create({

    container: {
        backgroundColor: COLORS.WHITE,
    },
    tabContainer: {
        flexDirection: 'row',
        paddingBottom: 0,
        lineHeight: 19,
        backgroundColor: COLORS.WHITE,
        borderBottomWidth: 0.5,
        borderBottomColor: COLORS.STEELBLUE,
        marginBottom: 2
    },
    underLine: {
        flex: 1,
        borderBottomWidth: 4,
        borderRadius: 1,
        borderColor: COLORS.STEELBLUE,
        opacity: 0.79,
    },
    textStyle: {
        color: COLORS.STEELBLUE,
        fontSize: FONTS.FONT_16,
        alignSelf: 'center'
    }

})
