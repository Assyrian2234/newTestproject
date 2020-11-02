import React, {Component} from 'react';
import {
  Image,
  View,
  Text,
  StatusBar,
  StyleSheet,
  Button,
  Alert,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
class Acc extends Component {
  render() {
    return (
      <View>
        <View
          style={{
            backgroundColor: 'orange',
            height: 80,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
            <View style={{

            }}>
                <View style={{
                    marginLeft:30,
                    marginTop:5
                }}>
                <Icon name="arrow-back-circle-outline" size={30} color={'white'}></Icon>
                   </View>
          <Text
            style={{
              color: 'white',
              marginLeft: 30,
              fontSize: 30,
              fontWeight: 'bold',
            }}>
            Tài khoản của tôi{' '}
          </Text>
            </View>
          <Image
            source={require('../Image/original.jpg')}
            style={{
              marginLeft: 20,
              width: 60,
              height: 60,
              borderRadius: 30,
            }}
          />
        </View>

        <View
          style={{
            flexDirection: 'column',
              justifyContent:'center',
              alignItems: 'center',

          }}>
          <View style={mystyles.container}>
            <Text> Họ và tên </Text>
            <Text style={mystyles.values}>Thành</Text>
          </View>

          <View style={mystyles.container}>
            <Text> Email </Text>
            <Text style={mystyles.values}>danchoi9x@gmail.com</Text>
          </View>

          <View style={mystyles.container}>
            <Text> Ngày tháng năm sinh </Text>
            <Text style={mystyles.values}>6/9/1969</Text>
          </View>

          <View style={mystyles.container}>
            <Text> Số điện thoại </Text>
            <Text style={mystyles.values}>0969696969</Text>
          </View>

          <View style={mystyles.container}>
            <Text> Địa chỉ </Text>
            <Text style={mystyles.values}>Quận Cầu Giấy,Ba Đình,Hà Nội</Text>
          </View>

          <View style={mystyles.container}>
            <Text> CMND/CCCD </Text>
              <View style={mystyles.values}>
                  <Icon name={'arrow-down-circle-outline'} size={25} color={'fuchsia'}></Icon>
              </View>
          </View>
          <View style={mystyles.line} />

          <View style={mystyles.container}>
            <Text> Giấy phép lái xe </Text>
              <View style={mystyles.values}>
                  <Icon name={'arrow-down-circle-outline'} size={25} color={'fuchsia'}></Icon>
              </View>
          </View>
          <View style={mystyles.line} />

          <View style={mystyles.container}>
            <Text> Đổi mật khẩu </Text>
              <View style={mystyles.values}>
                  <Icon name={'arrow-down-circle-outline'} size={25} color={'fuchsia'}></Icon>
              </View>
          </View>
          <View style={mystyles.line} />


        </View>

          <View
              style={
                  {
                      // width:100,
                      //justifyContent: 'center',
                      alignItems: 'center',
                      marginTop:20,
                  }
              }>
              <TouchableOpacity style={{
                  width:'80%',
                  borderRadius:10,
                  height:'27%',
                  backgroundColor: 'orange',
                  justifyContent:'center',
                  alignItems: 'center'
              }}  >
                  <Text>Lưu Thay Đổi</Text>
              </TouchableOpacity>
          </View>
      </View>
    );
  }
}
const mystyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 10,
    height: 40,
      width:'90%',
    justifyContent: 'space-between',
      borderBottomWidth:1,
      borderBottomColor:'#00000050'
  },
  values: {
    justifyContent: 'space-between',
    marginRight: 10,
      color:'grey'
  },
});
export default Acc;
