import { UserStory } from "@/interface/UserStory";

const umItem: UserStory = {
  id: 1,
  userName: "vt_norton",
  urlPhoto: "https://picsum.photos/100/100",
  haveBeenSeen: false,
  dateTime: new Date(),
};

const outroItem: UserStory = {
  id: 2,
  userName: "adele",
  urlPhoto: "https://picsum.photos/99/99",
  haveBeenSeen: true,
  dateTime: new Date(),
};

const novoItem: UserStory = {
  id: 3,
  userName: "barbie",
  urlPhoto: "https://picsum.photos/98/98",
  haveBeenSeen: false,
  dateTime: new Date(),
};

const quartoItem: UserStory = {
  id: 3,
  userName: "acdb",
  urlPhoto: "https://picsum.photos/97/97",
  haveBeenSeen: true,
  dateTime: new Date(),
};

export const stories: UserStory[] = [umItem, outroItem, novoItem, quartoItem];
