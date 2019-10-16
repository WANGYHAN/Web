import React, {
    Component
} from 'react'

const isLogin = (Components) => {
    return class Login extends Component {
        state = {
            islogin: false
        }
        render() {
            let {
                islogin
            } = this.state
            return islogin ? < Components {
                ...this.props
            }
            />:null
        }
        componentDidMount() {
            if (window.localStorage.user) {
                this.setState({
                    islogin: true
                })
            } else {
                this.props.history.push("/login")
            }
        }
    }
}
export default isLogin