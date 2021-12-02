import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import "./style.css"
import ShortProfile from "../ShortProfile"

class Picture extends React.Component {
    constructor(props){
        super(props)
    }
    state = {
      open: false
    };
  
    onOpenModal = () => {
      this.setState({ open: true });
    };
  
    onCloseModal = () => {
      this.setState({ open: false });
    };
  
    render() {
      const { open } = this.state;
      return (
        <div className="modal">
          <button className="button_overlay" onClick={this.onOpenModal}><img className="pictures" src={this.props.picture_link} alt={this.props.picture_link} /></button>
          <Modal open={open} onClose={this.onCloseModal}>
            <img className="modal_picture" src={this.props.picture_link} alt={this.props.picture_link} />
            <ShortProfile name="Simon Zhu" pseudo="@smnezhu" picture_link="https://cdn.pixabay.com/photo/2015/01/08/18/30/entrepreneur-593371_960_720.jpg"/>

          </Modal>
        </div>
      );
    }
  }


export default Picture;