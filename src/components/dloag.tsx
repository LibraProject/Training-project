import * as React from "react";
import { Modal } from 'antd';
const { confirm } = Modal;

function showDeleteConfirm(fn:any,id:any) {
    confirm({
      title: '您确定要删除吗',
      okText: '确认',
      okType: 'danger',
      cancelText: '取消',
      centered:true,
      onOk() {
          fn(id)
      },
      onCancel() {
        console.log('取消')
      },
    });
  }

export default showDeleteConfirm
