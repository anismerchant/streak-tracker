import React, { Component } from 'react';
import { Form, DatePicker, Button, Input, Radio } from 'antd';

export default class NewStreakForm extends Component {
  state = {
    value: 1,
  };

  onChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };

    const config = {
      rules: [{ type: 'object', required: true, message: 'Please select time!' }],
    };

    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };

    return(
      <Form {...formItemLayout}>
        <Form.Item
          label={
            <span>
              Streak Name&nbsp;
            </span>
          }
        >
          {getFieldDecorator('Streak Name', {
            rules: [{ required: true, message: 'Please input a streak name!', whitespace: true }],
          })(<Input size="large" placeholder="Days since I..."/>)}
        </Form.Item>
        <Form.Item label="Started">
          {getFieldDecorator('date-picker', config)(<DatePicker />)}
        </Form.Item>
        <Form.Item
          label={
            <span>
              Count by&nbsp;
            </span>
          }
        >
          <Radio.Group onChange={this.onChange} value={this.state.value}>
            <Radio style={radioStyle} value={1}>
              Days
            </Radio>
            <Radio style={radioStyle} value={2}>
              Weeks
            </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          wrapperCol={{
            xs: { span: 24, offset: 0 },
            sm: { span: 16, offset: 8 },
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  }
}
