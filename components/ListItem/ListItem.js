import React from 'react'
import { View, Text } from 'react-native'
import ListItemSS from './ListItemStyleSheet'

const ListItem = (props) => {
    return (
        <View style={ListItemSS.card}>
            <Text>{props.data}</Text>
        </View>
    );
}

export default ListItem