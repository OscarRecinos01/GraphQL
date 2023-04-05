import { useParams } from 'react-router';
import { getCompanyById } from '../graphql/queries';
import { useEffect, useState } from 'react';
import JobList from "./JobList"

function CompanyDetail() {
  const { companyId } = useParams();
  const [companyById, setCompanyById] = useState(null)

  useEffect(() => {
    getCompanyById(companyId).then(setCompanyById)
  }, [companyId])

  if(!companyById){
    return <p>Loading....</p>
  }
  
  console.log(companyById);

  return (
    <div>
      <h1 className="title">
        {companyById.name}
      </h1>
      <div className="box">
        {companyById.description}
      </div>
      <h5 className='title is-5'>
        Jobs at {companyId.name}
      </h5>
      <JobList jobs={companyById.jobs}/> 
    </div>
  );
}

export default CompanyDetail;
