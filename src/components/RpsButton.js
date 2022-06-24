function RpsButton(props) {
    return (
        <button 
            className="rps-button"
            onClick={props.onClick}
            >
            {props.playerOption}
        </button>
    )
}

export default RpsButton;