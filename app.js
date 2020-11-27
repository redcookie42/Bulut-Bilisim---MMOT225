import React, { useState } from 'react';
import { View, Text, FlatList, ScrollView, TouchableOpacity } from 'react-native';

import data from './data.json';


function App() {
  const [select, setSelect] = useState(null);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => setSelect(item)}>
        <Text style={{
            padding: 8,
            fontSize: 16,
            textAlign: 'left',
            borderBottomWidth: 1,
            borderBottomColor: 'orange',
            backgroundColor: 'black',
            color: 'white'
        }}>{item}</Text>
    </TouchableOpacity>
  )

  const sehirler = select != null ? data[select] : [];

  return (
      <View style={{ flex: 1, backgroundColor: '#d8d8d8' }}>
        <FlatList 
            data={Object.keys(data)}
            renderItem={renderItem}
            keyExtractor={name => name}
            style={{ flexBasis: '50%' }}
        />
         <ScrollView style={{ flexBasis: '50%' }}>
              {sehirler.map(city => 
              <View key={city.plateCode}
                  style={{
                      padding: 10
                  }}>
                  <Text>Şehir: {city.name}</Text>
                  <Text>Nüfus: {city.population}</Text>
                  <Text>Plaka: {city.plateCode}</Text>
              </View>)}
          </ScrollView>
      </View>
  )
}


export default App;