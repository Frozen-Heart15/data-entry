import React from 'react';
import './style.css';
import {
  FiEdit,
} from 'react-icons/fi';
import {
  AiFillDelete,
} from 'react-icons/ai';

export const FirmEntry = () => {
  return (
      <div className='firm-entry'>
        <div className='firm-entry-header'>
      <h2>
        Firm Entry
      </h2>
      <button className='btn btn-secondary' data-bs-toggle="modal" data-bs-target="#exampleModal">
        Add +
      </button>
        </div>
      <hr/>
      <div className='firm-entry-inner'>
      <nav aria-label="Page navigation example">
  <ul className="pagination justify-content-end">
    <li className="page-item disabled">
      <p className="page-link">Previous</p>
    </li>
    <li className="page-item"><p className="page-link" >1</p></li>
    <li className="page-item"><p className="page-link" >2</p></li>
    <li className="page-item"><p className="page-link" >3</p></li>
    <li className="page-item">
      <p className="page-link" >Next</p>
    </li>
  </ul>
</nav>
      <table className="table table-dark table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>
        <FiEdit/>
        {'  '}
        <AiFillDelete/>
      </td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>
      <FiEdit/>
        {'  '}
        <AiFillDelete/>
      </td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry </td>
      <td>Bird</td>
      <td>
      <FiEdit/>
        {'  '}
      <AiFillDelete/>
      </td>
    </tr>
  </tbody>
</table>
      </div>

  <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <div className='mb-4'>
        <label class="form-label">First Name</label>
        <input type="email" class="form-control " placeholder=""/>
      </div>
      <div className='mb-4'>
        <label class="form-label">Last Name</label>
        <input type="password" name="password" class="form-control" placeholder=""/>
      </div>
    </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
