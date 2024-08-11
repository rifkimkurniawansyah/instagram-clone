import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Stories from '../components/Stories';
import Post from '../components/Post';
import { FEEDS_DATA } from '../data/feedsData';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <Stories />
      {FEEDS_DATA.map((feed, index) => (
        <Post key={index} data={feed} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});