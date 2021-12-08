import './App.css';

function CustomButton(props) {

  return (
    <div className="custom-button">
        <button onClick={() => 
          props.isUIDisabled("notConnected"), 
          makeCall(props.name.toLowerCase()) }>
            {props.name}
        </button>
    </div>
  );
}

function makeCall(methodName) {
    fetch(`http://10.0.0.50:3001/${methodName}`)
    .then(response => response.json())
    .then(data => {
      console.log("data", data)
    })
    .catch(error => console.log(error))
}

export default CustomButton;
