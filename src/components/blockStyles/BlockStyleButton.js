import React from "react"
import UIButton from "../EditorButton";


class BlockStyleButton extends React.Component {
onToggle = (e) => {
    e.preventDefault()
    this.props.onToggle(this.props.style)
  }
render() {
    let className = "RichEditor-styleButton"
    if (this.props.active) {
      className += " RichEditor-activeButton"
    }
return (
      <UIButton 
        className={className} 
        onButtonClick={this.onToggle} 
        content={this.props.label}>
      </UIButton>

    );
  }
}


export default BlockStyleButton