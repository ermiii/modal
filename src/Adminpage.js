import React from 'react';
import { Table } from 'reactstrap';
import modal from './modal.css';
export default class Adminpage extends React.Component {
  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Name</th>
            <th>Occupation</th>
            <th>Action</th>
           
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td></td>
            <td></td>
           
          </tr>
          <tr>
            <th scope="row">2</th>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    );
  }
}