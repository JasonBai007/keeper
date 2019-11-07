import React from "react";
import { Input, Modal, Icon, Button } from "antd";
import "./index.less";
const { TextArea } = Input;

class LeftMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }
  showModal = () => this.setState({ visible: true });

  handleCancel = e => this.setState({ visible: false });

  render() {
    return (
      <>
        {/* 加入菜单 */}
        <Button
          type="primary"
          shape="circle"
          onClick={this.showModal}
          className="myMenu"
        >
          <Icon type="menu" />
        </Button>
        <Modal
          title="导入/导出 数据"
          visible={this.state.visible}
          onCancel={this.handleCancel}
          footer={null}
        >
          <Button type="primary">导出</Button>
          <TextArea rows={4} />
          <Button type="primary">导入</Button>
        </Modal>
      </>
    );
  }
}

export default LeftMenu;
