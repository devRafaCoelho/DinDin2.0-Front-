import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ButtonFilterApplication, MainPaperFilter, MainPaperFilterButton, FilterPapers } from "./styles";
import Filter from '../../assets/filter.svg';
import { useState } from "react";
import useAppContext from "../../hooks/useAppContext";
import ButtomFilter from "./buttomFilter";

export default function FullFilter() {
  const [filterBoolean, setFilterBoolean] = useState(false)
  const {
    setSelectedCategories,
    presentCategories,
    functionGetTransactions,
    setResetValue,
    resetValue
  } = useAppContext()

  function resetFilters() {
    setSelectedCategories([])
    setResetValue(!resetValue)
    functionGetTransactions()
  }

  return (
    <>
      <MainPaperFilterButton onClick={() => setFilterBoolean(!filterBoolean)}>
        <img style={{ width: '18px', height: '18px' }} src={Filter} alt="Filtro" />
        <Typography variant="filterTitle">Filtrar</Typography>
      </MainPaperFilterButton>
      {filterBoolean && (
        <MainPaperFilter>
          <Box sx={{ marginBottom: '20px' }}>
            <Typography variant="filterTitle" color="#B9B9B9">
              Categorias
            </Typography>
          </Box>
          <FilterPapers>
            {presentCategories.map(categorie => (
              <ButtomFilter key={categorie.id} categorie={categorie} />
            ))}
          </FilterPapers>
          <Box sx={{ display: 'flex', gap: '18px', marginTop: '20px' }}>
            <ButtonFilterApplication onClick={() => resetFilters()}>
              <Typography variant="filterTitle" color="black">
                Limpar Filtros
              </Typography>
            </ButtonFilterApplication>
            <ButtonFilterApplication onClick={() => functionGetTransactions()} chosen="true">
              <Typography variant="filterTitle" color="white">
                Aplicar Filtros
              </Typography>
            </ButtonFilterApplication>
          </Box>
        </MainPaperFilter>
      )}
    </>
  )
}
