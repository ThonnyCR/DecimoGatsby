import React, { useState, useEffect, useContext,navigate  } from "react";
import styled from "styled-components";
import { useStaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons";
import { ScrollContext } from "../contexts/ScrollContext";

export const query = graphql`
  query getNodeNavbar {
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
`;
const Navbar = (props) => {
  const [clicked, setClicked] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { setScrollTo } = useContext(ScrollContext);

  const handleNavLinkClick = (section) => {
    setScrollTo(section);
    handleClick();
  };

  const handleClick = () => {
    setClicked(!clicked);
    // props.toggleBodyScroll(!clicked);
    setShowOverlay(!showOverlay);
  };

  useEffect(() => {
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
  
    window.addEventListener("resize", handleResize);
  
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth > 1350 && clicked) {
      // props.toggleBodyScroll(false);
      setClicked(false);
      setShowOverlay(false);
    }
  }, [windowWidth, clicked, props]);

  const data = useStaticQuery(query);
  const items = data.allNodeNavbar.nodes[0].field_navbaritems;
  const image = getImage(
    data.allNodeNavbar.nodes[0].relationships.field_navbarimage.localFile
  );
  return (
    <Wrapper>
      <header className="navbar">
        {/* img */}
        <div className="nav-logo">
          <Link to="/">
            <GatsbyImage image={image} alt="Decimo logo" className="logo" />
          </Link>
        </div>

        {/* items */}
        <nav className="nav-items">
          <ul className={`nav-menu ${clicked ? "active" : ""}`}>
            <li className={`nav-item btn-fatimes`}>
              <span className="btn-fatimes-cursor">
                <IconContext.Provider value={{ size: 25, color: "white" }}>
                    <FaTimes onClick={handleClick} />
                </IconContext.Provider>
              </span>
            </li>
              {/* Home */}
            <li className="nav-item">
              <Link to="/" className="menu-link" onClick={handleClick}>
                {items[0]}
              </Link>
            </li>
              {/* Solutions */}
            <li className="nav-item">
              <Link to="/" className="menu-link" onClick={() => handleNavLinkClick("solutions")}>
                {items[1]}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="menu-link" onClick={handleClick}>
                {items[2]}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className="menu-link" onClick={handleClick}>
                {items[3]}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="menu-link" onClick={handleClick}>
                {items[4]}
              </Link>
            </li>
            <li className="nav-item">
              <button className="btn-contact">
                <Link
                  to="/ContactPage"
                  className="menu-link"
                  onClick={handleClick}
                >
                  {items[5]}
                </Link>
              </button>
            </li>
            <li className="nav-space"></li>
          </ul>
        </nav>

        <div className="hamburger" onClick={handleClick}>
          <IconContext.Provider value={{ size: 25 }}>
            <span>
              <FaBars />
            </span>
          </IconContext.Provider>
        </div>
      </header>
      <div className={`overlay ${!showOverlay ? '' : 'active'}`}></div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  li {
    list-style: none;
  }

  .navbar {
    min-height: 70px;
    display: flex;
    align-items: center;
    padding: 45px 126px;
  }

  .nav-menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 60px;
  }

  .nav-items {
    display: flex;
    justify-content: end;
    gap: 49px;
  }

  .nav-logo {
    width: 147px;
  }

  .menu-link {
    font-size: 16px;
    color: black;
    text-decoration: none;
    transition: 0.4s ease;
  }

  .menu-link:hover {
    color: #1b7e7e;
  }

  .btn-contact {
    width: 125px;
    height: 48px;
    border-radius: 25px;
    background-color: #ff9933;
    border: none;
  }

  .btn-contact .menu-link {
    color: white;
    font-size: 16px;
    font-weight: bold;
  }

  .btn-contact:hover .menu-link {
    color: #ff9933;
  }
  
  .btn-contact:hover {
    background-color: white;
    transition: 0.3s;
    border: solid 1px #ff9933;
  }

  .hamburger {
    display: none;
    cursor: pointer;
  }
  .btn-fatimes {
    display: none;
  }

  .btn-fatimes-cursor{
    cursor:pointer;
  }

  .hamburger-icon {
    height: 2em;
  }

  @media (max-width: 1350px) {
    .navbar {
      padding: 30px 50px;
    }

    .hamburger {
      display: block;
    }

    ul.nav-menu {
      padding-left: 0;
    }

    .nav-menu {
      display: block;
      position: fixed;
      right: -50%;
      top: 0;
      gap: 0;
      flex-direction: column;
      background-color: #339999;
      width: 50%;
      text-align: right;
      -webkit-transition: .5s ease;
      transition: .5s ease;
      height: 100%;
      z-index: 3;
    }

    .nav-space {
      height: 100%;
      background-color: #1b7e7e;
    }

    .nav-item {
      margin: 50px 0px;
      padding-right: 35px;
    }

    .btn-fatimes {
      display: block;
    }

    .nav-menu.active {
      right: 0% !important;
    }

    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.6);
      z-index: 2;
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.3s ease, visibility 0.3s ease;
    }

    .overlay.active {
      opacity: 1 !important;
      visibility: visible !important;
    }

    .nav-menu .menu-link {
      font-size: 24px;
      color: white;
    }

    .menu-link:hover {
      color: #ff9933;
    }

    .btn-contact {
      width: 100%;
      height: 48px;
      border-radius: 0px;
      background-color: #339999;
      padding-right: 0 !important;
      border: none;
      text-align: right;
    }

    .btn-contact .menu-link {
      color: white;
      font-size: 24px;
      font-weight: normal;
    }

    .btn-contact:hover {
      background-color: #339999;
      transition: 0.3s;
      border: none;
    }
  }
`;

export default Navbar;
