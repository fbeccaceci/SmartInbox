import { NativeModules } from "react-native";

const {MailClientModule} = NativeModules

export interface MailMessage {
  senderDisplayName: string;
  senderMailbox: string;
  subject: string;
  preview: string;
  htmlContent: string;
  date: string;
}

interface IMailClientModule {
  initializeSession(authToken: string, email: string): void;
  fetchAllMailMessages(): Promise<MailMessage[]>;
}

export default MailClientModule as IMailClientModule