import React, { Component } from 'react';

class TaskItem extends Component {
  render() {
  return (
    <tr>
        <td>
            1
        </td>
        <td>
            aaaaa
        </td>
        <td>
            
  <span className='label label-success'>Kich hoat</span>
            
        </td>
        <td>
             
            <button type="button" className="btn btn-primary btn-edit">Sửa</button>&nbsp;
            <button type="reset" className="btn btn-danger ">Xoá</button>
            
        </td>
    </tr>
  );
}
}

export default TaskItem;
