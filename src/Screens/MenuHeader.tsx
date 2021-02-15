import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Dimensions, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import HamburgerMenuIcon from '../Assets/HamburgerMenuIcon.svg'
import Loupe from '../Assets/loupe.svg'
import { COLORS } from '../Constants/colors'
import { FONTS } from '../Constants/font'

const { height: HEIGHT, width: WIDTH } = Dimensions.get('window')

interface Props {
    home: boolean,
    onSubmit?: any
}
const MenuHeader = (props: Props) => {
    const { home, onSubmit } = props
    const navigation = useNavigation()
    const [search, setSearch] = useState('')

    const onSearch = () => {
        onSubmit(search)
    }

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <TouchableOpacity style={{ margin: 14, marginTop: 18, marginLeft: 10 }} onPress={() => navigation.toggleDrawer()} disabled={!home}>
                    <HamburgerMenuIcon width="18" height="16" />
                </TouchableOpacity>
                <View style={styles.searchView}>
                    <TextInput
                        onChangeText={text => setSearch(text)}
                        onSubmitEditing={onSearch}
                        style={styles.searchInput}
                        placeholder={'Search'}
                        value={search}
                        editable={home}
                    />
                    <TouchableOpacity style={{ margin: 14 }}>
                        <Loupe width="16" height="16" />
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}
export default MenuHeader

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.WHITE
    },
    searchView: {
        marginTop: 8,
        backgroundColor: COLORS.LIGHTER_GRAY,
        borderColor: COLORS.LIGHT_GRAY,
        borderWidth: 1,
        borderRadius: 5,
        width: WIDTH * 0.86,
        height: HEIGHT * 0.054,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    searchInput: {
        flex: 2,
        marginLeft: WIDTH * 0.01,
        color: COLORS.BLACK,
        fontSize: FONTS.FONT_11,
        alignSelf: 'center'
    },
})