//
//  Progress.h
//  Copyright (c) 2015 Lee Crossley - http://ilee.co.uk
//

#import "Foundation/Foundation.h"
#import "Cordova/CDV.h"

@interface Progress : CDVPlugin

- (void) show:(CDVInvokedUrlCommand*)command;
- (void) update:(CDVInvokedUrlCommand*)command;
- (void) hide:(CDVInvokedUrlCommand*)command;

@end
