import { Button, Modal, Row } from "antd";
import Layout from "antd/lib/layout/layout";
import React from "react";
import EventCalendar from "../components/EventCalendar";
import EventForm from "../components/EventForm";
import { useActions } from "../hooks/useActions";

const Event: React.FC = () => {
  const [modalVisible, setModalVisible] = React.useState(false);

  const { fetchGuests } = useActions();

  React.useEffect(() => {
    fetchGuests();
  }, []);

  return (
    <Layout>
      <EventCalendar events={[]} />
      <Row justify='center'>
        <Button onClick={() => setModalVisible(true)}>Добавить событие</Button>
      </Row>
      <Modal
        footer={null}
        title='Добавить событие'
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}>
        <EventForm />
      </Modal>
    </Layout>
  );
};

export default Event;
