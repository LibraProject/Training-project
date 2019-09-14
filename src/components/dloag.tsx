/** 
 *fn 弹出框 要执行的函数 
 *  id : id
 * 此函数仅删除使用
**/

import { Modal } from 'antd';
const { confirm } = Modal;
function showDeleteConfirm(fn:any,id:any) {
    confirm({
      title: '您确定要删除吗！',
      okText: '确认',
      okType: 'danger',
      cancelText: '取消',
      content: '此操作不可恢复！！！',
      centered:true,
      onOk() {
        if(typeof(fn)==="function"){
              fn(id)
            return 
        }
        console.warn('fn is not a function')
      },
      onCancel() {
        console.log('取消')
      },
    });
  }

export default showDeleteConfirm


