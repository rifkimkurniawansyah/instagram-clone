import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Story from './Story';
import { FEEDS_DATA } from '../data/feedsData';

export default function Stories() {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container}>
      {FEEDS_DATA.map((feed, index) => (
        <Story key={index} data={feed} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#DBDBDB',
  },
});