import { MainPageBox, MainPaperFilterButton, ButtonFilterApplication, MainPaperFilter, CustomTableContainer, MainPageContent } from './styles'
import HeaderPart from '../../components/header'
import { Box, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import Filter from '../../assets/filter.svg'
import { useState } from 'react'
import { CustomTableCell } from '../../styles/styles'
import CustomTableRow from '../../components/tableRow'

export default function MainPage() {
    const [filterBoolean, setFilterBoolean] = useState(false)
    return (
        <MainPageBox>
            <HeaderPart />
            <MainPageContent>
                <MainPaperFilterButton onClick={() => setFilterBoolean(!filterBoolean)}>
                    <img style={{ width: '18px', height: '18px' }} src={Filter} alt='Filtro' />
                    <Typography variant='filterTitle'>
                        Filtrar
                    </Typography>
                </MainPaperFilterButton>
                {filterBoolean && (
                    <MainPaperFilter>
                        <Box sx={{ marginBottom: '20px' }}>
                            <Typography variant='filterTitle' color='#B9B9B9'>
                                Categorias
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', gap: '18px', marginTop: '20px' }}>
                            <ButtonFilterApplication>
                                <Typography variant='filterTitle' color='black'>
                                    Limpar Filtros
                                </Typography>
                            </ButtonFilterApplication>
                            <ButtonFilterApplication chosen='true'>
                                <Typography variant='filterTitle' color='white'>
                                    Aplicar Filtros
                                </Typography>
                            </ButtonFilterApplication>
                        </Box>
                    </MainPaperFilter>
                )}
                <CustomTableContainer>
                    <Table>
                        <TableHead>
                            <CustomTableCell align='left'>
                                <Typography variant='tableTitle'>
                                    Data
                                </Typography>
                            </CustomTableCell>
                            <TableCell align='center'>
                                <Typography variant='tableTitle'>
                                    Dia da semana
                                </Typography>
                            </TableCell>
                            <TableCell align='center'>
                                <Typography variant='tableTitle'>
                                    Descrição
                                </Typography>
                            </TableCell>
                            <TableCell align='center'>
                                <Typography variant='tableTitle'>
                                    Categoria
                                </Typography>
                            </TableCell>
                            <TableCell align='center'>
                                <Typography variant='tableTitle'>
                                    Valor
                                </Typography>
                            </TableCell>
                            <TableCell />
                            <TableCell />
                        </TableHead>
                        <TableBody>
                            <CustomTableRow />
                            <CustomTableRow />
                            <CustomTableRow />
                            <CustomTableRow />
                            <CustomTableRow />
                            <CustomTableRow />
                            <CustomTableRow />
                        </TableBody>
                    </Table>
                </CustomTableContainer>
            </MainPageContent>
        </MainPageBox>
    )
}