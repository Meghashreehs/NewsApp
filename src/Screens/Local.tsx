import React from 'react'
import { View } from 'react-native'
import Content from './Content'
import ContentTab from './ContentTab'
import MenuHeader from './MenuHeader'

const Local = () => {

    const LOCAL_CONSTANTS = {
        LOCAL: 'LOCAL',
        LOCAL_SMALL: 'Local',
    }

    return (
        <View>
            <MenuHeader home={false}/>
            <ContentTab pressed={LOCAL_CONSTANTS.LOCAL} />
            <Content tabName={LOCAL_CONSTANTS.LOCAL_SMALL} />
        </View>

    )
}

export default Local