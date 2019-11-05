import React from "react";
import { Form, DatePicker, Icon, Input, Button } from "antd";
import "./index.less";
const { TextArea } = Input;

class InputBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      hIndex: 0,
      sIndex: 0,
      note: []
    };
  }

  setDate = (date, dateString) => {
    this.setState({ date: dateString });
  };
  setHIndex = e => {
    this.setState({ hIndex: Number(e.target.value) });
  };
  setSIndex = e => {
    this.setState({ sIndex: Number(e.target.value) });
  };
  setNote = e => {
    this.setState({ note: e.target.value.split("\n") });
  };
  // 提交数据，子 => 父传值
  submit = () => {
    this.props.submit(this.state);
  };

  render() {
    return (
      <Form layout="inline">
        <Form.Item>
          <DatePicker placeholder="选择日期" onChange={this.setDate} />
        </Form.Item>
        <Form.Item>
          <Input
            prefix={<Icon type="line-chart" />}
            className="indexInput"
            placeholder="健康指数"
            onChange={this.setHIndex}
          />
        </Form.Item>
        <Form.Item>
          <Input
            prefix={<Icon type="line-chart" />}
            className="indexInput"
            placeholder="睡眠指数"
            onChange={this.setSIndex}
          />
        </Form.Item>
        <Form.Item>
          <TextArea
            placeholder="备注"
            prefix={<Icon type="form" />}
            autoSize
            className="note"
            onChange={this.setNote}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={this.submit}>
            +1
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const TopForm = Form.create({ name: "myInputs" })(InputBar);

export default TopForm;
