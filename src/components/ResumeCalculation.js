import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function ResumeCalculation(props){
    const {errorMessage, capital, interest, months, total} = props
    return(
        <View style={styles.content}>
            {
                total && (
                    <View style={styles.boxResult}>
                        <Text style={styles.title}>RESUMEN</Text>

                        <Dataresult title="Cantidad solicitada:" value={`${capital} $`}/>
                        <Dataresult title="Interes %:" value={interest}/>
                        <Dataresult title="Plazos:" value={`${months} meses`}/>
                        <Dataresult title="Pago mensual:" value={`${total.monthlyFee} $`}/>
                        <Dataresult title="Total a pagar:" value={`${total.totalPayment} $`}/>
                    </View>
                )
            }
            <View>
                <Text style={styles.error}>{errorMessage}</Text>
            </View>
        </View>
    );
}

function Dataresult(props) {
    const {title, value} = props;
    
    return (
        <View style={styles.value}>
            <Text>{title}</Text>
            <Text>{value}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
content: {
marginTop: 0,
marginHorizontal: 40
},
 
error: {
    textAlign: 'center',
    color: 'red',
    fontWeight: 'bold',
    fontSize: 15
 },

 title: {
    fontSize:30,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 30
 },
 
 boxResult: {
     padding: 30
 },

 value: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
 }
});