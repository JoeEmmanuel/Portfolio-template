import React, { useEffect, useState } from "react";


const ContactForm = () => {

const [form, setForm] = useState({
   name: " ",
   email: " ",
   phone: " ",
   message: " ",
});


const handleChange = (e) => {
       setForm({
         ...form,
         [e.target.name]: e.target.value,
       });
}



const handleSubmit = async (e) => {
  e.preventDefualt;
  const url = '/api/formData'
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        console.log('POST request successful');
      } else {
        console.error('POST request failed');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
}

  return (
    <div className=" mb-8">
      <div className=" text-center text-white shadow-lg rounded-lg shadow-black w-[90%]  mx-auto p-8">
        <h2 className="text-3xl font-extrabold mb-8">CONTACT FORM</h2>
        <form className="flex flex-col mx-auto gap-4">
          <input
            type="text"
            placeholder="Your name"
            name="name"
            className="bg-transparent border-b border-gray-800 text-xs py-2"
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="Your e-mail"
            name="email"
            className="bg-transparent border-b border-gray-800 text-xs py-2"
            onChange={handleChange}
          />
          <input
           type="text"
           placeholder="Your phone"
           name="phone"
           className="bg-transparent border-b border-gray-800 text-xs py-2"
           onChange={handleChange}
         />
          <input
            type="text"
            placeholder="Message"
            name="message"
            className="bg-transparent border-b border-gray-800 text-xs py-2"
            onChange={handleChange}
          />
        </form>
        <button 
          onClick={handleSubmit} 
          className="text-xs shadow-lg shadow-black p-2 rounded-md mt-8 px-8 hover:shadow-slate-50 hover:shadow-md">
          SEND MESSAGE
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
