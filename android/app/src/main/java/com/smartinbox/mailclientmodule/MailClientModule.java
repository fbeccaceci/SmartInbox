package com.smartinbox.mailclientmodule;

import android.util.Log;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class MailClientModule extends ReactContextBaseJavaModule {

    public MailClientModule(@Nullable ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @NonNull
    @Override
    public String getName() {
        return "MailClientModule";
    }

    @ReactMethod
    public void initializeSession(String authToken, String userEmail) {
        Log.d("SMART_INBOX", "Initialized session");
    }

    @ReactMethod
    public void fetchAllMailMessages() {
        Log.d("SMART_INBOX", "fetching all mails");
    }

}
