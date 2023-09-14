// components/Home.js
import { useState } from 'react';
import Listing from './Listing';
import cookie from 'cookie';
import { TableLabel } from './Listing';
import AddListing from '../../containers/AddListing';
import { PlusCircle } from '@phosphor-icons/react';

// import { addListing } from '../../redux/actions';

function Home(props) {
  const cookies = cookie.parse(document.cookie);
  const [showPopUp, setShowPopUp] = useState(false);

  const handlePopUp = () => {
    setShowPopUp(!showPopUp);
  };

  return (
    <>
      <br />
      <TableLabel />
      {props.bizInfo.map((biz) => (
        <Listing
          key={biz.id}
          bizName={biz.bizName}
          description={biz.description}
          hours={biz.hours}
          address={biz.address}
          delete={props.deleteListing}
        />
      ))}
      {showPopUp === true && (
        <AddListing
          allBiz={props.bizInfo.length}
          isPopupOpen={showPopUp}
          togglePopup={handlePopUp}
        />
      )}
      {cookies.isLoggedIn && (
        <PlusCircle
          size={32}
          onClick={handlePopUp}
          style={{ cursor: 'pointer', color: 'grey', marginLeft: '96%' }}
        />
      )}
    </>
  );
}

export default Home;
