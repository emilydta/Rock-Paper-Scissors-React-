function RpsButton(props) {
    return (
        <button 
            className="rps-button"
            onClick={props.onClick}
            >
            {props.playerChoice}
        </button>
    )
}

export default RpsButton;