(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/node_modules/.pnpm/@tauri-apps+api@2.7.0/node_modules/@tauri-apps/api/external/tslib/tslib.es6.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol, Iterator */ __turbopack_context__.s({
    "__classPrivateFieldGet": ()=>__classPrivateFieldGet,
    "__classPrivateFieldSet": ()=>__classPrivateFieldSet
});
function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
;
}),
"[project]/node_modules/.pnpm/@tauri-apps+api@2.7.0/node_modules/@tauri-apps/api/core.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "Channel": ()=>Channel,
    "PluginListener": ()=>PluginListener,
    "Resource": ()=>Resource,
    "SERIALIZE_TO_IPC_FN": ()=>SERIALIZE_TO_IPC_FN,
    "addPluginListener": ()=>addPluginListener,
    "checkPermissions": ()=>checkPermissions,
    "convertFileSrc": ()=>convertFileSrc,
    "invoke": ()=>invoke,
    "isTauri": ()=>isTauri,
    "requestPermissions": ()=>requestPermissions,
    "transformCallback": ()=>transformCallback
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$7$2e$0$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$external$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tauri-apps+api@2.7.0/node_modules/@tauri-apps/api/external/tslib/tslib.es6.js [app-client] (ecmascript)");
;
// Copyright 2019-2024 Tauri Programme within The Commons Conservancy
// SPDX-License-Identifier: Apache-2.0
// SPDX-License-Identifier: MIT
var _Channel_onmessage, _Channel_nextMessageIndex, _Channel_pendingMessages, _Channel_messageEndIndex, _Resource_rid;
/**
 * Invoke your custom commands.
 *
 * This package is also accessible with `window.__TAURI__.core` when [`app.withGlobalTauri`](https://v2.tauri.app/reference/config/#withglobaltauri) in `tauri.conf.json` is set to `true`.
 * @module
 */ /**
 * A key to be used to implement a special function
 * on your types that define how your type should be serialized
 * when passing across the IPC.
 * @example
 * Given a type in Rust that looks like this
 * ```rs
 * #[derive(serde::Serialize, serde::Deserialize)
 * enum UserId {
 *   String(String),
 *   Number(u32),
 * }
 * ```
 * `UserId::String("id")` would be serialized into `{ String: "id" }`
 * and so we need to pass the same structure back to Rust
 * ```ts
 * import { SERIALIZE_TO_IPC_FN } from "@tauri-apps/api/core"
 *
 * class UserIdString {
 *   id
 *   constructor(id) {
 *     this.id = id
 *   }
 *
 *   [SERIALIZE_TO_IPC_FN]() {
 *     return { String: this.id }
 *   }
 * }
 *
 * class UserIdNumber {
 *   id
 *   constructor(id) {
 *     this.id = id
 *   }
 *
 *   [SERIALIZE_TO_IPC_FN]() {
 *     return { Number: this.id }
 *   }
 * }
 *
 * type UserId = UserIdString | UserIdNumber
 * ```
 *
 */ // if this value changes, make sure to update it in:
