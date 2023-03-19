import React, {useState} from 'react'

async function enviarDatos(datos){
    try{
        const response = await fetch("https://decimodrupal.lndo.site/webform_rest/submit",{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
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
        return(
        <form onSubmit={handleSubmit}>
            <input type="email" id="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)}/>
            <button type="submit">Enviar</button>
        </form>
    )
}

export default Newsletter;