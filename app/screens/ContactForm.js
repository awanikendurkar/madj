import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Formik } from 'formik';
import { Button } from 'react-native-elements';

export default function ContactForm({ addReview }) {
  // const [reviews, setReviews ] = useState([
  //   { title: 'Awani', rating: 5, body: 'This is a test msg', key: '1'},
  // ]);

  // const addReview = (review) => {
  //   review.key = Math.random().toString();
  //   setReviews((currentReviews) => {
  //     return [review, ...currentReviews]
  //   });
  // }
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ title: '', body: '', rating: '' }}
        onSubmit={(values) => {
          addReview(values);
          console.log(values);
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={styles.input}
              placeholder='Your name'
              onChangeText={props.handleChange('title')}
              value={props.values.title}
            />
            <TextInput
              multiline
              style={styles.input}
              placeholder='Your message'
              onChangeText={props.handleChange('body')}
              value={props.values.body}
            />
            <TextInput
              style={styles.input}
              placeholder='Rate the app! (1-5)'
              onChangeText={props.handleChange('rating')}
              value={props.values.rating}
              keyboardType='numeric'
            />
            <Button
              type='outline'
              title='Send'
              // color='maroon'
              onPress={props.handleSubmit}
              style={styles.button}
            />
          </View>
        )}
      </Formik>
    </View>
  );
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
