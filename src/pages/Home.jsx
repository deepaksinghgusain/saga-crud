import { MDBBtn, MDBIcon, MDBTable, MDBTableBody, MDBTableHead, MDBTabsItem, MDBTooltip } from 'mdb-react-ui-kit';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { loadUsersStart } from '../redux/actions';

const Home = () => {

  const dispatch = useDispatch();

  const { users } = useSelector(state => state.data);

  useEffect(() => {
    dispatch(loadUsersStart());
  }, [])

  const handleDelete = (id) => { }

  return (
    <div className="container" style={{ marginTop: '150px' }}>
      <MDBTable>
        <MDBTableHead dark>
          <tr>
            <th scope='col'>No.</th>
            <th scope='col'>Name.</th>
            <th scope='col'>Email.</th>
            <th scope='col'>Phone.</th>
            <th scope='col'>Address.</th>
            <th scope='col'>Action.</th>
          </tr>
        </MDBTableHead>
        {
          users && users.map((user, index) => (
            <MDBTableBody key={index}>
              <tr>
                <th scope='row'>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.address}</td>
                <td>
                  <MDBBtn className='m-1' tag='a' color='none' onClick={() => handleDelete(user.id)}>
                    <MDBTooltip title='Delete' tag='a'>
                      <MDBIcon fas icon='trash' style={{ color: '#dd4b39' }} size='lg' />
                    </MDBTooltip>
                  </MDBBtn>
                  {" "}
                  <Link to={`/edit-user/${user.id}`}>
                    <MDBTooltip title='Edit' tag='a'>
                      <MDBIcon fas icon='pen' style={{ color: '#55acee' , marginBottom: '10px' }} size='lg' />
                    </MDBTooltip>
                  </Link>
                  {" "}
                  <Link to={`/edit-info/${user.id}`}>
                    <MDBTooltip title='View' tag='a'>
                      <MDBIcon fas icon='eye' style={{ color: '#3b5998' , marginBottom: '10px' }} size='lg' />
                    </MDBTooltip>
                  </Link>
                </td>
              </tr>
            </MDBTableBody>
          ))
        }
      </MDBTable>
    </div>
  )
}

export default Home