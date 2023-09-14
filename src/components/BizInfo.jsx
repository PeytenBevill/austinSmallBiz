import {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import MapContainer from "./Map"

function BizInfo(props) {
  const { bizName } = useParams();
  const bizInfo = props.bizInfo.find(bizInfo => bizInfo.bizName === bizName);

  const { address, hours, description, src } = bizInfo


  return (
    <>
      <div className='bizPage'>
      <h1>{bizName}</h1>
      <h4>{address}</h4>
      <h4>{hours}</h4>
      <p className='description'>{description}</p>
      <MapContainer address={address}/>
      </div>
    </>
  );
}

export default BizInfo;
