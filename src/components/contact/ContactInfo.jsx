import React from 'react'

const details = [
    {
      id : 1,
      heading : 'Address',
      info : 'Khmelnytskyl, Beregova str, 44',
    },
    {
      id : 2,
      heading : 'Phone',
      info : '+380 (99) 111 22 33',
    },
    {
      id : 3,
      heading : 'E-mail',
      info : 'tura@gmail.com',
    },
]

const ContactInfo = () => {
  return (
    <div className='text-white text-center mt-8'>
       <div className=" mb-8">
         <h2 className=' text-3xl font-extrabold'>CONTACT</h2>
         <p className='text-xs pt-8 text-gray-500 px-8 lg:px-[1.6rem]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias deleniti tempora numquam illum amet sequi autem. Magni amet quia perspiciatis molestiae vel reprehenderit dolorem veritatis eligendi ab quisquam odio ducimus magnam iusto sit, pariatur cupiditate expedita.</p>
       </div>
       <div className="flex flex-col gap-5">
        {details.map((detail) => (
          <div className="" key={detail.id}>
             <h2 className=' text-xl pb-1'>{detail.heading}</h2>
             <p className='text-xs text-gray-500'>{detail.info}</p>
          </div>
        ))}
       </div>
    </div>
  )
}

export default ContactInfo
