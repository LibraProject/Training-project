import * as React from 'react';
import { Breadcrumb, Layout } from 'antd';

const { Content } = Layout;

class Main extends React.Component {
    constructor(props: any){
        super(props)
        console.log(props)
    }
    componentDidMount(){
        
    }
    public render() {
        return (
            <Layout style={{ padding: '0 24px 24px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>查看试题</Breadcrumb.Item>
                </Breadcrumb>
                <Content
                    style={{
                        background: '#fff',
                        margin: 0,
                        minHeight: 280,
                        padding: 24,
                    }}
                >
                    {this.props.children}
                </Content>
            </Layout>
        );
    }
}

export default Main;
