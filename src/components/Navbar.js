import React from 'react'
import styled from 'styled-components';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { FaBars } from 'react-icons/fa';
import {IconContext} from "react-icons";

export const query = graphql`
    query getNodeNavbar  {
        allNodeNavbar {
        nodes {
            field_navbaritems
            relationships {
            field_navbarimage {
                localFile {
                childImageSharp {
                    gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
                }
                }
            }
            }
        }
    }
  }
`
const Navbar = () => {
    const data = useStaticQuery(query);
    const items = data.allNodeNavbar.nodes[0].field_navbaritems;
    const image = getImage(data.allNodeNavbar.nodes[0].relationships.field_navbarimage.localFile);
  return (
    <Wrapper>
        <header className='navbar'>     
            {/* img */}
            <div className='nav-logo'>
                <Link to="/">
                    <GatsbyImage
                        image={image}
                        alt='Decimo logo'
                        className='logo'
                        />
                </Link>
            </div>
                

            {/* items */}
            <nav className='nav-items'>
                <ul className='nav-menu'>
                    <li className='nav-item'>
                        <Link to='/' className="menu-link" >{items[0]}</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/' className='menu-link'>{items[1]}</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/' className='menu-link'>{items[2]}</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/blog' className='menu-link'>{items[3]}</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/' className='menu-link'>{items[4]}</Link>
                    </li>
                    <li className='nav-item'>
                        <button className='btn-contact'>
                            <Link to='/ContactPage' className='menu-link'>{items[5]}</Link>
                        </button>
                    </li>
                    <li className='nav-space'>
                    </li>
                </ul>
            </nav>

            <div className='hamburger'>
                <IconContext.Provider value={{ size: 25}}>
                    <span><FaBars /></span>
                </IconContext.Provider>
            </div>
        </header>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    li{
        list-style:none;
    }

    .navbar{
        min-height:70px;
        display:flex;
        /* justify-content:space-between; */
        align-items:center;
        padding:45px 126px;
        /* border-bottom: 1px solid rgba(0, 0, 0, 0.07); */
    }

    .nav-menu{
        display:flex;
        justify-content:space-between;
        align-items:center;
        gap:60px;
    }

    .nav-items{
        display:flex;
        width:100%;
        justify-content:end;
        gap:49px;
    }

    .nav-logo{
        width:147px;
    }

    .menu-link{
        font-size: 16px;
        color:black;
        text-decoration: none;
        transition:0.7s ease;
    }

    .menu-link:hover{
        color: #1B7E7E;
    }

    .btn-contact{
        width:125px;
        height:48px;
        border-radius:25px;
        background-color:#FF9933;
        border:none;
        cursor:pointer;
    }

    .btn-contact .menu-link{
        color:white;
        font-size: 16px;
        font-weight:bold;
    }

    .btn-contact:hover .menu-link{
        color: #FF9933
    }
    .btn-contact:hover{
        background-color:white;
        transition:0.3s;
        border:solid 1px #FF9933;
    }


    .hamburger{
        display:none;
        cursor:pointer;
        /* background-color: black; */
    }

    .hamburger-icon{
        height: 2em;
    }
    /* .bar{
        display:block;
        width: 25px;
        height:3px;
        margin:5px auto;
        -webkit-transition:all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
        background-color:white;
    } */

    @media (max-width:1200px){
        .navbar{
            padding:30px 50px;
        }

        .hamburger{
            display:block;
        }

        .nav-menu{
            display:block;
            position:fixed;
            right: -50%;
            top: 85px;
            gap: 0;
            flex-direction:column;
            background-color: #339999;
            width:50%;
            text-align: right;
            transition:0.3s;
            /* padding-right:35px; */
            height:100%;
        }

        .nav-space{
            height:100%;
            background-color: #1B7E7E;
        }

        .nav-item{
            margin: 50px 0px;
            padding-right:35px;
        }

        .nav-menu.active{
            right: 0%;
        }

        .nav-menu .menu-link{
            font-size: 24px;
            color:white;
        }

        .menu-link:hover{
            color: #FF9933;
        }
        
        .btn-contact{
            width:100%;
            height:48px;
            border-radius:0px;
            background-color:#339999;
            padding-right:0 !important;
            border:none;
            text-align:right;
        }

        .btn-contact .menu-link{
            color:white;
            font-size: 24px;
            font-weight:normal;
        }

        .btn-contact:hover{
            background-color: #339999;
            transition:0.3s;
            border: none;
        }
    }
`

export default Navbar
