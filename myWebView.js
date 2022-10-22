import { Text, View ,ActivityIndicator,StyleSheet} from 'react-native'
import React, { Component } from 'react'
import { WebView } from 'react-native-webview';

export class myWebView extends Component {
  ActivityIndicatorLoadingView() {
    return(
      <ActivityIndicator
        color='black'
        size='large'
        style={styles.ActivityIndicatorStyle}
      />
    )
  }
  render() {
    return (
      <WebView
        source={{
          uri: 'https://github.com/facebook/react-native'
        }}
        style={{ marginTop: 40 }}
        renderLoading={this.ActivityIndicatorLoadingView}
        startInLoadingState={true}  
      />
    )
  }
}

const styles=StyleSheet.create({
  ActivityIndicatorStyle:{
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  }
})

export default myWebView