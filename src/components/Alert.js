import React from 'react'

export default function Alert(props) {
    
    const capitalize = (word)=>{    // делает первую букву заглавным 
        const lower = word.toLowerCase(); // делает все буквы маленькими
        return lower.charAt(0).toUpperCase() + lower.slice(1); // берет первую букву и сделает его большой и 
    }

    if(!props.alert){
        return null;
    }
  return (
    <div className="position-fixed top-0 start-50 translate-middle-x mt-3"> {/* bootstrap alert астындағы контентті қозғамауы үшін*/}
        <div className={`alert alert-${props.alert.type} fade show`} role="alert">
            <strong>{capitalize(props.alert.type)}</strong> {props.alert.msg}
        </div>
    </div>
  )
}