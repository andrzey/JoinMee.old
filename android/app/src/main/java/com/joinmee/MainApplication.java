package com.joinmee;

import com.oblador.vectoricons.VectorIconsPackage;
import com.reactnativenavigation.NavigationApplication;
import android.app.Application;
import com.facebook.react.ReactApplication;
import com.facebook.reactnative.androidsdk.FBSDKPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.facebook.react.ReactPackage;

import com.facebook.CallbackManager;
import com.facebook.FacebookSdk;
import com.facebook.reactnative.androidsdk.FBSDKPackage;
import com.facebook.appevents.AppEventsLogger;

import java.util.Arrays;
import java.util.List;
import android.support.annotation.NonNull;
import com.reactnativenavigation.controllers.ActivityCallbacks;
import android.content.Intent;


public class MainApplication extends NavigationApplication {
  private static CallbackManager mCallbackManager = CallbackManager.Factory.create();

  protected static CallbackManager getCallbackManager() {
    return mCallbackManager;
  }

  public boolean isDebug() {
    // Make sure you are using BuildConfig from your own application
    return BuildConfig.DEBUG;
  }

  protected List<ReactPackage> getPackages() {
    return Arrays.<ReactPackage>asList(new VectorIconsPackage(), new FBSDKPackage(mCallbackManager));
  }

  @Override
  public void onCreate() {
    super.onCreate();
      setActivityCallbacks(new ActivityCallbacks() {
          @Override
          public void onActivityResult(int requestCode, int resultCode, Intent data) {
              mCallbackManager.onActivityResult(requestCode, resultCode, data);
          }
      });
    FacebookSdk.sdkInitialize(getApplicationContext());
    // If you want to use AppEventsLogger to log events.
    AppEventsLogger.activateApp(this);
  }

  @NonNull
  @Override
  public List<ReactPackage> createAdditionalReactPackages() {
    return getPackages();
  }
}
