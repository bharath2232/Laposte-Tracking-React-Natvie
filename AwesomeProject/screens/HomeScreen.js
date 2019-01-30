import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';
import { Button } from 'react-native-paper';
import { TextInput } from 'react-native-paper';
import axios from 'axios';
import ErrorDiolog from '../components/ErrorDiolog';
import { ProgressBar, Colors } from 'react-native-paper';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  state = {
    text: '',
    persons: "empty"

  };
  componentDidMount() {
   
  }
  handleSubmitGoBack =(event)=>{
      this.setState({persons:"empty"})
  }
  handleSubmit = (event) => {
    console.log('hehehehe')
    const headers = {
      'Postman-Token': '3adc4471-86e8-4615-83ed-e767d62856ff',
     'cache-control': 'no-cache',
     'X-Okapi-Key': '/elVH9V2SD/b4w8QIoRi59OvA6Inv6EeqmGK5vsMawouEfMunDvVwS88dra85d3p'

  }
  fetch('https://api.laposte.fr/suivi/v1/6M16261743372',{headers:headers})  
  .then(response =>{
    console.log('fasak',response._bodyInit)
    return response.json()
      })
      .catch(e => e)

    axios.get(`https://api.laposte.fr/suivi/v1/${this.state.text}`,{headers:headers})
      .then(res => {
        const persons = res.data;
        this.setState({ persons });

        console.log('sadsadasdasda',persons)
      })
      .catch(error => {this.setState({ persons:'error' });
      console.log('bon',this.state)
      });
      
  }

  render() {
    if(this.state.persons ==='error'){
      return  <View style={styles.errorBlock}>
                <Text style={styles.errorText}>Sorry No Tracking Id Found, Please Check and try again</Text>
                <Button icon="search" mode="contained" onPress={()=>this.handleSubmitGoBack()}>
                 GO Back
            </Button>
              </View>
    }
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/logo-laposte.png')  
                  : require('../assets/images/logo-laposte.png')
              }
              style={styles.welcomeImage}
            />
          </View>
          <TextInput
          style={styles.textbox}
                mode='outlined'
               label='Tracking Number'
               value={this.state.text}
              onChangeText={text => this.setState({ text })}
            />

          <View style={styles.helpContainer}>
          <Button icon="search" mode="contained" onPress={()=>this.handleSubmit()}>
                 Track
            </Button>
            <ProgressBar progress={1} color={Colors.red800} />
           
            {this.state.persons === "empty"? <Text style={styles.tabBarInfoText}>Please Enter the Tracking number</Text>:
             <TouchableOpacity onPress={this._handleLearnMorePress} style={styles.helpLink}>
             <View style={styles.tabBarInfoText}>
            <Text style={styles.tabBarInfoText}>Code:{this.state.persons.code}</Text>
            <Text style={styles.tabBarInfoText}>Date:{this.state.persons.date}</Text>
            <Text style={styles.tabBarInfoText}>Message:{this.state.persons.message}</Text>
            <Text style={styles.tabBarInfoText}>Status:{this.state.persons.status}</Text>
            <Text style={styles.tabBarInfoText}>Type:{this.state.persons.type}</Text>
            <Text style={styles.helpLinkText}>FULL TRACKING</Text>
            </View>
            </TouchableOpacity>          
          }
           
           
            
          </View>
        </ScrollView>

        <View style={styles.tabBarInfoContainer}>
          <Text style={styles.tabBarInfoText}>This is a tab bar. You can edit it in:</Text>
        </View>
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync(this.state.persons.link);
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  textbox:{
margin:10
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
    margin:10
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
    textAlign: 'center',

  },
  errorBlock: {
    paddingTop : 300,
    alignItems: 'center'
  
  }

});
