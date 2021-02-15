import { NavigationContainer, useNavigation } from '@react-navigation/native'
import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { COLORS } from '../Constants/colors'
import { getDate } from '../Constants/date'
import { FONTS } from '../Constants/font'
import NewsContainer from './NewsContainer'

const { height: HEIGHT, width: WIDTH } = Dimensions.get('window')

interface Props {
    tabName: string,
    searchKey:string
}

const Content = (props: Props) => {

    const { tabName,searchKey } = props
    const [data, setData] = useState({})
    const [news, setNews] = useState(new Array<any>())

    const navigation = useNavigation()

    useEffect(() => {
        Axios.get(`http://newsapi.org/v2/everything?q=${searchKey}&language=en&from=${getDate()}&sortBy=publishedAt&apiKey=c87304873649477d988b16d889d8ee94`)
            .then(res => {
                console.log('data from get service call:' + JSON.stringify(res.data))
                setData(res.data)
                setNews(res.data.articles)
            })
            .catch(error => {
                console.log('Error in service call:' + JSON.stringify(error))
            })
    }, [searchKey])

    const onNewsPress = ( item : any) => {
        navigation.navigate('Detail', { newsItem: item })
    }

    const newsList = ({ item }: any) => {
        return (
            <NewsContainer onNewsClick={() => onNewsPress(item)}>
                <View style={styles.container}>
                    <View style={{ backgroundColor: COLORS.GRAY }}>
                        <Image style={styles.image} source={{ uri: item.urlToImage }} />
                    </View>
                    <View>
                        <Text style={styles.title} numberOfLines={3}>{item.title}</Text>
                        <Text style={{ marginLeft: 3, marginTop: 10, marginBottom: 4, color: COLORS.STEELBLUE }}>1 photo  |  {tabName}</Text>
                    </View>
                </View>
            </NewsContainer>
        )
    }


    return (
        <View>
            <FlatList
                data={news}
                renderItem={newsList}
                numColumns={2}
            />
        </View>
    )
}

export default Content

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.LIGHT_GRAY,
        flexDirection: 'column'
    },
    image: {
        height: HEIGHT * 0.18,
        width: WIDTH * 0.472,
        borderWidth: 1.3
    },
    title: {
        fontSize: FONTS.FONT_16,
        marginHorizontal: 8,
        color: COLORS.STEELBLUE
    }
})