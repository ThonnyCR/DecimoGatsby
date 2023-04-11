import React, {useState} from 'react'
import styled from 'styled-components';
import Swal from 'sweetalert2';
import '../styles/sweetalert2-custom.css';

async function enviarDatos(datos){
    try{
        const response = await fetch("https://decimodrupal.lndo.site/webform_rest/submit",{
            method: "POST",
            headers:{
                "Content-Type": "application/json",
                //'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify(datos),
        });
        const responseJson = await response.json();
        console.log("Respuesta del server", responseJson);
    } catch (error){
        console.error("Error al enviar los datos", error);
    }
}

const Newsletter = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const datos = {
            "webform_id": "subscription",
            "email": email,
        };

        enviarDatos(datos);
    };

const alert = () => {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'New Subscription',
        text: 'you have subscribed to Decimo Technology successfully',
        showConfirmButton: false,
        timer: 3000
    })
}
        return(
        <Wrapper>
            <div className='subscribe'>
            <form onSubmit={handleSubmit}>
                    <input placeholder='your email here' className='subsField' type="email" id="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)}/>
                    <button onClick={alert} className='subsButton' type="submit"><p className='substext'>Subscribe</p></button>
            </form>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`

    .subsField{
        box-sizing: border-box;
        /* position: absolute; */
        width: 473px;
        height: 45px;
        left: 127px;
        top: 624px;
        background: rgba(217, 217, 217, 0.1);
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 0px;
        border-radius: 10px 0px 0px 10px;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        padding-left: 10px;
        letter-spacing: -0.02em;
    }

    .subsButton{
        /* position: absolute; */
        width: 108px;
        height: 45px;
        left: 600px;
        background: #000B28;
        border-radius: 10px 0px 0px 10px;
        border: #000B28;
        transform: rotate(-180deg);
        padding-top: 10.5px;
        transition: background-color 200ms ease-out 100ms
    }
    .subsButton:hover{
        background: #339999;
        border: #339999;
        padding-top: 10.5px;
    }
    .subscribe{
        margin-left: 250px;
        padding-bottom: 20px;
    }

    .substext{
        transform: rotate(180deg);
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: -0.02em;
        color: #FFFFFF;
    }

`
export default Newsletter;