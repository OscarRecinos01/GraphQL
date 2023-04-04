import { request , gql } from "graphql-request"

const GRAPHQL_URL = "http://localhost:9000/graphql"

export const getJobs = async () => {
    const query = gql`
        query{
            jobs {
                id
                title
                company {
                    id
                    name
                }
            }
        }         
    `
    const {jobs} = await request(GRAPHQL_URL,query)
    return jobs
}


export const getJob = async (id) => {
    const query = gql`
        query JobQuery($id: ID!){
            job(id: $id) { 
                id
                title
                company {
                    id
                    name
                }
                description
            }
        }   
    `
    const variables = {id}
    const {job}= await request(GRAPHQL_URL,query,variables)
    console.log("SINGLE JOB",job);
    return job
}

export const getCompanyById = async (id) => {
    const query = gql`
            query companyQuery($id: ID!){
                companyById(id: $id) {
                    id
                    name
                    description
                }  
        }
    `
    const variables = {id}
    const {companyById}= await request(GRAPHQL_URL,query,variables)
    console.log("SINGLE COMPANY",companyById);
    return companyById
}