import React from 'react';



import BackdropStyle from './Backdrop.module.css';

// import './Backdrop.css';



const backdrop = (props) => {
    // const cssClasses = ['Backdrop', props.show ? 'BackdropOpen' : 'BackdropClosed'];
    const cssClasses = [BackdropStyle.Backdrop, props.show ? BackdropStyle.BackdropOpen : BackdropStyle.BackdropClosed];
    console.log(BackdropStyle.Backdrop);
    console.log(BackdropStyle.BackdropOpen);
    console.log(BackdropStyle.BackdropClosed);
    console.log(cssClasses.join(' '))

   return (<div className={cssClasses.join(' ')}></div>)
// return (<div className={cssClasses.join(' ')}></div>)
}





export default backdrop;