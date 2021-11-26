//
//  MailMessage.swift
//  SmartInbox
//
//  Created by Fabrizio Beccaceci on 25/11/21.
//

import Foundation

class MailMessage {
  public var subject: String?
  public var preview: String?
  public var htmlContent: String?
  
  public func toNSDictionary() -> NSDictionary {
    return [
      "subject": subject as Any,
      "preview": preview as Any,
      "htmlContent": htmlContent as Any,
    ]
  }
}
