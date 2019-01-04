import * as React from 'react'
import { Button } from 'antd'
import styles from './Header.scss'
import LoginContainer from './LoginContainer'

interface HeaderProp {

}

class Header extends React.Component<HeaderProp, any> {
  public state = {
    showLoginMask: false,
  }
  public render() {
    const { showLoginMask } = this.state
    return (
      <div className={styles.container}>
        <div className={styles.right}>
          <Button type="default" onClick={() => this.setState({ showLoginMask: true })}>登录/注册</Button>
        </div>
        <div className={styles.loginMask} style={{ bottom: showLoginMask ? 0 : document.body.clientHeight}}>
          {showLoginMask &&
            <LoginContainer />
          }
        </div>
      </div>
    )
  }
}

export default Header