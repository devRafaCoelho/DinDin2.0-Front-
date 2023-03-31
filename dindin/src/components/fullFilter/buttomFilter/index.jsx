import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import useAppContext from "../../../hooks/useAppContext";
import { ButtonFilterApplication } from "../styles";


export default function ButtomFilter({ categorie }) {
  const {
    toggleCategorie,
    resetValue,
    selectedCategories
  } = useAppContext()

  const [selected, setSelected] = useState(false)

  useEffect(() => {
    setSelected(false)
  }, [resetValue])

  useEffect(() => {
    if (selectedCategories.some(cat => categorie.id === cat.id)) {
      setSelected(true)
    }
  }, [])

  return (
    <ButtonFilterApplication
      onClick={() => {
        setSelected(!selected)
        toggleCategorie(categorie)
      }}
      chosen={selected ? 'true' : ''}
    >
      <Typography variant="filterTitle" color={selected ? 'white' : 'black'}>
        {`${categorie.description} ${selected ? 'x' : '+'}`}
      </Typography>
    </ButtonFilterApplication>

  )
}
