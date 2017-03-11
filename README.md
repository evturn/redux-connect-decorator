                              ______                                   __ 
                             / ____ \_________  ____  ____  ___  _____/ /_
                            / / __ `/ ___/ __ \/ __ \/ __ \/ _ \/ ___/ __/
                           / / /_/ / /__/ /_/ / / / / / / /  __/ /__/ /_  
                           \ \__,_/\___/\____/_/ /_/_/ /_/\___/\___/\__/  
                            \____/                                        

#### Usage

```js
import React, { Component } from 'react'
import connect from 'redux-connect-decorator'
import Footer from './components/Footer'
import Header from './components/Header'
import Messages from './components/Messages'
import { fetchInitialData, showSpinner } from './actions'

@connect(state => ({ 
  messages: state.messages,
  fetching: state.fetching,
}), { 
  fetchInitialData,
  showSpinner,
})

class App extends Component {
  componentDidMount() {
    this.props.fetchInitialData()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.fetching) {
      this.props.showSpinner()
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Messages items={this.props.messages} />
        <Footer />
      </div>
    )
  }
}

export default App
```

#### .babelrc
Listed in this order.
```json
{
  "plugins": [
    "babel-plugin-transform-decorators-legacy",
    "babel-plugin-transform-decorators"
  ]
}
```


###### yarn
```
yarn add redux-connect-decorator
```

###### npm
```
npm install --save redux-connect-decorator
```
