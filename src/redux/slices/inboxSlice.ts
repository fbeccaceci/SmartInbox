import { createSlice } from "@reduxjs/toolkit";
import { MailMessage } from "src/modules/mailClientModule";
import { fetchAllMails } from '../thunks'

interface InboxSlice {
  mails?: MailMessage[]
}

export default createSlice({
  name: "inbox",
  initialState: {} as InboxSlice,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchAllMails.fulfilled, (state, action) => {
      const { payload } = action
      state.mails = payload
    })
  }
})