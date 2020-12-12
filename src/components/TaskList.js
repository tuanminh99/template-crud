import React, { Component } from 'react';
import TaskItem from './TaskItem';

class TaskList extends Component {
  render() {
      
  return (
    <table className="table table-bordered table-hover mt-15">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Tên</th>
                                <th>Trạng thái</th>
                                <th>Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td>
                                    <input type="text" className="form-control" placeholder="Input field"/>
                                </td>
                                <td>
                                    <select
                                        className="form-control"
                                        name="status"
                                        >
                                        <option value="">Tất cả</option>
                                        <option value="">Kích hoạt</option>
                                        <option value="">Ẩn</option>
                                    </select>
                                </td>
                                <td></td>
                            </tr>
                            <TaskItem/>
                        </tbody>
                    </table>
  );
}
}

export default TaskList;
