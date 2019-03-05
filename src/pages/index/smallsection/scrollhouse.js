import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'

// style
import {search_city_house,search_parturition_house } from '../../../actions/home'

//组件
import Rate from '../../../component/global/rate'

import '../../../style/main.scss'
import '../../../style/text.scss'
import './index.scss'


@connect(({ banner_search }) => ({
  data: banner_search.data
}), (dispatch) => ({
  search_city_house () {
    dispatch(search_city_house())
  },
  search_parturition_house () {
    dispatch(search_parturition_house())
  }
}))

class ScrollHouse extends Component {
  constructor(props){
    super(props);
  }

  render () {
    const {data,type} = this.props
    return (
      <View>

      <ScrollView
        className='comment left-right-modual'
        scrollX
        scrollWithAnimation
        scrollLeft='0'
        style='width:100%; white-space:nowrap;'
        lowerThreshold='20rpx'
        upperThreshold='20rpx'>
        {
          data.city.map((item, idx) => (
            <View className='scroll-container' key={idx} >
              <Button className='blue-button'>
                {item}
              </Button>
            </View>

          ))}
      </ScrollView>

      <ScrollView
        className='modual'
        scrollX
        scrollWithAnimation
        scrollLeft='0'
        style='width:100%; white-space: nowrap'
        lowerThreshold='20rpx'
        upperThreshold='20rpx'>
        {
          data.listings.map((item, idx) => (
            <View className='scroll-container' key={idx} >

              <Image src={item.images[0]} style="height:400rpx; width:580rpx;"/>
              <View className='font black'>
                <View className='subtitle bold'>{item.type + ' / ' + item.bedroom + '卧' + item.bed + '床' + item.bathroom + '卫'}</View>
                <View className='title'>{item.title}</View>
                <View className='title'>{'每晚 $' + item.price + '起 • 免费取消预定'}</View>
                <View className='space-inparagrah'/>
                <Rate rate={item.rate}/>
              </View>
            </View>

          ))}
      </ScrollView>
        <View className='left-right-modual'>
          <Button className='pink-button font'>查找城市相关{type}</Button>
        </View>
      </View>
    )
  }
}

export default ScrollHouse
