import React, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Form from './src/components/Form';
import Footer from './src/components/Footer';
import ResumeCalculation from './src/components/ResumeCalculation';

import colors from './src/utils/colors';


export default function App() {
  const [capital, setCapital] = useState(null)
  const [interest, setInterest] = useState(null)
  const [months, setMonths] = useState(3)
  const [total, setTotal] = useState(null)
  const [errorMessage, setErrorMenssage] = useState(null)


  // el useEffect es un hook que se actualiza asincronamente con el estado que le asignes
  useEffect(() => {
    if(capital && interest && months){
      calculate()
    }else{
      reset()
    }
  }, [capital, interest, months])



  const calculate = () => {
    reset()
    if(!capital){
     setErrorMenssage('Añade la cantidad que quieras solicitar')
    }else if(!interest){
      setErrorMenssage('Añade el interes')
    }else{
      const i = interest / 100;
      const fee = capital / ((1 - Math.pow(i + 1, -months)) / i);
      setTotal({
        monthlyFee: fee.toFixed(2).replace(".", ","),
        totalPayment: (fee * months).toFixed(2).replace(".", ",")
      })
    }
  }

  /* resetear errores*/
  const reset = () => {
    setErrorMenssage("")
    setTotal(null)
  }

  return (
    /* cuando quieres encerrar elementos sin poner ninguna etiqueta*/
    <>
      <StatusBar backgroundColor={colors.PRIMARY_COLOR} style="light" />

      <SafeAreaView style={styles.safeArea}>
        <View style={styles.background} />
        <Text style={styles.titleApp}>Cotizador de prestamos</Text>
        <Form months={months} setCapital={setCapital} setInterest={setInterest} setMonths={setMonths}/>
      </SafeAreaView>

      <ResumeCalculation 
      capital={capital}
      errorMessage={errorMessage} 
      interest={interest}
      months={months}
      total={total} />

      <Footer calculate={calculate}/>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    height: 290,
    alignItems: 'center'
  },
  background: {
    width: '100%',
    height: 200,
    backgroundColor: colors.PRIMARY_COLOR,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: 'absolute',
    zIndex: -1,
  },
  titleApp: {
    fontSize: 20,
    marginTop: 60,
    fontWeight: 'bold',
    color: 'white',
  }
});
