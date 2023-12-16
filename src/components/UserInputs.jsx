import React from 'react'

export default function UserInputs() {
  return (
    <div id='user-input' >
        <div className='input-group' >
            <p id='user-input'>
                <label >
                    INITIAL INVESTMENT
                </label>
                <input type='number' min='0' step='1' required />
            </p>
            <p id='user-input'>
                <label>
                    ANN INVESTMENT
                </label>
                <input type='number' min='0' step='1' required />
            </p>
            
        </div>
        <div className='input-group'>
            <p id='user-input'>
                <label>
                    EXPECTED RETURN
                </label>
                <input type='number' min='0' step='1' required />
            </p>
            <p id='user-input'>
                <label>
                    DURATION
                </label>
                <input type='number' min='0' step='1' required />
            </p>
        </div>
    </div>
    

  )
}
