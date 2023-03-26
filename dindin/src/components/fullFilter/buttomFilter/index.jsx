import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import useAppContext from "../../../hooks/useAppContext";
import { ButtonFilterApplication } from "../styles";


export default function ButtomFilter({ categorie }) {
  const {
    toggleCategorie,
    trueOrFalse,
  } = useAppContext()

  const [selected, setSelected] = useState(trueOrFalse)

  useEffect(() => {
    setSelected(false)
  }, [trueOrFalse])

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
