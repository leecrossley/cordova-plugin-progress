//
//  Progress.m
//  Copyright (c) 2015 Lee Crossley - http://ilee.co.uk
//

#import "Cordova/CDV.h"
#import "Cordova/CDVViewController.h"
#import "Progress.h"
#import "KVNProgress.h"

@implementation Progress

- (void) show:(CDVInvokedUrlCommand*)command;
{
    NSMutableDictionary *args = [command.arguments objectAtIndex:0];
    NSString *text = [args objectForKey:@"text"];

    if (text != nil)
    {
        [KVNProgress showWithStatus:text];
    }
    else
    {
        [KVNProgress show];
    }

    [self.commandDelegate sendPluginResult:[CDVPluginResult resultWithStatus:CDVCommandStatus_OK] callbackId:command.callbackId];
}

- (void) update:(CDVInvokedUrlCommand*)command;
{
    NSMutableDictionary *args = [command.arguments objectAtIndex:0];
    NSString *text = [args objectForKey:@"text"];

    [KVNProgress updateStatus:text];

    [self.commandDelegate sendPluginResult:[CDVPluginResult resultWithStatus:CDVCommandStatus_OK] callbackId:command.callbackId];
}

- (void) hide:(CDVInvokedUrlCommand*)command;
{
    [KVNProgress dismissWithCompletion:^{
        [self.commandDelegate sendPluginResult:[CDVPluginResult resultWithStatus:CDVCommandStatus_OK] callbackId:command.callbackId];
    }];
}

@end
