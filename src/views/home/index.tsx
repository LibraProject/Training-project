import * as React from 'react';
import { Layout } from 'antd';
import "../../scss/home.css";
import Submenu from '../../components/submenu'
import Head from '../../components/head'
import Main from '../../components/main'
class Home extends React.Component {
  public render() {
    return (
      <Layout>

        <Head/>

        <Layout>

          <Submenu/>

          <Main {...this.props}/>

        </Layout>
      </Layout>
    )
  }
}

export default Home;
