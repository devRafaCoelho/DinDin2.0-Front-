import { TableCell, TableRow, Typography } from '@mui/material'
import { useState } from 'react'
import Pen from '../../../assets/pen.svg'
import Trash from '../../../assets/trash.svg'
import useAppContext from '../../../hooks/useAppContext'
import { CustomTableCell } from '../../../styles/styles'
import DeleteConfirmation from '../deleteConfirmation'
import { formatedDate } from '../../../utils/formatValue'

export default function CustomTableRow({ transaction }) {
  const [openDelete, setOpenDelete] = useState(false)
  const { setOpenTransactionForm, setTextTransactionForm, setTransactionId, categories } = useAppContext()
  const weekDay = [
    'Domingo',
    'Segunda-Feira',
    'Terça-Feira',
    'Quarta-Feira',
    'Quinta-Feira',
    'Sexta-Feira',
    'Sábado'
  ]

  const categorieName = categories.find(categorie => categorie.id === transaction.categorie_id)
  const weekNumber = new Date(transaction.date)
  return (
    <TableRow>
      <CustomTableCell align="left">
        <Typography variant="tableTitle">{formatedDate(transaction.date)}</Typography>
      </CustomTableCell>
      <TableCell align="center">
        <Typography variant="tableText">{weekDay[weekNumber.getDay()]}</Typography>
      </TableCell>
      <TableCell align="center">
        <Typography variant="tableText">{transaction.description}</Typography>
      </TableCell>
      <TableCell align="center">
        <Typography variant="tableText">{categorieName ? categorieName.description : ''}</Typography>
      </TableCell>
      <TableCell align="center">
        <Typography variant="tableTitle" color={transaction.type === 'entrada' ? '#7B61FF' : '#FA8C10'}>
          {transaction.value}
        </Typography>
      </TableCell>
      <TableCell align="center">
        <img
          style={{ cursor: 'pointer' }}
          src={Pen}
          alt="Editar Cobrança"
          onClick={() => {
            setTextTransactionForm('Editar')
            setOpenTransactionForm(true)
            setTransactionId(transaction.id)
          }}
        />
      </TableCell>
      <TableCell style={{ position: 'relative' }} align="center">
        <img
          style={{ cursor: 'pointer' }}
          src={Trash}
          alt="Deletar Cobrança"
          onClick={() => setOpenDelete(!openDelete)}
        />
        {openDelete && (
          <DeleteConfirmation setOpenDelete={setOpenDelete} id={transaction.id} />
        )}
      </TableCell>
    </TableRow>
  )
}
