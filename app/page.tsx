import ExploreBtn from "@/components/ExploreBtn"

function page() {
  return (
  <section>
    <h1 className="text-center">The Hub for Every Event <br/>Event you cant miss </h1>
    <p className="text-center mt-5">Hacathons, Meetups, and Conferences, All in one Place </p>
    <ExploreBtn />

    <div className="mt-20 space-y-7">

      <h3>Featured Events</h3>
      <ul className="events list-style-none">
        {[1,2,3,4,5,6,7,8].map((event)=>(
          <li key={event}> Event {event}
          </li>
        ))}
        
      </ul>

    </div>
  </section>
  )
}

export default page