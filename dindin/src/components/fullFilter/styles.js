import { Paper, styled } from '@mui/material'
import { theme } from '../../theme/theme'

export const ButtonFilterApplication = styled(Paper)`
    border-radius: 10px;
    padding: 10px;
    background: ${({ chosen }) => (chosen ? '#7978D9' : (theme.palette.grey['100']))};
    cursor: pointer;
`

export const MainPaperFilter = styled(Paper)`
    width: 100%;
    background-color: ${(theme.palette.grey['100'])};
    padding: 32px 0 13px 32px;
    margin-bottom: 25px;
`

export const MainPaperFilterButton = styled(Paper)`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6px 0;
    gap: 4px;
    width: 80px;
    cursor: pointer;
    background-color: ${(theme.palette.grey['100'])};
    margin-bottom: 25px;
`
