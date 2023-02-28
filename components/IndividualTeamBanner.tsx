import { Button, Stack, Box, Typography, Avatar } from "@mui/material"
import { Hero } from "types/hero"
import { Team } from "types/team"
import Link from "next/link"
import styled from "@emotion/styled"
import { StorageImage } from "reactfire"

interface IndividualTeamBannerProps {
  hero: Hero
  team: Team
}

const TeamImage = styled(StorageImage)({
  objectFit: "cover",
  maxWidth: 510,
  maxHeight: 590,
  p: 20,
  aspectRatio: "7/8",
})

const CaseStudyLink = styled(Link)`
  text-decoration: none;
`

export function IndividualTeamBanner({
  hero,
  team,
}: IndividualTeamBannerProps) {
  return (
    <Stack
      spacing={3}
      direction={{ lg: "row", xl: "row" }}
      sx={{ my: 5 }}
      alignItems="center"
    >
      <Stack width={576} mb={{ xs: "2rem", sm: "2rem", md: "2rem" }}>
        <Stack spacing={2} mb="2rem">
          <Typography variant="h3" fontSize={"3.75rem"}>
            {team?.title}
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
          {team?.highlight}
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
      </Stack>
      <TeamImage
        storagePath={`teams/${team?.image}`}
        alt={`${team?.title} team image`}
      />
    </Stack>
  )
}
