function PlayAgainButton(props) {
    return (
        <button 
            className="play-again-button"
            onClick={props.onClick}
            >
            Play Again
        </button>
    )
}

export default PlayAgainButton;
