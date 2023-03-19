import { Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import exit from '../../assets/exit.svg'
import profile from '../../assets/profile.svg'
import api from '../../services/api'
import { getItem, logOut } from '../../utils/storage'
import Logo from '../logo'
import Modal from '../modal'
import UserForm from '../userForm'
import { HeaderBox, HeaderContent, HeaderText, HeaderWhite } from './styles'

export default function HeaderPart() {
  const [userData, setUserData] = useState('')
  const [userFormBoolean, setUserFormBoolean] = useState(false)
  const navigate = useNavigate()

  async function getUser() {
    const token = getItem('token')

    try {
      const response = await api.get('/user', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      setUserData(response.data)
    } catch (error) {
      console.log(error.response.data)
    }
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <HeaderBox>
      <HeaderContent>
        <Logo />
        <HeaderText>
          <img onClick={() => setUserFormBoolean(true)} style={{ width: '65px', height: '65px', cursor: 'pointer' }} src={profile} alt="Imagem de perfil" />
          <Typography variant="button" color="white">
            {userData.name}
          </Typography>
          <img
            style={{ width: '35px', height: '35px', cursor: 'pointer' }}
            src={exit}
            alt="Imagem de perfil"
            onClick={() => {
              logOut()
              navigate('/login')
            }}
          />
        </HeaderText>
      </HeaderContent>
      <HeaderWhite />
      <Modal open={userFormBoolean}>
        <UserForm open={userFormBoolean} setUserFormBoolean={setUserFormBoolean} userData={userData} setUserData={setUserData} getUser={getUser} />
      </Modal>
    </HeaderBox>
  )
}
