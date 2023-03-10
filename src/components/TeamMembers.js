import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export const query = graphql`
    query{
  allNodeTeamMember {
    nodes {
      title
      field_team_member_charge
      field_team_member_description
      relationships {
        field_team_member_icons {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
        field_team_member_image {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
}
`

const TeamMembers = () => {
  const members = useStaticQuery(query).allNodeTeamMember.nodes;
  console.log(members);

  return (
    <Wrapper>
      Hello world
      {/* contenedor de las cards */}
      <div className='card-container'>
        {members.map((member, index) => {
          return (
            /* cada card */
            <div className='card' key={index}>
              {/* imagen de la card */}
              <GatsbyImage
                image={getImage(member.relationships.field_team_member_image.localFile)}
                alt={member.title}
                className='card-image'
              />
              {/* header de la card (nombre y cargo) */}
              <div className='card-header'>
                {/* nombre del miembro del team */}
                <p className='card-name'>{member.title} <span className='card-sep'></span><span className='charge-text'>{member.field_team_member_charge}</span></p>
              </div>
              <hr className='card-line'></hr>
              {/* footer de la card */}
              <div className='card-footer'>
                {/* descripcion de la card */}
                <div className='card-description'>
                  {member.field_team_member_description}
                </div>
                {/* iconos de la card */}
                <div className='icons-container'>
                  <GatsbyImage
                    image={getImage(member.relationships.field_team_member_icons[0].localFile)}
                    alt='Icon'
                    className='card-icon'
                  />
                  <GatsbyImage
                    image={getImage(member.relationships.field_team_member_icons[1].localFile)}
                    alt='Icon'
                    className='card-icon'
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
.card-container{
    width: 80%;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(3, 1fr);
    margin: 40px auto;
}
.card{
    width: 380px;
    height: auto;
    border-radius: 10px;
    margin: auto;
    border: 1px solid #E7EAEE;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
    padding: 32px;
    //background-color: red;
}
.card-image{
    width: 313px;
    height: 280px;
    margin: auto;
}
.card-name{
  display: flex; 
  flex-direction: row;
  align-items: center;
  width: 380px;
  height: 30px;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
}
.card-sep{
  border: 1px solid #E7EAEE;
  transform: rotate(90deg);
  width: 12px;
  height: 0px;
}
.charge-text{
  background: linear-gradient(89.63deg, #339999 5.4%, #FF9933 49.53%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
}
.card-description{
  width: 350px;
  height: 60px;
  font-weight: 400;
  font-size: 16px;
}
.icons-container{
  display: flex; 
  flex-direction: row;
  align-items: flex-start;
  gap: 12px;
  width: 90px;
  height: 40px;
}

.card-line{
  border: none; 
  border-top: 2px solid #E6E6E6;
  width: 300px;
}

@media only screen and (max-width: 1300px){
  .card-container{
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 860px){
  .card-container{
    grid-template-columns: repeat(1, 1fr);
  }
}
@media only screen and (max-width: 420px){
    .card-container, .card{
      width: 300px;
    }
    .card-image{
      max-width: 250px;
      max-height: 200px;
    }
    .card-line{
      width: 150px;
      margin: auto;
    }
    .card-name{
      width: 250px;
      margin: auto;
      height: 50px;
    }
    .card-description{
      width: 300px;
    }
    .icons-container{
      margin-top: 20px;
    }
}
`
export default TeamMembers
