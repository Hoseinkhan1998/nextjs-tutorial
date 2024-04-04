import { Fragment } from "react";
import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/event-search";
import { getAllEvents } from "../../helpers/api-util";
import { useRouter } from "next/router";
import Head from "next/head";

function EventsPage(props) {
  const router = useRouter();
  const { events } = props;

  function findEventsHandler(year, month) {
    const fullpath = `/events/${year}/${month}/abc`;

    router.push(fullpath);
  }
  return (
    <Fragment>
      <Head>
        <title>Hosein AllEvents</title>
        <meta name="description" content="go find yourself" />
      </Head>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const events = await getAllEvents();

  return {
    props: {
      events: events,
    },
    revalidate: 60,
  };
}

export default EventsPage;
