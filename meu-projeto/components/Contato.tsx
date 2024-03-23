import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Contato() {
  return (
    <View style={styles.container}>
      <Text style={styles.mudarCorTitulo}>Página de Contato</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mudarCorTitulo: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold'
  }
});
