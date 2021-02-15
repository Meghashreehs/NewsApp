import React from 'react'
import { StyleSheet, View, TouchableOpacity, TouchableHighlight } from 'react-native'
import { COLORS } from '../Constants/colors'
import { FONTS } from '../Constants/font'

interface Props {
    children: JSX.Element[] | JSX.Element,
    isSelected?: Boolean,
    customStyles?: any,
    containerStyles?: any,
    onNewsClick?:any
}

const BASE_TOP_MARGIN = 5
const BASE_LEFT_RIGHT_MARGIN = 5
const BASE_BOTTOM_MARGIN = 2

const NewsContainer = (props: Props): React.ReactElement => {
    const { children, isSelected, customStyles, containerStyles, onNewsClick } = props

    return (
        <View style={[styles.baseContainer, containerStyles]}>
            <View style={[styles.cardContainer, isSelected ? styles.selected : styles.unselected, customStyles]}>
                <TouchableHighlight style={styles.container} onPress={onNewsClick}
                underlayColor={COLORS.LIGHT_GRAY}>
                    {children}
                </TouchableHighlight>
            </View>
        </View>
    )
}

export default NewsContainer

const styles = StyleSheet.create({
    baseContainer: {
        marginTop: BASE_TOP_MARGIN,
        marginLeft: BASE_LEFT_RIGHT_MARGIN,
        marginRight: BASE_LEFT_RIGHT_MARGIN,
        marginBottom: BASE_BOTTOM_MARGIN,
        flex: 1
    },
    cardContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: COLORS.LIGHT_GRAY,
        borderColor: COLORS.GRAY,
        borderWidth: 1,
        borderRadius:4,
        shadowColor: COLORS.BLACK,
        justifyContent: 'space-between',
    },
    container: {
        flex: 10,
    },
    selected: {
        shadowOpacity: 0.4,
        shadowRadius: 4.0,
        shadowOffset: {
            width: 0,
            height: 2,
        },
    },
    unselected: {
        shadowOpacity: 0.3,
        shadowRadius: 1.0,
        shadowOffset: {
            width: 0,
            height: 0,
        },
    },
    text: {
        fontSize: FONTS.FONT_10,
        color: COLORS.GRAY,
        marginTop:2
    }
})