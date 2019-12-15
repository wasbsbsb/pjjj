import React from 'react';

import FooterLink from './../../components/FooterLink'

class WatchShoping extends React.Component {
   

    componentDidMount() {
        console.log(this.props);
    }

    render() {
        return (
            <div style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: "column",
            }}>

                <div style={{
                    height: "46px",
                    display: 'flex',

                }}>
                    <div style={{
                        width: '35px',
                        backgroundImage: 'url(https://bnmpstyle.bookuu.com/wap/images/default_shop.png)',
                        backgroundSize: "25px 25px",
                        backgroundRepeat: 'no-repeat'
                    }}>

                    </div>
                    <div>

                    </div>

                </div>



                <div style={{ flex: "1" }}>
                    {this.props.children}
                </div>
                <div style={{
                    height: "50px"
                }}>
                    <FooterLink />
                </div>

            </div>
        )
    }
}


export default WatchShoping;
