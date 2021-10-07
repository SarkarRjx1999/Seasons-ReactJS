import React from 'react'
import "./ssnDsip.css";

const ssnConfig = {
  summer: {
    text: "let's hit the beach ",
    iconName: "Sun"
  },
  winter: {
    text: "burr ! it's cold ",
    iconName: "snowflake"
  }
};

const getSsn = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  }
  else {
    return lat > 0 ? "winter" : "summer";
  };
}

const SsnDisp = (props) => {
  const ssn = getSsn(props.lat, new Date().getMonth());
  // const text = ssn === "Winter" ? "Burr , it's chilly ! " : "let's hit the beach";
  // const icon = ssn === "Winter" ? "Snowflake" : "Sun";
  const { text, iconName } = ssnConfig[ssn];     //array destructoring
  return (
    <div className={`ssn-disp ${ssn}`}>
      <i className={`icon-left massive ${iconName} icon `} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon `} />
    </div>
  )
};
export default SsnDisp
