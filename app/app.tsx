import * as React from 'react';
import { Surface, Text } from 'react-native-paper';

export default function App() {
    return (
        <Surface
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
            elevation={1}
        >
            <Text>Hello World!</Text>
        </Surface>
    )
}
