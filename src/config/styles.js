import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    container:
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
    },

    button: {
        marginTop: 12,
    },
    error: {
        color: 'red',
    },
});