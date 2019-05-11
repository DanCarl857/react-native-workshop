import React, {Component} from 'react';
import {
  Platform, 
  StyleSheet, 
  ScrollView, 
  Text, 
  View, 
  TouchableOpacity, 
  TextInput, 
  ImageBackground,
} from 'react-native';
import style from './src/style';

export default class App extends Component {
  render() {
    return (
      <View style={style.rootRoot}>
        <ScrollView style={style.rootContainer}>
          <ImageBackground source={require('./res/lily.jpg')} style={{width: '100%', height: '100%'}}>
          <View style={style.imageWatermark}>
          {/*<Text>Header component</Text>*/}
          {/*<Header />*/}
          <View style={style.headerContainer}>
            <Text style={style.headerText}>My Todo List</Text>
          </View>

          {/*<Text>Todo list component</Text>*/}
          {/*<TodoList />*/}
            {/*<Text>Todo component</Text>*/}
          <View style={style.todoListContainer}>

            <View style={style.todoItemContainer}>
              
              <View style={style.todoItemContentContainer}>
                <Text>Todo item</Text>
                <Text>Status</Text>
              </View>

              <View style={style.todoItemButtonContainer}>
                <TouchableOpacity style={style.todoItemDeleteButton}>
                  <Text style={style.todoItemDeleteButtonText}>X</Text>
                </TouchableOpacity>
              </View>

            </View>
            <View style={style.todoItemContainer}>
              
              <View style={style.todoItemContentContainer}>
                <Text>Todo item</Text>
                <Text>Status</Text>
              </View>

              <View style={style.todoItemButtonContainer}>
                <TouchableOpacity style={style.todoItemDeleteButton}>
                  <Text style={style.todoItemDeleteButtonText}>X</Text>
                </TouchableOpacity>
              </View>

            </View>
            <View style={style.todoItemContainer}>
              
              <View style={style.todoItemContentContainer}>
                <Text>Todo item</Text>
                <Text>Status</Text>
              </View>

              <View style={style.todoItemButtonContainer}>
                <TouchableOpacity style={style.todoItemDeleteButton}>
                  <Text style={style.todoItemDeleteButtonText}>X</Text>
                </TouchableOpacity>
              </View>

            </View>
            <View style={style.todoItemContainer}>
              
              <View style={style.todoItemContentContainer}>
                <Text>Todo item</Text>
                <Text>Status</Text>
              </View>

              <View style={style.todoItemButtonContainer}>
                <TouchableOpacity style={style.todoItemDeleteButton}>
                  <Text style={style.todoItemDeleteButtonText}>X</Text>
                </TouchableOpacity>
              </View>

            </View>
            <View style={style.todoItemContainer}>
              
              <View style={style.todoItemContentContainer}>
                <Text>Todo item</Text>
                <Text>Status</Text>
              </View>

              <View style={style.todoItemButtonContainer}>
                <TouchableOpacity style={style.todoItemDeleteButton}>
                  <Text style={style.todoItemDeleteButtonText}>X</Text>
                </TouchableOpacity>
              </View>

            </View>
            <View style={style.todoItemContainer}>
              
              <View style={style.todoItemContentContainer}>
                <Text>Todo item</Text>
                <Text>Status</Text>
              </View>

              <View style={style.todoItemButtonContainer}>
                <TouchableOpacity style={style.todoItemDeleteButton}>
                  <Text style={style.todoItemDeleteButtonText}>X</Text>
                </TouchableOpacity>
              </View>

            </View>
            <View style={style.todoItemContainer}>
              
              <View style={style.todoItemContentContainer}>
                <Text>Todo item</Text>
                <Text>Status</Text>
              </View>

              <View style={style.todoItemButtonContainer}>
                <TouchableOpacity style={style.todoItemDeleteButton}>
                  <Text style={style.todoItemDeleteButtonText}>X</Text>
                </TouchableOpacity>
              </View>

            </View>

            <View style={style.todoItemContainer}>
              
              <View style={style.todoItemContentContainer}>
                <Text>Todo item</Text>
                <Text>Status</Text>
              </View>

              <View style={style.todoItemButtonContainer}>
                <TouchableOpacity style={style.todoItemDeleteButton}>
                  <Text style={style.todoItemDeleteButtonText}>X</Text>
                </TouchableOpacity>
              </View>

            </View> 

          </View>
          </View>
          </ImageBackground>
        </ScrollView>
        
        <View>
          {/*<Text>New Todo component</Text>*/}
          {/*<NewTodo />*/}
          <View style={style.newTodoContainer}>
            <View style={style.newTodoContainerInputContainer}>
              <TextInput 
                placeholder="Type a new todo item"
                style={style.newTodoInput} />
            </View>
            <View style={style.newTodoButtonContainer}>
              <TouchableOpacity style={style.newTodoButtonContainerButton}>
                <Text style={style.newTodoButtonContainerButtonText}>Add</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  
});
