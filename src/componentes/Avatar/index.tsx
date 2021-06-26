import React from "react";
import { LinearGradient } from 'expo-linear-gradient'
import { View,Text } from "react-native";

import {styles} from './styles';
import { theme } from "../../global/styles/theme";

export function Avatar() {
    const{secondary80,secondary100} = theme.color;
    return(
        <LinearGradient 
        style={styles.container}
        colors={[secondary80, secondary100]}
        >
            
        </LinearGradient>
    )
}
