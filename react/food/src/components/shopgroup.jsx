import React, { Component } from 'react';
import Shopitem from './shopitem';
import { connect } from 'react-redux'
class Shopgroup extends Component {
    render() {
        let { groupname, shopitem, groupchecked, checkgroup } = this.props;
        return (
            <div className='shopgroup'>
                <input type="checkbox" checked={groupchecked} onChange={() => {
                    checkgroup(groupname, groupchecked)
                }} /> {groupname}
                {shopitem.map(item => {
                    return <Shopitem key={item.id} {...item} />
                })}
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {
        }
    }, (dispatch => {
        return {
            checkgroup(groupname, ischeck) {
                dispatch({ type: 'CHECK_GROUP', groupname, ischeck })
            }
        }
    })
)(Shopgroup);
