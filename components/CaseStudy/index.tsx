import { Stack } from "@mui/system"
import { HeroAvatar } from "components/HeroAvatar"
import { CaseStudyInfo } from "./CaseStudyInfo"
import { Hero } from "types/hero"

interface CaseStudyProps {
  hero: Hero
  type: string
}

export function CaseStudy({ hero, type}: CaseStudyProps) {
  return (
    <Stack spacing={3} direction={{ lg: "row", xl: "row" }} alignItems="start">
      <CaseStudyInfo type={type} hero={hero} />
      <HeroAvatar hero={hero} size="medium" />
    </Stack>
  )
}
