import React from 'react';
import './Footer.css'


const Footer = () => {
    
    return (
        <div className='bg-dark text-white p-5 footer mt-5 footer'>
            {/* link use for footer */}
<div>
        <a className='m-5' href="https://www.facebook.com/orpa.sahaarpu/">Facebook</a>
         <a className='m-5' href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox">E-mail</a>
      
</div>
            <h1>Travel Plan</h1>
            <p>@2021,All Rights Reserved By <i>ARPA SAHA</i></p>
        </div>
    );
};

export default Footer;