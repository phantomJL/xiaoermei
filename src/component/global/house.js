import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'

import { connect } from '@tarojs/redux'

import '../../../style/main.scss'
import '../../../style/text.scss'

@connect(({ banner_search }) => ({
  banner_search
}),
}))
class BriefHouseInfo extends Component {
  render () {
    return (
      <View>

      </View>
    )
  }
}

export default BriefHouseInfo
