import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
class Item extends Component {
    render() {
        let { info, history } = this.props;
        return (
            <dl className='item' onClick={() => {
                history.push({
                    pathname: `/detail/${info.id}`
                })
            }}>
                <dt>
                    <img src={info.src} alt="" />
                </dt>
                <dd>
                    <p>{info.name}</p>
                    <p>{info.price} 元</p>
                </dd>

            </dl>
        );
    }
}

export default withRouter(Item);
