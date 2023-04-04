import React, { useState } from "react";
import { graphql } from "gatsby";
import Job from "../components/Job";
import setupJobs from "../utils/setupJobs";
import styled from "styled-components";
import Layout from "../components/Layout";

const filterJobs = (jobs, filter) => {
  if (filter === "all") return jobs;
  return jobs.filter(
    (job) => job.relationships.field_job_department.name === filter
  );
};

const JobsPage = ({ data }) => {
  const newsJobs = setupJobs(data.allNodeOpenPositionsJobs.nodes);

  const [filter, setFilter] = useState("all");
  const jobs = data.allNodeOpenPositionsJobs.nodes;
  const jobPage = data.allNodeOpenPositionsPage.nodes[0];

  const filteredJobs = filterJobs(jobs, filter);
  // console.log(filteredJobs)

  return (
    <Layout>
      <Wrapper>
        <div className="jobs-container jobs-gradient">
          <div className="jobs-main">
            <section className="jobs-header">
              <h2>{jobPage.field_open_positions_page_title}</h2>
              <div className="btns-filter">
                <button onClick={() => setFilter("all")} className="btn-filter">{jobPage.field_open_positions_button_filt}</button>
                {/* Sorted alphabetically */}
                {newsJobs.map((job, index) => {
                  const [text, value] = job;
                  return (
                    <button key={index} onClick={() => setFilter(`${text}`)} className="btn-filter">
                      <p>{text}</p>
                    </button>
                  );
                })}
              </div>
            </section>
            <section className="jobs-body">
              {/* Sorted DESC */}
                {filteredJobs.map((job) => (
                  <Job
                    key={job.id}
                    jobTitle={job.field_job_title}
                    jobLocation={job.field_job_location}
                    jobBody={job.body.value}
                    jobDepartment={job.relationships.field_job_department.name}
                    openPositionsButtun={
                      jobPage.field_open_positions_page_button
                    }
                    jobSchedule={job.field_job_schedule}
                    jobLink={job.field_job_link.uri}
                  />
                ))}
            </section>
          </div>
        </div>
      </Wrapper>
    </Layout>
  );
};

export default JobsPage;

export const query = graphql`
  query {
    allNodeOpenPositionsPage {
      nodes {
        field_open_positions_page_title
        field_open_positions_page_button
        field_open_positions_button_filt
      }
    }
    allNodeOpenPositionsJobs(sort: { created: DESC }) {
      nodes {
        id
        field_job_title
        field_job_location
        field_job_schedule
        field_job_link{
          uri
          title
        }
        body {
          value
        }
        relationships {
          field_job_department {
            name
          }
        }
      }
    }
  }
`;

const Wrapper = styled.main`
  .jobs-container {
    width: 100%;
  }
/* 
  .jobs-gradient{
    background: 
      radial-gradient(
        50% 60% at 75% 50%, rgba(255, 153, 51, 0.35) 0%, rgba(255, 204, 153, 0) 60%),
      radial-gradient(50% 50% at 60% 43%, rgba(51, 153, 153, 0.35) 0%, rgba(128, 202, 203, 0) 60%);
  } */
  
  .jobs-main {
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }

  .jobs-header {
    width: 100%;
  }

  .jobs-header h2{
    margin-bottom:62px !important;
  }

  .jobs-body {
    width: 100%;
  }

  /* Filter Buttons */

  .btns-filter{
    display:flex;
    flex-wrap:wrap;
    gap: 16px;
  }

  .btn-filter {
    padding: 5px 20px;
    border-radius: 25px;
    background-color: #ffffff;
    border: none;
    color: #000B28;
    font-size: 16px;
  }

  .btn-filter:hover {
    background-color: #ff9933;
    transition: 0.3s;
    color: #ffffff;
  }

  @media (max-width: 1350px) {
      .jobs-main {
      max-width: 800px;
    }
  }


  @media (max-width: 762px) {
    .jobs-main {
    max-width: 500px;
  }
  }
`;
