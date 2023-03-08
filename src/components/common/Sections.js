import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Sections( section ) {
    const { sections } = section;
    console.log(sections);
  return (
    <View>
      {sections.map((section, index) => (
        <TouchableOpacity disabled={true} key={index}>
          <Text>{section.title}</Text>
          <Text>{section.content}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({})