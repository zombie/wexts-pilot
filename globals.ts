"use strict";

/*
  TODO: declare class as indexed using jsdoc SettingsStore ??
 */

declare const {Extension, ExtensionData}: typeof import("Extension.jsm");
declare const {ExtensionChild}: typeof import("ExtensionChild.jsm");
declare const {ExtensionChildDevToolsUtils}: typeof import("ExtensionChildDevToolsUtils.jsm");
declare const {ExtensionCommon}: typeof import("ExtensionCommon.jsm");
declare const {ExtensionContent}: typeof import("ExtensionContent.jsm");
declare const {ExtensionPageChild}: typeof import("ExtensionPageChild.jsm");
declare const {ExtensionParent, StartupCache}: typeof import("ExtensionParent.jsm");
declare const {ExtensionPermissions}: typeof import("ExtensionPermissions.jsm");
declare const {ExtensionSettingsStore}: typeof import("ExtensionSettingsStore.jsm");
declare const {ExtensionStorage}: typeof import("ExtensionStorage.jsm");
declare const {ExtensionStorageIDB}: typeof import("ExtensionStorageIDB.jsm");
declare const {ExtensionTestCommon}: typeof import("ExtensionTestCommon.jsm");
declare const {ExtensionUtils}: typeof import("ExtensionUtils.jsm");
declare const {ExtensionTestUtils}: typeof import("ExtensionXPCShellUtils.jsm");
declare const {MessageChannel}: typeof import("MessageChannel.jsm");
declare const {MessageManagerProxy}: typeof import("MessageManagerProxy.jsm");
declare const {NativeManifests}: typeof import("NativeManifests.jsm");
declare const {NativeApp}: typeof import("NativeMessaging.jsm");
declare const {Schemas, SchemaRoot}: typeof import("Schemas.jsm");
  
interface Document {
  nodePrincipal?: any;
}  

interface Element {
  messageManager?: any;
}

declare class EventEmitter {
  emit(event: string, ...args: any[]);
  on(event: string, cb: any);
  once(event: string, cb: any);
}

const {SchemaAPIManager} = ExtensionCommon;
type BaseContext = typeof ExtensionCommon.BaseContext.prototype; 

declare const
    AppConstants, AddonManager, AddonManagerPrivate, AddonSettings, AsyncShutdown, AddonTestUtils,
    BrowserUtils, ConsoleAPI, ContentTask, ContextualIdentityService, DeferredTask, E10SUtils, 
    FileSource, FileUtils, IndexedDB, L10nRegistry, LanguageDetector, Log, NetUtil, OS, PluralForm,
    Preferences, PrivateBrowsingUtils, PromiseUtils, Services, Subprocess, TelemetryStopwatch,
    TestUtils, WebNavigationFrames, WindowsRegistry, XPCOMUtils, XPIProvider;

declare const
    dump, Ci, Cu, Cc, Cr, ChromeUtils, ChromeWorker, Components, WebExtensionPolicy, content,
    ChannelWrapper, uneval, MatchGlob, MatchPattern, MatchPatternSet, StructuredCloneHolder,
    WebExtensionContentScript;

declare class AnyClass {
  constructor(...args);
  [key: string]: any;
};

declare class JSONFile extends AnyClass {};

type integer = number;

type BrowserExtensionContent = any;
type DevToolsContextChild = any;
type Context = any;
type FrameLoader = any;
type IdleDeadline = any;
type nsIDOMWindow = any;
type nsIFile = any;
type nsIMessageListener = any;
type nsIMessageListenerManager = any;
type nsIMessageManager = any;
type nsIMessageSender = any;
type nsIPrincipal = any;
type nsIStringBundle = any;
type nsISupports = any;
type nsIURI = any;
type SavedFrame = any;
type SchemaAPIInterface = any;
type StructuredCloneHolder = any;
type WebExtensionContentScript = any;
type WebExtensionParentActor = any;
type XULDocument = any;
type XULElement = any;
