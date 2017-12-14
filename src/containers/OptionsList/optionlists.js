import React, { Component } from 'react';
import '../addOption/addoption'
import Option from './Options/options'
import * as actions from '../../Actions/Actions'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';



class OptionsList extends Component{
    
    render(){
        
        let options = <p className='widget-message'>Please add option to get started</p>
        if(this.props.options.length !== 0){
            options = null
        }
        let myOptions = null
        if(this.props.options.length !== 0){
            myOptions = this.props.options.map((option, inx)=>{
                return <Option key={inx + ' ' + option} inx={inx} content={option} remove={() => this.props.remove(inx)}/>
            })
        }
       
        return(
            <div>
            <div className='widget-header'>
                <h3>Your Options</h3>
                <button onClick ={this.props.removeAll} className='button button-link'>Remove All</button>
            </div>
                {options}
                {myOptions}
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        options: state.options
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
  }



export default connect(mapStateToProps, mapDispatchToProps)(OptionsList);
 