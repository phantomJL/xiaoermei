import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'

import '../../style/main.scss'
import '../../style/text.scss'

//图片
import star from '../../assets/icon/star.svg'
import halfstar from '../../assets/icon/star-half.svg'
import greystar from '../../assets/icon/star-gray.svg'

class Rate extends Component {
  constructor (props) {
    super(props);
    this.state = {
      rate : this.props.rate,
      list : []
    }
  }

  componentWillMount() {
    for (var rate_list = [], e = this.state.rate; e > 0; ) rate_list.push({
        id: rate_list.length,
        type: e >= 1 ? star : halfstar
    }), e -= 1;
    for (;rate_list.length < 5; ) rate_list.push({
        id: rate_list.length,
        type: greystar
    });
    this.setState({list: rate_list});
      }

  render (){
    const {list,rate} = this.state
    return(
      <View>
      <View style='text-align: center;'>
      {
        list.map((item, idx) => (
          <View className='center-container' style='width:25rpx;height:25rpx; float:left;' key={idx} >
            <Image src={item.type}/>
          </View>
          ))}
          <View className='center-container space-inparagrah' style='width:25rpx;height:25rpx;' key={idx} >
            <Text className='subtitle'> {rate} </Text>
          </View>
      </View>
      </View>
    )}}
export default Rate
