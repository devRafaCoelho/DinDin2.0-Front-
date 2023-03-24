import { Box, Typography } from "@mui/material"
import { PageResume, Resume, ResumeValue } from "./styles"
import { DefaultButton } from "../../styles/styles"
import useAppContext from "../../hooks/useAppContext"

export default function FullResume() {
  const { setOpenTransactionForm, setTextTransactionForm, resumeValues } = useAppContext()
  return (
    <PageResume>
      <Resume>
        <Typography sx={{ marginBottom: '23px' }} variant="resumeTitle">
          Resumo
        </Typography>
        <Box>
          <ResumeValue sx={{ marginBottom: '12px' }}>
            <Typography variant="resumeText">Entradas</Typography>
            <Typography variant="resumeValue" color="primary.valueEntry">
              {resumeValues.Imputs}
            </Typography>
          </ResumeValue>
          <ResumeValue
            sx={{
              paddingBottom: '19px',
              marginBottom: '16px',
              borderBottom: 'solid 1px #EAEAEA'
            }}
          >
            <Typography variant="resumeText">Saídas</Typography>
            <Typography variant="resumeValue" color="primary.valueOutput">
              {resumeValues.Outputs}
            </Typography>
          </ResumeValue>
        </Box>
        <ResumeValue>
          <Typography variant="resumeTitle">Saldo</Typography>
          <Typography variant="resumeValue" color="#3A9FF1">
            {resumeValues.Balance}
          </Typography>
        </ResumeValue>
      </Resume>
      <DefaultButton variant="contained" onClick={() => {
        setOpenTransactionForm(true)
        setTextTransactionForm('Adicionar')
      }}>
        <Typography variant="button" color="white">
          Adicionar Registro
        </Typography>
      </DefaultButton>
    </PageResume>
  )
}
