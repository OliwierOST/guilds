import Link from "next/link"
import React, { useState, useEffect } from "react"
import styled from "@emotion/styled"
import { Button, Stack, Typography, Grid } from "@mui/material"
import { useFirestore, useFirestoreCollectionData } from "reactfire"
import { collection, query } from "firebase/firestore"
import { Bids } from "../components/Bids"

interface CurrentBidsProps {
  path: string
}
const BidsLink = styled(Link)`
  text-decoration: none;
`

export function CurrentBids({ path }: CurrentBidsProps) {
  const firestore = useFirestore()
  const questsQuery = query(collection(firestore, path))
  const { status, data: bids } = useFirestoreCollectionData(questsQuery)

  const [lowest, setLowest] = useState(0)
  const [highest, setHighest] = useState(0)

  useEffect(() => {
    if (bids.length > 0) {
      let min = Number(bids[0].amount)
      let max = Number(bids[0].amount)

      for (let i = 0; i < bids.length; i++) {
        if (Number(bids[i].amount) < min) {
          min = Number(bids[i].amount)
        }
        if (Number(bids[i].amount > max)) {
          max = Number(bids[i].amount)
        }
      }
      setLowest(min)
      setHighest(max)
    }
  }, [status])

  return (
    <Stack
      direction={{ lg: "row", xl: "row" }}
      sx={{ mt: 5, mb: 5, ml: 5 }}
      alignItems="start"
    >
      <Grid container spacing={5}>
        <Grid item md={4}>
          <Stack spacing={2} mb={4}>
            <Stack spacing={2}>
              <Typography variant="body1" fontWeight={600} color="primary.main">
                Current lowest bid - £{lowest}
              </Typography>
              <Typography variant="h3">Current bids on this quest</Typography>
            </Stack>
            <Typography color="text.secondary">
              The current heroes that are bidding on this quest.
            </Typography>
            <Stack display="flex" flexDirection="row" sx={{ pb: 3 }}>
              <Typography display="inline" color="text.secondary">
                The best competitor price is currently{" "}
                <span style={{ color: "#498553", fontWeight: 600 }}>
                  £{highest}.
                </span>
              </Typography>
            </Stack>
            <Stack direction="row" spacing={2}>
              <BidsLink href="#">
                <Button
                  variant="outlined"
                  sx={{
                    borderRadius: "0.5rem",
                    height: "3rem",
                    color: "text.primary",
                    borderColor: (theme) => theme.palette.grey[300],
                  }}
                >
                  <Typography textTransform="none">See all</Typography>
                </Button>
              </BidsLink>
              <BidsLink href="#">
                <Button
                  variant="contained"
                  sx={{
                    height: "3rem",
                    borderRadius: "0.5rem",
                  }}
                >
                  <Typography textTransform="none">Make a new bid</Typography>
                </Button>
              </BidsLink>
            </Stack>
          </Stack>
        </Grid>
        <Grid item md={8}>
          <Bids path={path} />
        </Grid>
      </Grid>
    </Stack>
  )
}
