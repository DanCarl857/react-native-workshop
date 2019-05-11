import { StyleSheet } from 'react-native'
import theme from './../../styles/theme.style'

export default StyleSheet.create({
    container: {
        backgroundColor: theme.PRIMARY_COLOR,
        paddingVertical: 30,
        ...theme.CENTER
    },
    textStyle: {
        fontSize: 16,
        fontWeight: '900',
        color: theme.WHITE,
        marginTop: 20
    }
})