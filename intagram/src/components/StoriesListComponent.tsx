import { stories } from "@/database/StoriesDatabase";
import StoryItemComponent from "./StoryItemComponent";

export default function StoriesListComponent() {
  return (
    <section className="story-section">
      {stories.map((item) => (
        <StoryItemComponent
          key={0}
          id={item.id}
          userName={item.userName}
          urlPhoto={item.urlPhoto}
          haveBeenSeen={item.haveBeenSeen}
          dateTime={item.dateTime}
        />
      ))}
    </section>
  );
}
