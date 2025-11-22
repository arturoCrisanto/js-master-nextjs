import EventCard from "@/components/EventCard"
import ExploreBtn from "@/components/ExploreBtn"

const events = [
  {
   image: '/images/event1.png',
   title: 'Tech Conference 2023',
  },
  {
   image: '/images/event2.png',
   title: 'Developer Meetup 2023',
  },
  {
   image: '/images/event3.png',
   title: 'Design Workshop 2023',
  },
]


function page() {
  return (
  <section>
    <h1 className="text-center">The Hub for Every Event <br/>Event you cant miss </h1>
    <p className="text-center mt-5">Hacathons, Meetups, and Conferences, All in one Place </p>
    <ExploreBtn />

    <div className="mt-20 space-y-7">

      <h3>Featured Events</h3>
      <ul className="events list-style-none">
        {events.map((event)=>(
          <li key={event.title}>
            <EventCard {...event} />
          </li>
        ))}
        
      </ul>

    </div>
  </section>
  )
}

export default page