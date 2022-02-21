import { Layout } from "antd";
import React from "react";
import "./App.css";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header";
import "antd/dist/antd.css";
import { useActions } from "./hooks/useActions";
import { IUser } from "./models/IUser";

function App() {
  const { setUser, setAuth } = useActions();
  React.useEffect(() => {
    if (localStorage.getItem("auth")) {
      setUser({ username: localStorage.getItem("auth" || "") } as IUser);
      setAuth(true);
    }
  }, []);

  return (
    <Layout className='App'>
      <Header />
      <Layout.Content>
        <AppRouter />
      </Layout.Content>
    </Layout>
  );
}

export default App;
