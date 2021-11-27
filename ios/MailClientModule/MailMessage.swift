//
//  MailMessage.swift
//  SmartInbox
//
//  Created by Fabrizio Beccaceci on 25/11/21.
//

import Foundation

class MailMessage {
  public var senderDisplayName: String?
  public var senderMailbox: String?
  public var subject: String?
  public var preview: String?
  public var htmlContent: String?
  public var date: Date?
  
  public func toNSDictionary() -> NSDictionary {
    return [
      "senderDisplayName": senderDisplayName as Any,
      "senderMailBox": senderMailbox as Any,
      "subject": subject as Any,
      "preview": preview as Any,
      "htmlContent": htmlContent as Any,
      "date": Date.ISOStringFromDate(date: date!)
    ]
  }
}
