import React from 'react';
import HeaderText from './HeaderText';
import HeaderButton from './HeaderButton';
import HeaderSocial from './HeaderSocial';
import MyPhoto from './MyPhoto';
import HeaderDown from './HeaderDown';

const Header = () => {
    return (
        <div className=''>
            <HeaderText></HeaderText>
            <HeaderButton></HeaderButton>
            <div className='flex justify-around md:my-10 items-center my-5'>
              <HeaderSocial></HeaderSocial>
              <MyPhoto></MyPhoto>
              <HeaderDown></HeaderDown>
            </div>
        </div>
    );
};

export default Header;