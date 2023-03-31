import { Typography } from '@mui/material'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import exit from '../../assets/exit.svg'
import profile from '../../assets/profile.svg'
import useAppContext from '../../hooks/useAppContext'
import { logOut } from '../../utils/storage'
import Logo from '../logo'
import Modal from '../modal'
import UserForm from '../userForm'
import { HeaderBox, HeaderContent, HeaderText, HeaderWhite } from './styles'

export default function HeaderPart() {
  const { userData, functionGetUser, openUserForm, setOpenUserForm } = useAppContext()
  const navigate = useNavigate()

  useEffect(() => {
    functionGetUser()
  }, [])

  return (
    <HeaderBox>
      <HeaderContent>
        <Logo />
        <HeaderText>
          <img
            onClick={() => setOpenUserForm(true)}
            style={{ width: '65px', height: '65px', cursor: 'pointer' }}
            src={profile}
            alt="Imagem de perfil"
          />
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
      <Modal open={openUserForm}>
        <UserForm />
      </Modal>
    </HeaderBox>
  )
}
