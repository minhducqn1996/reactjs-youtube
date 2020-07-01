import React from 'react';

class Section extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            trangThai: 0
        }
    }
    thongbao  = () => { alert('Cách xu ly tuong tac trong react js ');
    }
    thongbao2 = () =>  { alert('Thông báo số 2');
    }
    thongbao3 =  (x) => { alert(x);
    }

    renderButton = () => (
            <div classname="row">
                <button className="btn btn-group">
                    <div className="btn btn-info" onClick = { () => this.editClick()}>Edit</div>
                    <div className="btn btn-warning" onClick = {() => this.thongbao2()}>Remove</div>
                </button>
            </div>
        );
    renderForm  =  () => (
            <div classname="row">npx
                <form className="form-inline">
                    <div className="form-group">
                        <input ref={ (dulieunhap) => {this.trunggian = dulieunhap}} defaultValue={this.props.tieude} type="text" name="ten" className="from-control" />
                        <div className="btn btn-success"  onClick = { () => this.saveClick()}>Save</div>
                    </div>
                </form>
            </div>
        );
    
    
    displayCheck = ()  => {
        if( this.state.trangThai  === 0){
            return  this.renderButton();
        }  else{
            return this.renderForm();
        }
    }

    editClick  =  () => {
        this.setState({trangThai:1});
    }

    saveClick  =  () => {
        this.setState({trangThai:0});
        console.log(this.trunggian.value);
    }

    render() {
        return (
                <section className="col-lg-4">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className= { "col-lg-5 " +  this.props.vitri1} >
                                <div className="p-1">
                                    <img className="img-fluid rounded-circle" src={this.props.anh} alt="" />
                                </div>
                            </div>
                            <div className= { "col-lg-7 " +  this.props.vitri2} >
                                <div className="p-1">
                                    <h2 className="display-6">  {this.props.tieude} </h2>
                                    <p> {this.props.noidung} </p>

                                    {this.displayCheck()}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        );
    }
}

export default Section;