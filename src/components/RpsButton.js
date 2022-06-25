function RpsButton({ onClick, value }) {
    return (
        <button 
            className="rps-button"
            onClick={onClick}
            id={value}
            >
            {value}
        </button>
    )
}

export default RpsButton;