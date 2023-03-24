import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ButtonFilterApplication, MainPaperFilter, MainPaperFilterButton } from "./styles";
import Filter from '../../assets/filter.svg';
import { useState } from "react";

export default function FullFilter() {
  const [filterBoolean, setFilterBoolean] = useState(false)

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
          <Box sx={{ display: 'flex', gap: '18px', marginTop: '20px' }}>
            <ButtonFilterApplication>
              <Typography variant="filterTitle" color="black">
                Limpar Filtros
              </Typography>
            </ButtonFilterApplication>
            <ButtonFilterApplication chosen="true">
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
