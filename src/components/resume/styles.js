import { Box, Paper, styled } from "@mui/material"

export const PageResume = styled(Box)`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const ResumeValue = styled(Box)`
    display: flex;
    justify-content: space-between;
`

export const Resume = styled(Paper)`
    background: #FAFAFA;
    box-shadow: 0px 2px 11px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 32px;
    width: 236px;
    display: flex;
    flex-direction: column;
`
