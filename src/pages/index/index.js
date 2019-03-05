import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { loadData,search_city_house,search_parturition_house } from '../../actions/home'

//图片
import logo from '../../assets/icon/WechatIMG48.png'
import loading from '../../assets/icon/images.png'

//Component
import BannerSwiper from './smallsection/swiper.js'
import Search from './smallsection/search.js'
import ScrollHouse from './smallsection/scrollhouse'

import '../../style/main.scss'
import '../../style/text.scss'


@connect(({ banner_search }) => ({
  data: banner_search.data
}), (dispatch) => ({
  loadData () {
    dispatch(loadData())
  },
  search_city_house () {
    dispatch(search_city_house())
  },
  search_parturition_house () {
    dispatch(search_parturition_house())
  }
}))

class Index extends Component {

    config = {
    navigationBarTitleText: '北美华人民宿'
  }
  constructor(props){
    super(props);
    this.state={
      initDone:false,
      cityhouse:null,
      cityparturition:null,
      city:null
    }
  }
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentDidMount(){
    this.props.dispatch(loadData());
    this.setState({
      initDone:true
    })
  }


  change_house_city(city){
    this.props.dispatch(search_city_house(city))
  }

  change_city(city){
    this.props.dispatch(search_parturition_house(city))
  }

  render () {
    const data = this.props.data
    const finish = initDone ?
      <View className='relative'>

        <BannerSwiper recommand={data.bannerPic} style='width:100%;'/>

        <View className='absolute' style='top:50rpx; left:50rpx;'>
          <View className='center-container' style='width:100rpx; height:100rpx;'>
            <Image src={logo}/>
          </View>
        </View>

        <View className='absolute' style='top:350rpx; left:50rpx; right:50rpx;'>
          <Search city={data.city} changehousecity={this.change_house_city.bind(this)} changecity={this.change_city.bind(this)}/>
        </View>

        <View className='modual font black' style='margin-top: 150rpx;'>
          <View>
            <Text className='bold slogan'>精选民宿</Text>
          </View>
          <View>
            <Text className='subslogan'>推荐精选名宿，让你如归家般安心</Text>
          </View>
        </View>

        <ScrollHouse data={data} type={'民宿'}/>

        <View className='modual font black' style='margin-top: 50rpx;'>
          <View>
            <Text className='bold slogan'>精选月子中心</Text>
          </View>
          <View>
            <Text className='subslogan'>推荐精选月子中心，让宝宝健康出生</Text>
          </View>
        </View>

        <ScrollHouse data={data} type={'月子中心'}/>

      </View>
    :
    <View><Image src={loading}/></View>
    return (
      <View className='index'>
        {finish}
      </View>
    )
  }
}

export default Index
