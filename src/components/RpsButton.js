function RpsButton({ handleClick, value }) {
    return (
        <button 
            className="rps-button"
            onClick={handleClick}
            id={value}
            >
            {value}
        </button>
    )
}

export default RpsButton;