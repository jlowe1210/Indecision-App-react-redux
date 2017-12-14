import React, {Component} from 'react';
import './addoption.css'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import * as actions from '../../Actions/Actions'

class AddOption extends Component{
    state = {
        term: ''
    }

    change = (e) =>{
        this.setState({
            term: e.target.value
        })
    }

    onAddOption = (e) => {
        e.preventDefault();
        this.props.addOption(this.option.value);
        this.setState({
            term: ''
        })

    }


    render(){
        return (
            <div>
                <form onSubmit={this.onAddOption}>
                    <input type='text' value={this.state.term} onChange={this.change} ref={input => this.option = input} />
                    <button disabled={this.state.term.trim() === ''} className='button'>Add Option</button>
                </form>
            </div>
        );
    }
}




function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
  }


export default connect(null, mapDispatchToProps)(AddOption)