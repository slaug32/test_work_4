import { Layout, Menu, Row } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { actions } from "../redux/reducers/auth_reducer";
import { RootNames } from "../routes";

const Header: React.FC = () => {
  const router = useHistory();

  const { logout } = useActions();

  let { isAuth, user } = useTypedSelector((state) => state.auth);

  return (
    <Layout.Header>
      <Row justify='end'>
        {isAuth ? (
          <>
            <div style={{ color: "white" }}>{user.username}</div>
            <Menu theme='dark' mode='horizontal' selectable={false}>
              <Menu.Item onClick={logout} key='1'>
                Выйти
              </Menu.Item>
            </Menu>
          </>
        ) : (
          <Menu theme='dark' mode='horizontal' selectable={false}>
            <Menu.Item onClick={() => router.push(RootNames.LOGIN)} key='1'>
              Login
            </Menu.Item>
          </Menu>
        )}
      </Row>
    </Layout.Header>
  );
};

export default Header;
