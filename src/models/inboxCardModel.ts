export default interface InboxCardModel {
  profilePicture?: string,
  sender: string;
  object: string;
  content: string;
  date: Date
}