import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'

import { loadData,search_city_house,search_parturition_house } from '../../../actions/home'

//style
import '../../../style/main.scss'
import '../../../style/text.scss'
import './index.scss'


class Search extends Component {
  constructor(props){
    super(props);
    this.state={
      selector: this.props.city,
      selectorChecked: '请选择城市',
    }
  }


  HouseDetail(city){
    console.log(city);
    this.props.changehousecity(city);
    Taro.navigateTo({
    url: `/pages/house/index?city=${city}`
    })
  }

  ParturitionDetail(city){
    this.props.dispatch(changecity(city));
    Taro.navigateTo({
    url: `/pages/parturition/index?city=${city}`
    })

  }

  onChange = e => {
    this.setState({
      selectorChecked: this.state.selector[e.detail.value]
    })
  }


  render () {
    return (
      <View>
      <View className='font box-shadow' style='padding:45rpx; background-color:white;'>
        <View style='margin-bottom: 30rpx; padding-bottom: 10rpx; border-bottom: 2rpx solid rgb(211,210,211);'>
          <View>
              <Picker mode='selector' range={this.state.selector} onChange={this.onChange}>
                <View className='title subslogan'>
                  {this.state.selectorChecked}
                </View>
              </Picker>
            </View>
        </View>

        <View className='block space-between'>
          <View style='width:48%;'>
            <Button className='pink-button font'  onClick={this.HouseDetail.bind(this, this.state.selectorChecked)}>查找民宿</Button>
          </View>
          <View style='width:48%;'>
            <Button className='pink-button font'  onClick={this.ParturitionDetail.bind(this, this.state.selectorChecked)}>查找月子中心</Button>
          </View>
          </View>
      </View>
      </View>
    )
  }
}

export default Search
