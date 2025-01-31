import { AllEvents } from "./allEvents/allEvents"
import { LatestEvents } from "./latestAddedEvents/latestEvents"

const index=()=>{
    return(<>
      <LatestEvents />
      <AllEvents />
    </>)
}

export default index

