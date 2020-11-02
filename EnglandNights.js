import React, {Component} from 'react';
import {
  AppRegistry,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import listSkill from '../data/list';
import listsy from '../data/listSyllabus';
import listin from '../data/listInstructor';
import LinearGradient from 'react-native-linear-gradient';
const _itemFlatlist = (item,index) =>{
    return(
        <View style={{
            margin:8,
            flexDirection:'row',
            justifyContent:'center',
            alignItems: 'center',
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 5,
            },
            shadowOpacity: 0.34,
            shadowRadius: 6.27,

            elevation: 10,

        }}>
            <View style={{
            }}>
                <Text style={{
                    color:'blue',
                    fontWeight:'bold'
                }}>{item.week}</Text>
                <Text style={{
                    fontSize: 30,
                    color:'blue',
                    fontWeight:'bold'
                }}>{item.number}</Text>
            </View>
            <View style={{
                marginLeft:10,
                marginTop:12
            }}>
                <Text style={{
                    fontWeight:'bold',
                    color: 'gray'
                }}>{item.title}</Text>
                <Text style={{color:'gray'}}>{item.content1}</Text>
                <Text style={{color:'gray'}}>{item.content2}</Text>
                <Text></Text>
            </View>

        </View>
    );
}
const _flatlistintructor=(item,index) => {
    var imageSource = item.image;
    return (
        <View style={{
            flexDirection:'row',
            marginTop:40
        }}>
            <View>
                <Image
                    source={item.image}
                    style={mystyle.styleimage}
                ></Image>
            </View>
            <View style={{
                marginLeft:10
            }}>
                <Text style={{fontWeight:'bold'}}>{item.name}</Text>
                <Text style={{color: 'gray'}}>{item.job}</Text>
                <Text style={{color:'gray'}}>{item.about}</Text>
            </View>
        </View>
    )
}

const Myapp = () => {
    return (
      <View style={{}}>
          <LinearGradient colors={['#FFFFFF','#99FFFF','#FFFF66']} style={{
              height: '12%',
              alignItems: 'center',
              justifyContent: 'flex-end',
          }}>
        <View

          >

          <Text style={{color: 'red', fontSize: 20}}>England Nights</Text>
        </View>
          </LinearGradient>
        <ScrollView>
            <View style={{
                alignItems: 'center',
                justifyContent: 'center',


            }}>
                <View style={{
                    width:'90%',
                    borderBottomWidth:2,
                    borderBottomColor:'gray',
                }}>
          <Text style={{
              fontWeight: 'bold',
          }}>Abouts</Text>

          <Text style={{
              color:'gray'
          }}>
            Let's explore England fun words. That will make you feel bored and
            learn a lot of things. Let's explore England through fun words.That
            will make you feel bored and learn a lot of things
                </Text>
                </View>
            </View>

            <View style={{marginTop:10}}>
          <Text style={mystyle.styleabout}> Skill You Will Have </Text>
            </View>

          <View
            style={{
                marginTop:10,
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginLeft: 10,
              marginRight: 10,

            }}>

              <View style={{
                  width:"30%",
              }}>
                  <LinearGradient colors={['#FF0000', '#FFFFFF', '#6699FF']} style={mystyle.styleoppa}>
            <TouchableOpacity style={mystyle.styleoppa}>
              <Text style={{color: 'white'}}> Listen </Text>
            </TouchableOpacity>
                  </LinearGradient>
              </View>

              <View style={{
                  width:"30%",

              }}>
                  <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={mystyle.styleoppa}>
            <TouchableOpacity style={mystyle.styleoppa}>
              <Text style={{color: 'white'}}> New Words </Text>
            </TouchableOpacity>
                  </LinearGradient>
              </View>

              <View style={{
                  width:"30%",

              }}>
                  <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={mystyle.styleoppa}>
            <TouchableOpacity style={mystyle.styleoppa}>
              <Text style={{color: 'white'}}> Read </Text>
            </TouchableOpacity>
              </LinearGradient>
              </View>

          </View>

          <Text style={mystyle.styleabout}> Syllabus </Text>

          <FlatList
            data={listsy}
            renderItem={({item, index}) => _itemFlatlist(item)}
          />

          <Text style={mystyle.styleabout}>Instructor</Text>

          <FlatList
            data={listin}
            renderItem={({item,index}) => _flatlistintructor(item)}
          />



          <View

            style={{
              marginLeft: 200,
                position: 'absolute',
                marginTop: 950
            }}>
            <Image
              source={require('../Image/ong.jpg')}
              style={{
                width: 120,
                height: 120,
                borderRadius: 100,
              }}
            />
          </View>
          <Text style={mystyle.stylestart}>LET'S START</Text>
          <View
            style={{
              marginLeft: 20,
              backgroundColor: 'blue',
              height: 40,
              width: 100,
              borderRadius: 60,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity>
              <Text style={{color: 'white'}}>Start</Text>
            </TouchableOpacity>
          </View>
          <View style={{height: 150}} />
        </ScrollView>
      </View>
    );

}

const mystyle = StyleSheet.create({
  styleabout: {
    fontWeight: 'bold',
    marginTop: 5,
    marginLeft: 8,
  },
  style2: {
    color: 'gray',
    marginLeft: 8,
  },
  styleoppa: {
    padding: 5,
    borderRadius: 17,
      justifyContent: 'center',
      alignItems: 'center',
      height: 35
  },
  stylestart: {
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 10,
    marginTop: 70
  },
    styleimage:{
        marginLeft: 20,
        width: 60,
        height: 60,
        borderRadius: 30,
    }
});
export default Myapp;
