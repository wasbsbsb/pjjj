import react from 'react'
import router from 'umi/router'

class FooterLink extends react.Component {

    navLink = [
        {
            name: '首页',
            rLink: '/'
        },
        {
            name: '分类',
            rLink: '/Classify'
        },
        {
            name: '发现',
            rLink: '/Community'
        },
        {
            name: '购物车',
            rLink: '/Shoping'
        },
        {
            name: '我的博库',
            rLink: '/Myboku'
        },
    ]


    render() {
        return (
            <div style={{ display: "flex" }}>
                {
                    this.navLink.map(i => <div
                        key={i.name}
                        style={{ flex: '1', textAlign: "center" }}
                        onClick={() => router.push(i.rLink)}
                    >
                        {i.name}
                    </div>)
                }
            </div>
        )
    }
}


export default FooterLink;