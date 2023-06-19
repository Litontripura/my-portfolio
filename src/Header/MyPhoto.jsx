import './myphoto.css'
import myphoto from '../assets/img/20220416_214945-removebg-preview (2).png'
import {SiMongodb,SiExpress} from 'react-icons/si'
import {GrReactjs} from 'react-icons/gr'
import {FaNodeJs} from 'react-icons/fa'


const MyPhoto = () => {
    return (
        <div className='box flex flex-col'>
    background: linear-gradient(#00ccff, #d500f9);
         <img className="img w-[300px] h-[300px] rounded-full z-20 border-4 border-x-[#d500f9] border-y-[#00ccff] shadow" src={myphoto} alt="" />
         <div className='z-30 text-center mt-10'>
         <h1 className='text-3xl text-white'>Liton Tripura</h1>
         <p className='text-lg text-white'>Front end and Back end Developer</p>
         <div className='mt-5'>
            <ul className='flex justify-center md:gap-5 gap-2'>
                <li className='flex flex-col text-4xl'><SiMongodb className='h-[60px] w-[60px] p-3 bg-white rounded-full text-[#00ED64]'></SiMongodb><span className='text-xl text-white mt-1'>Mongo</span></li>
               
                <li className='flex flex-col text-4xl'><SiExpress className='h-[60px] w-[60px] p-3 bg-white rounded-full text-black'></SiExpress><span className='text-xl text-white mt-1'>Express</span></li>

                <li className='flex flex-col text-4xl'><GrReactjs className='h-[60px] w-[60px] p-3 bg-white rounded-full text-[#149ECA]'></GrReactjs><span className='text-xl text-white mt-1'>React</span></li>
                
                <li className='flex flex-col text-4xl'><FaNodeJs className='h-[60px] w-[60px] p-3 bg-white rounded-full text-[#659E5A]'></FaNodeJs><span className='text-xl text-white mt-1'>Node</span></li>
              
            </ul>
         </div>
         </div>
      

        </div>
    );
};

export default MyPhoto;