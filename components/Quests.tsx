import { Grid } from "styled-css-grid"
import { useFirestore, useFirestoreCollectionData } from "reactfire"
import { collection, query } from "firebase/firestore"
import { populateBids, populateQuests } from "../storage/quest"
import Bids from "../components/Bids"
import { InstantSearch, SearchBox, Hits, Stats } from "react-instantsearch-dom"
import { searchClient } from "../typesense/insantsearch"

export default function Quests(): JSX.Element {
  const firestore = useFirestore()
  const questsQuery = query(collection(firestore, "quests"))
  const { status, data: quests } = useFirestoreCollectionData(questsQuery)

  const Hit = ({ hit }) => (
    <div>
      <div>Title: {hit?.title}</div>
      <div>Description: {hit?.description}</div>
      <div>Reward: {hit?.reward}</div>
      <div>Tags: {hit?.tags[0]}</div>
      <Bids path={`quests/${hit.id}/bids`} />
    </div>
  )

  return (
    <InstantSearch searchClient={searchClient} indexName="quests">
      <SearchBox />
      <Stats />
      <button
        onClick={() => populateQuests(firestore)}
        style={{ color: "black" }}
      >
        populate quests if not populated
      </button>
      <button
        onClick={() => populateBids(firestore)}
        style={{ color: "black" }}
      >
        populate bids if not populated
      </button>
      {status && (
        <>
          {status === "loading" ? (
            <div>loading</div>
          ) : (
            <Grid columns={"repeat(auto-fit, minmax(210px, 1fr))"} gap={"83px"}>
              <Hits hitComponent={Hit} />
            </Grid>
          )}
        </>
      )}
    </InstantSearch>
  )
}
