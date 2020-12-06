import React from 'react'
import { FlatList, View } from 'react-native'
import ListItem from '../ListItem/ListItem'

const ListDisplayer = (props) => {
    return (
        <View style={{height:"100%"}}>
            <FlatList
                keyExtractor = {(item,index)=>item.key}
                data={props.allItems}
                renderItem = {itemData => {
                    return(
                        <ListItem data={itemData.item.value}/>
                    );
                }}
            />
        </View>
    );
}

export default ListDisplayer