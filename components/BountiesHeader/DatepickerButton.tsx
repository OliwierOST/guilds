import Image from "next/image"
import { Stack, ToggleButton, Typography } from "@mui/material"
import { useState } from "react"

export default function DatepickerButton({ anchorEl, setAnchorEl }) {
  const [selected, setSelected] = useState<boolean>(false)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  return (
    <ToggleButton
      value="check"
      selected={anchorEl != null ? true : false}
      onChange={() => {
        setSelected(!selected)
      }}
      sx={{
        textTransform: "none",
        borderRadius: "0.4rem",
        height: "2.3rem",
        width: "10rem",
        alignSelf: "flex-end",
      }}
      onClick={handleClick}
    >
      <Stack direction="row" alignItems="center" spacing={1}>
        <Image src="/calendar.svg" width={20} height={20} alt="calendar" />
        <Typography variant="body2">Select dates</Typography>
      </Stack>
    </ToggleButton>
  )
}
