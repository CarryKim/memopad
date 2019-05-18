import React, { Component } from 'react';

class MemoDetail extends React.Component {
 
    shouldComponentUpdate(nextProps, nextState){
        let selectedMemo = nextProps.selectedMemo;
        if(!selectedMemo.objectID){
            this.title.value = "";
            this.author.value = "";
            this.contents.value = "";
            return true;
        }

        this.title.value = selectedMemo.title;
        this.author.value = selectedMemo.author;
        this.contents.value = selectedMemo.contents;
        return true;
    }

    //저장
    handleSubmit = (e) => {
        e.preventDefault();
        let selectedMemo = this.props.selectedMemo;
        let data = {
            title: this.title.value,
            author: this.author.value,
            contents: this.contents.value
        }
        if(selectedMemo.objectID){
            data.objectID = selectedMemo.objectID
            data.wdate = selectedMemo.wdate
        }
        this.props.onSaveData(data);
    }

    render(){
        const { id, selectedMemo } = this.props;
            return (
                <div>
                    <span>메모 상세 화면</span>
                    <form onSubmit={this.handleSubmit}>
                        <input placeholder="제목" name="title"  ref={node => this.title = node} />
                        <input placeholder="작성자" name="author"  ref={node => this.author = node}/>
                        <input placeholder="내용" name="contents"  ref={node => this.contents = node}/>
                        <button type="submit">추가/수정</button>
                    </form>
                </div>
            );
    }
}

export default MemoDetail;