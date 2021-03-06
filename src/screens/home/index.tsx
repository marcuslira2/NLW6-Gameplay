import React, { useState } from "react";
import { View, FlatList } from "react-native";
import { styles } from "./styles";

import { Profile } from "../../componentes/profile";
import { ButtonAdd } from "../../componentes/ButtonAdd";
import { CategorySelect } from "../../componentes/CategorySelect";
import { ListHeader } from '../../componentes/ListHeader';
import { Appointment } from '../../componentes/Appointment';
import { ListDivider } from '../../componentes/ListDivider';

export function Home() {
    const [category, setCategoy] = useState('')
    const appoinments = [
        {
            id: '1',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20:40h',
            description: 'é hoje que vamos ao challenger sem perder nada'
        },
        {
            id: '2',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20:40h',
            description: 'é hoje que vamos ao challenger sem perder nada'
        }
    ]
    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategoy('') : setCategoy(categoryId);
    }

    return (
        <View>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd />
            </View>
            <View>
                <CategorySelect
                    categorySelected={category}
                    setCategory={handleCategorySelect}
                />
                <View style={styles.content}>
                    <ListHeader
                        title="Partidas agendadas"
                        subtitle="total 6"
                    />
                    <FlatList
                        data={appoinments}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <Appointment data={item} />

                        )}
                        ItemSeparatorComponent={() => <ListDivider />}
                        style={styles.matches}
                        showsVerticalScrollIndicator={false}

                    />

                </View>
            </View>
        </View>
    )
}