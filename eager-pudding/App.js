/**
 *
 *
 *
 *
 *
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          {global.HermesInternal == null ? null : (
            <View style={styles.engine} />
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle2}> Cardapio Semanal </Text>

              <View style={styles.subContainer}>
                <Text style={styles.sectionTitle}>Segunda-Feira</Text>
                <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}>
                    {' '}
                    <Text style={styles.footer}>Almoço :</Text>
                    {`
      Principal
            -> Assado de panela
            -> Cubos de Frango ao 
                Molho
      Vegetariano
            -> Fricassê de grão de 
                Bico
      Salada
            -> Acelga, Beterraba,
                Tomate, Abacaxi
      Acompanhamentos
            -> Arroz branco
            -> Arroz integral
            -> Feijão de corda
      Guarnição
            -> Cuscuz
      Suco
            -> Cajá          
`}
                    <Text style={styles.footer}>Jantar :</Text>
                    {`
      Principal
            -> Assado de panela
            -> Cubos de Frango ao 
                Molho
      Vegetariano
            -> Fricassê de grão de 
                Bico
      Salada
            -> Acelga, Beterraba,
                Tomate, Abacaxi
      Acompanhamentos
            -> Arroz branco
            -> Arroz integral
            -> Feijão de corda
      Guarnição
            -> Cuscuz
      Suco
            -> Cajá      `}
                  </Text>
                </Text>
              </View>
            </View>
            <View style={styles.sectionContainer}>
              <View style={styles.subContainer}>
                <Text style={styles.sectionTitle}>Terça-Feira</Text>
                <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}>
                    {' '}
                    <Text style={styles.footer}>Almoço :</Text>
                    {`
      Principal
            -> Assado de panela
            -> Cubos de Frango ao 
                Molho
      Vegetariano
            -> Fricassê de grão de 
                Bico
      Salada
            -> Acelga, Beterraba,
                Tomate, Abacaxi
      Acompanhamentos
            -> Arroz branco
            -> Arroz integral
            -> Feijão de corda
      Guarnição
            -> Cuscuz
      Suco
            -> Cajá          
`}
                    <Text style={styles.footer}>Jantar :</Text>
                    {`
      Principal
            -> Assado de panela
            -> Cubos de Frango ao 
                Molho
      Vegetariano
            -> Fricassê de grão de 
                Bico
      Salada
            -> Acelga, Beterraba,
                Tomate, Abacaxi
      Acompanhamentos
            -> Arroz branco
            -> Arroz integral
            -> Feijão de corda
      Guarnição
            -> Cuscuz
      Suco
            -> Cajá      `}
                  </Text>
                </Text>
              </View>
            </View>
            <View style={styles.sectionContainer}>
              <View style={styles.subContainer}>
                <Text style={styles.sectionTitle}>Quarta-Feira</Text>
                <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}>
                    {' '}
                    <Text style={styles.footer}>Almoço :</Text>
                    {`
      Principal
            -> Assado de panela
            -> Cubos de Frango ao 
                Molho
      Vegetariano
            -> Fricassê de grão de 
                Bico
      Salada
            -> Acelga, Beterraba,
                Tomate, Abacaxi
      Acompanhamentos
            -> Arroz branco
            -> Arroz integral
            -> Feijão de corda
      Guarnição
            -> Cuscuz
      Suco
            -> Cajá          
`}
                    <Text style={styles.footer}>Jantar :</Text>
                    {`
      Principal
            -> Assado de panela
            -> Cubos de Frango ao 
                Molho
      Vegetariano
            -> Fricassê de grão de 
                Bico
      Salada
            -> Acelga, Beterraba,
                Tomate, Abacaxi
      Acompanhamentos
            -> Arroz branco
            -> Arroz integral
            -> Feijão de corda
      Guarnição
            -> Cuscuz
      Suco
            -> Cajá      `}
                  </Text>
                </Text>
              </View>
            </View>
            <View style={styles.sectionContainer}>
              <View style={styles.subContainer}>
                <Text style={styles.sectionTitle}>Quinta-Feira</Text>
                <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}>
                    {' '}
                    <Text style={styles.footer}>Almoço :</Text>
                    {`
      Principal
            -> Assado de panela
            -> Cubos de Frango ao 
                Molho
      Vegetariano
            -> Fricassê de grão de 
                Bico
      Salada
            -> Acelga, Beterraba,
                Tomate, Abacaxi
      Acompanhamentos
            -> Arroz branco
            -> Arroz integral
            -> Feijão de corda
      Guarnição
            -> Cuscuz
      Suco
            -> Cajá          
`}
                    <Text style={styles.footer}>Jantar :</Text>
                    {`
      Principal
            -> Assado de panela
            -> Cubos de Frango ao 
                Molho
      Vegetariano
            -> Fricassê de grão de 
                Bico
      Salada
            -> Acelga, Beterraba,
                Tomate, Abacaxi
      Acompanhamentos
            -> Arroz branco
            -> Arroz integral
            -> Feijão de corda
      Guarnição
            -> Cuscuz
      Suco
            -> Cajá      `}
                  </Text>
                </Text>
              </View>
            </View>
            <View style={styles.sectionContainer}>
              <View style={styles.subContainer}>
                <Text style={styles.sectionTitle}>Sexta-Feira</Text>
                <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}>
                    {' '}
                    <Text style={styles.footer}>Almoço :</Text>
                    {`
      Principal
            -> Assado de panela
            -> Cubos de Frango ao 
                Molho
      Vegetariano
            -> Fricassê de grão de 
                Bico
      Salada
            -> Acelga, Beterraba,
                Tomate, Abacaxi
      Acompanhamentos
            -> Arroz branco
            -> Arroz integral
            -> Feijão de corda
      Guarnição
            -> Cuscuz
      Suco
            -> Cajá          
`}
                    <Text style={styles.footer}>Jantar :</Text>
                    {`
      Principal
            -> Assado de panela
            -> Cubos de Frango ao 
                Molho
      Vegetariano
            -> Fricassê de grão de 
                Bico
      Salada
            -> Acelga, Beterraba,
                Tomate, Abacaxi
      Acompanhamentos
            -> Arroz branco
            -> Arroz integral
            -> Feijão de corda
      Guarnição
            -> Cuscuz
      Suco
            -> Cajá      `}
                  </Text>
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
  },
  body: {
    backgroundColor: '#FFDAB9',
  },
  sectionContainer: {
    marginTop: 30,
    paddingHorizontal: 24,
    borderEndWidth: 1,
    borderEndColor: '#402900',
  },
  subContainer: {
    marginTop: 10,

    backgroundColor: '#FF8C00',
    borderRadius: 20,
    borderEndColor: '#402900',
    borderEndWidth: 1,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    backgroundColor: '#FFA500',
    borderRadius: 10,

    justifyContent: 'center',
    textAlign: 'center',

    //borderColor: '#FF8C00',
  },
  sectionTitle2: {
    fontSize: 24,
    fontWeight: '600',
    backgroundColor: '#FFA500',
    borderRadius: 10,

    justifyContent: 'center',
    textAlign: 'center',

    //borderColor: '#FF8C00',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    margin: 9,
    //color: 'black',
  },
  highlight: {
    fontWeight: '600',
    justifyContent: 'center',
    textAlign: 'center',
  },
  footer: {
    fontWeight: '700',
    justifyContent: 'center',
    textAlign: 'center',
  },
});

export default App;
