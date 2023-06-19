import {AiOutlineDown} from 'react-icons/ai'
import { Link } from 'react-router-dom';

const HeaderDown = () => {
    return (
        <div className='hidden md:block'>
            <a href='#footer'><AiOutlineDown className='text-[#29A6FF] text-2xl'></AiOutlineDown></a>
        </div>
    );
};

export default HeaderDown;