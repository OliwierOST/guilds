import { Container, Box, CircularProgress } from "@mui/material"
import { Header } from "../../components/Header"
import { BackToSearch } from "../../components/BackToSearch"
import { Footer } from "../../components/Footer"
import { useFirestoreDocData, useFirestore } from "reactfire"
import { doc } from "firebase/firestore"
import { CaseStudy } from "../../components/CaseStudy"
import { useRouter } from "next/router"

export default function Team() {
  const router = useRouter()
  const { tid } = router.query

  const firestore = useFirestore()
  const teamRef = doc(firestore, `teams/${tid}`)

  const { status: teamStatus, data: team } = useFirestoreDocData(teamRef)
  const heroRef = doc(firestore, `heroes/${team?.creatorId}`)
  const { status: heroStatus, data: hero } = useFirestoreDocData(heroRef)

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      <Container>
        {team && hero ? (
          <>
            <CaseStudy type="team" hero={hero} />
          </>
        ) : (
          <CircularProgress />
        )}
        <BackToSearch />
      </Container>
      <Footer />
    </Box>
  )
}
