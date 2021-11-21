import './App.css';

function CustomButton(props) {

  return (
    <div className="custom-button">
        <button onClick={() => { makeCall(props.name.toLowerCase()) }}>
            {props.name}
        </button>
    </div>
  );
}

function makeCall(methodName) {
    fetch(`http://10.0.0.50:3000/${methodName}`)
        .then(({ results }) => console.log("Results ==> ", results));

}

export default CustomButton;
