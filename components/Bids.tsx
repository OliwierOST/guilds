import { useFirestore, useFirestoreCollectionData } from "reactfire"
import { collection, query } from "firebase/firestore"
import { Bid as BidType } from "types/quest"
import { UserCardBid } from "../components/UserCardBid"
import { Grid, Box } from "@mui/material"

export function Bids({ path }): JSX.Element {
  const firestore = useFirestore()
  const questsQuery = query(collection(firestore, path))
  const { status, data: bids } = useFirestoreCollectionData(questsQuery)

  return (
    <>
      {status && (
        <>
          {status === "loading" ? (
            <div>loading</div>
          ) : (
            <>
              <Grid container columnSpacing={1} rowSpacing={4}>
                {bids?.length ? (
                  bids.map((bid: BidType, idx) => (
                    <UserCardBid key={idx} value={bid}></UserCardBid>
                  ))
                ) : (
                  <div>no bids</div>
                )}
              </Grid>
            </>
          )}
        </>
      )}
    </>
  )
}
