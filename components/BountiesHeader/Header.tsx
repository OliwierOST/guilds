import { Stack, Typography } from "@mui/material"

export interface HeaderProps {
  title: string
  caption: string
}

export function Header({ title, caption }: HeaderProps) {
  return (
    <Stack spacing={0.5}>
      <Typography variant="h4" fontWeight={500}>
        {title}
      </Typography>
      <Typography
        variant="body2"
        color={(theme) => theme.palette.grey[500]}
        fontWeight={400}
      >
        {caption}
      </Typography>
    </Stack>
  )
}
