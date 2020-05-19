import React from 'react';

const PlaceholderImage = ( { height='180', text='Image cap', bgColor='#868e96', className="", ...props } ) => (
    <svg className={'bd-placeholder-img' + (className ? ' ' + className : '')} width="100%" height={height} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label={'Placeholder: ' + text}>
        <title>Placeholder</title>
        <rect width="100%" height="100%" fill={bgColor}></rect>
        <text x="50%" y="50%" fill="#dee2e6" dy=".3em">{text}</text>
    </svg>
);

export default PlaceholderImage;