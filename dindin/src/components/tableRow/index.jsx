import { Box, TableCell, TableRow, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import ArrowDelete from '../../assets/arrowDelete.svg'
import Pen from '../../assets/pen.svg'
import Trash from '../../assets/trash.svg'
import useAppContext from '../../hooks/useAppContext'
import api from '../../services/api'
import { CustomTableCell } from '../../styles/styles'
import { getItem } from '../../utils/storage'
import { CustomPaper, TableRowBox } from './styles'

export default function CustomTableRow({ type }) {
  const [openDelete, setOpenDelete] = useState(false)
  const [transactions, setTransactions] = useState([])
  const { setOpenEditTransactionForm } = useAppContext()

  async function getTransactions() {
    const token = getItem('token')

    try {
      const response = await api.get('/transaction', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      setTransactions(response.data)
    } catch (error) {
      console.log(error.response.data)
    }
  }

  useEffect(() => {
    getTransactions()
  }, [])

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
          alt="Editar Cobrança"
          onClick={() => setOpenEditTransactionForm(true)}
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
          <>
            <img
              style={{
                top: '70%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                position: 'absolute'
              }}
              src={ArrowDelete}
              alt=""
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

// {transactions.map((transaction) => (
//   <>
//     <CustomTableCell align="left">
//       <Typography variant="tableTitle">{transaction.date}</Typography>
//     </CustomTableCell>
//     <TableCell align="center">
//       <Typography variant="tableText">{transaction.date}</Typography>
//     </TableCell>
//     <TableCell align="center">
//       <Typography variant="tableText">{transaction.description}</Typography>
//     </TableCell>
//     <TableCell align="center">
//       <Typography variant="tableText">{transaction.categorie_id}</Typography>
//     </TableCell>
//     <TableCell align="center">
//       <Typography variant="tableTitle" color={type ? '#7B61FF' : '#FA8C10'}>
//         {transaction.value}
//       </Typography>
//     </TableCell>
//     <TableCell align="center">
//       <img
//         style={{ cursor: 'pointer' }}
//         src={Pen}
//         alt="Editar Cobrança"
//         onClick={() => setOpenEditTransactionForm(true)}
//       />
//     </TableCell>
//     <TableCell style={{ position: 'relative' }} align="center">
//       <img
//         style={{ cursor: 'pointer' }}
//         src={Trash}
//         alt="Deletar Cobrança"
//         onClick={() => setOpenDelete(!openDelete)}
//       />
//       {openDelete && (
//         <>
//           <img
//             style={{
//               top: '70%',
//               left: '50%',
//               transform: 'translate(-50%, -50%)',
//               position: 'absolute'
//             }}
//             src={ArrowDelete}
//             alt=""
//           />
//           <TableRowBox>
//             <Typography variant="deleteText">Apagar item?</Typography>
//             <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingTop: '5px' }}>
//               <CustomPaper bgcolor="#3A9FF1">
//                 <Typography variant="deleteButton" color="white">
//                   Sim
//                 </Typography>
//               </CustomPaper>
//               <CustomPaper onClick={() => setOpenDelete(false)} bgcolor="#FF576B">
//                 <Typography variant="deleteButton" color="white">
//                   Não
//                 </Typography>
//               </CustomPaper>
//             </Box>
//           </TableRowBox>
//         </>
//       )}
//     </TableCell>
//   </>
// ))}
// </TableRow>
// )
