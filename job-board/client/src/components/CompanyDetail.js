import { useParams } from 'react-router';
import { getCompanyById } from '../graphql/queries';
import { useEffect, useState } from 'react';

function CompanyDetail() {
  const { companyId } = useParams();
  const [companyById, setCompanyById] = useState({})

  useEffect(() => {
    getCompanyById(companyId).then(setCompanyById)
  }, [companyId])

  if(!companyById){
    return <p>Loading....</p>
  }
  

  return (
    <div>
      <h1 className="title">
        {companyById.name}
      </h1>
      <div className="box">
        {companyById.description}
      </div>
    </div>
  );
}

export default CompanyDetail;
