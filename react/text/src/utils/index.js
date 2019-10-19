import React, {
    Component
} from 'react'
const islogin = (Com) => {
    return class extends Component {
        state = {
            isShow: false
        }
        render() {

            return this.state.isShow ? < Com {
                ...this.props
            }
            />:null
        }
        componentDidMount() {
            if (window.localStorage.token) {
                this.setState({
                    isShow: true
                })
            } else {
                this.props.history.push("/Login")
            }
        }

    }
}
export default islogin