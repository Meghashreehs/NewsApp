import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { getDate } from '../Constants/date'
import Content from './Content'
import ContentTab from './ContentTab'
import MenuHeader from './MenuHeader'

const Home = () => {

    const LOCAL_CONSTANTS = {
        MOVIES: 'MOVIES',
        MOVIES_SMALL: 'Movies',
    }
    const [searchText, setText] = useState('tesla')

    const onSearch = (text: string) => {
        setText(text)
    }

    return (
        <View>
            <MenuHeader home={true} onSubmit={onSearch} />
            <ContentTab pressed={LOCAL_CONSTANTS.MOVIES} />
            <Content tabName={LOCAL_CONSTANTS.MOVIES_SMALL} searchKey={searchText} />
        </View>

    )
}

export default Home