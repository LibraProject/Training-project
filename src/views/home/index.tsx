import * as React from 'react';
import { Layout, Breadcrumb } from 'antd';
import RouterView from '../../router/map'
import "@/scss/home.css";
import Submenu from '@/components/submenu'
import Head from '@/components/head'
interface Props {
  routes: any
}
const { Content } = Layout;
class Home extends React.Component<Props> {
  public render() {
    return (
      <Layout>
        <Head />
        <Layout>
          <Submenu />
          <Layout style={{ padding: "0 24px 24px" }}>
            <Breadcrumb style={{ margin: '16px 0' }} />
            <Content style={{ margin: 0, minHeight: 280 }}>
              <RouterView routes={this.props.routes} />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}

export default Home;
