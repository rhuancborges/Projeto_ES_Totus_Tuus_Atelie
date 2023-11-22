import './Input.css';

function Input({ type, placeholder }) {
    return (
        <div className='formsContainer'>
            <input type={type} placeholder={placeholder} />
        </div>
    )
}

export default Input;