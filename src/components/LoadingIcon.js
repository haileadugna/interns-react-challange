import React from 'react'
import './LoadingIcon.css'

function Loading() {
  return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '8rem'}}>
            <div className='loading'></div>
        </div>
    );
}

export default Loading