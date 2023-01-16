import { TextField, Stack, Typography, Container, Slider } from "@mui/material"
import styled from "@emotion/styled"

const XpBar = styled(Slider)(() => ({
  "& .MuiSlider-thumb": {
    color: "white",
    border: "solid 2px #50915B",
  },
  "& .MuiSlider-rail": {
    color: "#EAECF0",
  },
  "& .MuiSlider-track": {
    color: "#50915B",
  },
}))

interface LevelBarProps {
  level: string
  xp: string
}

export function LevelBar({ level, xp }: LevelBarProps) {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        m: 5,
      }}
    >
      <Typography variant="body1" fontWeight={600} color="primary.main">
        You are currently level {level}
      </Typography>
      <Typography variant="h3" sx={{ mt: 1 }}>
        {xp}XP
      </Typography>
      <XpBar disabled defaultValue={[0, Number(level)]} sx={{ mt: 2 }} />
    </Container>
  )
}
