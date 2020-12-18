import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Formik } from 'formik';
import { Button } from 'react-native-elements';
import ContactForm from './ContactForm';

export default function NewsScreen() {
  const [reviews, setReviews] = useState([
    { title: 'Awani', rating: 5, body: 'This is a test msg', key: '1' },
  ]);

  const addReview = (review) => {
    review.key = Math.random().toString();
    setReviews((currentReviews) => {
      return [review, ...currentReviews];
    });
  };
  return <ContactForm addReview={addReview} />;
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#fff',
    fontFamily: 'nunito-regular',
  },
  button: {
    fontFamily: 'nunito-regular',
    marginTop: 10,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 18,
    borderRadius: 6,
    fontFamily: 'nunito-regular',
  },
});
