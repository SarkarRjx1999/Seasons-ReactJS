import React from 'react'

function Spin(props) {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{props.msg}
      </div>
    </div>
  );
};
Spin.defaultProps = {
msg:"Ruko zra ! Sbr kro 🖐"
}
export default Spin