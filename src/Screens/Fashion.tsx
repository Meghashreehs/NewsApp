import React from 'react'
import { View } from 'react-native'
import Content from './Content'
import ContentTab from './ContentTab'
import MenuHeader from './MenuHeader'

const Fashion = () => {

    const LOCAL_CONSTANTS = {
        FASHION: 'FASHION',
        FASHION_SMALL: 'Fashion',
    }

    return (
        <View>
            <MenuHeader home={false}/>
            <ContentTab pressed={LOCAL_CONSTANTS.FASHION}/>
            <Content tabName={LOCAL_CONSTANTS.FASHION_SMALL}/>
        </View>

    )
}

export default Fashion