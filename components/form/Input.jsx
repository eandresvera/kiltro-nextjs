import React from 'react'

export const Input = ({ lang, name, type=false, placeHolder, labelEsp, labelEng, formData, onChange, isRequired=false, textArea=false, error=false }) => {

    // console.log(error);
  return (
    <div className="mb-6">
        <label htmlFor={name} className="block mb-2 text-sm font-medium text-white">
            { lang === 'esp' && labelEsp } 
            { lang === 'eng' && labelEng }
            { isRequired && <span className='text-red-500'> *</span> }
        </label>
        {
            textArea 
            ?
            <textarea 
                id="message" 
                name="message"
                rows="4" 
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border-2 focus:outline-none focus:ring-primary-main focus:border-primary-main "
                onChange={e => onChange(e)}
                value={formData.message}
            >
            </textarea>
            :
            <input 
                type={type}
                id={name} 
                name={name}
                className="bg-gray-50 text-sm rounded-lg block w-full p-2.5  text-black border-2 focus:outline-none focus:ring-primary-main focus:border-primary-main" 
                placeholder={placeHolder} 
                onChange={ e => onChange(e) } 
                value={formData[name]}
            />
        }
        { error && lang === 'esp' && <span className=' text-red-500'>Requerido</span> }
        { error && lang === 'eng' && <span className=' text-red-500'>Required</span> }
    </div>
  )
}
