import React , {Component} from 'react';
import {StyleSheet,View,Text } from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Reducers from './reducers';
import {Header} from './components/common';
import BookList from './components/bookList';

export default class App extends Component{
  render(){

    return (
      <Provider store={createStore(Reducers)}>
      <View>
      <Header  headerText='Book List'/>
      <BookList/>
      </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({

});
