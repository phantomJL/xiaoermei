import Taro, { Component } from '@tarojs/taro'
import '@tarojs/async-await'
import { Provider } from '@tarojs/redux'

import Index from './pages/index'

import configStore from './store'

import './app.scss'


const store = configStore()

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/me/index',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: '#626567',
      selectedColor: '#FD608F',
      backgroundColor: '#FBFBFB',
      borderStyle: 'white',
      list: [{
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: 'assets/icon/home-page-black.png',
        selectedIconPath: 'assets/icon/home-page.png'
      },
      {
        pagePath: 'pages/me/index',
        text: '个人中心',
        iconPath: 'assets/icon/me-black.png',
        selectedIconPath: 'assets/icon/me.png'
      },
    ]
  }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentCatchError () {}

  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
