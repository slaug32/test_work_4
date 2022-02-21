import { Card, Row } from "antd";
import Layout from "antd/lib/layout/layout";
import React from "react";
import LoginForm from "../components/LoginForm";

const Login: React.FC = () => {
  return (
    <Layout>
      <Row justify='center' align='middle' className='h100'>
        <Card>
          <LoginForm />
        </Card>
      </Row>
    </Layout>
  );
};

export default Login;
