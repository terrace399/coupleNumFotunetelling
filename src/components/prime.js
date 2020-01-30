import React, { Component } from 'react';

export default class Prime extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      name: '',
      firstNum: '',
      secondNum: '',
      message: '相性の良いペアを入力すると良いことがあるかも、、、',
      debug: '',
    };
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange (e) {
      this.setState({value: e.target.value})
  }
  setRandomNums = () => {
    var randoms = [Math.floor(Math.random() * 1000),Math.floor(Math.random() * 1000)];

    this.setState({
      debug: randoms,
      firstNum: randoms[0],
      secondNum: randoms[1],
    })
  }
  setFirstNum = (e) => {
    this.setState({
      firstNum: e.target.value
    });
    this.maxLengthCheck(e)
  }

  setSecondNum = (e) => {
    this.setState({
      secondNum: e.target.value
    });
    this.maxLengthCheck(e)
  }
  maxLengthCheck = (e) => {
   if (e.target.value.length > e.target.maxLength) {
    e.target.value = e.target.value.slice(0, e.target.maxLength)
     }
   }
  divisor = (num) => {
    var results = [];
    for(var i=2; i<=num; i++) {
        if( (num%i == 0) ) {
            results.push(i);
        }
    }
    return results;
  }
  divisorCheck = (firstDivs, secondDivs) => {
    // let testDivs = ['2','3','4']
    var commonDivs = [];
    for(var i = 0; i < firstDivs.length; i++){
      for(var j = 0;  j < secondDivs.length; j++){
        if(firstDivs[i] == secondDivs[j]){
          commonDivs.push(firstDivs[i]);
        }
      }
    }
    return commonDivs;
  }

  putNumbers = () => {
    //数字を取得
    let first = this.state.firstNum;
    let second = this.state.secondNum;
    //それぞれの数字の約数の配列を取得
    const firstDivs = this.divisor(first);
    const secondDivs = this.divisor(second);
    const commonDivs = this.divisorCheck(firstDivs, secondDivs);
    console.debug(commonDivs);
    const quantity = commonDivs.length;
    var message;
    //入力された数字を昇順に並び替え
    var array = [first,second];
    array.sort(function(a,b){
      return a - b;
    });

    //友愛数チェック
    const fraternitys = ['220','284'];
    const fraCheck = JSON.stringify(fraternitys) == JSON.stringify(array);

    //婚約数チェック
    const engagements = [['48','75'],['140','195']];
    let i = 0;
    while(i < engagements.length){
      var engCheck = JSON.stringify(engagements[i]) == JSON.stringify(array);
      if( engCheck ){
        break;
      }
      i ++;
    }

    //ーーーーーーーデバッグーーーーーー
    // console.debug(array)
    // console.debug(fraternitys)
    // <input type="number"/>で入力されるのは文字列だと言う事が判明した、詐欺

    // var div = this.divisor(140);
    // console.debug(div);
    // this.setState({
    //   debug: div,
    // });
    //ーーーーーーーーーーーーーーーーー

    //数のカテゴライジング
    if(fraCheck){
      message = '友愛数です！！';
      console.debug(message);
    }else if(engCheck){
      message = '婚約数です！！';
      console.debug(message);
      console.debug(engCheck);
    }else if(first == second && first != ''){
      message = '同じ数です!';
    }else if(first % second == 0){
      message = `数Aが数Bの倍数です！共通の約数を${quantity}個持っています！`;
      console.debug(message);
    }else if(second % first == 0){
      message = `数Bが数Aの倍数です！共通の約数を${quantity}個持っています！`;
      console.debug(message);
    }else if(quantity > 0){
      message = `共通の約数を${quantity}個持っています！`;
      //共通約数の個数で場合分けする関数作りたい
      console.debug(message);
    }else{
      message = '互いに素';
      message += 'でーす';
    }
    this.setState({
      message: message
    });
  }
  //共通約数のパーセント
  comDivData = (num) => {
    const data = [[0, 60.8383], [1, 27.5034], [2, 4.6931], [3, 4.8886], [4, 0.2475], [5, 1.1412], [6, 0.0144], [7, 0.4366], [8, 0.0566], [9, 0.0478], [11, 0.0977], [13, 0.0031], [14, 0.0034], [15, 0.0172], [17, 0.0059], [19, 0.0025], [20, 0.0001], [23, 0.0022], [26, 0.0001], [27, 0.0001], [29, 0.0001], [31, 0.0001]];
    for(var i = 0;i < data.length; i++){
      if(num = data[i][0]){
        return data[i];
      }
    }
  }
  render() {
    const { todos } = this.state;
    return (
    <div>
      <h1>カップル数占い（1000まで対応しています)</h1>
      <input type="number" min={1} max={999} maxLength={3} step = "11" placeholder='数を入力する' onInput={this.setFirstNum} class ='firstInput'/>
      <input type="number" min={1} max={999} maxLength={3} step = "11" placeholder='数を入力する' onInput={this.setSecondNum} />
      <input min={1} max={999} maxLength={3} step = "11" placeholder='数を入力する'
        value={this.state.debug} onChange={this.handleChange} />
      {
      // <h2>{this.state.firstNum}</h2>
      // <h2>{this.state.secondNum}</h2>
      }
      <button onClick={
        () => this.putNumbers()} >登録</button>
      <button onClick={
          () => this.setRandomNums()}>自動生成</button>
      <h2>{this.state.message}</h2>
      <h3>{this.state.debug}</h3>
      {
      // <ul>
      //   {todos.map((todo, index) => <li key={index}>
      //     {todo}
      //     <button onClick={() => { this.removeTodo(index) }}>削除</button>
      //   </li>)}
      // </ul>
      }
    </div>);
  }
}
