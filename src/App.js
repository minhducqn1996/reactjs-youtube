import React from 'react';
import logo from './logo.svg';
import './App.css';
import Products  from "./Component/Products";
import  Four  from "./Component/Four";


//Kiểu hàm bình thường
function One(){
  return  <div>  Cach so 1 </div>;
}

//Kiểu hàm anonymous finction
var Two = function(){
  return (
    <div> Cách so 2 </div>
  );
}

//Kiểu arrow function
var Three = () =>  (
                    <div>
                      <h4> Cách số 3</h4>
                    </div>
                  );

//Kiểu class
const a1  = "Đức";
class Five extends React.Component {

  render() {
    return (
      <div>
        <h3 className=""> ten toi là : {a1}</h3>
        <div className="form-check">
          <label className="form-check-label">
            <input type="checkbox" className="form-check-input" name id defaultValue="checkedValue" defaultChecked />
            Display value
          </label>
        </div>        
      </div>
    );
  }
}

//Cách 2 sử dụng Class để định nghĩa và thao tác với props
class NumberTwo extends React.Component {
  render() {
    return (
      <div>
          <div className="col-4"> 
            <div className="card">
              <img className="card-img-top" src={this.props.linkanh} alt="" />
              <div className="card-body">
                <h4 className="card-title"> {this.props.tieude} </h4>
                <p className="card-text"> Ambassador Kritenbrink met Secretary Nhan on the former’s working   </p>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

//Sử dụng hàm map trong react Js 
const so = [1,2,3,4,5];
const so2 = so.map ((x) => x*2 + ",");
const so3 = so.map ((x) =>  
<ul>
  <li> So : {x} </li>
</ul>
class App extends React.Component {
  render() {
    return (
      <div>
        {so3}
      </div>
    );
  }
}



function App1() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <One />
        <Two />
        <Three />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <br/>
        <div className="container">
          <div className="row">
            <NumberTwo tieude="Sản phẩm 1" linkanh="https://secure3.vncdn.vn/ttnew/r/2020/06/24/nguyen-thien-nhan-1-jpg-1592981302.jpg" />
            <NumberTwo tieude="Sản phẩm 2" linkanh="https://s.tuoitrenews.vn/ttnew/r/2020/06/24/nguyen-thien-nhan-2-jpg-1592981302.jpg" />
            <NumberTwo tieude="THtrue milk" linkanh="https://secure3.vncdn.vn/ttnew/r/2020/06/24/may-bay-vietjet-noi-bai-1592907172191753563895-1592978482.jpg" />
          </div>
        </div>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Products />
        <Four />
        <Five />
      </header>
    </div>
  );
}

export default App;
