import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const datosestudiantes = [
  { id: 1, name: 'Andrés Eleazar Hernández García', carnet: '20220215', photo: require('../img/andres.png') },
  { id: 2, name: 'Diego Enrrique Juarez Mazariego', carnet: '20220196', photo: require('../img/diego.png') }
];

const Pantallaestudiante = () => {
  return (
    <ScrollView style={styles.container}>
      {datosestudiantes.map(student => (
        <Card key={student.id} style={styles.card}>
          <Card.Content style={styles.cardContent}>
            <Card.Cover source={student.photo} style={styles.imagen} />
            <Title style={styles.title}>{student.name}</Title>
            <Paragraph style={styles.text}>Carnet: {student.carnet}</Paragraph>
          </Card.Content>
        </Card>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#e0f7fa',
  },
  card: {
    marginTop: 60,
    marginBottom: 20,
    width: 350,
    height:350,
    padding: 20,
    alignSelf: 'center',
    backgroundColor: '#283747',
    borderRadius: 60,
  },
  imagen: {
    width: 120,
    height: 120,
    resizeMode: 'cover',
    borderRadius: 60,
  },
  cardContent: {
    alignItems: 'center',
  },
  title: {
    color: '#fff', 
    marginBottom: 100, 
  },
  text: {
    color: '#fff', 
  },
});

export default Pantallaestudiante;
