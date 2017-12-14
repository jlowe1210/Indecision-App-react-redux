import React from 'react';
import './action.css'
import {  Modal, ModalHeader, ModalBody } from 'reactstrap';
import * as actions from '../../Actions/Actions';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import Aux from '../../HOC/Aux'




class Action extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            modal: false,
        }
    }
    toggle = () =>{
        this.setState((prevState)=>{
            return {
                modal: !prevState.modal
            }
        })
    }


    render(){
        const style = {
            textAlign: 'center'
        }

        let buttonDisableStyle = null;
        if(this.props.options.length ===0){
            buttonDisableStyle = {
                opacity: .5,
                cursor: 'default'
            }
        }
        return(
            <Aux>
                <button onClick={this.toggle} disabled={this.props.options.length === 0} className='big-button' style={buttonDisableStyle}>What should i do?</button>
                    <Modal isOpen={this.state.modal} fade={false} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Selected Option</ModalHeader>
                    <ModalBody>
                        <h1 style={style}>{this.props.options[Math.floor(Math.random()* this.props.options.length)]}</h1>
                    </ModalBody>
                </Modal>
            </Aux>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
  }

  function mapStateToProps(state){
    return {
        options: state.options
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Action);