import { Box, TableCell, TableRow, Typography } from '@mui/material'
import { useState } from 'react'
import ArrowDelete from '../../assets/arrowDelete.svg'
import Pen from '../../assets/pen.svg'
import Trash from '../../assets/trash.svg'
import useAppContext from '../../hooks/useAppContext'
import { CustomTableCell } from '../../styles/styles'
import { CustomPaper, TableRowBox } from './styles'

export default function CustomTableRow({ type }) {
  const [openDelete, setOpenDelete] = useState(false)
  const { setOpenEditTransactionForm } = useAppContext()

  return (
    <TableRow>
      <CustomTableCell align="left">
        <Typography variant="tableTitle">01/09/21</Typography>
      </CustomTableCell>
      <TableCell align="center">
        <Typography variant="tableText">Quarta</Typography>
      </TableCell>
      <TableCell align="center">
        <Typography variant="tableText">Venda dos brigadeiros</Typography>
      </TableCell>
      <TableCell align="center">
        <Typography variant="tableText">Pix</Typography>
      </TableCell>
      <TableCell align="center">
        <Typography variant="tableTitle" color={type ? '#7B61FF' : '#FA8C10'}>
          R$ 100,00
        </Typography>
      </TableCell>
      <TableCell align="center">
        <img
          style={{ cursor: 'pointer' }}
          src={Pen}
          alt="Imagem Editar Cobrança"
          onClick={() => setOpenEditTransactionForm(true)}
        />
      </TableCell>
      <TableCell style={{ position: 'relative' }} align="center">
        <img
          style={{ cursor: 'pointer' }}
          src={Trash}
          alt="Imagem Deletar Cobrança"
          onClick={() => setOpenDelete(!openDelete)}
        />
        {openDelete && (
          <>
            <img
              style={{
                top: '70%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                position: 'absolute'
              }}
              src={ArrowDelete}
            />
            <TableRowBox>
              <Typography variant="deleteText">Apagar item?</Typography>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingTop: '5px' }}>
                <CustomPaper bgcolor="#3A9FF1">
                  <Typography variant="deleteButton" color="white">
                    Sim
                  </Typography>
                </CustomPaper>
                <CustomPaper onClick={() => setOpenDelete(false)} bgcolor="#FF576B">
                  <Typography variant="deleteButton" color="white">
                    Não
                  </Typography>
                </CustomPaper>
              </Box>
            </TableRowBox>
          </>
        )}
      </TableCell>
    </TableRow>
  )
}
