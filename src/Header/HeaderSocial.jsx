import './myphoto.css'
import {FaDribbble, FaGithub} from 'react-icons/fa'
import {AiFillLinkedin} from 'react-icons/ai'



const HeaderSocial = () => {
    return (
        <div className='md:block hidden'>
            <ul className='grid items-center gap-4 socialafter'>
                <li className=' text-2xl cursor-pointer'><AiFillLinkedin className='text-[#0E68C2]'></AiFillLinkedin></li>
                <li className=' text-2xl cursor-pointer'><FaGithub></FaGithub></li>
                <li className='text-2xl cursor-pointer'><FaDribbble className='text-[#CD2D6B]'></FaDribbble></li>
            </ul>
        </div>
    );
};

export default HeaderSocial;