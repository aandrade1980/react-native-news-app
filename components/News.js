import React from 'react';
import moment from 'moment';
import { Image, NativeBaseProvider, Spinner } from 'native-base';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Divider } from 'react-native-elements';

import { useGetArticles } from '../hooks/articles';

export default function News({ category }) {
  const articles = useGetArticles(category);

  console.log('News - articles => ', articles);

  return (
    <NativeBaseProvider>
      <ScrollView height={850}>
        {articles.length > 0 ? (
          <FlatList
            data={articles}
            renderItem={({ item }) => (
              <View>
                <View style={styles.newsContainer}>
                  <Image
                    width={550}
                    height={250}
                    resizeMode="cover"
                    source={{ uri: item.urlToImage }}
                    alt="Alternative Text"
                  />
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.date}>
                    {moment(item.publishedAt).format('LLL')}
                  </Text>
                  <Text style={styles.newsDescription}>{item.description}</Text>
                </View>
                <Divider my={2} bg="#e0e0e0" />
              </View>
            )}
            keyExtractor={({ url }) => url}
          />
        ) : (
          <View style={styles.spinner}>
            <Spinner color="danger.400" />
          </View>
        )}
      </ScrollView>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  newsContainer: {
    padding: 10
  },
  title: {
    fontSize: 18,
    marginTop: 10,
    fontWeight: 600
  },
  newsDescription: {
    fontSize: 16,
    marginTop: 10
  },
  date: {
    fontSize: 14
  },
  spinner: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 400
  }
});
