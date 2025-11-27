import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    top: 100,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  greenBox: {
    backgroundColor: '#99b66f',
    width: 150,
    height: 170,
    borderRadius: 15,
    position: 'relative',  // Adicionado: para posicionamento absoluto da whiteBox
    justifyContent: 'center',
    alignItems: 'center',
  },
  whiteBox: {
    backgroundColor: 'white',
    width: 140,
    height: 120,  // Ajustado: reduzido para deixar ~80px de verde vazando embaixo
    borderRadius: 15,
    position: 'absolute',  // Adicionado: posicionamento absoluto para sobrepor
    top: 4.5,  // Alinhado ao topo da greenBox
    left: 4.5,  // Centralizado horizontalmente: (200 - 195)/2 = 2.5
    justifyContent: 'center',  // Centraliza o ícone verticalmente na whiteBox
    alignItems: 'center',  // Centraliza o ícone horizontalmente na whiteBox
  },
  icon: {
    width: 200,  // Adicionado: tamanho sugerido para o ícone (ajuste conforme necessário)
    height: 200,  // Mantém proporção da imagem
  },
  title: {
    color: 'white',
    fontSize: 16,
    marginTop: 120,
    textAlign: 'center',
    fontWeight: '500',
    width: '130'
    // Adicione estilos para o texto se necessário, ex:
    // color: 'black',
    // fontSize: 16,
    // marginTop: 10,
    // textAlign: 'center',
  },
});