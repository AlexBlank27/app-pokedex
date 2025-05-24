import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import AntDesign from '@expo/vector-icons/AntDesign';


export const CustomTouchable = ({onPress,title}) =>{

    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress} style={styles.button}>
                <AntDesign name="search1" size={24} color="black" />
                <Text >
                    {title ? title:''}
                </Text>
            </TouchableOpacity>
        </View>
    );

};