import { createAsyncThunk } from "@reduxjs/toolkit";
import MailClientModule, { MailMessage } from "../../modules/mailClientModule";

type PARAMETER = undefined
type RESULT = MailMessage[]
type THUNK_CONFIG = {
  rejectValue: string
}

export default createAsyncThunk<RESULT, PARAMETER, THUNK_CONFIG>(
  'inbox/fetchAll',
  async (_, thunkApi) => {
    console.log("Fetching all mails");
    
    return await MailClientModule.fetchAllMailMessages()
  }
)