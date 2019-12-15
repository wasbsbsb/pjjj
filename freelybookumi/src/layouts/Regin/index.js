import React from 'react'
import { connect } from 'dva'


class Regin extends React.Component {



    render() {
        return (
            <div>
                <div>注册博库通行证</div>
                <div>
                    
                </div>

            </div>
        )
    }
}

export default connect(state => {
    const HeaderComponent = state.boku.header;
    return {
        HeaderComponent
    }
})(Regin);