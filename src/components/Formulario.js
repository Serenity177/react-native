import React, { useState } from "react";

import { Modal, SafeAreaView, StyleSheet, Text, TextInput, View, Button, Alert } from "react-native";
import DatePicker from 'react-native-modern-datepicker';

function Formulario({ modalVisible, setAction}) {

    const [paciente, setPaciente] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [telefono, setTelefono] = useState('')
    const [sintomas, setSintomas] = useState('')
    const [open, setOpen] = useState(false)

    return (
        <Modal animationType="slide" visible={modalVisible}>
            <SafeAreaView style={styles.contenido}>
                <View ><Text style={styles.tituloChido}>Nueva Cita </Text></View>
                <View style={styles.campo}>
                    <Text style={styles.label}>Nombre del paciente: </Text>
                    <TextInput style={styles.input} placeholder="Nombre del paciente" placeholderTextColor={'#646464'} value={paciente} onChange={setPaciente}></TextInput>
                </View>
                <View style={styles.campo}>
                    <Text style={styles.label}>Nombre del propietario: </Text>
                    <TextInput style={styles.input} placeholder="Nombre del propietario" placeholderTextColor={'#646464'} value={propietario} onChange={setPropietario}></TextInput>
                </View>
                <View style={styles.campo}>
                    <Text style={styles.label}>Email del propietario: </Text>
                    <TextInput style={styles.input} placeholder="Email del propietario" placeholderTextColor={'#646464'} keyboardType="email-address" value={email} onChange={setEmail}></TextInput>
                </View>
                <View style={styles.campo}>
                    <Text style={styles.label}>Teléfono del propietario: </Text>
                    <TextInput style={styles.input} placeholder="Teléfono del propietario" placeholderTextColor={'#646464'} keyboardType="number-pad" value={telefono} onChange={setTelefono}></TextInput>
                </View>
                <View style={styles.campo}>
                    <Text style={styles.label}>Sintomas: </Text>
                    <TextInput style={styles.input} placeholder="Sintomas" placeholderTextColor={'#646464'} keyboardType="number-pad" value={sintomas} onChange={setSintomas}></TextInput>
                </View>

                <Modal animationType='noneR'
                    onDismiss={() => console.log('cerrado')}
                    onShow={() => console.log('show')}
                    transparent
                    visible={open}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <DatePicker
                                options={{
                                    backgroundColor: '#090C08',
                                    textHeaderColor: '#FFA25B',
                                    textDefaultColor: '#F6E7C1',
                                    selectedTextColor: '#fff',
                                    mainColor: '#F4722B',
                                    textSecondaryColor: '#D6C7A1',
                                    borderColor: 'rgba(122, 146, 165, 0.1)',

                                }}
                                current="2020-07-13"
                                selected="2020-07-23"
                                mode="calendar"
                                minuteInterval={30}
                                style={{
                                    borderRadius: 10,
                                    width: '90%', alignSelf: "center"
                                }}
                            />
                        </View>
                    </View>
                </Modal>

                <View style={styles.containerBotones}>
                    <Button style={styles.botonAgregar} title="Agregar Cita" onPress={() => setAction(!modalVisible)}/>
                    <Button style={styles.botonCancelar} title="Cancelar" onPress={() => Alert.alert('jijiji')}/>
                </View>
            </SafeAreaView>
        </Modal>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#ffffff24',
    },
    modalView: {
        margin: 20,
        backgroundColor: '#090C08',
        borderRadius: 20,
        width: '90%',
        paddingBottom: 20,
        alignItems: "center",
        shadowColor: "#fff",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    containerBotones: {
        margin: 5,
        flexDirection: "row"
    },
    botonAgregar: {
        marginLeft: 20,
        marginRight: 20,
        textAlign: "center",
        backgroundColor: '#049615',
        borderRadius: 10,
    },
    botonCancelar: {
        textAlign: "center",
        backgroundColor: '#f61010ea',
        borderRadius: 10,
    },
    contenido: {
        backgroundColor: '',
        flex: 1,
        backgroundColor: '#63c9a7'
    },
    tituloChido: {
        marginTop: 30,
        fontSize: 30,
        fontWeight: '800',
        textAlign: "center"
    },
    titulo: {
        fontSize: 30,
        fontWeight: '600',
        testAlign: 'center',
        marginTop: 30,
        color: '#fff'
    },
    campo: {
        marginTop: 10,
        marginHorizontal: 30,
        color: '#000'
    },
    label: {
        color: '#fff',
        marginBottom: 10,
        marginTop: 15,
        fontSize: 20,
        fontWeight: '600',
    },
    input: {
        backgroundColor: '#fff',
        borderRadius: 10,
        fontSize: 12,
        textAlign: "center",
    }
})

export default Formulario