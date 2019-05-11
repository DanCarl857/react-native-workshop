import { StyleSheet } from 'react-native'
import theme from './../../styles/theme.style'

export default StyleSheet.create({
    flexor: {
        flex: 1
    },
    row: {
        flexDirection: 'row',
        flex: 1
    },
    headerText: {
        fontSize: 18, 
        fontWeight: '900', 
        textAlign: 'left', 
        marginBottom: 10 
    },
    textContainer: {
        flex: 2, 
        marginLeft: 15, 
        justifyContent: 'center'
    },  
    imgStyle: {
        height: 100, 
        width: '100%', 
        borderRadius: 50
    },
    card: {
        margin: 5,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        borderWidth: 2,
        padding: 15,
        borderRadius: 8
    },
    
})