import CTA from './CTA';

import myPic from '../../assets/img/20220416_214945-removebg-preview (2).png'
import { Link } from 'react-router-dom';
import HeaderSocial from './HeaderSocial';
import {AiOutlineDown} from 'react-icons/ai'

const Header = () => {
    return (
        <header>
            <div className="container relative header__container">
                <h5>Hello i am</h5>
                <h1>Liton Tripura</h1>
                <h5 className='text-light'>React Developer</h5>
                <CTA></CTA>
               <div className='flex justify-around items-center'>
               <div className=''>
                <HeaderSocial></HeaderSocial>
                </div>
                <div className="me">
                    <img src={myPic} alt="" />
                </div>
               <button className=''>
               <Link to='/contact' className='text-4xl'><AiOutlineDown></AiOutlineDown></Link>
               </button>
               </div>
            </div>
        </header>
    );
};

export default Header;