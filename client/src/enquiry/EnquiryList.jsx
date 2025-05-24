import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import axios from 'axios';

export function EnquiryList({ data, getAllenquiry, Swal, setFormData }) {
  //delete
  let deleteRow = (delid) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:8020/api/website/enquiry/delete/${delid}`)
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"

        });
        getAllenquiry()
      }
    });     
  }
  
  //Already Inserted Data Used to Update 
  
  let editRow=(editid)=>{
      axios.get(`http://localhost:8020/api/website/enquiry/updatedata/${editid}`)
      .then((res)=>{
        let data=res.data
        setFormData(data.formData)
      })
  }

  return (
    <div className="ml-10 bg-white/10 backdrop-blur-sm border p-4 rounded-xl shadow-lg">
      <h2 className="text-[20px] text-white font-bold ">Enquiry List</h2>
      <div className="overflow-x-auto pt-2 pr-2 ">
        <Table striped>
          <TableHead>
            <TableRow className="!bg-transparent">
              <TableHeadCell>Sr No.</TableHeadCell>
              <TableHeadCell>Name</TableHeadCell>
              <TableHeadCell>Email</TableHeadCell>
              <TableHeadCell>Phone No.</TableHeadCell>
              <TableHeadCell>Message</TableHeadCell>
              <TableHeadCell>Edit</TableHeadCell>
              <TableHeadCell>Delete</TableHeadCell>
            </TableRow>
          </TableHead>

          <TableBody className="divide-y !bg-transparent">

            {data && data.length >= 1 ?
              data.map((item, index) => {
                return (
                  <TableRow key={index} className="  !bg-transparent text-white ">
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.email}</TableCell>
                    <TableCell>{item.phone}</TableCell>
                    <TableCell>{item.message}</TableCell>
                    <TableCell>
                      <button onClick={()=> editRow(item._id)} className="bg-blue-600 text-white px-4 py-1 rounded-md hover:bg-blue-700 border hover:border-blue-700">Edit</button>
                    </TableCell>
                    <TableCell>
                      <button onClick={() => deleteRow(item._id)} className="bg-red-600 text-white px-4 py-1 rounded-md hover:bg-red-700 border hover:border-red-700">Delete</button>
                    </TableCell>
                  </TableRow>
                )
              })
              : (
                <TableRow className="!bg-transparent text-white">
                  <TableCell colSpan={7} className="text-center">
                    No Data Found
                  </TableCell>
                </TableRow>
              )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
