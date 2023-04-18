import Colors from '../../utils/Colors'
import { getCategories } from '../../utils/Axios'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function ScrollViewCategories() {
  const [categories, setCategories] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchCategories = async () => {
      const fetchedCategories = await getCategories();
      setCategories(fetchedCategories);
    };
    fetchCategories();
  }, []);

  const handleNavigateCategory = (category) => {
    navigation.navigate('CategoryScreen', { category });
  };

  return (
    <View style={styles.viewContainer}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {
          categories.map((category) => (
            <TouchableOpacity
              key={category.id}
              activeOpacity={0.6}
              style={styles.container}
              onPress={() => handleNavigateCategory(category)}
            >
              <Text style={styles.text} numberOfLines={1}>{category.name}</Text>
            </TouchableOpacity>
          ))
        }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  container: {
    height: 55,
    backgroundColor: Colors.PalleteGreenBackground,
    marginRight: 15,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: '500',
    textAlign: 'center',
    fontSize: 13,
    paddingHorizontal: 20,
  },
});
