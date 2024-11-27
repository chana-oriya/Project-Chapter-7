import React, { useEffect } from 'react'
import { useState } from 'react';

const Info = ({ currentuser }) => {
  const [formData, setFormData] = useState({});
  useEffect(()=>{
    console.log(' currentuser: ',  currentuser);
    setFormData(currentuser)
    console.log('formData: ', formData);
  },[])
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <div>
      <form>
      {formData && Object.entries(formData).filter(([key]) => key !== 'id').map(([key, value]) => (
        <div key={key}>
          <label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}:</label>
          <input
            id={key}
            type="text"
            name={key}
            value={value}
            onChange={handleChange}
          />
        </div>
      ))}

    </form>
    </div>
  )
}

export default Info
