import { MDBBtn, MDBInput, MDBValidation, MDBValidationItem } from 'mdb-react-ui-kit';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createUsersStart } from '../redux/actions';
import { toast } from 'react-toastify';

const initialState = {
  name: '',
  email: '',
  phone: '',
  address: ''
}

const AddEditUser = () => {

  const [formValue, setFormValue] = useState(initialState);

  const { name, email, phone, address } = formValue;

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && email && phone && address) {
      dispatch(createUsersStart(formValue))

      toast.success('User is created successfully')

      setTimeout(() => navigate('/'), 5000);
    }
  }

  const onInputChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value })
  }

  return (
    <MDBValidation className='row g-3' style={{ marginTop: '100px' }} noValidate onSubmit={handleSubmit}>
      <p className='fs-2 fw-blod'> Add User Detail</p>
      <div style={{ margin: 'auto', padding: '15px', maxWidth: '400px', alignContent: 'center' }}>
        <MDBValidationItem feedback='Please provide a Name' invalid>
          <MDBInput
            value={name}
            name="name"
            type="text"
            onChange={onInputChange}
            required
            label="Name"
            validation="Please provide a Name"
          />
        </MDBValidationItem>
        <br />
        <MDBValidationItem feedback='Please provide a Email' invalid>
          <MDBInput
            value={email}
            name="email"
            type="email"
            onChange={onInputChange}
            required
            label="Email"
            validation="Please provide a Email"
          />
        </MDBValidationItem>
        <br />
        <MDBValidationItem feedback='Please provide a Phone No' invalid>
          <MDBInput
            value={phone}
            name="phone"
            type="number"
            onChange={onInputChange}
            required
            label="Phone"
            validation="Please provide a Phone No"
          />
        </MDBValidationItem>
        <br />
        <MDBValidationItem feedback='Please provide an Address' invalid>
          <MDBInput
            value={address}
            name="address"
            type="text"
            onChange={onInputChange}
            required
            label="Address"
            validation="Please provide an Address"
          />
        </MDBValidationItem>
        <br />
        <div className="col-12">
          <MDBBtn style={{ marginTop: "10px", marginRight: "10px" }} type="submit">
            Add
          </MDBBtn>
          <MDBBtn onClick={() => navigate('/')} color="danger">
            Go Back
          </MDBBtn>
        </div>
      </div>
    </MDBValidation>
  )
}

export default AddEditUser