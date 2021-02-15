import React from 'react'
import { Dimensions, Image, StyleSheet, Text, TextBase, TouchableOpacity, View } from 'react-native'
import { COLORS } from '../Constants/colors'
import BackArrow from '../Assets/BackArrow.svg'
import { useNavigation } from '@react-navigation/native'
import Star from '../Assets/Star.png'
import Message from '../Assets/Message.png'
import Send from '../Assets/Send.png'
import Settings from '../Assets/Settings.png'
import { FONTS } from '../Constants/font'
import { getDMY, getTime12Hrs } from '../Constants/date'
const { height: HEIGHT, width: WIDTH } = Dimensions.get('window')

interface Props {
    route: any
}
const Detail = (props: Props) => {
    const { newsItem } = props.route.params
    const navigation = useNavigation()

    const onPress = () => {
        navigation.goBack()
    }

    return (
        <View style={{ flexDirection: 'column', backgroundColor: COLORS.WHITE }}>
            <View style={{ backgroundColor: COLORS.LIGHT_GRAY, height: 48, flexDirection: 'row' }}>
                <TouchableOpacity style={styles.header} onPress={onPress}>
                    <BackArrow style={{ marginLeft: 8 }} />
                    <Text style={{ marginHorizontal: 8, color: COLORS.STEELBLUE }}>Back</Text>
                </TouchableOpacity>
                <View style={{ marginTop: 4, marginHorizontal: 10 }}>
                    <Image source={Star} style={{ height: 35, width: 35 }} />
                </View>
                <View style={{ marginTop: 4, marginHorizontal: 10 }}>
                    <Image source={Message} style={{ height: 35, width: 25 }} />
                </View>
                <View style={{ marginTop: 4, marginHorizontal: 10 }}>
                    <Image source={Send} style={{ height: 35, width: 30 }} />
                </View>
                <View style={{ marginTop: 4, marginHorizontal: 10 }}>
                    <Image source={Settings} style={{ height: 40, width: 30 }} />
                </View>
            </View>
            <View style={{ backgroundColor: COLORS.GRAY,marginBottom:18 }}>
                <Image style={styles.image} source={{ uri: newsItem.urlToImage }} />
            </View>
            <View style={{ backgroundColor: COLORS.WHITE }}>
                <Text style={styles.textStyle}>{newsItem.description}</Text>
                <View style={styles.line} />
                <View style={{ flexDirection: 'row',marginVertical:8,alignItems:'center',marginHorizontal:16 }}>
                    <Text style={{fontSize:FONTS.FONT_12,color:COLORS.GRAY3}}>{getDMY()},  {getTime12Hrs()}</Text>
                    <Text style={{fontSize:FONTS.FONT_22,marginHorizontal:10,color:COLORS.GRAY3}}>|</Text>
                    <Text style={{fontSize:FONTS.FONT_12,color:COLORS.GRAY3}}>{newsItem.author}</Text>
                    <View style={styles.waterMark}>
                        <Text style={{fontSize:FONTS.FONT_14,color:COLORS.GRAY3}}>NEWS</Text>
                    </View>
                </View>
                <View style={[styles.line, { borderColor: COLORS.DARK_GRAY }]} />
                <Text style={{ marginHorizontal: 14, fontSize: FONTS.FONT_16 }}>{newsItem.content}</Text>
            </View>
        </View>
    )
}

export default Detail

const styles = StyleSheet.create({
    image: {
        height: HEIGHT * 0.39,
        width: WIDTH,
        borderWidth: 1.3
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 140
    },
    line: {
        borderWidth: 1,
        borderRadius: 1,
        borderColor: COLORS.GRAY2,
    },
    textStyle: {
        marginHorizontal: 28,
        fontSize: FONTS.FONT_25,
        fontWeight: 'bold',
        lineHeight: 35,
        marginBottom:18
    },
    waterMark:{
        borderWidth:1,
        borderColor:COLORS.GRAY3,
        width:50,
        height:22,
        marginLeft:10,
        alignItems:'center'
    }
})