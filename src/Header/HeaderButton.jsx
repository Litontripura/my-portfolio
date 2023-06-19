import React from 'react';

const HeaderButton = () => {
    return (
        <div className='flex justify-center gap-3'>
            <button className="btn btn-outline btn-primary">Download Resume</button>
            <button className="btn btn-outline btn-primary">Let's talk</button>
        </div>
    );
};

export default HeaderButton;