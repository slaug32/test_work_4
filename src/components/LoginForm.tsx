import { Button, Form, Input } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { actions } from "../redux/reducers/auth_reducer";
import { rules } from "../utils/rules";

const LoginForm: React.FC = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const { login } = useActions();

  const { error, isLoading } = useTypedSelector((state) => state.auth);

  const submit = () => {
    login(username, password);
  };

  return (
    <Form onFinish={submit}>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <Form.Item
        label='Имя пользователя'
        name='username'
        rules={[rules.required("Введите корректное имя")]}>
        <Input
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </Form.Item>
      <Form.Item
        label='Пароль'
        name='password'
        rules={[rules.required("Введите корректный пароль")]}>
        <Input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          type='password'
        />
      </Form.Item>
      <Form.Item>
        <Button type='primary' htmlType='submit' loading={isLoading}>
          Войти
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
