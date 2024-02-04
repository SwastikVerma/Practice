import './css/index.css';
import React,{useEffect} from "react";
// import styles from './css/index.css';

function Loginform(){
    useEffect(()=>{
        const labels = document.querySelectorAll(".form-control label");

        labels.forEach((label) => {
        label.innerHTML = label.innerText
            .split("")
            .map(
            (letter, idx) =>
                `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
                
            )
            .join("");
        });
    },[]);
    return(
        <element>
            {/* <html lang="en"> */}
                {/* <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <link rel="stylesheet" href="./css/index.css" />
                    <title>Login Form</title>
                </head> */}
                {/* <body> */}
                <div id="body">
                    <div class="container">
                        <h1>Login Form</h1>
                        <form action="" method="get" accept-charset="utf-8">
                            <div class="form-control">
                            <input type="email" required />
                            <label>Email</label>
                            </div>
                            <div class="form-control">
                            <input type="password" required />
                            <label>Password</label>
                            </div>
                            <button class="btn">Login</button>

                            <p class="text">Don't have an account? <a href="www.google.com">Register</a></p>
                        </form>
                    </div>
                    </div>
                    {/* <script src="./js/index.js"></script> */}
                {/* </body> */}
            {/* </html> */}
        </element>
    );
}

export default Loginform;