//
//  MailModuleBridge.m
//  SmartInbox
//
//  Created by Fabrizio Beccaceci on 24/11/21.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(MailClientModule, NSObject)

RCT_EXTERN_METHOD(initializeSession:(NSString*)token withMail:(NSString*)mail)

RCT_EXTERN_METHOD(fetchAllMailMessages:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock*)reject)

@end

