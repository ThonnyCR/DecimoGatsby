import { graphql,useStaticQuery } from 'gatsby';
import React, { useState} from 'react'
import styled from 'styled-components';
import { Link } from 'gatsby';

export const query = graphql`
  query {
    allNodeContactForm {
      nodes {
        field_title_form
        field_name_form
        field_name_label
        field_email_form
        field_email_label
        field_message_form
        field_message_label
        field_button_form
      }
    }
  }
`
function ContactForm () {

    //Constantes que contienen titulos y subtitulos del formulario de contacto
    const titleForm = useStaticQuery(query).allNodeContactForm.nodes[0].field_title_form;
    const nameSubtitleForm = useStaticQuery(query).allNodeContactForm.nodes[0].field_name_form;
    const nameLabelInput = useStaticQuery(query).allNodeContactForm.nodes[0].field_name_label;
    const emailSubtitleForm = useStaticQuery(query).allNodeContactForm.nodes[0].field_email_form;
    const emailLabelInput = useStaticQuery(query).allNodeContactForm.nodes[0].field_email_label;
    const messageSubtitleForm = useStaticQuery(query).allNodeContactForm.nodes[0].field_message_form;
    const messageLabelInput = useStaticQuery(query).allNodeContactForm.nodes[0].field_message_label;
    const buttonText = useStaticQuery(query).allNodeContactForm.nodes[0].field_button_form;

    //Variables o atributos que se declaran para poder manejar el formulario de contacto
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [message,setMessage] = useState('');
    const [checkbox,setCheckbox] = useState(false);
    const [success,setSuccess] = useState(false);
    const [error, setError] = useState(false);

    function handleNameChange(event){
      setName(event.target.value);
    }

    function handleEmailChange(event){
      setEmail(event.target.value);
    }

    function handleMessageChange(event){
      setMessage(event.target.value);
    }

    function handleCheckboxChange(event){
      setCheckbox(event.target.value);
    }

    function handleSubmit(event){

      event.preventDefault();

      const formData = {
        "webform_id": "contact",
        "name": name,
        "email": email,
        "message": message,
        "checkbox": checkbox
      };

      fetch('https://decimodrupal.lndo.site/webform_rest/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then((response)=>{
          if(response.ok) {
            setSuccess(true);
          } else {
            setError(true);
          }
        })
        .catch((error) => {
          setError(true);
        });
    }

  return (
    <Wrapper>
      <div className="main-container">
        <h2 className="main-title">{titleForm}</h2>
        <form className="form-container" onSubmit={handleSubmit}>
          <div>
            <p className="name-text-style">{nameSubtitleForm}</p>
            <input className="name-input-style" type="text" value={name} onChange={handleNameChange} placeholder={nameLabelInput}/>
          </div>
          <div>
            <p className="email-text-style">{emailSubtitleForm}</p>
            <input className="email-input-style" type="email" value={email} onChange={handleEmailChange} placeholder={emailLabelInput}/>
          </div>
          <div>
            <p className="message-text-style">{messageSubtitleForm}</p>
            <textarea className="message-input-style" type="text" value={message} onChange={handleMessageChange} placeholder={messageLabelInput}/>
          </div>
          <div className="checkbox-container">
            <input className="checkbox-style" type="checkbox" value={checkbox} onChange={handleCheckboxChange} id="checkbox"/>
            <label for="checkbox" className="checkbox-text-style">
              I agree to <Link to='/PrivacyPolicy' className="privacy-link-style">Privacy Policy</Link> and <Link className="terms-link-style">Terms of Use</Link>
            </label>
          </div>
          <button type="submit" className="button-style">{buttonText}</button>
          {success && <p>Form submitted susccessfully!</p>}
          {error && <p>Error</p>}
        </form>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`

  .main-container{
    transform: translate(25%, 25%)
  }

  .form-container{
    display:flex;
    flex-direction:column;
  }

  .main-title{
    margin-top: 50px;
    font-size: 43px;
    font-style: normal;
    font-weight: 700;
    letter-spacing: -0.02em;
    color: #000000;
  }

  //Estilo de los titulos de los inputs
  .name-text-style{
    display:flex;
    flex-direction:column;
    gap:4px;
    font-style:normal;
    font-size:16px;
    font-weight: 500;
    color: #07090D;
    margin-top: 20px;
    transition: border .3s ease;
  }

  .email-text-style{
    display:flex;
    flex-direction:column;
    margin-top: 25px;
  }

  .message-text-style{
    display:flex;
    flex-direction:column;
    margin-top: 25px;
  }

  //Estilo de los inputs

  .name-input-style{
    width:100%;
    border-radius: 6px;
    height:48px;
    border: 1px solid #E7EAEE;
    transition: border .7s ;
    &:focus {
        outline: none;
        border-color: #339999;
    }
    ::placeholder{
      color:#ACB4C3;
      font-size: 16px;
      font-weight: 400;
      font-style:normal;
      letter-spacing: -0.09px;
    }
  }

  .email-input-style{
    width:100%;
    border-radius: 6px;
    height:48px;
    border: 1px solid #E7EAEE;
    transition: border .7s ;
    &:focus {
        outline: none;
        border-color: #339999;
    }
    ::placeholder{
      color:#ACB4C3;
      font-size: 16px;
    }
  }

  .message-input-style{
    resize:none;
    width:100%;
    border-radius: 6px;
    height:105px;
    border: 1px solid #E7EAEE;
    transition: border .7s ;
    padding: 13px 13px;
    &:focus {
        outline: none;
        border-color: #339999;
    }
    ::placeholder{
      color:#ACB4C3;
      font-size: 16px;
    }
  }

  //Estilo del checkbox

  .checkbox-container{
    margin-top: 24px;
  }

  .checkbox-text-style{
    color: #586174;
    font-style: normal;
    font-size: 16px;
  }

  .checkbox-style{
    display:none;
  }

  .checkbox-container input + label:before{
    content:'';
    cursor: pointer;
    width: 16px;
    height: 16px;
    border: 1px solid #C3C9D5;
    border-radius: 3px;
    display: inline-block;
    background: #FFFFFF;
    margin-right: 16px;
    vertical-align: middle;
    margin-bottom: 3px;
  }

  .checkbox-container input:checked + label:before{
    background-color: #339999;
  } 

  //Estilo de los links de politicas y privacidad y terminos de uso

  .privacy-link-style{
    color: #3C4353;
    font-style: bold;
  }

  .terms-link-style{
    color: black;
  }

  //Estilo del boton

  .button-style{
    background-color: #339999;
    border-radius:88px;
    height:55px;
    border:none;
    margin-top: 24px;
    cursor:pointer;

    //font button style
    font-style:normal;
    font-weight:bold;
    font-size:15px;
    color:white;
    border:solid 1px #339999;
  }

  .button-style:hover{
    background-color: white;
    transition:0.3s;
    color: #339999;
    border:solid 1px #339999;
  }
`

export default ContactForm
