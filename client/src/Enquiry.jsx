  import { Button, Label, TextInput } from 'flowbite-react'
  import React, { useEffect, useState } from 'react'
  import { HiMail } from "react-icons/hi";
  import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
  import { TbPhoneCall } from "react-icons/tb";
  import { MdOutlineAlternateEmail } from "react-icons/md";
  import { EnquiryList } from './enquiry/EnquiryList';
  import axios from 'axios';
  import { ToastContainer, toast } from 'react-toastify';
  import Swal from 'sweetalert2/dist/sweetalert2.js'
  import 'sweetalert2/src/sweetalert2.scss'
  import bgvid from './videos/bg-1.mp4'

  export default function Enquiry() {
    let [enquiryList, setEnquiryList] = useState([])
    let [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      message: '',
      _id: ''
    })



    /* let formData={
      name:e.target.name.value,  //e=submit event, target=form, name variable of form   
      email:e.target.email.value,
      phone:e.target.phone.value,
      message:e.target.message.value
    }*/

    let saveEnquiry = (e) => {
      e.preventDefault();

      if (formData._id) {
        //Update
        Swal.fire({
          title: "Do you want to save the changes?",
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: "Save",
          denyButtonText: `Don't save`
        }).then((result) => {
          if (result.isConfirmed) {
            axios.put(`http://localhost:8020/api/website/enquiry/update/${formData._id}`, formData)
            Swal.fire("Saved!", "", "success");
          } else if (result.isDenied) {
            Swal.fire("Changes are not saved", "", "info");
          }
        

        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          _id:''
        });

        getAllenquiry(); // 🔁 Refresh list after saving
      })
      .catch ((err) => {
      console.error('Error saving enquiry:', err);
      toast.error('Failed to save enquiry');
    });
  }
    else {
    //Insert
    axios.post(`http://localhost:8020/api/website/enquiry/insert`, formData)
      .then((res) => {
        console.log(res.data);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Enquiry Saved Successfully",
          showConfirmButton: false,
          timer: 1500
        });

        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });

        getAllenquiry(); // 🔁 Refresh list after saving
      })
      .catch((err) => {
        console.error('Error saving enquiry:', err);
        toast.error('Failed to save enquiry');
      });
  }
    
  }


  let getAllenquiry = async () => {
    try {
      const res = await axios.get(`http://localhost:8020/api/website/enquiry/view`);
      console.log("Fetched Enquiries:", res.data);

      // Adjusted to match actual API response
      if (res.data && res.data.status === 1 && Array.isArray(res.data.data)) {
        setEnquiryList(res.data.data); // ✅ Correct key is "data"
      } else {
        toast.error('Failed to fetch enquiry list');
      }
    } catch (error) {
      console.error('Error fetching enquiries:', error);
      toast.error('Error fetching enquiries');
    }
  }


  let getValue = (e) => {
    let inputName = e.target.name
    let inputValue = e.target.value
    let oldData = { ...formData }

    oldData[inputName] = inputValue;
    setFormData(oldData)
  }

  useEffect(() => {
    getAllenquiry()
  }, [])



return (
  <div className="relative min-h-screen overflow-hidden">
    {/* Background Video */}
    <video
      autoPlay
      loop
      muted
      className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
    >
      <source src={bgvid} type="video/mp4" />
    </video>

    {/* Optional dark overlay */}
    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-0" />

    <div className="relative z-10">
      <ToastContainer />
      <h1 className='text-[40px] text-center py-6 font-bold text-white'>User Enquiry</h1>
      <div className='grid grid-cols-[25%_auto] p-5'>
        <div className='bg-white/10 backdrop-blur-sm border p-4 rounded-xl shadow-lg'>
          <h2 className='text-[20px] text-white font-bold'>Enquiry Form</h2>
          <form onSubmit={saveEnquiry}>
            <div className='py-3'>
              <Label htmlFor='name' value="Your Name" />
              <TextInput type="text" value={formData.name} onChange={getValue} name='name' icon={MdOutlineDriveFileRenameOutline} placeholder="Enter your Name" required color='success' />
            </div>
            <div className='py-3'>
              <Label htmlFor='email' value="Your Email" />
              <TextInput type="text" value={formData.email} onChange={getValue} name='email' icon={MdOutlineAlternateEmail} placeholder="Enter your email id" required color='success' />
            </div>
            <div className='py-3'>
              <Label htmlFor='phone' value="Your Phone No." />
              <TextInput type="number" value={formData.phone} onChange={getValue} name='phone' icon={TbPhoneCall} placeholder="Enter your Phone Number" required color='success' />
            </div>
            <div className='py-3'>
              <Label htmlFor='message' value="Your Message" />
              <TextInput type="text" value={formData.message} onChange={getValue} name='message' icon={HiMail} placeholder="Enter your Message" required color='success' />
            </div>
            <div className='py-3'>
              <Button type='submit' className='w-full border !bg-green-700  hover:border-emerald-600'>
                {formData._id ? 'Update' : 'Save'}
              </Button>
            </div>
          </form>
        </div>
        <EnquiryList data={enquiryList} getAllenquiry={getAllenquiry} Swal={Swal} setFormData={setFormData} />
      </div>
    </div>
  </div>
)

  }


