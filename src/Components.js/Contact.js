import React from 'react'
import a from '../images/a.jpeg'


export default function Contact() {
    return (
      <div className="mt-[100px] mb-[100px] flex justify-center">
        <div className="w-1/2">
          <div>
            <h1 className="text-blue-600 text-center text-4xl font-semibold mt-10 mb-10">Contact Us</h1>
          </div>
  
          <div className="flex justify-center">
            <form className="w-2/3">
              <div>
                <div>
                  <input
                    type="text"
                    name="firstName"
                    id=""
                    className="bg-slate-200 px-4 pr-20 w-full h-10 my-2 rounded-lg text-black text-base"
                    placeholder="First Name"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    id=""
                    className="bg-slate-200 px-4 pr-20 w-full h-10 my-2 rounded-lg text-black text-base"
                    placeholder="Last Name"
                  />
                </div>
  
                <div>
                  <input
                    type="number"
                    name="phone"
                    id=""
                    className="bg-slate-200 px-4 pr-20 w-full h-10 my-2 rounded-lg text-black text-base"
                    placeholder="Phone Number"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    id=""
                    className="bg-slate-200 px-4 pr-20 w-full h-10 my-2 rounded-lg text-black text-base"
                    placeholder="Email ID"
                  />
                </div>
  
                <div className="row">
                  <div>
                    <input
                      type="text"
                      name="address"
                      id=""
                      className="bg-slate-200 px-4 w-full pr-20 h-10 my-2 rounded-lg text-black text-base"
                      placeholder="Address"
                    />
                  </div>
                </div>
                <div className="row">
                  <div>
                    <input
                      className="bg-slate-200 px-4 w-full h-10 my-2 mb-4 rounded-lg text-black text-base"
                      type="text"
                      name="message"
                      id=""
                      placeholder="Enter your Message"
                    />
                  </div>
                </div>
              </div>
              <center>
                <button className="mt-[40px] bg-black hover:bg-violet-800 transition w-40 h-12 rounded-lg mb-4 flex items-center justify-center text-white text-lg">
                  Submit
                </button>
              </center>
            </form>
          </div>
        </div>
  
        <div className=" flex justify-center items-center">
          <img
            src={a}
            
          />
        </div>
      </div>
    );
  }
  
