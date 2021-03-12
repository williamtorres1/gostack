import React, { useEffect, useState } from 'react'
import { Text, SafeAreaView, StyleSheet, StatusBar, FlatList } from 'react-native'

import api from './services/api'

export default function App() {
  const [projects, setProjects] = useState([])
  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data)
    })
  }, [])
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      {/* <View style={styles.container}>
        {projects.map(project => (
          <Text key={project.id} style={styles.project}>{project.title}</Text>
        ))}
      </View> */}
      <SafeAreaView style={styles.container}>
        <FlatList
          data={projects}
          keyExtractor={project => project.id}
          renderItem={({ item: project }) => (
            <Text key={project.id} style={styles.project}>{project.title}</Text>
          )}
        />
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
  },
  project: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
})