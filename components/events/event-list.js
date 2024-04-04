// import EventItem from "./event-item";

// import classes from "./event-list.module.css";

// function EventList({items}) {

//   return (
//     <ul className={classes.list}>
//       {items.map((event) => (
//         <EventItem
//           key={event.id}
//           id={event.id}
//           title={event.title}
//           location={event.location}
//           date={event.date}
//           image={event.image}
//         />
//       ))}
//     </ul>
//   );
// }

// export default EventList;

import EventItem from "./event-item";
import classes from "./event-list.module.css";

function EventList({items}) {
  // const { items } = props;

  return (
    <ul className={classes.list}>
      {items.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          location={event.location}
          date={event.date}
          image={event.image}
        />
      ))}
    </ul>
  );
}

export default EventList;
