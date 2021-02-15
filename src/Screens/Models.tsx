import React from 'react'
import { View } from 'react-native'
import Content from './Content'
import ContentTab from './ContentTab'
import MenuHeader from './MenuHeader'

const Models = () => {

    const LOCAL_CONSTANTS = {
        MODELS: 'MODELS',
        MODELS_SMALL: 'Models',
    }

    return (
        <View>
            <MenuHeader home={false}/>
            <ContentTab pressed={LOCAL_CONSTANTS.MODELS} />
            <Content tabName={LOCAL_CONSTANTS.MODELS_SMALL} />
        </View>

    )
}

export default Models