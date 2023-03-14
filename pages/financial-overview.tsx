import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { Container, Box, Stack, Grid } from "@mui/material"
import { BountiesHeader } from "components/BountiesHeader"
import { DoughnutChart } from "components/BountiesDoughnutChart"
import { BountiesBalanceCard } from "components/BountiesBalanceCard"
import { BountiesGraph } from "components/BountiesGraph"
import { YourCards } from "components/YourCards/YourCards"
import { RecentTransactions } from "components/RecentTransactions"
import { useState } from "react"
import { SmallDatePicker } from "components/smallDatePicker"

export default function FinancialOverview() {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Container sx={{ my: "2rem" }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <BountiesHeader
              title="Financial Overview"
              caption="Here's your accounts financial overview"
              anchorEl={anchorEl}
              setAnchorEl={setAnchorEl}
            />
            <SmallDatePicker anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
          </Grid>
          <Grid item xs={12} lg={2.4}>
            <DoughnutChart />
          </Grid>
          <Grid item xs={6} md={3} lg={2.4}>
            <BountiesBalanceCard title="Work in Progress" balance="2000" />
          </Grid>
          <Grid item xs={6} md={3} lg={2.4}>
            <BountiesBalanceCard title="In Review" balance="2000" />
          </Grid>
          <Grid item xs={6} md={3} lg={2.4}>
            <BountiesBalanceCard title="Pending" balance="2000" />
          </Grid>
          <Grid item xs={6} md={3} lg={2.4}>
            <BountiesBalanceCard title="Available" balance="2000" />
          </Grid>
          <Grid item xs={12} lg={8}>
            <Stack justifyContent="space-between" spacing={3} height="100%">
              <BountiesGraph period="month" />
              <YourCards />
            </Stack>
          </Grid>
          <Grid item xs={12} lg={4}>
            <RecentTransactions />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
