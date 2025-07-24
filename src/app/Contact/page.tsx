// 'use client'
// import React, { useState } from 'react';
// import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
// import { Label  } from '@/components/ui/label'
// import { Input } from '@/components/ui/input'
// import { Button } from '@/components/ui/button'

// const Contact = () => {
//   const [form, setForm] = useState({ name: '', email: '', message: '' });
//   const [loading, setLoading] = useState(false);
//   const [toast, setToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setToast(null);
//     try {
//       const res = await fetch('/api/contact', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(form),
//       });
//       const data = await res.json();
//       if (res.ok) {
//         setToast({ type: 'success', message: data.message || 'Message sent successfully!' });
//         setForm({ name: '', email: '', message: '' });
//       } else {
//         setToast({ type: 'error', message: data.error || 'Failed to send message.' });
//       }
//     } catch (err) {
//       setToast({ type: 'error', message: 'Something went wrong.' });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className='flex flex-col md:flex-row items-center justify-center py-12 px-4  md:px-12 lg:px-24 bg-gray-50 bg-gradient-to-t from-white to-yellow-50'>
//         <div className='flex flex-1 flex-col px-6 mb-14'><h2 className='text-2xl md:text-3xl font-semibold mb-4 text-gray-900'>Contact us</h2>

//         <p className='mb-4 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
//         <div>
//             <div className='space-y-4 text-gray-600 py-2'>
//                 <FiMail  className='text-blue-950 w-6 h-6'/>
//                 <span>shajiyamalik76@gmail.com</span>

//             </div>
//             <div className='space-y-4 text-gray-600 py-2'>
//                 <FiMapPin className='text-blue-950 w-6 h-6' />
//                 <span>pakistan karachi</span>

//             </div>
//             <div className='space-y-4 text-gray-600 py-2'>
//                 <FiPhone className='w-6 h-6 text-blue-950' />
//                 <span>03312419388</span>

//             </div>
//             <div>
//             <button className="inline-flex items-center bg-blue-950 border-0 py-1 px-3 focus:outline-none hover:bg-red-700 rounded text-white mt-4 md:mt-0  transition-colors duration-300">
//            <a href={"https://github.com/syedakshmsh"}>
//           github
//           </a>
//           <svg fill='none'
//           stroke="CurrentColor"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           className="w-4 h-4 ml-1"
//           viewBox="0 0 24 24">
          

            
//           </svg>
         
//           </button>

//             </div>
//         </div>

//         </div>
//         <div className='flex items-center justify-between w-11/12 max-w-screen-sm bg-white shadow-lg rounded-lg space-y-4 px-4'>
        


//     <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow">
//       <div>
//         <Label htmlFor="name">Name</Label>
//         <Input  type='text' id="name" name="name"  placeholder="Your Name" value={form.name} onChange={handleChange} required />
        
//       </div>
   
//       <div>
//         <Label htmlFor="email">Email</Label>
//         <Input id="email" name="email" type="email"  placeholder="Your Email" value={form.email} onChange={handleChange} required />
//       </div>
//       <div>
//         <Label htmlFor="message">Message</Label>
//         <textarea
//           id="message"
//           name="message"
//           value={form.message}
//           onChange={handleChange}
         
//           className="w-full rounded-md border border-gray-300 p-2"
//           rows={4}
//           placeholder="Your Message"
//         ></textarea>
//       </div>
//       <Button type="submit" className="w-full bg-blue-950 text-white py-2 font-semibold shadow-lg rounded-lg" disabled={loading}>
//         {loading ? 'Sending...' : 'Send'}
//       </Button>
//     </form>
  


//         </div>
    
//     </div>
//     {toast && (
//         <div
//           className={`mt-6 px-4 py-3 rounded text-center font-medium ${toast.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
//         >
//           {toast.message}
//         </div>
//       )}
//   )
// }

// export default Contact
// export default Contact

'use client'
import React, { useState } from 'react';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setToast(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setToast({ type: 'success', message: data.message || 'Message sent successfully!' });
        setForm({ name: '', email: '', message: '' });
      } else {
        setToast({ type: 'error', message: data.error || 'Failed to send message.' });
      }
    } catch (err) {
      setToast({ type: 'error', message: 'Something went wrong.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className='flex flex-col md:flex-row items-center justify-center py-12 px-4  md:px-12 lg:px-24 bg-gray-50 bg-gradient-to-t from-white to-yellow-50'>
        <div className='flex flex-1 flex-col px-6 mb-14'>
          <h2 className='text-2xl md:text-3xl font-semibold mb-4 text-gray-900'>Contact us</h2>
          <p className='mb-4 text-gray-500'>you are interested give a gmail you contact me in gmail</p>
          <div>
            <div className='space-y-4 text-gray-600 py-2'>
              <FiMail className='text-blue-950 w-6 h-6' />
              <span>jia067919@gmail.com</span>
            </div>
            <div className='space-y-4 text-gray-600 py-2'>
              <FiMapPin className='text-blue-950 w-6 h-6' />
              <span>pakistan karachi</span>
            </div>
            <div className='space-y-4 text-gray-600 py-2'>
              <FiPhone className='w-6 h-6 text-blue-950' />
              <span>03312419388</span>
            </div>
            <div>
            <button className="inline-flex items-center bg-blue-950 border-0 py-1 px-3 focus:outline-none hover:bg-red-700 rounded text-white mt-4 md:mt-0  transition-colors duration-300">
                <a href={"https://github.com/syedakshmsh"}>
                  github
                </a>
                <svg fill='none'
                  stroke="CurrentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 24 24">
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-between w-11/12 max-w-screen-sm bg-white shadow-lg rounded-lg space-y-4 px-4'>
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow w-full">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input type='text' id="name" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300 p-2"
                rows={4}
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <Button type="submit" className="w-full bg-blue-950 text-white py-2 font-semibold shadow-lg rounded-lg" disabled={loading}>
              {loading ? 'Sending...' : 'Send'}
            </Button>
          </form>
          </div>
      </div>
      {toast && (
        <div
          className={`mt-6 px-4 py-3 rounded text-center font-medium ${toast.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
        >
          {toast.message}
        </div>
      )}
    </>
  );
}
export default Contact;