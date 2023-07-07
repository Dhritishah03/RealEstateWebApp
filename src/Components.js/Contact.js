import React from 'react'

export default function Contact() {
  return (
    <div>
       <div >
                      <h1 className='text-blue-600 text-center text-lg font-semibold'>Contact Us</h1>
                    
                    
                  </div>

                  <div>
                      <form className="grid justify-center">
                          <div>
                              <div>
                                  <input type="text" name="firstName" id="" className='bg-slate-200 px-4 pr-20 w-200 h-10 my-2 rounded-lg flex justify-center items-center text-black text-base' placeholder="First Name"/>
                              </div>
                              <div>
                                  <input type="text" name="lastName" id=""  className='bg-slate-200 px-4 pr-20 w-200 h-10 my-2 rounded-lg flex justify-center items-center text-black text-base' placeholder="Last Name" />
                              </div>
                          
                              <div>
                                  <input type="number" name="phone" id="" className='bg-slate-200 px-4 pr-20 w-200 h-10 my-2 rounded-lg flex justify-center items-center text-black text-base' placeholder="Phone Number"/>
                              </div>
                              <div>
                                  <input type="email" name="email" id=""  className='bg-slate-200 px-4 pr-20 w-200 h-10 my-2 rounded-lg flex justify-center items-center text-black text-base' placeholder="Email ID"/> 
                              </div>
                          
                          <div className="row">
                                <div>
                                <input type="text" name="address" id="" className='bg-slate-200 px-4 w-200 pr-20 h-10 my-2 rounded-lg flex justify-center items-center text-black text-base' placeholder="Address"/>
                                 </div>
                          </div>
                          <div className="row">
                                <div>
                                <input className='bg-slate-200 px-4 w-200 h-10 my-2 mb-4 rounded-lg flex justify-center pr-20 pb-10 pt-10 items-center text-black text-base' type="text" name="message" id="" placeholder="Enter our Message"/>
                                </div>
                          </div>
                          </div>
                                     <center><button className='bg-black hover:bg-violet-800 transition w-100 pl-5 pr-5 mb-[100px] lg:max-w-[100px] h-12 rounded-lg mb-5 flex items-center	align-items-center justify-center items-center text-white text-lg'>Submit</button></center>
                      </form>
                  </div>
    </div>
  )
}
