import { Button, DatePicker, Form, Input, Select } from "antd";
import React from "react";
import { rules } from "../utils/rules";

const EventForm: React.FC = () => {
  return (
    <Form>
      <Form.Item
        label='Описание события'
        name='discription'
        rules={[rules.required("Обязательное поле")]}>
        <Input />
      </Form.Item>
      <Form.Item
        label='дата события'
        name='date'
        rules={[rules.required("Обязательное поле")]}>
        <DatePicker />
      </Form.Item>
      <Form.Item
        label='дата события'
        name='date'
        rules={[rules.required("Обязательное поле")]}>
        <Select>
          <Select.Option value='jack'>Jack</Select.Option>
          <Select.Option value='lucy'>Lucy</Select.Option>
          <Select.Option value='disabled' disabled>
            Disabled
          </Select.Option>
          <Select.Option value='Yiminghe'>yiminghe</Select.Option>
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
