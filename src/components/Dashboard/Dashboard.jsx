import Card from './Card';
import EventCarousel from './EventCarousel';

const Dashboard = () => {

  const renderCards = () => (
    <div className="gap-5 p-1 flex">
      <Card heading={"Registered Events"} desc={"Contains all the events that you have registered for."} buttonText={"Show"} buttonUrl={"/registeredEvents"}/>
      <Card heading={"Ongoing Events"} desc={"Contains all the events that you can register for right now!"} buttonText={"Show"} buttonUrl={"/ongoingEvents"}/>
      <Card heading={"Upcoming Events"} desc ={"Contains all the events that will be available for registration!"} buttonText={"Show"} buttonUrl={"/upcomingEvents"}/>
    </div>
  );

  return (
    <div>

      {/* Body */}
      <main className="relative top-3 md:sm:top-0 z-0">
        <div> 
          <EventCarousel/>
        </div>

        {/* Event Cards */}
        <div className='flex overflow-x-auto'>
          {renderCards()}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
