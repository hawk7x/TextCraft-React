import React from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // });

    let myStyle = {
        color: props.mode === 'dark' ? 'white' : '#042743',
        backgroundColor: props.mode ===  'dark' ? 'rgb(36 74 104)' : 'white'
    }

  return (
    <div className="container">
        <h1 className="my-3" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>About Us</h1>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Analyze your text</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    Powerful text analysis tools. TextUtils helps you analyze your text quickly and efficiently. You can convert text to uppercase or lowercase, remove extra spaces, copy text to clipboard, and get instant statistics like word count, character count, and estimated reading time. This tool is designed to save your time and improve productivity when working with text.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Free to use</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    100% free and easy to use. TextUtils is completely free to use and does not require any registration or subscription. You can access all features instantly from your browser. Our goal is to provide a simple yet powerful text utility tool that is available to everyone without any limitations.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Browser Compatible </strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    Works on all modern browsers. TextUtils is fully compatible with all modern web browsers such as Chrome, Firefox, Edge, and Safari. The application is responsive and works smoothly on both desktop and mobile devices, ensuring a consistent user experience across different platforms.
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
