import styled from "@emotion/styled"
import Link from "next/link"
import Image from "next/image"
import {
  Stack,
  Typography,
  CircularProgress,
  Box,
  Avatar,
  Grid,
} from "@mui/material"
import { Bid } from "types/quest"
import { useFirestore, useFirestoreDocData } from "reactfire"
import { doc } from "firebase/firestore"

interface UserCardBidProps {
  value: Bid
}

const Heading = styled(Typography)({
  color: "#101828",
  fontSize: "1.125rem",
  lineHeight: "1.75rem",
  fontWeight: 500,
})

export function UserCardBid({ value }: UserCardBidProps) {
  const firestore = useFirestore()
  const heroQuery = doc(firestore, "heroes", value.bidderId)
  const { status, data: hero } = useFirestoreDocData(heroQuery)

  if (!hero) {
    return <CircularProgress />
  }

  return (
    <Grid item xs={4}>
      <Stack sx={{ maxWidth: "330px" }}>
        <Avatar
          src={hero.profilePicture}
          sx={{ width: 80, height: 80, m: 1, mb: 2 }}
        />
        <Stack>
          <Heading>
            {hero.name.first} {hero.name.last}
          </Heading>
          <Typography
            sx={{
              fontWeight: 400,
              size: "1rem",
              lineHeight: "1.5rem",
              color: "#498553",
            }}
          >
            {"£" + value.amount}
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              size: "1rem",
              lineHeight: "1.5rem",
              color: "#667085",
              paddingY: 1,
            }}
          >
            {/*TODO - add tagline as a required field in hero data*/}
            Former co-founder of Opendoor. Early staff at Spotify and Clearbit.
          </Typography>
          <Stack flexDirection="row" sx={{ mb: 2, mt: 1 }}>
            <Box sx={{ mr: 2 }}>
              <Link href={"link"}>
                <Image
                  src="/twitter.svg"
                  alt="Twitter"
                  width={20}
                  height={20}
                />
              </Link>
            </Box>
            <Box sx={{ mr: 2 }}>
              <Link href={"link"}>
                <Image
                  src="/linkedin.svg"
                  alt="LinkedIn"
                  width={20}
                  height={20}
                />
              </Link>
            </Box>
            <Box sx={{ mr: 2 }}>
              <Link href={"link"}>
                <Image
                  src="/instagram.svg"
                  alt="Instagram"
                  width={20}
                  height={20}
                />
              </Link>
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </Grid>
  )
}
