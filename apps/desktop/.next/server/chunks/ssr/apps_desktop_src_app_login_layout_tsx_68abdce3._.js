module.exports = {

"[project]/apps/desktop/src/app/login/layout.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>LoginLayout
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.2_@babel+core@7.28.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$MantineProvider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mantine+core@8.2.4_@mantine+hooks@8.2.4_react@19.1.0__@types+react@19.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@mantine/core/esm/core/MantineProvider/MantineProvider.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$create$2d$theme$2f$create$2d$theme$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mantine+core@8.2.4_@mantine+hooks@8.2.4_react@19.1.0__@types+react@19.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@mantine/core/esm/core/MantineProvider/create-theme/create-theme.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$notifications$40$8$2e$2$2e$4_$40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$ty_e67953665fd85d40faa3fac0efb2a8bc$2f$node_modules$2f40$mantine$2f$notifications$2f$esm$2f$Notifications$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mantine+notifications@8.2.4_@mantine+core@8.2.4_@mantine+hooks@8.2.4_react@19.1.0__@ty_e67953665fd85d40faa3fac0efb2a8bc/node_modules/@mantine/notifications/esm/Notifications.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$create$2d$theme$2f$create$2d$theme$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createTheme"])({
    primaryColor: 'blue',
    fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
    headings: {
        fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
        fontWeight: '600'
    },
    radius: {
        xs: '4px',
        sm: '6px',
        md: '8px',
        lg: '12px',
        xl: '16px'
    },
    shadows: {
        xs: '0 1px 3px rgba(0, 0, 0, 0.05)',
        sm: '0 1px 3px rgba(0, 0, 0, 0.1)',
        md: '0 4px 12px rgba(0, 0, 0, 0.1)',
        lg: '0 8px 24px rgba(0, 0, 0, 0.12)',
        xl: '0 12px 32px rgba(0, 0, 0, 0.15)'
    }
});
function LoginLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$MantineProvider$2f$MantineProvider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MantineProvider"], {
        theme: theme,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$notifications$40$8$2e$2$2e$4_$40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$ty_e67953665fd85d40faa3fac0efb2a8bc$2f$node_modules$2f40$mantine$2f$notifications$2f$esm$2f$Notifications$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Notifications"], {
                position: "top-right"
            }, void 0, false, {
                fileName: "[project]/apps/desktop/src/app/login/layout.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/apps/desktop/src/app/login/layout.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
}),

};

//# sourceMappingURL=apps_desktop_src_app_login_layout_tsx_68abdce3._.js.map