// 1. ipc.js
// 2. process-ipc-message-fn.js
const SERIALIZE_TO_IPC_FN = '__TAURI_TO_IPC_KEY__';
/**
 * Stores the callback in a known location, and returns an identifier that can be passed to the backend.
 * The backend uses the identifier to `eval()` the callback.
 *
 * @return An unique identifier associated with the callback function.
 *
 * @since 1.0.0
 */ function transformCallback(// TODO: Make this not optional in v3
callback) {
    let once = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    return window.__TAURI_INTERNALS__.transformCallback(callback, once);
}
class Channel {
    cleanupCallback() {
        window.__TAURI_INTERNALS__.unregisterCallback(this.id);
    }
    set onmessage(handler) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$7$2e$0$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$external$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__classPrivateFieldSet"])(this, _Channel_onmessage, handler, "f");
    }
    get onmessage() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$7$2e$0$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$external$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__classPrivateFieldGet"])(this, _Channel_onmessage, "f");
    }
    [(_Channel_onmessage = new WeakMap(), _Channel_nextMessageIndex = new WeakMap(), _Channel_pendingMessages = new WeakMap(), _Channel_messageEndIndex = new WeakMap(), SERIALIZE_TO_IPC_FN)]() {
        return "__CHANNEL__:".concat(this.id);
    }
    toJSON() {
        // eslint-disable-next-line security/detect-object-injection
        return this[SERIALIZE_TO_IPC_FN]();
    }
    constructor(onmessage){
        _Channel_onmessage.set(this, void 0);
        // the index is used as a mechanism to preserve message order
        _Channel_nextMessageIndex.set(this, 0);
        _Channel_pendingMessages.set(this, []);
        _Channel_messageEndIndex.set(this, void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$7$2e$0$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$external$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__classPrivateFieldSet"])(this, _Channel_onmessage, onmessage || (()=>{}), "f");
        this.id = transformCallback((rawMessage)=>{
            const index = rawMessage.index;
            if ('end' in rawMessage) {
                if (index == (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$7$2e$0$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$external$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__classPrivateFieldGet"])(this, _Channel_nextMessageIndex, "f")) {
                    this.cleanupCallback();
                } else {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$7$2e$0$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$external$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__classPrivateFieldSet"])(this, _Channel_messageEndIndex, index, "f");
                }
                return;
            }
            const message = rawMessage.message;
            // Process the message if we're at the right order
            if (index == (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$7$2e$0$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$external$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__classPrivateFieldGet"])(this, _Channel_nextMessageIndex, "f")) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$7$2e$0$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$external$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__classPrivateFieldGet"])(this, _Channel_onmessage, "f").call(this, message);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$7$2e$0$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$external$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__classPrivateFieldSet"])(this, _Channel_nextMessageIndex, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$7$2e$0$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$external$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__classPrivateFieldGet"])(this, _Channel_nextMessageIndex, "f") + 1, "f");
                // process pending messages
                while((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$7$2e$0$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$external$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__classPrivateFieldGet"])(this, _Channel_nextMessageIndex, "f") in (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$7$2e$0$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$external$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__classPrivateFieldGet"])(this, _Channel_pendingMessages, "f")){
                    const message = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$7$2e$0$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$external$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__classPrivateFieldGet"])(this, _Channel_pendingMessages, "f")[(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$7$2e$0$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$external$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__classPrivateFieldGet"])(this, _Channel_nextMessageIndex, "f")];
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$7$2e$0$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$external$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__classPrivateFieldGet"])(this, _Channel_onmessage, "f").call(this, message);
                    // eslint-disable-next-line @typescript-eslint/no-array-delete
                    delete (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$7$2e$0$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$external$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__classPrivateFieldGet"])(this, _Channel_pendingMessages, "f")[(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$7$2e$0$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$external$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__classPrivateFieldGet"])(this, _Channel_nextMessageIndex, "f")];
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$7$2e$0$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$external$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__classPrivateFieldSet"])(this, _Channel_nextMessageIndex, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$7$2e$0$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$external$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__classPrivateFieldGet"])(this, _Channel_nextMessageIndex, "f") + 1, "f");
                }
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$7$2e$0$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$external$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__classPrivateFieldGet"])(this, _Channel_nextMessageIndex, "f") === (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$7$2e$0$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$external$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__classPrivateFieldGet"])(this, _Channel_messageEndIndex, "f")) {
                    this.cleanupCallback();
                }
            } else {
                // eslint-disable-next-line security/detect-object-injection
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$7$2e$0$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$external$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__classPrivateFieldGet"])(this, _Channel_pendingMessages, "f")[index] = message;
            }
        });
    }
}
class PluginListener {
    async unregister() {
        return invoke("plugin:".concat(this.plugin, "|remove_listener"), {
            event: this.event,
            channelId: this.channelId
        });
    }
    constructor(plugin, event, channelId){
        this.plugin = plugin;
        this.event = event;
        this.channelId = channelId;
    }
}
/**
 * Adds a listener to a plugin event.
 *
 * @returns The listener object to stop listening to the events.
 *
 * @since 2.0.0
 */ async function addPluginListener(plugin, event, cb) {
    const handler = new Channel(cb);
    return invoke("plugin:".concat(plugin, "|registerListener"), {
        event,
        handler
    }).then(()=>new PluginListener(plugin, event, handler.id));
}
/**
 * Get permission state for a plugin.
 *
 * This should be used by plugin authors to wrap their actual implementation.
 */ async function checkPermissions(plugin) {
    return invoke("plugin:".concat(plugin, "|check_permissions"));
}
/**
 * Request permissions.
 *
 * This should be used by plugin authors to wrap their actual implementation.
 */ async function requestPermissions(plugin) {
    return invoke("plugin:".concat(plugin, "|request_permissions"));
}
/**
 * Sends a message to the backend.
 * @example
 * ```typescript
 * import { invoke } from '@tauri-apps/api/core';
 * await invoke('login', { user: 'tauri', password: 'poiwe3h4r5ip3yrhtew9ty' });
 * ```
 *
 * @param cmd The command name.
 * @param args The optional arguments to pass to the command.
 * @param options The request options.
 * @return A promise resolving or rejecting to the backend response.
 *
 * @since 1.0.0
 */ async function invoke(cmd) {
    let args = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, options = arguments.length > 2 ? arguments[2] : void 0;
    return window.__TAURI_INTERNALS__.invoke(cmd, args, options);
}
/**
 * Convert a device file path to an URL that can be loaded by the webview.
 * Note that `asset:` and `http://asset.localhost` must be added to [`app.security.csp`](https://v2.tauri.app/reference/config/#csp-1) in `tauri.conf.json`.
 * Example CSP value: `"csp": "default-src 'self' ipc: http://ipc.localhost; img-src 'self' asset: http://asset.localhost"` to use the asset protocol on image sources.
 *
 * Additionally, `"enable" : "true"` must be added to [`app.security.assetProtocol`](https://v2.tauri.app/reference/config/#assetprotocolconfig)
 * in `tauri.conf.json` and its access scope must be defined on the `scope` array on the same `assetProtocol` object.
 *
 * @param  filePath The file path.
 * @param  protocol The protocol to use. Defaults to `asset`. You only need to set this when using a custom protocol.
 * @example
 * ```typescript
 * import { appDataDir, join } from '@tauri-apps/api/path';
 * import { convertFileSrc } from '@tauri-apps/api/core';
 * const appDataDirPath = await appDataDir();
 * const filePath = await join(appDataDirPath, 'assets/video.mp4');
 * const assetUrl = convertFileSrc(filePath);
 *
 * const video = document.getElementById('my-video');
 * const source = document.createElement('source');
 * source.type = 'video/mp4';
 * source.src = assetUrl;
 * video.appendChild(source);
 * video.load();
 * ```
 *
 * @return the URL that can be used as source on the webview.
 *
 * @since 1.0.0
 */ function convertFileSrc(filePath) {
    let protocol = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'asset';
    return window.__TAURI_INTERNALS__.convertFileSrc(filePath, protocol);
}
/**
 * A rust-backed resource stored through `tauri::Manager::resources_table` API.
 *
 * The resource lives in the main process and does not exist
 * in the Javascript world, and thus will not be cleaned up automatiacally
 * except on application exit. If you want to clean it up early, call {@linkcode Resource.close}
 *
 * @example
 * ```typescript
 * import { Resource, invoke } from '@tauri-apps/api/core';
 * export class DatabaseHandle extends Resource {
 *   static async open(path: string): Promise<DatabaseHandle> {
 *     const rid: number = await invoke('open_db', { path });
 *     return new DatabaseHandle(rid);
 *   }
 *
 *   async execute(sql: string): Promise<void> {
 *     await invoke('execute_sql', { rid: this.rid, sql });
 *   }
 * }
 * ```
 */ class Resource {
    get rid() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$7$2e$0$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$external$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__classPrivateFieldGet"])(this, _Resource_rid, "f");
    }
    /**
     * Destroys and cleans up this resource from memory.
     * **You should not call any method on this object anymore and should drop any reference to it.**
     */ async close() {
        return invoke('plugin:resources|close', {
            rid: this.rid
        });
    }
    constructor(rid){
        _Resource_rid.set(this, void 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tauri$2d$apps$2b$api$40$2$2e$7$2e$0$2f$node_modules$2f40$tauri$2d$apps$2f$api$2f$external$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__classPrivateFieldSet"])(this, _Resource_rid, rid, "f");
    }
}
_Resource_rid = new WeakMap();
function isTauri() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access
    return !!(globalThis || window).isTauri;
}
;
}),
}]);

//# sourceMappingURL=c40f9_%40tauri-apps_api_b9d3fffc._.js.map