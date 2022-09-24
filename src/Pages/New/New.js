import React, { useState } from 'react';
import './New.scss';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Navbar from '../../Components/Navbar/Navbar';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
function New({ inputs,title }) {
  const emptyImg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW6I_SM_3jJd9X0ZObarIEvm8iWgWr5hasYBdssmS_7ocRuiczTcXuX-r79j-_7YVrwXo&usqp=CAU';
  const [file,setFile] = useState('');
  console.log(file);
  return (
    <div className='new'>
      <Sidebar />
      <div className='newContainer'>
        <Navbar />
        <div className='top'>
          <h1>{title}</h1>
        </div>
        <div className='bottom'>
          <div className='left'>
            <img src={file ? URL.createObjectURL(file) : emptyImg}
              alt='Not found'
            />
          </div>
          <div className='right'>
            <form>
              <div className='formInput'>
                <label htmlFor='file'>Image <DriveFolderUploadIcon className='icon'/></label>
                <input type='file' id='file' style={{ display : 'none' }} onChange={e => setFile(e.target.files[0])}/>
              </div>
              {
                inputs.map((input) => (
                  <div className='formInput' key={input.id}>
                    <label>{input.label}</label>
                    <input type={input.type} placeholder={input.placeholder}/>
                  </div>
                ))
              }
              {/* <div className='formInput'>
                        <label>Username</label>
                        <input type='text' placeholder='john_doe'/>
                    </div>
                    <div className='formInput'>
                        <label>FullName</label>
                        <input type='text' placeholder='John Doe'/>
                    </div>
                    <div className='formInput'>
                        <label>FullName</label>
                        <input type='email' placeholder='johndoe@gmail.com'/>
                    </div>
                    <div className='formInput'>
                        <label>Phone</label>
                        <input type='text' placeholder='+91-9999999999'/>
                    </div>
                    <div className='formInput'>
                        <label>Password</label>
                        <input type='password'/>
                    </div>
                    <div className='formInput'>
                        <label>Address</label>
                        <input type='text'/>
                    </div>
                    <div className='formInput'>
                        <label>Country</label>
                        <input type='text'/>
                    </div> */}
              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default New;
