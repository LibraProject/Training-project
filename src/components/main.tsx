import * as React from "react";
import { Breadcrumb, Layout } from "antd";

const { Content } = Layout;

class Main extends React.Component {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <Layout style={{ padding: "0 24px 24px" }}>
        <Content
          style={{
            margin: 0,
            minHeight: 280
          }}
        >
          {this.props.children}
        </Content>
      </Layout>
    );
  }
}

export default Main;
