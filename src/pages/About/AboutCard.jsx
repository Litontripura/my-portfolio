import './AboutCard.css'

const AboutCard = () => {
    return (
        <div className='grid md:grid-cols-3 grid-cols-1 gap-5'>
            <div className='bordercolor cardbg hover:bg-[#0E1538] rounded-lg md:w-[200px] h-[200px]'>
                <h1 className='text-white'>Experience</h1>
            </div>
            <div className='bordercolor cardbg hover:bg-[#0E1538] rounded-lg md:w-[200px] h-[200px]'>
                <h1>Clintes</h1>
            </div>
            <div className='bordercolor cardbg hover:bg-[#0E1538] rounded-lg md:w-[200px] h-[200px]'>
                <h1>Project</h1>
            </div>
        </div>
    );
};

export default AboutCard;