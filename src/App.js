import React, { Component } from 'react';
import MemoList from './MemoList';
import MemoDetail from './MemoDetail';

const memolist = [
  {
    objectID: 1,
    title: '구글 스터디잼 클라우드',
    author: 'minji',
    contents: '퀵랩쿠폰등록',
    wdate: new Date('2019-05-15')
  },
  {
    objectID: 2,
    title: '구글 스터디잼 클라우드',
    author: 'minji',
    contents: '코세라쿠폰등록',
    wdate: new Date('2019-05-16')
  },
  {
    objectID: 3,
    title: '구글 스터디잼 클라우드',
    author: 'minji',
    contents: '쿠버네이트엔진 강의듣기',
    wdate: new Date('2019-05-17')
  }    
];

class App extends React.Component {
  //생성자
  constructor(props){
    super(props);

    this.state = {
      id: 4,
      memolist,
      selectedMemo:{}
    };
  }

  //메모저장(추가, 수정)
  handleSaveData = (data) => {
    //메모추가
    if(!data.objectID){
      this.setState({
        id: this.state.id+1,
        memolist: this.state.memolist.concat({objectID: this.state.id, wdate: new Date(), ...data }),

        selectedMemo:{}
      }); 
    } else { 
      //메모수정
      this.setState({
        memolist: this.state.memolist.map(row => data.objectID === row.objectID ? {...data }: row),
        selectedMemo: {}
      })
    }
  }

  //메모삭제
  handleRemove = (objectID) => {
    this.setState({
      memolist: this.state.memolist.filter(row => row.objectID !== objectID)
  })    
  }

  //선택메모 상세조회
  handleSelectRow = (row) => {
    this.setState({selectedMemo:row});
  }

  render(){
      const { id, memolist, selectedMemo, cu} = this.state;
      return (
        <div>
          <MemoDetail id={id} cu={cu} selectedMemo={selectedMemo} onSaveData={this.handleSaveData} />
          <span>메모 리스트 화면</span>
          <table border="1">
            <tbody>
            <tr align="center">  
              <td width="50">ID</td>
              <td width="300">Title</td>
              <td width="100">Name</td>
              <td width="100">Date</td>
            </tr>
            {
              memolist.map(row => 
                (<MemoList key={row.objectID} row={row} onRemove={this.handleRemove} onSelectRow={this.handleSelectRow} onSelectAdd={this.handleAdd} />)
              )
            }
            </tbody>
          </table>
        </div>
      );
  }
}

export default App;
