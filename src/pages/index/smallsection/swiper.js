import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'

//style
import '../../../style/main.scss'
import '../../../style/text.scss'
import './index.scss'

class BannerSwiper extends Component {
  constructor(props){
    super(props);
  }

  render () {
    const { recommand }=this.props
    return (
      <View>
      <Swiper
        className= 'housePic relative'
        indicatorColor = '#FFFFFF'
        indicatorActiveColor = 'rgba(3, 108, 111, 1)'
        horizontal
        circular
        indicatorDots
        autoplay>
        {
          recommand.map((item, idx) => (
            <SwiperItem className='slide-image' key={idx}>
              <Image src={item.image}/>
              <View className='absolute font bold slogan white' style='top:250rpx; left:50rpx;'>
              <Text>{item.slogan}</Text>
              </View>
            </SwiperItem>
            ))}
        </Swiper>
      </View>
    )
  }
}

export default BannerSwiper
