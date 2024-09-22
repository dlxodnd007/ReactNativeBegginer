import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  SafeAreaView,
} from 'react-native';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>텍스트</Text>
        <Button title="버튼이름" onPress={() => console.log('클릭됨!')} />
        <TextInput />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    
  },
});

export default App;
