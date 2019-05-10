import React, {Component} from 'react'
import {StyleSheet, Text, View, Image} from 'react-native'
import Bananas from './Bananas'

// export default class App extends Component {
//   render() {
//     return (
//       <Image></Image>
//     );
//   }
// }

const App = () => {
  return (
    <Bananas 
      imageSource={{
        uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
      }}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  first: {
    flex: 1,
    backgroundColor: '#4885ed'
  }, 
  second: {
    flex: 1,
    backgroundColor: '#252525'
  },
  imgStyle: {
    height: '100%',
    width: undefined
  }
});

export default App;
