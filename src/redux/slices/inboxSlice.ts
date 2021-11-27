import { ApiObjectStatus } from "@models";
import { createSlice } from "@reduxjs/toolkit";
import { MailMessage } from "src/modules/mailClientModule";
import { fetchAllMails } from '../thunks'

interface State {
  mails?: MailMessage[],
  inboxStatus: ApiObjectStatus
}

const initialState: State = {
  inboxStatus: ApiObjectStatus.IDLE
}

export default createSlice({
  name: "inbox",
  initialState: {} as State,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchAllMails.fulfilled, (state, action) => {
      const { payload } = action

      state.inboxStatus = ApiObjectStatus.SUCCEEDED
      state.mails = payload
    })
    builder.addCase(fetchAllMails.pending, (state) => {
      state.inboxStatus = ApiObjectStatus.PENDING
    })
    builder.addCase(fetchAllMails.rejected, (state) => {
      state.inboxStatus = ApiObjectStatus.FAILED
    })
  }
})