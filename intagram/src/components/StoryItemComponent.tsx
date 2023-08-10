import { UserStory } from "@/interface/UserStory";

export default function StoryItemComponent(item: UserStory) {
  const classes = item.haveBeenSeen ? "ativa" : "";

  return (
    <div className="item" key={item.id}>
      <img className={classes} src={item.urlPhoto} alt="" />
      <p>{item.userName}</p>
    </div>
  );
}
