//
//  MailClientModule.swift
//  SmartInbox
//
//  Created by Fabrizio Beccaceci on 24/11/21.
//

import Foundation


@objc(MailClientModule)
class MailClientMoudle: NSObject {
  
  private static let gmailHostname = "imap.gmail.com"
  private static let gmailPort: UInt32 = 993
  
  private let session = MCOIMAPSession()
  private var sessionInitialized = false
  
  @objc static func requiresMainQueueSetup() -> Bool {
      return false
  }
  
  @objc(initializeSession:withMail:)
  func initializeSession(_ token: String, withMail mail: String) {
    session.hostname = MailClientMoudle.gmailHostname
    session.port = MailClientMoudle.gmailPort
    session.username = mail
    session.connectionType = .TLS
    session.authType = .xoAuth2
    session.oAuth2Token = token
    
    sessionInitialized = true
    
    print("MAILCLIENT_MODULE: Session initialized")
  }
  
  @objc(fetchAllMailMessages:rejecter:)
  func fetchAllMailMessages(_ resolve: @escaping RCTPromiseResolveBlock, rejected reject: @escaping RCTPromiseRejectBlock) {
    if !sessionInitialized {
      reject(nil, "Session not initialized", nil)
    }
    
    let requestKing = MCOIMAPMessagesRequestKind.headers
    let folder = "INBOX"
    
    let uids = MCOIndexSet(range: MCORangeMake(1, UINT64_MAX))
    
    let fetchOperation = session.fetchMessagesOperation(withFolder: folder, requestKind: requestKing, uids: uids)
    
    fetchOperation?.start { err, msg, vanished in
      if(err != nil) {
        
        print("Error fetching messages: \(err!.localizedDescription)")
        reject(nil, "Error fetching messages", nil)
        return
      }
      
      guard let msgs = msg as? [MCOIMAPMessage] else {
        print("Error casting messages")
        reject(nil, "Error casting messages", nil)
        return
      }
      
      let myGroup = DispatchGroup()
      
      var messages: [NSDictionary] = []
      for i in 0..<msgs.count {
        myGroup.enter()
        
        let message = msgs[i]
        
        let mailMessage = MailMessage()
        mailMessage.senderDisplayName = message.header.sender.displayName
        mailMessage.senderMailbox = message.header.sender.mailbox
        mailMessage.subject = message.header.subject
        mailMessage.date = message.header.date
        
        let operation: MCOIMAPFetchContentOperation = self.session.fetchMessageOperation(withFolder: "INBOX", uid: message.uid)
        operation.start { (Error, data) in
          if (Error != nil)
          {
              NSLog("ERROR")
              return
          }
          
          let messageParser: MCOMessageParser = MCOMessageParser(data: data)
              
          let msgPlainBody = messageParser.plainTextBodyRendering()
          
          let msgHtmlBody = messageParser.htmlBodyRendering()
          
          
          mailMessage.preview = msgPlainBody
          mailMessage.htmlContent = msgHtmlBody
          messages.append(mailMessage.toNSDictionary())
          myGroup.leave()
       }
      }
      myGroup.notify(queue: .main) {
        messages.sort {
          $0["date"] as! String > $1["date"] as! String
        }
        resolve(messages)
      }
    }
  }
              
}


