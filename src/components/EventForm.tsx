import { Button, DatePicker, Form, Input, Select } from "antd";
import { Moment } from "moment";
import React from "react";
import { IEvent } from "../hooks/IEvent";
import { IUser } from "../models/IUser";
import { rules } from "../utils/rules";

type EventFormProps = {
  guests: Array<IUser>;
};

const EventForm: React.FC<EventFormProps> = (props) => {
  const [event, setEvent] = React.useState<IEvent>({
    author: "",
    date: "",
    description: "",
    guest: "",
  } as IEvent);

  const selectDate = (date: Moment | null) => {
    console.log(date);
  };

  return (
    <Form>
      <Form.Item
        label='Описание события'
        name='discription'
        rules={[rules.required("Обязательное поле")]}>
        <Input
          value={event.description}
          onChange={(e) => setEvent({ ...event, description: e.target.value })}
        />
      </Form.Item>
      <Form.Item
        label='дата события'
        name='date'
        rules={[rules.required("Обязательное поле")]}>
        <DatePicker onChange={(date) => selectDate(date)} />
      </Form.Item>
      <Form.Item
        label='Выберите гостя'
        name='guest'
        rules={[rules.required("Обязательное поле")]}>
        <Select onChange={(guest: string) => setEvent({ ...event, guest })}>
          {props.guests.map((guest) => (
            <Select.Option key={guest.username} value={guest.username}>
              {guest.username}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item>
        <Button type='primary' htmlType='submit'>
          Создать
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EventForm;
