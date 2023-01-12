import { useFirestore, useFirestoreCollectionData } from "reactfire"
import { collection, query } from "firebase/firestore"
import { Bid as BidType } from "types/quest"
import { UserBidCard } from "../components/UserCards"

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
              {bids?.length ? (
                bids.map((bid: BidType, idx) => (
                  <UserBidCard key={idx} value={bid}></UserBidCard>
                ))
              ) : (
                <div>no bids</div>
              )}
            </>
          )}
        </>
      )}
    </>
  )
}
