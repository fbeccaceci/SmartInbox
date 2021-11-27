import { RooState } from "@redux/store";
import { createSelector } from "reselect";

const selectSelf = (state: RooState) => state.inbox

export const selectMails = createSelector(
  selectSelf,
  state => state.mails
)