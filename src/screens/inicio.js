import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const datosestudianres = [
  { id: 1, name: 'Andrés Eleazar Hernández García', carnet: '20220215', photo: require('../img/andres.png') },
  { id: 2, name: 'Diego Enrrique Juarez Mazariego', carnet: '20220196', photo: require('../img/diego.png') }
];

const Pantallaestudiante = () => {
  return (
    <ScrollView style={styles.container}>
      {datosestudianres.map(student => (
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
    backgroundColor: '#D7BDE2',
  },
  card: {
    marginTop: 150,
    marginBottom: 10,
    width: 350,
    alignSelf: 'center',
    backgroundColor: '#283747',
  },
  imagen: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  cardContent: {
    alignItems: 'center',
  },
  title: {
    color: '#fff', 
    marginBottom: 10, 
  },
  text: {
    color: '#fff', 
  },
});

export default Pantallaestudiante;
