import { StyleSheet } from 'react-native'
import theme from './../../styles/theme.style'

export default StyleSheet.create({
    btn: {
        backgroundColor: theme.PRIMARY_COLOR,
        paddingVertical: 10,
        paddingHorizontal: 5,
        ...theme.CENTER,
        margin: 18,
    },
    btnText: {
        color: theme.WHITE,
        fontSize: 16,
        fontWeight: '800'
    }
})