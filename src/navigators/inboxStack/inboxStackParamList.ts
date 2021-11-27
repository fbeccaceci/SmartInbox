import { MailMessage } from "src/modules/mailClientModule";

export type InboxStackParamList = {
  inbox: undefined,
  mailView: {mail: MailMessage}
}