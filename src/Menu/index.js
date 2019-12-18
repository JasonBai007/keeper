import React from "react";
import { Input, Icon, Button, message, Modal } from "antd";
import "./index.less";
import ClipboardJS from "clipboard";
const { TextArea } = Input;

class LeftMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
    this.myRef = React.createRef();
  }

  componentDidMount() {
    // 初始化粘贴板
    var clipboard = new ClipboardJS("#exportBtn");
    clipboard.on("success", function(e) {
      message.success("复制成功！");
    });
  }

  importData = () => {
    localStorage.chartData = this.myRef.current.state.value;
    this.handleCancel();
    message.success("导入成功，请刷新页面！");
  };

  showModal = () => this.setState({ visible: true });

  handleCancel = e => this.setState({ visible: false });

  render() {
    let dynamicIcon;
    if (!this.state.visible) {
      dynamicIcon = <Icon type="menu" />;
    } else {
      dynamicIcon = <Icon type="close" />;
    }
    return (
      <>
        {/* 菜单按钮 */}
        <Button
          type="primary"
          shape="circle"
          onClick={this.showModal}
          className="myMenu"
        >
          {dynamicIcon}
        </Button>

        {/* 弹出框 */}
        <Modal
          title="导入/导出 数据"
          visible={this.state.visible}
          onCancel={this.handleCancel}
          footer={null}
        >
          <Button
            type="primary"
            id="exportBtn"
            data-clipboard-text={localStorage.chartData}
          >
            导出数据到剪切板
          </Button>
          <TextArea
            rows={4}
            placeholder="在这里粘贴导出的数据"
            ref={this.myRef}
          />
          <Button type="primary" onClick={this.importData}>
            导入
          </Button>
        </Modal>
      </>
    );
  }
}

export default LeftMenu;
