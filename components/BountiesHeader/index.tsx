import { Stack } from "@mui/material"
import DatepickerButton from "./DatepickerButton"
import { Header } from "./Header"
import { PeriodTabs } from "./PeriodTabs"

export interface HeaderProps {
  title: string
  caption: string
  anchorEl: any
  setAnchorEl: any
}

export function BountiesHeader({
  title,
  caption,
  anchorEl,
  setAnchorEl,
}: HeaderProps) {
  return (
    <Stack spacing={3}>
      <Header title={title} caption={caption} />
      <Stack
        direction={{
          xs: "column",
          sm: "row",
          md: "row",
          lg: "row",
          xl: "row",
        }}
        justifyContent="space-between"
        spacing={2}
      >
        <PeriodTabs />
        <DatepickerButton anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
      </Stack>
    </Stack>
  )
}
