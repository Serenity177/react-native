import { useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import Formulario from './src/components/Formulario';

export default function App() {

  const [modalVisible, setModalVisible] = useState(false);
  const [pacientes, setPacientes] = useState();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Administrador de citas</Text>
      <Text style={styles.tituloBold}>Veterinaria</Text>
      <Pressable onPress={() => {setModalVisible(true)}} style={styles.btnNuevaCita}>
        <Text style={styles.btnTextoNuevaCita}>Nueva Cita</Text>
      </Pressable>
      <Formulario modalVisible={modalVisible} setModalVisible={setModalVisible} setPacientes={setPacientes}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f3f4f6',
    flex: 1,
  },
  titulo: {
    marginTop: 30,
    textAlign: 'center',
    color: '#374151',
    fontSize: 30,
    fontWeight: 'bold',
  },
  tituloBold: {
    fontWeight: 'bold',
    color: '#6d28d9',
  },
  btnNuevaCita: {
    backgroundColor: '#6d28d9',
    padding: 20,
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  btnTextoNuevaCita: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  }
});
