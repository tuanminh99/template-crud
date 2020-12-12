import React, { Component } from 'react';

class TaskForm extends Component {
  
  render() {
  return (
    <div className="panel panel-warning">
        <div className="panel-heading">
        <h3 className="panel-title">Thêm công việc 
        <i className="fas fa-times text-right"></i>
        </h3>
        </div>

        <div className="panel-body">
        
        <form>
          <div className="form-group">
            <label>Tên : </label>
            <input 
                type="text" 
                className="form-control"  
                placeholder="Input field" 
                name="name"
                />
          </div>

          <div className="form-group">
            <label>Trạng thái : </label>
            <select
                className="form-control"
                name="status"
            >
              <option value="">Kích hoạt</option>
              <option value="">Ẩn</option>
            </select>
          </div>
        
          <button type="submit" className="btn btn-primary btn-add"><i className="fas fa-plus"></i> Lưu lại</button>&nbsp;
          <button type="reset" className="btn btn-danger"><i className="fas fa-times"></i> Huỷ bỏ</button>
        </form>
        
        </div>
    </div>
  );
}
}

export default TaskForm;
