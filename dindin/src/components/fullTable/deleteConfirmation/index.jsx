import { Box, Typography } from '@mui/material'
import { CustomPaper, TableRowBox } from '../deleteConfirmation/styles'
import ArrowDelete from '../../../assets/arrowDelete.svg'
import useAppContext from '../../../hooks/useAppContext'

export default function DeleteConfirmation({ setOpenDelete, id }) {
  const { functionDeleteTransaction } = useAppContext()

  return (
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
          <CustomPaper onClick={() => {
            functionDeleteTransaction(id)
          }} bgcolor="#3A9FF1">
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
  )
}
