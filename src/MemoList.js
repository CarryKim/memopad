import React, { Component } from 'react';

class MemoList extends React.Component {

  //메모선택
  handleSelectRow = () => {
      const { row, onSelectRow } = this.props;
      onSelectRow(row);
  }

  //메모삭제
  handleRemove = () =>{
      const { row, onRemove} = this.props;
      onRemove(row.objectID);
  }

    //화면 생성
    render(){
      return (
        <tr>
          <td>{this.props.row.objectID}</td>
          <td><a onClick={this.handleSelectRow}>{this.props.row.title}</a></td>
          <td>{this.props.row.author}</td>
          <td>{this.props.row.wdate.toLocaleDateString('ko-KR')}</td>
          <td><button onClick={this.handleRemove}>삭제</button></td>
        </tr> 
      );
    }
  }


  export default MemoList;