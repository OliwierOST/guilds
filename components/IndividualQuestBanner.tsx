import { Button, Stack, Box, Typography, Avatar } from "@mui/material"
import { Hero } from "types/hero"
import { Quest } from "types/quest"
import Link from "next/link"
import styled from "@emotion/styled"
import {
  StorageImage,
  useFirestoreCollectionData,
  useFirestore,
} from "reactfire"
import { collection, limit, orderBy, query } from "firebase/firestore"

interface IndividualQuestBannerProps {
  hero: Hero
  quest: Quest
}

const QuestImage = styled(StorageImage)({
  objectFit: "cover",
  maxWidth: 510,
  maxHeight: 590,
  p: 20,
  aspectRatio: "7/8",
})

const CaseStudyLink = styled(Link)`
  text-decoration: none;
`

export function IndividualQuestBanner({
  hero,
  quest,
}: IndividualQuestBannerProps) {
  const firestore = useFirestore()
  const bidsRef = collection(firestore, `quests/${quest?.id}/bids`)
  const topBidsQuery = query(bidsRef, orderBy("amount", "asc"), limit(1))
  const { data: topBids } = useFirestoreCollectionData(topBidsQuery)
  const topBid = topBids?.[0]

  return (
    <Stack
      spacing={3}
      direction={{ lg: "row", xl: "row" }}
      sx={{ my: 5 }}
      alignItems="center"
    >
      <Stack width={576} mb={{ xs: "2rem", sm: "2rem", md: "2rem" }}>
        <Stack spacing={2} mb="2rem">
          <Box
            display="flex"
            sx={{
              padding: "4px 10px 4px 4px",
              width: "max-content",
              backgroundColor: "#FFFAEB",
              borderRadius: "16px",
            }}
          >
            <Typography
              display="inline"
              sx={{
                py: 0.5,
                px: 1,
                fontWeight: "500",
                fontSize: "0.75rem",
                backgroundColor: "#FFFFFF",
                color: "#B54708",
                borderRadius: "16px",
              }}
            >
              {topBid?.userName} holds the top bid
            </Typography>
            <Typography
              display="inline"
              color="#B54708"
              sx={{ p: 0.5, ml: 1, fontSize: "0.75rem", fontWeight: "500" }}
            >
              {topBid?.amount}
            </Typography>
          </Box>
          <Typography variant="h3" fontSize={"3.75rem"}>
            {quest?.title}
          </Typography>
        </Stack>
        <Typography
          sx={{
            color: "#667085",
            fontWeight: 400,
            fontSize: "1.25rem",
            lineHeight: "1.875rem",
          }}
        >
          {quest?.summary}
        </Typography>
        <Stack
          display="flex"
          flexDirection="row"
          alignItems="center"
          sx={{ my: 3 }}
        >
          <Avatar
            src={hero?.profilePicture}
            sx={{ width: 56, height: 56, m: 1, mb: 2 }}
          />
          <Stack>
            <Typography>
              {hero?.name.first} {hero?.name.last}
            </Typography>
            <Typography
              sx={{
                fontWeight: 400,
                size: "1rem",
                lineHeight: "1.5rem",
                color: "#667085",
              }}
            >
              Created 14th July 2022
            </Typography>
          </Stack>
        </Stack>
        <Stack direction="row" spacing={2}>
          <CaseStudyLink href="#about-section">
            <Button
              variant="outlined"
              sx={{
                borderRadius: "0.5rem",
                height: "3rem",
                color: "text.primary",
                borderColor: (theme) => theme.palette.grey[300],
              }}
            >
              <Typography textTransform="none">More information</Typography>
            </Button>
          </CaseStudyLink>
          <CaseStudyLink href="#current-bids-section">
            <Button
              variant="contained"
              sx={{
                height: "3rem",
                borderRadius: "0.5rem",
              }}
            >
              <Typography textTransform="none">Place a bid</Typography>
            </Button>
          </CaseStudyLink>
        </Stack>
      </Stack>
      <QuestImage
        storagePath={"heroes/hero1.jpeg"}
        alt={`${quest?.title} quest image`}
      />
    </Stack>
  )
}
