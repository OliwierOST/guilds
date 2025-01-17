import Link from "next/link"
import styled from "@emotion/styled"
import { Button, Divider, Stack, Typography } from "@mui/material"
import { Hero } from "types/hero"

const CaseStudyLink = styled(Link)`
  text-decoration: none;
`

interface CaseStudyInfoProps {
  hero: Hero
  type: string
}

export function CaseStudyInfo({ hero, type }: CaseStudyInfoProps) {
  return (
    <Stack width={576} spacing={5} mb={{ xs: "2rem", sm: "2rem", md: "2rem" }}>
      <Stack spacing={2} mb="2rem">
        <Typography variant="body1" fontWeight={600} color="primary.main">
          Case study
        </Typography>
        <Typography variant="h3">
          About the {type == "team" ? "team leader" : "quest creator"}
        </Typography>
      </Stack>
      <Divider />
      <Typography color="text.secondary">{hero?.bio}</Typography>
      <Stack direction="row" spacing={2}>
        <CaseStudyLink href="#">
          <Button
            variant="outlined"
            sx={{
              borderRadius: "0.5rem",
              height: "3rem",
              color: "text.primary",
              borderColor: (theme) => theme.palette.grey[300],
            }}
          >
            <Typography textTransform="none">View full profile</Typography>
          </Button>
        </CaseStudyLink>
        <CaseStudyLink href="#">
          <Button
            variant="contained"
            sx={{
              height: "3rem",
              borderRadius: "0.5rem",
            }}
          >
            <Typography textTransform="none">Message</Typography>
          </Button>
        </CaseStudyLink>
      </Stack>
    </Stack>
  )
}
