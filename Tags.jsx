import React from 'react';
import logo1 from '../Assets/logo1.png';
import logo7 from '../Assets/logo7.png';
import logo5 from '../Assets/logo5.png';

export default function Tags() {
  return (
    <div className="tags"  style={{
        backgroundColor: 'rgb(190, 191, 192)',
        width: '100%',
        height: '60%',
       paddingTop:'5%',
       paddingBottom:'5%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      <img src={logo1} alt="logo1" style={{ height: '60px', objectFit: 'contain' }} />
      <img src={logo5} alt="logo2" style={{ height: '60px', objectFit: 'contain' }} />
      <img src={logo7} alt="logo3" style={{ height: '60px', objectFit: 'contain' }} />
      <img src={logo1} alt="logo4" style={{ height: '60px', objectFit: 'contain' }} />
      <img src={logo5} alt="logo5" style={{ height: '60px', objectFit: 'contain' }} />
    </div>
  );
}
