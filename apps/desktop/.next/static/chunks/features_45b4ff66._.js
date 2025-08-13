(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/features/ai-knowledge/src/components/KnowledgeFramework.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "KnowledgeFramework": ()=>KnowledgeFramework
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.2_@babel+core@7.28.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.2_@babel+core@7.28.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Card$2f$Card$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mantine+core@8.2.4_@mantine+hooks@8.2.4_react@19.1.0__@types+react@19.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@mantine/core/esm/components/Card/Card.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mantine+core@8.2.4_@mantine+hooks@8.2.4_react@19.1.0__@types+react@19.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@mantine/core/esm/components/Text/Text.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mantine+core@8.2.4_@mantine+hooks@8.2.4_react@19.1.0__@types+react@19.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@mantine/core/esm/components/Button/Button.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stack$2f$Stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mantine+core@8.2.4_@mantine+hooks@8.2.4_react@19.1.0__@types+react@19.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@mantine/core/esm/components/Stack/Stack.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mantine+core@8.2.4_@mantine+hooks@8.2.4_react@19.1.0__@types+react@19.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@mantine/core/esm/components/Group/Group.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Select$2f$Select$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mantine+core@8.2.4_@mantine+hooks@8.2.4_react@19.1.0__@types+react@19.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@mantine/core/esm/components/Select/Select.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Badge$2f$Badge$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mantine+core@8.2.4_@mantine+hooks@8.2.4_react@19.1.0__@types+react@19.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@mantine/core/esm/components/Badge/Badge.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Paper$2f$Paper$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mantine+core@8.2.4_@mantine+hooks@8.2.4_react@19.1.0__@types+react@19.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@mantine/core/esm/components/Paper/Paper.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Loader$2f$Loader$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mantine+core@8.2.4_@mantine+hooks@8.2.4_react@19.1.0__@types+react@19.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@mantine/core/esm/components/Loader/Loader.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Alert$2f$Alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mantine+core@8.2.4_@mantine+hooks@8.2.4_react@19.1.0__@types+react@19.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@mantine/core/esm/components/Alert/Alert.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ActionIcon$2f$ActionIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mantine+core@8.2.4_@mantine+hooks@8.2.4_react@19.1.0__@types+react@19.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@mantine/core/esm/components/ActionIcon/ActionIcon.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Collapse$2f$Collapse$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mantine+core@8.2.4_@mantine+hooks@8.2.4_react@19.1.0__@types+react@19.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@mantine/core/esm/components/Collapse/Collapse.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mantine+core@8.2.4_@mantine+hooks@8.2.4_react@19.1.0__@types+react@19.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Title$2f$Title$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mantine+core@8.2.4_@mantine+hooks@8.2.4_react@19.1.0__@types+react@19.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@mantine/core/esm/components/Title/Title.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconBrain$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconBrain$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.34.1_react@19.1.0/node_modules/@tabler/icons-react/dist/esm/icons/IconBrain.mjs [app-client] (ecmascript) <export default as IconBrain>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconFolder$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconFolder$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.34.1_react@19.1.0/node_modules/@tabler/icons-react/dist/esm/icons/IconFolder.mjs [app-client] (ecmascript) <export default as IconFolder>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconFolderOpen$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconFolderOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.34.1_react@19.1.0/node_modules/@tabler/icons-react/dist/esm/icons/IconFolderOpen.mjs [app-client] (ecmascript) <export default as IconFolderOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconFile$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconFile$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.34.1_react@19.1.0/node_modules/@tabler/icons-react/dist/esm/icons/IconFile.mjs [app-client] (ecmascript) <export default as IconFile>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconRobot$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconRobot$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.34.1_react@19.1.0/node_modules/@tabler/icons-react/dist/esm/icons/IconRobot.mjs [app-client] (ecmascript) <export default as IconRobot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconEye$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconEye$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.34.1_react@19.1.0/node_modules/@tabler/icons-react/dist/esm/icons/IconEye.mjs [app-client] (ecmascript) <export default as IconEye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconEyeOff$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconEyeOff$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.34.1_react@19.1.0/node_modules/@tabler/icons-react/dist/esm/icons/IconEyeOff.mjs [app-client] (ecmascript) <export default as IconEyeOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconSearch$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconSearch$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.34.1_react@19.1.0/node_modules/@tabler/icons-react/dist/esm/icons/IconSearch.mjs [app-client] (ecmascript) <export default as IconSearch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$desktop$2f$src$2f$data$2f$builtInFrameworks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/desktop/src/data/builtInFrameworks.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
;
;
;
;
// Safely import Tauri API with fallback
const getTauriInvoke = async ()=>{
    try {
        if ("object" !== 'undefined' && window.__TAURI__) {
            const { invoke } = await __turbopack_context__.r("[project]/node_modules/.pnpm/@tauri-apps+api@2.7.0/node_modules/@tauri-apps/api/core.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i);
            return invoke;
        }
    } catch (error) {
        console.warn('Tauri API not available:', error);
    }
    return null;
};
const NodeComponent = (param)=>{
    let { node, onToggleExpand, onGenerateChildren, onSearch, searchProviders } = param;
    _s();
    const [showQuestions, setShowQuestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const getNodeIcon = ()=>{
        if (node.children.length > 0) {
            return node.expanded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconFolderOpen$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconFolderOpen$3e$__["IconFolderOpen"], {
                size: 18
            }, void 0, false, {
                fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFramework.tsx",
                lineNumber: 66,
                columnNumber: 30
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconFolder$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconFolder$3e$__["IconFolder"], {
                size: 18
            }, void 0, false, {
                fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFramework.tsx",
                lineNumber: 66,
                columnNumber: 61
            }, ("TURBOPACK compile-time value", void 0));
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconFile$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconFile$3e$__["IconFile"], {
            size: 18
        }, void 0, false, {
            fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFramework.tsx",
            lineNumber: 68,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
        mb: "md",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Card$2f$Card$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                shadow: "sm",
                padding: "md",
                radius: "md",
                withBorder: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                        justify: "space-between",
                        mb: "xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                                gap: "sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ActionIcon$2f$ActionIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionIcon"], {
                                        variant: "subtle",
                                        onClick: ()=>onToggleExpand(node.id),
                                        size: "sm",
                                        children: getNodeIcon()
                                    }, void 0, false, {
                                        fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFramework.tsx",
                                        lineNumber: 76,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Title$2f$Title$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
                                        order: 4,
                                        size: "md",
                                        children: node.title
                                    }, void 0, false, {
                                        fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFramework.tsx",
                                        lineNumber: 83,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFramework.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                                gap: "xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ActionIcon$2f$ActionIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionIcon"], {
                                        variant: "subtle",
                                        onClick: ()=>setShowQuestions(!showQuestions),
                                        size: "sm",
                                        children: showQuestions ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconEyeOff$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconEyeOff$3e$__["IconEyeOff"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFramework.tsx",
                                            lineNumber: 92,
                                            columnNumber: 32
                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconEye$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconEye$3e$__["IconEye"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFramework.tsx",
                                            lineNumber: 92,
                                            columnNumber: 59
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFramework.tsx",
                                        lineNumber: 87,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "light",
                                        size: "xs",
                                        leftSection: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconRobot$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconRobot$3e$__["IconRobot"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFramework.tsx",
                                            lineNumber: 97,
                                            columnNumber: 28
                                        }, void 0),
                                        onClick: ()=>onGenerateChildren(node),
                                        children: "AI扩展"
                                    }, void 0, false, {
                                        fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFramework.tsx",
                                        lineNumber: 94,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFramework.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFramework.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    node.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                        size: "sm",
                        c: "dimmed",
                        mb: "sm",
                        children: node.description
                    }, void 0, false, {
                        fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFramework.tsx",
                        lineNumber: 106,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Collapse$2f$Collapse$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Collapse"], {
                        in: showQuestions && node.questions.length > 0,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Paper$2f$Paper$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Paper"], {
                            p: "sm",
                            bg: "gray.0",
                            radius: "sm",
                            mt: "sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                    size: "sm",
                                    fw: 500,
                                    mb: "xs",
                                    children: "相关问题："
                                }, void 0, false, {
                                    fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFramework.tsx",
                                    lineNumber: 113,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stack$2f$Stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stack"], {
                                    gap: "xs",
                                    children: node.questions.map((question, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                                            justify: "space-between",
                                            align: "flex-start",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                    size: "sm",
                                                    style: {
                                                        flex: 1
                                                    },
                                                    children: [
                                                        "• ",
                                                        question
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFramework.tsx",
                                                    lineNumber: 117,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                                                    gap: "xs",
                                                    children: searchProviders.filter((p)=>p.enabled).map((provider)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ActionIcon$2f$ActionIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionIcon"], {
                                                            size: "xs",
                                                            variant: "light",
                                                            onClick: ()=>onSearch("".concat(question, " ").concat(node.title)),
                                                            title: "在".concat(provider.name, "中搜索"),
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconSearch$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconSearch$3e$__["IconSearch"], {
                                                                size: 12
                                                            }, void 0, false, {
                                                                fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFramework.tsx",
                                                                lineNumber: 129,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, provider.id, false, {
                                                            fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFramework.tsx",
                                                            lineNumber: 122,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                }, void 0, false, {
                                                    fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFramework.tsx",
                                                    lineNumber: 120,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFramework.tsx",
                                            lineNumber: 116,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFramework.tsx",
                                    lineNumber: 114,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFramework.tsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFramework.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFramework.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Collapse$2f$Collapse$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Collapse"], {
                in: node.expanded && node.children.length > 0,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
                    ml: "xl",
                    pl: "md",
                    style: {
                        borderLeft: '2px solid var(--mantine-color-gray-3)'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stack$2f$Stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stack"], {
                        gap: "sm",
                        mt: "sm",
                        children: node.children.map((child)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NodeComponent, {
                                node: child,
                                onToggleExpand: onToggleExpand,
                                onGenerateChildren: onGenerateChildren,
                                onSearch: onSearch,
                                searchProviders: searchProviders
                            }, child.id, false, {
                                fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFramework.tsx",
                                lineNumber: 144,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFramework.tsx",
                        lineNumber: 142,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFramework.tsx",
                    lineNumber: 141,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFramework.tsx",
                lineNumber: 140,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFramework.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(NodeComponent, "wLAYYdn4lyE9qLc7yYRTZBQMKA8=");
_c = NodeComponent;
const KnowledgeFramework = ()=>{
    _s1();
    const [frameworks, setFrameworks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedFramework, setSelectedFramework] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [searchProviders, setSearchProviders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isGenerating, setIsGenerating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "KnowledgeFramework.useEffect": ()=>{
            loadFrameworks();
            loadSearchProviders();
        }
    }["KnowledgeFramework.useEffect"], []);
    const loadFrameworks = async ()=>{
        try {
            const invoke = await getTauriInvoke();
            if (!invoke) {
                // Fallback to built-in frameworks if Tauri is not available
                setFrameworks(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$desktop$2f$src$2f$data$2f$builtInFrameworks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["builtInFrameworks"]);
                if (__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$desktop$2f$src$2f$data$2f$builtInFrameworks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["builtInFrameworks"].length > 0 && !selectedFramework) {
                    setSelectedFramework(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$desktop$2f$src$2f$data$2f$builtInFrameworks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["builtInFrameworks"][0]);
                }
                return;
            }
            let frameworks = await invoke('get_knowledge_frameworks');
            // 如果没有框架，初始化内置框架
            if (frameworks.length === 0) {
                for (const framework of __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$desktop$2f$src$2f$data$2f$builtInFrameworks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["builtInFrameworks"]){
                    await invoke('save_knowledge_framework', {
                        framework
                    });
                }
                frameworks = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$desktop$2f$src$2f$data$2f$builtInFrameworks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["builtInFrameworks"];
            }
            setFrameworks(frameworks);
            if (frameworks.length > 0 && !selectedFramework) {
                setSelectedFramework(frameworks[0]);
            }
        } catch (error) {
            console.error('Failed to load frameworks:', error);
            // Fallback to built-in frameworks on error
            setFrameworks(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$desktop$2f$src$2f$data$2f$builtInFrameworks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["builtInFrameworks"]);
            if (__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$desktop$2f$src$2f$data$2f$builtInFrameworks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["builtInFrameworks"].length > 0 && !selectedFramework) {
                setSelectedFramework(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$desktop$2f$src$2f$data$2f$builtInFrameworks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["builtInFrameworks"][0]);
            }
        }
    };
    const loadSearchProviders = async ()=>{
        try {
            const invoke = await getTauriInvoke();
            if (!invoke) {
                // Fallback to default search providers
                const defaultProviders = [
                    {
                        id: 'google',
                        name: 'Google',
                        icon: '🔍',
                        baseUrl: 'https://www.google.com/search',
                        searchParam: 'q',
                        enabled: true
                    }
                ];
                setSearchProviders(defaultProviders);
                return;
            }
            const providers = await invoke('get_search_providers');
            setSearchProviders(providers);
        } catch (error) {
            console.error('Failed to load search providers:', error);
            // Fallback to default providers
            const defaultProviders = [
                {
                    id: 'google',
                    name: 'Google',
                    icon: '🔍',
                    baseUrl: 'https://www.google.com/search',
                    searchParam: 'q',
                    enabled: true
                }
            ];
            setSearchProviders(defaultProviders);
        }
    };
    const handleToggleExpand = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "KnowledgeFramework.useCallback[handleToggleExpand]": (nodeId)=>{
            if (!selectedFramework) return;
            const updateNodeExpansion = {
                "KnowledgeFramework.useCallback[handleToggleExpand].updateNodeExpansion": (nodes)=>{
                    return nodes.map({
                        "KnowledgeFramework.useCallback[handleToggleExpand].updateNodeExpansion": (node)=>{
                            if (node.id === nodeId) {
                                return {
                                    ...node,
                                    expanded: !node.expanded
                                };
                            }
                            if (node.children.length > 0) {
                                return {
                                    ...node,
                                    children: updateNodeExpansion(node.children)
                                };
                            }
                            return node;
                        }
                    }["KnowledgeFramework.useCallback[handleToggleExpand].updateNodeExpansion"]);
                }
            }["KnowledgeFramework.useCallback[handleToggleExpand].updateNodeExpansion"];
            const updatedFramework = {
                ...selectedFramework,
                rootNodes: updateNodeExpansion(selectedFramework.rootNodes),
                updatedAt: new Date().toISOString()
            };
            setSelectedFramework(updatedFramework);
            // 保存到本地 (如果Tauri可用)
            getTauriInvoke().then({
                "KnowledgeFramework.useCallback[handleToggleExpand]": (invoke)=>{
                    if (invoke) {
                        invoke('save_knowledge_framework', {
                            framework: updatedFramework
                        }).catch({
                            "KnowledgeFramework.useCallback[handleToggleExpand]": (error)=>console.error('Failed to save framework:', error)
                        }["KnowledgeFramework.useCallback[handleToggleExpand]"]);
                    }
                }
            }["KnowledgeFramework.useCallback[handleToggleExpand]"]);
        }
    }["KnowledgeFramework.useCallback[handleToggleExpand]"], [
        selectedFramework
    ]);
    const handleGenerateChildren = async (parentNode)=>{
        if (!selectedFramework) return;
        setIsGenerating(true);
        try {
            const invoke = await getTauriInvoke();
            if (!invoke) {
                alert('AI扩展功能需要在桌面应用中使用');
                return;
            }
            // 获取用户的 API Key
            const apiKeys = await invoke('get_api_keys');
            const defaultKey = apiKeys.find((k)=>k.is_default && k.is_active) || apiKeys[0];
            let response;
            if (defaultKey) {
                response = await invoke('generate_child_nodes', {
                    provider: defaultKey.provider,
                    apiKey: defaultKey.api_key,
                    model: defaultKey.model || 'gpt-3.5-turbo',
                    parentTitle: parentNode.title,
                    parentDescription: parentNode.description || '',
                    domainContext: selectedFramework.domain,
                    nodeCount: 3,
                    targetUser: '进阶学习者',
                    baseUrl: defaultKey.base_url || null
                });
            } else {
                // 使用兜底服务
                response = await invoke('generate_child_nodes', {
                    provider: 'pollinations',
                    apiKey: '',
                    model: '',
                    parentTitle: parentNode.title,
                    parentDescription: parentNode.description || '',
                    domainContext: selectedFramework.domain,
                    nodeCount: 3,
                    targetUser: '进阶学习者',
                    baseUrl: null
                });
            }
            // 解析 AI 响应并创建子节点
            const childNodes = parseAIResponseToNodes(response, parentNode.level + 1);
            // 更新框架
            const updateNodeChildren = (nodes)=>{
                return nodes.map((node)=>{
                    if (node.id === parentNode.id) {
                        return {
                            ...node,
                            children: [
                                ...node.children,
                                ...childNodes
                            ],
                            expanded: true
                        };
                    }
                    if (node.children.length > 0) {
                        return {
                            ...node,
                            children: updateNodeChildren(node.children)
                        };
                    }
                    return node;
                });
            };
            const updatedFramework = {
                ...selectedFramework,
                rootNodes: updateNodeChildren(selectedFramework.rootNodes),
                updatedAt: new Date().toISOString()
            };
            setSelectedFramework(updatedFramework);
            await invoke('save_knowledge_framework', {
                framework: updatedFramework
            });
        } catch (error) {
            console.error('Failed to generate child nodes:', error);
            alert("生成失败: ".concat(error));
        } finally{
            setIsGenerating(false);
        }
    };
    const parseAIResponseToNodes = (response, level)=>{
        const nodes = [];
        const sections = response.split('---').filter((s)=>s.trim());
        sections.forEach((section, index)=>{
            const lines = section.trim().split('\n');
            let title = '';
            let description = '';
            const questions = [];
            for (const line of lines){
                if (line.startsWith('## ')) {
                    title = line.replace('## ', '').replace(/节点\d+：/, '').trim();
                } else if (line.startsWith('**描述**：')) {
                    description = line.replace('**描述**：', '').trim();
                } else if (line.match(/^\d+\. /)) {
                    questions.push(line.replace(/^\d+\. /, '').trim());
                }
            }
            if (title) {
                nodes.push({
                    id: "node-".concat(Date.now(), "-").concat(index),
                    title,
                    description: description || undefined,
                    children: [],
                    questions,
                    urls: [],
                    expanded: false,
                    level,
                    position: {
                        x: index * 200,
                        y: level * 150
                    }
                });
            }
        });
        return nodes;
    };
    const handleSearch = async (query)=>{
        try {
            const invoke = await getTauriInvoke();
            if (!invoke) {
                // Fallback to direct search URL
                const enabledProviders = searchProviders.filter((p)=>p.enabled);
                if (enabledProviders.length > 0) {
                    const provider = enabledProviders[0];
                    const searchUrl = "".concat(provider.baseUrl, "?").concat(provider.searchParam, "=").concat(encodeURIComponent(query));
                    window.open(searchUrl, '_blank');
                }
                return;
            }
            const enabledProviders = searchProviders.filter((p)=>p.enabled);
            if (enabledProviders.length > 0) {
                const searchUrl = await invoke('search_with_provider', {
                    providerId: enabledProviders[0].id,
                    query
                });
                // 使用 Tauri 的 opener 插件打开搜索链接
                await invoke('plugin:opener|open', {
                    path: searchUrl
                });
            }
        } catch (error) {
            console.error('Search failed:', error);
            // Fallback to direct search
            const enabledProviders = searchProviders.filter((p)=>p.enabled);
            if (enabledProviders.length > 0) {
                const provider = enabledProviders[0];
                const searchUrl = "".concat(provider.baseUrl, "?").concat(provider.searchParam, "=").concat(encodeURIComponent(query));
                window.open(searchUrl, '_blank');
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stack$2f$Stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stack"], {
        gap: "lg",
        p: "md",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                justify: "space-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stack$2f$Stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stack"], {
                        gap: "xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconBrain$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconBrain$3e$__["IconBrain"], {
                                        size: 28,
                                        color: "var(--mantine-color-blue-6)"
                                    }, void 0, false, {
                                        fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFramework.tsx",
                                        lineNumber: 436,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Title$2f$Title$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
                                        order: 2,
                                        children: "知识框架"
                                    }, void 0, false, {
                                        fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFramework.tsx",
                                        lineNumber: 437,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFramework.tsx",
                                lineNumber: 435,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                c: "dimmed",
                                children: "系统性地构建和管理领域知识"
                            }, void 0, false, {
                                fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFramework.tsx",
                                lineNumber: 439,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFramework.tsx",
                        lineNumber: 434,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Select$2f$Select$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                        placeholder: "选择知识框架",
                        value: (selectedFramework === null || selectedFramework === void 0 ? void 0 : selectedFramework.id) || null,
                        onChange: (value)=>{
                            const framework = frameworks.find((f)=>f.id === value);
                            setSelectedFramework(framework || null);
                        },
                        data: frameworks.map((framework)=>({
                                value: framework.id,
                                label: framework.name
                            })),
                        w: 250
                    }, void 0, false, {
                        fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFramework.tsx",
                        lineNumber: 442,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFramework.tsx",
                lineNumber: 433,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            selectedFramework ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stack$2f$Stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stack"], {
                gap: "md",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Paper$2f$Paper$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Paper"], {
                        p: "lg",
                        radius: "md",
                        bg: "blue.0",
                        withBorder: true,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                                justify: "space-between",
                                mb: "sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Title$2f$Title$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
                                        order: 3,
                                        c: "blue.8",
                                        children: selectedFramework.name
                                    }, void 0, false, {
                                        fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFramework.tsx",
                                        lineNumber: 461,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                                        gap: "xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Badge$2f$Badge$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                variant: "light",
                                                color: "blue",
                                                children: selectedFramework.domain
                                            }, void 0, false, {
                                                fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFramework.tsx",
                                                lineNumber: 465,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Badge$2f$Badge$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                variant: "outline",
                                                size: "sm",
                                                children: [
                                                    "v",
                                                    selectedFramework.version
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFramework.tsx",
                                                lineNumber: 468,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFramework.tsx",
                                        lineNumber: 464,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFramework.tsx",
                                lineNumber: 460,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                c: "blue.7",
                                children: selectedFramework.description
                            }, void 0, false, {
                                fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFramework.tsx",
                                lineNumber: 473,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFramework.tsx",
                        lineNumber: 459,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    isGenerating && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Alert$2f$Alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alert"], {
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Loader$2f$Loader$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Loader"], {
                            size: 16
                        }, void 0, false, {
                            fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFramework.tsx",
                            lineNumber: 478,
                            columnNumber: 21
                        }, void 0),
                        color: "yellow",
                        variant: "light",
                        radius: "md",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                            children: "AI 正在生成新的知识节点..."
                        }, void 0, false, {
                            fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFramework.tsx",
                            lineNumber: 483,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFramework.tsx",
                        lineNumber: 477,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stack$2f$Stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stack"], {
                        gap: "sm",
                        children: selectedFramework.rootNodes.map((node)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NodeComponent, {
                                node: node,
                                onToggleExpand: handleToggleExpand,
                                onGenerateChildren: handleGenerateChildren,
                                onSearch: handleSearch,
                                searchProviders: searchProviders
                            }, node.id, false, {
                                fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFramework.tsx",
                                lineNumber: 489,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFramework.tsx",
                        lineNumber: 487,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFramework.tsx",
                lineNumber: 458,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Card$2f$Card$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                shadow: "sm",
                padding: "xl",
                radius: "md",
                withBorder: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stack$2f$Stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stack"], {
                    align: "center",
                    gap: "md",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconBrain$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconBrain$3e$__["IconBrain"], {
                            size: 64,
                            color: "var(--mantine-color-gray-5)"
                        }, void 0, false, {
                            fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFramework.tsx",
                            lineNumber: 503,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Title$2f$Title$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
                            order: 3,
                            ta: "center",
                            children: "选择知识框架"
                        }, void 0, false, {
                            fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFramework.tsx",
                            lineNumber: 504,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                            c: "dimmed",
                            ta: "center",
                            maw: 400,
                            children: "选择一个领域开始构建您的知识体系"
                        }, void 0, false, {
                            fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFramework.tsx",
                            lineNumber: 505,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        frameworks.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "filled",
                            onClick: loadFrameworks,
                            leftSection: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconBrain$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconBrain$3e$__["IconBrain"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFramework.tsx",
                                lineNumber: 512,
                                columnNumber: 30
                            }, void 0),
                            children: "初始化内置框架"
                        }, void 0, false, {
                            fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFramework.tsx",
                            lineNumber: 509,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFramework.tsx",
                    lineNumber: 502,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFramework.tsx",
                lineNumber: 501,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFramework.tsx",
        lineNumber: 432,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(KnowledgeFramework, "x3AxJe7eLcL4ucvYCqZMeCHlr8o=");
_c1 = KnowledgeFramework;
var _c, _c1;
__turbopack_context__.k.register(_c, "NodeComponent");
__turbopack_context__.k.register(_c1, "KnowledgeFramework");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/features/ai-knowledge/src/components/KnowledgeFrameworkManager.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "KnowledgeFrameworkManager": ()=>KnowledgeFrameworkManager
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.2_@babel+core@7.28.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.2_@babel+core@7.28.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stack$2f$Stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mantine+core@8.2.4_@mantine+hooks@8.2.4_react@19.1.0__@types+react@19.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@mantine/core/esm/components/Stack/Stack.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mantine+core@8.2.4_@mantine+hooks@8.2.4_react@19.1.0__@types+react@19.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@mantine/core/esm/components/Group/Group.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Title$2f$Title$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mantine+core@8.2.4_@mantine+hooks@8.2.4_react@19.1.0__@types+react@19.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@mantine/core/esm/components/Title/Title.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mantine+core@8.2.4_@mantine+hooks@8.2.4_react@19.1.0__@types+react@19.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@mantine/core/esm/components/Text/Text.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mantine+core@8.2.4_@mantine+hooks@8.2.4_react@19.1.0__@types+react@19.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@mantine/core/esm/components/Button/Button.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Card$2f$Card$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mantine+core@8.2.4_@mantine+hooks@8.2.4_react@19.1.0__@types+react@19.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@mantine/core/esm/components/Card/Card.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Badge$2f$Badge$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mantine+core@8.2.4_@mantine+hooks@8.2.4_react@19.1.0__@types+react@19.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@mantine/core/esm/components/Badge/Badge.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ActionIcon$2f$ActionIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mantine+core@8.2.4_@mantine+hooks@8.2.4_react@19.1.0__@types+react@19.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@mantine/core/esm/components/ActionIcon/ActionIcon.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Modal$2f$Modal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mantine+core@8.2.4_@mantine+hooks@8.2.4_react@19.1.0__@types+react@19.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@mantine/core/esm/components/Modal/Modal.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$TextInput$2f$TextInput$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mantine+core@8.2.4_@mantine+hooks@8.2.4_react@19.1.0__@types+react@19.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@mantine/core/esm/components/TextInput/TextInput.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Textarea$2f$Textarea$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mantine+core@8.2.4_@mantine+hooks@8.2.4_react@19.1.0__@types+react@19.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@mantine/core/esm/components/Textarea/Textarea.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Select$2f$Select$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mantine+core@8.2.4_@mantine+hooks@8.2.4_react@19.1.0__@types+react@19.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@mantine/core/esm/components/Select/Select.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Grid$2f$Grid$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mantine+core@8.2.4_@mantine+hooks@8.2.4_react@19.1.0__@types+react@19.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@mantine/core/esm/components/Grid/Grid.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Center$2f$Center$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mantine+core@8.2.4_@mantine+hooks@8.2.4_react@19.1.0__@types+react@19.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@mantine/core/esm/components/Center/Center.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Divider$2f$Divider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mantine+core@8.2.4_@mantine+hooks@8.2.4_react@19.1.0__@types+react@19.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@mantine/core/esm/components/Divider/Divider.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mantine+core@8.2.4_@mantine+hooks@8.2.4_react@19.1.0__@types+react@19.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconBrain$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconBrain$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.34.1_react@19.1.0/node_modules/@tabler/icons-react/dist/esm/icons/IconBrain.mjs [app-client] (ecmascript) <export default as IconBrain>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconPlus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconPlus$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.34.1_react@19.1.0/node_modules/@tabler/icons-react/dist/esm/icons/IconPlus.mjs [app-client] (ecmascript) <export default as IconPlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconEdit$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconEdit$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.34.1_react@19.1.0/node_modules/@tabler/icons-react/dist/esm/icons/IconEdit.mjs [app-client] (ecmascript) <export default as IconEdit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconTrash$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconTrash$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.34.1_react@19.1.0/node_modules/@tabler/icons-react/dist/esm/icons/IconTrash.mjs [app-client] (ecmascript) <export default as IconTrash>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconEye$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconEye$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.34.1_react@19.1.0/node_modules/@tabler/icons-react/dist/esm/icons/IconEye.mjs [app-client] (ecmascript) <export default as IconEye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconRobot$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconRobot$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.34.1_react@19.1.0/node_modules/@tabler/icons-react/dist/esm/icons/IconRobot.mjs [app-client] (ecmascript) <export default as IconRobot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$notifications$40$8$2e$2$2e$4_$40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$ty_e67953665fd85d40faa3fac0efb2a8bc$2f$node_modules$2f40$mantine$2f$notifications$2f$esm$2f$notifications$2e$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mantine+notifications@8.2.4_@mantine+core@8.2.4_@mantine+hooks@8.2.4_react@19.1.0__@ty_e67953665fd85d40faa3fac0efb2a8bc/node_modules/@mantine/notifications/esm/notifications.store.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const KnowledgeFrameworkManager = (param)=>{
    let { onFrameworkSelect } = param;
    _s();
    const [frameworks, setFrameworks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [createModalOpen, setCreateModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [aiCreateModalOpen, setAiCreateModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedFramework, setSelectedFramework] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // 表单状态
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        title: '',
        description: '',
        domain: ''
    });
    // AI 创建状态
    const [aiFormData, setAiFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        title: '',
        description: '',
        domain: '',
        targetUser: '',
        complexity: 'medium'
    });
    const [aiGenerating, setAiGenerating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "KnowledgeFrameworkManager.useEffect": ()=>{
            loadFrameworks();
        }
    }["KnowledgeFrameworkManager.useEffect"], []);
    const loadFrameworks = async ()=>{
        try {
            setLoading(true);
            // 这里应该调用实际的API或Tauri命令
            // const frameworks = await dbApi.getKnowledgeFrameworks();
            // setFrameworks(frameworks.data || []);
            // 临时使用空数组
            setFrameworks([]);
        } catch (error) {
            console.error('Failed to load frameworks:', error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$notifications$40$8$2e$2$2e$4_$40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$ty_e67953665fd85d40faa3fac0efb2a8bc$2f$node_modules$2f40$mantine$2f$notifications$2f$esm$2f$notifications$2e$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifications"].show({
                title: '加载失败',
                message: '无法加载知识框架',
                color: 'red'
            });
        } finally{
            setLoading(false);
        }
    };
    const handleCreateFramework = async ()=>{
        try {
            // 这里应该调用实际的创建API
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$notifications$40$8$2e$2$2e$4_$40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$ty_e67953665fd85d40faa3fac0efb2a8bc$2f$node_modules$2f40$mantine$2f$notifications$2f$esm$2f$notifications$2e$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifications"].show({
                title: '创建成功',
                message: '知识框架已创建',
                color: 'green'
            });
            setCreateModalOpen(false);
            resetFormData();
            loadFrameworks();
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$notifications$40$8$2e$2$2e$4_$40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$ty_e67953665fd85d40faa3fac0efb2a8bc$2f$node_modules$2f40$mantine$2f$notifications$2f$esm$2f$notifications$2e$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifications"].show({
                title: '创建失败',
                message: '无法创建知识框架',
                color: 'red'
            });
        }
    };
    const handleAICreate = async ()=>{
        try {
            setAiGenerating(true);
            // 这里应该调用AI创建API
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$notifications$40$8$2e$2$2e$4_$40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$ty_e67953665fd85d40faa3fac0efb2a8bc$2f$node_modules$2f40$mantine$2f$notifications$2f$esm$2f$notifications$2e$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifications"].show({
                title: 'AI 创建成功',
                message: '知识框架已通过 AI 辅助创建',
                color: 'green'
            });
            setAiCreateModalOpen(false);
            setAiFormData({
                title: '',
                description: '',
                domain: '',
                targetUser: '',
                complexity: 'medium'
            });
            loadFrameworks();
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$notifications$40$8$2e$2$2e$4_$40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$ty_e67953665fd85d40faa3fac0efb2a8bc$2f$node_modules$2f40$mantine$2f$notifications$2f$esm$2f$notifications$2e$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifications"].show({
                title: 'AI 创建失败',
                message: '无法通过 AI 创建知识框架',
                color: 'red'
            });
        } finally{
            setAiGenerating(false);
        }
    };
    const resetFormData = ()=>{
        setFormData({
            title: '',
            description: '',
            domain: ''
        });
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Center$2f$Center$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Center"], {
            h: 400,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stack$2f$Stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stack"], {
                align: "center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconBrain$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconBrain$3e$__["IconBrain"], {
                        size: 64,
                        color: "var(--mantine-color-gray-5)"
                    }, void 0, false, {
                        fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFrameworkManager.tsx",
                        lineNumber: 165,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                        c: "dimmed",
                        children: "加载知识框架..."
                    }, void 0, false, {
                        fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFrameworkManager.tsx",
                        lineNumber: 166,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFrameworkManager.tsx",
                lineNumber: 164,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFrameworkManager.tsx",
            lineNumber: 163,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stack$2f$Stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stack"], {
        gap: "lg",
        p: "md",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                justify: "space-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconBrain$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconBrain$3e$__["IconBrain"], {
                                size: 28,
                                color: "var(--mantine-color-violet-6)"
                            }, void 0, false, {
                                fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFrameworkManager.tsx",
                                lineNumber: 177,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Title$2f$Title$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
                                        order: 2,
                                        children: "知识框架"
                                    }, void 0, false, {
                                        fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFrameworkManager.tsx",
                                        lineNumber: 179,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                        c: "dimmed",
                                        size: "sm",
                                        children: "创建和管理结构化知识体系"
                                    }, void 0, false, {
                                        fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFrameworkManager.tsx",
                                        lineNumber: 180,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFrameworkManager.tsx",
                                lineNumber: 178,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFrameworkManager.tsx",
                        lineNumber: 176,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                leftSection: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconRobot$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconRobot$3e$__["IconRobot"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFrameworkManager.tsx",
                                    lineNumber: 186,
                                    columnNumber: 38
                                }, void 0),
                                variant: "gradient",
                                gradient: {
                                    from: 'violet',
                                    to: 'purple'
                                },
                                onClick: ()=>setAiCreateModalOpen(true),
                                children: "AI 创建"
                            }, void 0, false, {
                                fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFrameworkManager.tsx",
                                lineNumber: 185,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                leftSection: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconPlus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconPlus$3e$__["IconPlus"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFrameworkManager.tsx",
                                    lineNumber: 194,
                                    columnNumber: 38
                                }, void 0),
                                onClick: ()=>setCreateModalOpen(true),
                                children: "手动创建"
                            }, void 0, false, {
                                fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFrameworkManager.tsx",
                                lineNumber: 193,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFrameworkManager.tsx",
                        lineNumber: 184,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFrameworkManager.tsx",
                lineNumber: 175,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            frameworks.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Card$2f$Card$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                shadow: "sm",
                padding: "xl",
                radius: "md",
                withBorder: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Center$2f$Center$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Center"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stack$2f$Stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stack"], {
                        align: "center",
                        gap: "md",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconBrain$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconBrain$3e$__["IconBrain"], {
                                size: 64,
                                color: "var(--mantine-color-gray-5)"
                            }, void 0, false, {
                                fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFrameworkManager.tsx",
                                lineNumber: 207,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Title$2f$Title$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
                                order: 3,
                                ta: "center",
                                children: "还没有知识框架"
                            }, void 0, false, {
                                fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFrameworkManager.tsx",
                                lineNumber: 208,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                c: "dimmed",
                                ta: "center",
                                maw: 400,
                                children: "创建您的第一个知识框架来组织和管理知识体系"
                            }, void 0, false, {
                                fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFrameworkManager.tsx",
                                lineNumber: 209,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        leftSection: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconRobot$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconRobot$3e$__["IconRobot"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFrameworkManager.tsx",
                                            lineNumber: 214,
                                            columnNumber: 50
                                        }, void 0),
                                        variant: "gradient",
                                        gradient: {
                                            from: 'violet',
                                            to: 'purple'
                                        },
                                        onClick: ()=>setAiCreateModalOpen(true),
                                        children: "AI 辅助创建"
                                    }, void 0, false, {
                                        fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFrameworkManager.tsx",
                                        lineNumber: 213,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        leftSection: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconPlus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconPlus$3e$__["IconPlus"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFrameworkManager.tsx",
                                            lineNumber: 222,
                                            columnNumber: 50
                                        }, void 0),
                                        variant: "light",
                                        onClick: ()=>setCreateModalOpen(true),
                                        children: "手动创建"
                                    }, void 0, false, {
                                        fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFrameworkManager.tsx",
                                        lineNumber: 221,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFrameworkManager.tsx",
                                lineNumber: 212,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFrameworkManager.tsx",
                        lineNumber: 206,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFrameworkManager.tsx",
                    lineNumber: 205,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFrameworkManager.tsx",
                lineNumber: 204,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Grid$2f$Grid$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Grid"], {
                children: frameworks.map((framework)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Grid$2f$Grid$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Grid"].Col, {
                        span: {
                            base: 12,
                            md: 6,
                            lg: 4
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Card$2f$Card$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            shadow: "sm",
                            padding: "lg",
                            radius: "md",
                            withBorder: true,
                            h: "100%",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stack$2f$Stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stack"], {
                                gap: "sm",
                                h: "100%",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                                        justify: "space-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Badge$2f$Badge$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                variant: "light",
                                                color: framework.local_only ? 'orange' : 'green',
                                                size: "sm",
                                                children: framework.local_only ? '本地' : '已同步'
                                            }, void 0, false, {
                                                fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFrameworkManager.tsx",
                                                lineNumber: 239,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Badge$2f$Badge$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                variant: "outline",
                                                size: "xs",
                                                children: framework.domain
                                            }, void 0, false, {
                                                fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFrameworkManager.tsx",
                                                lineNumber: 246,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFrameworkManager.tsx",
                                        lineNumber: 238,
                                        columnNumber: 37
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
                                        style: {
                                            flex: 1
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Title$2f$Title$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
                                                order: 4,
                                                mb: "xs",
                                                children: framework.title
                                            }, void 0, false, {
                                                fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFrameworkManager.tsx",
                                                lineNumber: 252,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                size: "sm",
                                                c: "dimmed",
                                                mb: "sm",
                                                lineClamp: 3,
                                                children: framework.description
                                            }, void 0, false, {
                                                fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFrameworkManager.tsx",
                                                lineNumber: 253,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFrameworkManager.tsx",
                                        lineNumber: 251,
                                        columnNumber: 37
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Divider$2f$Divider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Divider"], {}, void 0, false, {
                                        fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFrameworkManager.tsx",
                                        lineNumber: 258,
                                        columnNumber: 37
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                                        justify: "space-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                                                gap: "xs",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ActionIcon$2f$ActionIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionIcon"], {
                                                        variant: "light",
                                                        size: "sm",
                                                        onClick: ()=>{
                                                            // 导航到详情页面
                                                            if ("TURBOPACK compile-time truthy", 1) {
                                                                window.location.href = "/knowledge/".concat(framework.id);
                                                            }
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconEye$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconEye$3e$__["IconEye"], {
                                                            size: 14
                                                        }, void 0, false, {
                                                            fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFrameworkManager.tsx",
                                                            lineNumber: 272,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFrameworkManager.tsx",
                                                        lineNumber: 262,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ActionIcon$2f$ActionIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionIcon"], {
                                                        variant: "light",
                                                        size: "sm",
                                                        onClick: ()=>{
                                                        // 编辑功能
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconEdit$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconEdit$3e$__["IconEdit"], {
                                                            size: 14
                                                        }, void 0, false, {
                                                            fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFrameworkManager.tsx",
                                                            lineNumber: 281,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFrameworkManager.tsx",
                                                        lineNumber: 274,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFrameworkManager.tsx",
                                                lineNumber: 261,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ActionIcon$2f$ActionIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionIcon"], {
                                                variant: "light",
                                                color: "red",
                                                size: "sm",
                                                onClick: ()=>{
                                                // 删除功能
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconTrash$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconTrash$3e$__["IconTrash"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFrameworkManager.tsx",
                                                    lineNumber: 293,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFrameworkManager.tsx",
                                                lineNumber: 285,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFrameworkManager.tsx",
                                        lineNumber: 260,
                                        columnNumber: 37
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFrameworkManager.tsx",
                                lineNumber: 237,
                                columnNumber: 33
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFrameworkManager.tsx",
                            lineNumber: 236,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0))
                    }, framework.id, false, {
                        fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFrameworkManager.tsx",
                        lineNumber: 235,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFrameworkManager.tsx",
                lineNumber: 233,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Modal$2f$Modal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
                opened: createModalOpen,
                onClose: ()=>setCreateModalOpen(false),
                title: "创建知识框架",
                size: "md",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stack$2f$Stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stack"], {
                    gap: "md",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$TextInput$2f$TextInput$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextInput"], {
                            label: "标题",
                            placeholder: "React 开发框架",
                            value: formData.title,
                            onChange: (e)=>setFormData({
                                    ...formData,
                                    title: e.target.value
                                }),
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFrameworkManager.tsx",
                            lineNumber: 311,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Textarea$2f$Textarea$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                            label: "描述",
                            placeholder: "一个完整的React开发学习框架",
                            value: formData.description,
                            onChange: (e)=>setFormData({
                                    ...formData,
                                    description: e.target.value
                                }),
                            minRows: 3,
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFrameworkManager.tsx",
                            lineNumber: 318,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$TextInput$2f$TextInput$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextInput"], {
                            label: "领域",
                            placeholder: "前端开发",
                            value: formData.domain,
                            onChange: (e)=>setFormData({
                                    ...formData,
                                    domain: e.target.value
                                }),
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFrameworkManager.tsx",
                            lineNumber: 326,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: handleCreateFramework,
                            loading: loading,
                            children: "创建框架"
                        }, void 0, false, {
                            fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFrameworkManager.tsx",
                            lineNumber: 333,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFrameworkManager.tsx",
                    lineNumber: 310,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFrameworkManager.tsx",
                lineNumber: 304,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Modal$2f$Modal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
                opened: aiCreateModalOpen,
                onClose: ()=>setAiCreateModalOpen(false),
                title: "AI 辅助创建知识框架",
                size: "md",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stack$2f$Stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stack"], {
                    gap: "md",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$TextInput$2f$TextInput$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextInput"], {
                            label: "标题",
                            placeholder: "React 开发框架",
                            value: aiFormData.title,
                            onChange: (e)=>setAiFormData({
                                    ...aiFormData,
                                    title: e.target.value
                                }),
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFrameworkManager.tsx",
                            lineNumber: 347,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Textarea$2f$Textarea$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                            label: "描述",
                            placeholder: "一个完整的React开发学习框架",
                            value: aiFormData.description,
                            onChange: (e)=>setAiFormData({
                                    ...aiFormData,
                                    description: e.target.value
                                }),
                            minRows: 3,
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFrameworkManager.tsx",
                            lineNumber: 354,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$TextInput$2f$TextInput$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextInput"], {
                            label: "领域",
                            placeholder: "前端开发",
                            value: aiFormData.domain,
                            onChange: (e)=>setAiFormData({
                                    ...aiFormData,
                                    domain: e.target.value
                                }),
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFrameworkManager.tsx",
                            lineNumber: 362,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$TextInput$2f$TextInput$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextInput"], {
                            label: "目标用户",
                            placeholder: "初学者/中级开发者/高级开发者",
                            value: aiFormData.targetUser,
                            onChange: (e)=>setAiFormData({
                                    ...aiFormData,
                                    targetUser: e.target.value
                                })
                        }, void 0, false, {
                            fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFrameworkManager.tsx",
                            lineNumber: 369,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Select$2f$Select$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                            label: "复杂度",
                            value: aiFormData.complexity,
                            onChange: (value)=>setAiFormData({
                                    ...aiFormData,
                                    complexity: value || 'medium'
                                }),
                            data: [
                                {
                                    value: 'simple',
                                    label: '简单'
                                },
                                {
                                    value: 'medium',
                                    label: '中等'
                                },
                                {
                                    value: 'complex',
                                    label: '复杂'
                                }
                            ]
                        }, void 0, false, {
                            fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFrameworkManager.tsx",
                            lineNumber: 375,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: handleAICreate,
                            loading: aiGenerating,
                            children: "AI 创建框架"
                        }, void 0, false, {
                            fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFrameworkManager.tsx",
                            lineNumber: 385,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFrameworkManager.tsx",
                    lineNumber: 346,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFrameworkManager.tsx",
                lineNumber: 340,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/features/ai-knowledge/src/components/KnowledgeFrameworkManager.tsx",
        lineNumber: 173,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(KnowledgeFrameworkManager, "f5NKsi3VvYAE5+hO8DqVLqDXXcA=");
_c = KnowledgeFrameworkManager;
var _c;
__turbopack_context__.k.register(_c, "KnowledgeFrameworkManager");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/features/ai-knowledge/src/data/builtInFrameworks.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "builtInFrameworks": ()=>builtInFrameworks
});
const builtInFrameworks = [
    {
        id: 'framework-office-efficiency',
        name: '办公效率',
        description: '提升工作效率的系统性方法',
        domain: 'productivity',
        version: 1,
        isBuiltIn: true,
        rootNodes: [
            {
                id: 'node-time-management',
                title: '时间管理',
                description: '科学管理时间，提高工作效率',
                children: [],
                questions: [
                    '如何使用番茄工作法？',
                    '什么是时间块管理？',
                    '如何处理时间碎片？'
                ],
                urls: [],
                expanded: false,
                level: 0,
                position: {
                    x: 0,
                    y: 0
                }
            },
            {
                id: 'node-communication',
                title: '沟通技巧',
                description: '有效沟通的方法和技巧',
                children: [],
                questions: [
                    '如何进行有效的会议？',
                    '怎样写出清晰的邮件？',
                    '如何处理工作冲突？'
                ],
                urls: [],
                expanded: false,
                level: 0,
                position: {
                    x: 200,
                    y: 0
                }
            }
        ],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 'framework-digital-marketing',
        name: '数字营销',
        description: '数字化时代的营销策略和方法',
        domain: 'marketing',
        version: 1,
        isBuiltIn: true,
        rootNodes: [
            {
                id: 'node-content-marketing',
                title: '内容营销',
                description: '通过优质内容吸引和转化客户',
                children: [],
                questions: [
                    '如何创作吸引人的内容？',
                    '什么是内容营销漏斗？',
                    '如何分发内容？'
                ],
                urls: [],
                expanded: false,
                level: 0,
                position: {
                    x: 0,
                    y: 0
                }
            },
            {
                id: 'node-seo',
                title: 'SEO优化',
                description: '搜索引擎优化的策略和技巧',
                children: [],
                questions: [
                    '什么是关键词研究？',
                    '如何优化网站结构？',
                    '怎样建设外链？'
                ],
                urls: [],
                expanded: false,
                level: 0,
                position: {
                    x: 200,
                    y: 0
                }
            }
        ],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/features/ai-knowledge/src/index.ts [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$features$2f$ai$2d$knowledge$2f$src$2f$components$2f$KnowledgeFramework$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/features/ai-knowledge/src/components/KnowledgeFramework.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$features$2f$ai$2d$knowledge$2f$src$2f$components$2f$KnowledgeFrameworkManager$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/features/ai-knowledge/src/components/KnowledgeFrameworkManager.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$features$2f$ai$2d$knowledge$2f$src$2f$data$2f$builtInFrameworks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/features/ai-knowledge/src/data/builtInFrameworks.ts [app-client] (ecmascript)");
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/features/ai-knowledge/src/index.ts [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$features$2f$ai$2d$knowledge$2f$src$2f$components$2f$KnowledgeFramework$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/features/ai-knowledge/src/components/KnowledgeFramework.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$features$2f$ai$2d$knowledge$2f$src$2f$components$2f$KnowledgeFrameworkManager$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/features/ai-knowledge/src/components/KnowledgeFrameworkManager.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$features$2f$ai$2d$knowledge$2f$src$2f$data$2f$builtInFrameworks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/features/ai-knowledge/src/data/builtInFrameworks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$features$2f$ai$2d$knowledge$2f$src$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/features/ai-knowledge/src/index.ts [app-client] (ecmascript) <locals>");
}),
"[project]/features/flow-design/src/hooks/useFlowDesign.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useFlowDesign": ()=>useFlowDesign
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.2_@babel+core@7.28.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const useFlowDesign = function() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    _s();
    const { flowId, autoLoad = true } = options;
    const [flow, setFlow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [flows, setFlows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useFlowDesign.useEffect": ()=>{
            if (autoLoad) {
                if (flowId) {
                    loadFlow(flowId);
                } else {
                    loadFlows();
                }
            }
        }
    }["useFlowDesign.useEffect"], [
        flowId,
        autoLoad
    ]);
    const loadFlow = async (id)=>{
        setLoading(true);
        setError(null);
        try {
            const response = await fetch("/api/flows/".concat(id));
            const data = await response.json();
            if (data.success) {
                setFlow(data.data);
                return data.data;
            } else {
                throw new Error(data.error);
            }
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Failed to load flow';
            setError(errorMessage);
            throw err;
        } finally{
            setLoading(false);
        }
    };
    const loadFlows = async ()=>{
        setLoading(true);
        setError(null);
        try {
            const response = await fetch('/api/flows');
            const data = await response.json();
            if (data.success) {
                setFlows(data.data.items);
                return data.data.items;
            } else {
                throw new Error(data.error);
            }
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Failed to load flows';
            setError(errorMessage);
            throw err;
        } finally{
            setLoading(false);
        }
    };
    const createFlow = async (flowData)=>{
        setLoading(true);
        setError(null);
        try {
            const response = await fetch('/api/flows', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(flowData)
            });
            const data = await response.json();
            if (data.success) {
                const newFlow = data.data;
                setFlows((prev)=>[
                        newFlow,
                        ...prev
                    ]);
                return newFlow;
            } else {
                throw new Error(data.error);
            }
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Failed to create flow';
            setError(errorMessage);
            throw err;
        } finally{
            setLoading(false);
        }
    };
    const updateFlow = async (id, updates)=>{
        setLoading(true);
        setError(null);
        try {
            const response = await fetch("/api/flows/".concat(id), {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updates)
            });
            const data = await response.json();
            if (data.success) {
                const updatedFlow = data.data;
                setFlows((prev)=>prev.map((f)=>f.id === id ? updatedFlow : f));
                if ((flow === null || flow === void 0 ? void 0 : flow.id) === id) {
                    setFlow(updatedFlow);
                }
                return updatedFlow;
            } else {
                throw new Error(data.error);
            }
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Failed to update flow';
            setError(errorMessage);
            throw err;
        } finally{
            setLoading(false);
        }
    };
    const deleteFlow = async (id)=>{
        setLoading(true);
        setError(null);
        try {
            const response = await fetch("/api/flows/".concat(id), {
                method: 'DELETE'
            });
            const data = await response.json();
            if (data.success) {
                setFlows((prev)=>prev.filter((f)=>f.id !== id));
                if ((flow === null || flow === void 0 ? void 0 : flow.id) === id) {
                    setFlow(null);
                }
            } else {
                throw new Error(data.error);
            }
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Failed to delete flow';
            setError(errorMessage);
            throw err;
        } finally{
            setLoading(false);
        }
    };
    const duplicateFlow = async (id)=>{
        const originalFlow = flows.find((f)=>f.id === id) || flow;
        if (!originalFlow) {
            throw new Error('Flow not found');
        }
        const duplicatedFlow = {
            ...originalFlow,
            title: "".concat(originalFlow.title, " (副本)"),
            id: undefined,
            createdAt: undefined,
            updatedAt: undefined
        };
        return createFlow(duplicatedFlow);
    };
    return {
        flow,
        flows,
        loading,
        error,
        createFlow,
        updateFlow,
        deleteFlow,
        loadFlow,
        loadFlows,
        duplicateFlow
    };
};
_s(useFlowDesign, "mrTnDbJVdebvqIiDIyA/Q/dqVU8=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/features/flow-design/src/components/FlowDesignManager.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "FlowDesignManager": ()=>FlowDesignManager
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.2_@babel+core@7.28.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.2_@babel+core@7.28.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stack$2f$Stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mantine+core@8.2.4_@mantine+hooks@8.2.4_react@19.1.0__@types+react@19.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@mantine/core/esm/components/Stack/Stack.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mantine+core@8.2.4_@mantine+hooks@8.2.4_react@19.1.0__@types+react@19.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@mantine/core/esm/components/Group/Group.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Title$2f$Title$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mantine+core@8.2.4_@mantine+hooks@8.2.4_react@19.1.0__@types+react@19.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@mantine/core/esm/components/Title/Title.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mantine+core@8.2.4_@mantine+hooks@8.2.4_react@19.1.0__@types+react@19.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@mantine/core/esm/components/Text/Text.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mantine+core@8.2.4_@mantine+hooks@8.2.4_react@19.1.0__@types+react@19.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@mantine/core/esm/components/Button/Button.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Card$2f$Card$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mantine+core@8.2.4_@mantine+hooks@8.2.4_react@19.1.0__@types+react@19.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@mantine/core/esm/components/Card/Card.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Badge$2f$Badge$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mantine+core@8.2.4_@mantine+hooks@8.2.4_react@19.1.0__@types+react@19.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@mantine/core/esm/components/Badge/Badge.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ActionIcon$2f$ActionIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mantine+core@8.2.4_@mantine+hooks@8.2.4_react@19.1.0__@types+react@19.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@mantine/core/esm/components/ActionIcon/ActionIcon.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Modal$2f$Modal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mantine+core@8.2.4_@mantine+hooks@8.2.4_react@19.1.0__@types+react@19.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@mantine/core/esm/components/Modal/Modal.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$TextInput$2f$TextInput$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mantine+core@8.2.4_@mantine+hooks@8.2.4_react@19.1.0__@types+react@19.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@mantine/core/esm/components/TextInput/TextInput.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Textarea$2f$Textarea$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mantine+core@8.2.4_@mantine+hooks@8.2.4_react@19.1.0__@types+react@19.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@mantine/core/esm/components/Textarea/Textarea.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Select$2f$Select$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mantine+core@8.2.4_@mantine+hooks@8.2.4_react@19.1.0__@types+react@19.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@mantine/core/esm/components/Select/Select.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Grid$2f$Grid$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mantine+core@8.2.4_@mantine+hooks@8.2.4_react@19.1.0__@types+react@19.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@mantine/core/esm/components/Grid/Grid.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Paper$2f$Paper$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mantine+core@8.2.4_@mantine+hooks@8.2.4_react@19.1.0__@types+react@19.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@mantine/core/esm/components/Paper/Paper.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Loader$2f$Loader$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mantine+core@8.2.4_@mantine+hooks@8.2.4_react@19.1.0__@types+react@19.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@mantine/core/esm/components/Loader/Loader.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Center$2f$Center$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mantine+core@8.2.4_@mantine+hooks@8.2.4_react@19.1.0__@types+react@19.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@mantine/core/esm/components/Center/Center.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Divider$2f$Divider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mantine+core@8.2.4_@mantine+hooks@8.2.4_react@19.1.0__@types+react@19.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@mantine/core/esm/components/Divider/Divider.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Alert$2f$Alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mantine+core@8.2.4_@mantine+hooks@8.2.4_react@19.1.0__@types+react@19.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@mantine/core/esm/components/Alert/Alert.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mantine+core@8.2.4_@mantine+hooks@8.2.4_react@19.1.0__@types+react@19.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Timeline$2f$Timeline$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mantine+core@8.2.4_@mantine+hooks@8.2.4_react@19.1.0__@types+react@19.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@mantine/core/esm/components/Timeline/Timeline.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconRoute$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconRoute$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.34.1_react@19.1.0/node_modules/@tabler/icons-react/dist/esm/icons/IconRoute.mjs [app-client] (ecmascript) <export default as IconRoute>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconPlus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconPlus$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.34.1_react@19.1.0/node_modules/@tabler/icons-react/dist/esm/icons/IconPlus.mjs [app-client] (ecmascript) <export default as IconPlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconEdit$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconEdit$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.34.1_react@19.1.0/node_modules/@tabler/icons-react/dist/esm/icons/IconEdit.mjs [app-client] (ecmascript) <export default as IconEdit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconTrash$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconTrash$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.34.1_react@19.1.0/node_modules/@tabler/icons-react/dist/esm/icons/IconTrash.mjs [app-client] (ecmascript) <export default as IconTrash>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconEye$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconEye$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.34.1_react@19.1.0/node_modules/@tabler/icons-react/dist/esm/icons/IconEye.mjs [app-client] (ecmascript) <export default as IconEye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconUpload$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconUpload$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.34.1_react@19.1.0/node_modules/@tabler/icons-react/dist/esm/icons/IconUpload.mjs [app-client] (ecmascript) <export default as IconUpload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconRobot$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconRobot$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.34.1_react@19.1.0/node_modules/@tabler/icons-react/dist/esm/icons/IconRobot.mjs [app-client] (ecmascript) <export default as IconRobot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconClock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconClock$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.34.1_react@19.1.0/node_modules/@tabler/icons-react/dist/esm/icons/IconClock.mjs [app-client] (ecmascript) <export default as IconClock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconTarget$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconTarget$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.34.1_react@19.1.0/node_modules/@tabler/icons-react/dist/esm/icons/IconTarget.mjs [app-client] (ecmascript) <export default as IconTarget>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconTool$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconTool$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.34.1_react@19.1.0/node_modules/@tabler/icons-react/dist/esm/icons/IconTool.mjs [app-client] (ecmascript) <export default as IconTool>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$notifications$40$8$2e$2$2e$4_$40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$ty_e67953665fd85d40faa3fac0efb2a8bc$2f$node_modules$2f40$mantine$2f$notifications$2f$esm$2f$notifications$2e$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mantine+notifications@8.2.4_@mantine+core@8.2.4_@mantine+hooks@8.2.4_react@19.1.0__@ty_e67953665fd85d40faa3fac0efb2a8bc/node_modules/@mantine/notifications/esm/notifications.store.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$features$2f$flow$2d$design$2f$src$2f$hooks$2f$useFlowDesign$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/features/flow-design/src/hooks/useFlowDesign.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const FlowDesignManager = (param)=>{
    let { onFlowSelect } = param;
    _s();
    const { flows, loading, createFlow, deleteFlow } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$features$2f$flow$2d$design$2f$src$2f$hooks$2f$useFlowDesign$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFlowDesign"])();
    const [selectedFlow, setSelectedFlow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [createModalOpen, setCreateModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [aiCreateModalOpen, setAiCreateModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [viewModalOpen, setViewModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // 表单状态
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        title: '',
        description: '',
        difficulty: 'medium'
    });
    // AI 创建状态
    const [aiFormData, setAiFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        title: '',
        description: '',
        goals: '',
        domain: '',
        difficulty: 'medium',
        referenceUrls: ''
    });
    const [aiGenerating, setAiGenerating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleCreateFlow = async ()=>{
        try {
            await createFlow(formData);
            setCreateModalOpen(false);
            setFormData({
                title: '',
                description: '',
                difficulty: 'medium'
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$notifications$40$8$2e$2$2e$4_$40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$ty_e67953665fd85d40faa3fac0efb2a8bc$2f$node_modules$2f40$mantine$2f$notifications$2f$esm$2f$notifications$2e$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifications"].show({
                title: '创建成功',
                message: '流程设计已创建',
                color: 'green'
            });
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$notifications$40$8$2e$2$2e$4_$40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$ty_e67953665fd85d40faa3fac0efb2a8bc$2f$node_modules$2f40$mantine$2f$notifications$2f$esm$2f$notifications$2e$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifications"].show({
                title: '创建失败',
                message: '无法创建流程设计',
                color: 'red'
            });
        }
    };
    const handleAICreate = async ()=>{
        try {
            setAiGenerating(true);
            // TODO: 实现AI创建流程的逻辑
            await createFlow({
                title: aiFormData.title,
                description: aiFormData.description,
                difficulty: aiFormData.difficulty,
                article: "# ".concat(aiFormData.title, "\n\n").concat(aiFormData.description),
                steps: [],
                tools: [],
                prerequisites: [],
                outcomes: []
            });
            setAiCreateModalOpen(false);
            setAiFormData({
                title: '',
                description: '',
                goals: '',
                domain: '',
                difficulty: 'medium',
                referenceUrls: ''
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$notifications$40$8$2e$2$2e$4_$40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$ty_e67953665fd85d40faa3fac0efb2a8bc$2f$node_modules$2f40$mantine$2f$notifications$2f$esm$2f$notifications$2e$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifications"].show({
                title: 'AI 创建成功',
                message: '流程设计已通过 AI 辅助创建',
                color: 'green'
            });
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$notifications$40$8$2e$2$2e$4_$40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$ty_e67953665fd85d40faa3fac0efb2a8bc$2f$node_modules$2f40$mantine$2f$notifications$2f$esm$2f$notifications$2e$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifications"].show({
                title: 'AI 创建失败',
                message: error instanceof Error ? error.message : '无法通过 AI 创建流程设计',
                color: 'red'
            });
        } finally{
            setAiGenerating(false);
        }
    };
    const getDifficultyColor = (difficulty)=>{
        switch(difficulty){
            case 'easy':
                return 'green';
            case 'medium':
                return 'yellow';
            case 'hard':
                return 'red';
            default:
                return 'gray';
        }
    };
    const getDifficultyLabel = (difficulty)=>{
        switch(difficulty){
            case 'easy':
                return '简单';
            case 'medium':
                return '中等';
            case 'hard':
                return '困难';
            default:
                return '未知';
        }
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Center$2f$Center$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Center"], {
            h: 400,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stack$2f$Stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stack"], {
                align: "center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Loader$2f$Loader$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Loader"], {
                        size: "lg"
                    }, void 0, false, {
                        fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                        lineNumber: 172,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                        c: "dimmed",
                        children: "加载流程设计..."
                    }, void 0, false, {
                        fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                        lineNumber: 173,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                lineNumber: 171,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
            lineNumber: 170,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stack$2f$Stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stack"], {
        gap: "lg",
        p: "md",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                justify: "space-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconRoute$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconRoute$3e$__["IconRoute"], {
                                size: 28,
                                color: "var(--mantine-color-green-6)"
                            }, void 0, false, {
                                fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                                lineNumber: 184,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Title$2f$Title$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
                                        order: 2,
                                        children: "流程设计"
                                    }, void 0, false, {
                                        fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                                        lineNumber: 186,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                        c: "dimmed",
                                        size: "sm",
                                        children: "创建和管理执行流程"
                                    }, void 0, false, {
                                        fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                                        lineNumber: 187,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                                lineNumber: 185,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                        lineNumber: 183,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                leftSection: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconRobot$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconRobot$3e$__["IconRobot"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                                    lineNumber: 193,
                                    columnNumber: 26
                                }, void 0),
                                variant: "gradient",
                                gradient: {
                                    from: 'green',
                                    to: 'teal'
                                },
                                onClick: ()=>setAiCreateModalOpen(true),
                                children: "AI 创建"
                            }, void 0, false, {
                                fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                                lineNumber: 192,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                leftSection: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconPlus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconPlus$3e$__["IconPlus"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                                    lineNumber: 201,
                                    columnNumber: 26
                                }, void 0),
                                onClick: ()=>setCreateModalOpen(true),
                                children: "手动创建"
                            }, void 0, false, {
                                fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                                lineNumber: 200,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                        lineNumber: 191,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                lineNumber: 182,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            flows.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Card$2f$Card$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                shadow: "sm",
                padding: "xl",
                radius: "md",
                withBorder: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Center$2f$Center$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Center"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stack$2f$Stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stack"], {
                        align: "center",
                        gap: "md",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconRoute$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconRoute$3e$__["IconRoute"], {
                                size: 64,
                                color: "var(--mantine-color-gray-5)"
                            }, void 0, false, {
                                fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                                lineNumber: 214,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Title$2f$Title$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
                                order: 3,
                                ta: "center",
                                children: "还没有流程设计"
                            }, void 0, false, {
                                fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                                lineNumber: 215,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                c: "dimmed",
                                ta: "center",
                                maw: 400,
                                children: "创建您的第一个流程设计来规划和执行复杂任务"
                            }, void 0, false, {
                                fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                                lineNumber: 216,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        leftSection: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconRobot$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconRobot$3e$__["IconRobot"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                                            lineNumber: 221,
                                            columnNumber: 32
                                        }, void 0),
                                        variant: "gradient",
                                        gradient: {
                                            from: 'green',
                                            to: 'teal'
                                        },
                                        onClick: ()=>setAiCreateModalOpen(true),
                                        children: "AI 辅助创建"
                                    }, void 0, false, {
                                        fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                                        lineNumber: 220,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        leftSection: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconPlus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconPlus$3e$__["IconPlus"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                                            lineNumber: 229,
                                            columnNumber: 32
                                        }, void 0),
                                        variant: "light",
                                        onClick: ()=>setCreateModalOpen(true),
                                        children: "手动创建"
                                    }, void 0, false, {
                                        fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                                        lineNumber: 228,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                                lineNumber: 219,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                        lineNumber: 213,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                    lineNumber: 212,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                lineNumber: 211,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Grid$2f$Grid$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Grid"], {
                children: flows.map((flow)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Grid$2f$Grid$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Grid"].Col, {
                        span: {
                            base: 12,
                            md: 6,
                            lg: 4
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Card$2f$Card$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            shadow: "sm",
                            padding: "lg",
                            radius: "md",
                            withBorder: true,
                            h: "100%",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stack$2f$Stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stack"], {
                                gap: "sm",
                                h: "100%",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                                        justify: "space-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Badge$2f$Badge$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                variant: "light",
                                                color: flow.localOnly ? 'orange' : 'green',
                                                size: "sm",
                                                children: flow.localOnly ? '本地' : '已同步'
                                            }, void 0, false, {
                                                fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                                                lineNumber: 246,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Badge$2f$Badge$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                variant: "light",
                                                color: getDifficultyColor(flow.difficulty),
                                                size: "sm",
                                                children: getDifficultyLabel(flow.difficulty)
                                            }, void 0, false, {
                                                fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                                                lineNumber: 253,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                                        lineNumber: 245,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
                                        style: {
                                            flex: 1
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Title$2f$Title$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
                                                order: 4,
                                                mb: "xs",
                                                children: flow.title
                                            }, void 0, false, {
                                                fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                                                lineNumber: 263,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                size: "sm",
                                                c: "dimmed",
                                                mb: "sm",
                                                lineClamp: 2,
                                                children: flow.description
                                            }, void 0, false, {
                                                fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                                                lineNumber: 264,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                                                gap: "xs",
                                                mb: "sm",
                                                children: [
                                                    flow.totalTime && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                                                        gap: "xs",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconClock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconClock$3e$__["IconClock"], {
                                                                size: 14
                                                            }, void 0, false, {
                                                                fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                                                                lineNumber: 271,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                                size: "xs",
                                                                c: "dimmed",
                                                                children: flow.totalTime
                                                            }, void 0, false, {
                                                                fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                                                                lineNumber: 272,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                                                        lineNumber: 270,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    flow.steps && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                                                        gap: "xs",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconTarget$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconTarget$3e$__["IconTarget"], {
                                                                size: 14
                                                            }, void 0, false, {
                                                                fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                                                                lineNumber: 277,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                                size: "xs",
                                                                c: "dimmed",
                                                                children: [
                                                                    flow.steps.length,
                                                                    " 步骤"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                                                                lineNumber: 278,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                                                        lineNumber: 276,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    flow.tools && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                                                        gap: "xs",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconTool$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconTool$3e$__["IconTool"], {
                                                                size: 14
                                                            }, void 0, false, {
                                                                fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                                                                lineNumber: 283,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                                size: "xs",
                                                                c: "dimmed",
                                                                children: [
                                                                    flow.tools.length,
                                                                    " 工具"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                                                                lineNumber: 284,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                                                        lineNumber: 282,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                                                lineNumber: 268,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                                        lineNumber: 262,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Divider$2f$Divider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Divider"], {}, void 0, false, {
                                        fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                                        lineNumber: 290,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                                        justify: "space-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                                                gap: "xs",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ActionIcon$2f$ActionIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionIcon"], {
                                                        variant: "light",
                                                        size: "sm",
                                                        onClick: ()=>{
                                                            // 导航到详情页面
                                                            if ("TURBOPACK compile-time truthy", 1) {
                                                                window.location.href = "/flows/".concat(flow.id);
                                                            }
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconEye$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconEye$3e$__["IconEye"], {
                                                            size: 14
                                                        }, void 0, false, {
                                                            fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                                                            lineNumber: 304,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                                                        lineNumber: 294,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ActionIcon$2f$ActionIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionIcon"], {
                                                        variant: "light",
                                                        size: "sm",
                                                        onClick: ()=>{
                                                        // TODO: 编辑功能
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconEdit$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconEdit$3e$__["IconEdit"], {
                                                            size: 14
                                                        }, void 0, false, {
                                                            fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                                                            lineNumber: 313,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                                                        lineNumber: 306,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    flow.localOnly && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ActionIcon$2f$ActionIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionIcon"], {
                                                        variant: "light",
                                                        color: "blue",
                                                        size: "sm",
                                                        onClick: ()=>{
                                                            // TODO: 实现同步到服务器的逻辑
                                                            console.log('Sync to server:', flow.id);
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconUpload$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconUpload$3e$__["IconUpload"], {
                                                            size: 14
                                                        }, void 0, false, {
                                                            fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                                                            lineNumber: 325,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                                                        lineNumber: 316,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                                                lineNumber: 293,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ActionIcon$2f$ActionIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionIcon"], {
                                                variant: "light",
                                                color: "red",
                                                size: "sm",
                                                onClick: ()=>deleteFlow(flow.id),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconTrash$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconTrash$3e$__["IconTrash"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                                                    lineNumber: 336,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                                                lineNumber: 330,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                                        lineNumber: 292,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                                lineNumber: 244,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                            lineNumber: 243,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, flow.id, false, {
                        fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                        lineNumber: 242,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                lineNumber: 240,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Modal$2f$Modal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
                opened: createModalOpen,
                onClose: ()=>setCreateModalOpen(false),
                title: "创建流程设计",
                size: "lg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stack$2f$Stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stack"], {
                    gap: "md",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$TextInput$2f$TextInput$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextInput"], {
                            label: "流程标题",
                            placeholder: "输入流程标题",
                            value: formData.title,
                            onChange: (e)=>setFormData({
                                    ...formData,
                                    title: e.target.value
                                }),
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                            lineNumber: 354,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Textarea$2f$Textarea$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                            label: "流程描述",
                            placeholder: "描述这个流程的目的和概述",
                            value: formData.description,
                            onChange: (e)=>setFormData({
                                    ...formData,
                                    description: e.target.value
                                }),
                            minRows: 3,
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                            lineNumber: 362,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Select$2f$Select$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                            label: "难度等级",
                            value: formData.difficulty,
                            onChange: (value)=>setFormData({
                                    ...formData,
                                    difficulty: value
                                }),
                            data: [
                                {
                                    value: 'easy',
                                    label: '简单'
                                },
                                {
                                    value: 'medium',
                                    label: '中等'
                                },
                                {
                                    value: 'hard',
                                    label: '困难'
                                }
                            ]
                        }, void 0, false, {
                            fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                            lineNumber: 371,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                            justify: "flex-end",
                            mt: "md",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "light",
                                    onClick: ()=>setCreateModalOpen(false),
                                    children: "取消"
                                }, void 0, false, {
                                    fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                                    lineNumber: 383,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: handleCreateFlow,
                                    disabled: !formData.title || !formData.description,
                                    children: "创建"
                                }, void 0, false, {
                                    fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                                    lineNumber: 386,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                            lineNumber: 382,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                    lineNumber: 353,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                lineNumber: 347,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Modal$2f$Modal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
                opened: aiCreateModalOpen,
                onClose: ()=>setAiCreateModalOpen(false),
                title: "AI 辅助创建流程设计",
                size: "lg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stack$2f$Stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stack"], {
                    gap: "md",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Alert$2f$Alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alert"], {
                            color: "blue",
                            variant: "light",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                size: "sm",
                                children: "AI 将根据您提供的信息自动生成详细的流程步骤和说明"
                            }, void 0, false, {
                                fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                                lineNumber: 402,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                            lineNumber: 401,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$TextInput$2f$TextInput$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextInput"], {
                            label: "流程标题",
                            placeholder: "例如：网站开发完整流程",
                            value: aiFormData.title,
                            onChange: (e)=>setAiFormData({
                                    ...aiFormData,
                                    title: e.target.value
                                }),
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                            lineNumber: 407,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Textarea$2f$Textarea$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                            label: "流程描述",
                            placeholder: "详细描述这个流程要解决的问题和目标",
                            value: aiFormData.description,
                            onChange: (e)=>setAiFormData({
                                    ...aiFormData,
                                    description: e.target.value
                                }),
                            minRows: 3,
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                            lineNumber: 415,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Textarea$2f$Textarea$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                            label: "具体目标",
                            placeholder: "列出这个流程要达成的具体目标",
                            value: aiFormData.goals,
                            onChange: (e)=>setAiFormData({
                                    ...aiFormData,
                                    goals: e.target.value
                                }),
                            minRows: 2
                        }, void 0, false, {
                            fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                            lineNumber: 424,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$TextInput$2f$TextInput$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextInput"], {
                            label: "领域/行业",
                            placeholder: "例如：软件开发、市场营销、项目管理",
                            value: aiFormData.domain,
                            onChange: (e)=>setAiFormData({
                                    ...aiFormData,
                                    domain: e.target.value
                                })
                        }, void 0, false, {
                            fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                            lineNumber: 432,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Select$2f$Select$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                            label: "难度等级",
                            value: aiFormData.difficulty,
                            onChange: (value)=>setAiFormData({
                                    ...aiFormData,
                                    difficulty: value
                                }),
                            data: [
                                {
                                    value: 'easy',
                                    label: '简单'
                                },
                                {
                                    value: 'medium',
                                    label: '中等'
                                },
                                {
                                    value: 'hard',
                                    label: '困难'
                                }
                            ]
                        }, void 0, false, {
                            fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                            lineNumber: 439,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Textarea$2f$Textarea$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                            label: "参考资料 (可选)",
                            placeholder: "提供相关的网址、文档或其他参考资料",
                            value: aiFormData.referenceUrls,
                            onChange: (e)=>setAiFormData({
                                    ...aiFormData,
                                    referenceUrls: e.target.value
                                }),
                            minRows: 2
                        }, void 0, false, {
                            fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                            lineNumber: 450,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                            justify: "flex-end",
                            mt: "md",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "light",
                                    onClick: ()=>setAiCreateModalOpen(false),
                                    children: "取消"
                                }, void 0, false, {
                                    fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                                    lineNumber: 459,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: handleAICreate,
                                    disabled: !aiFormData.title || !aiFormData.description,
                                    loading: aiGenerating,
                                    leftSection: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconRobot$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconRobot$3e$__["IconRobot"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                                        lineNumber: 466,
                                        columnNumber: 28
                                    }, void 0),
                                    children: "AI 生成流程"
                                }, void 0, false, {
                                    fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                                    lineNumber: 462,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                            lineNumber: 458,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                    lineNumber: 400,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                lineNumber: 394,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Modal$2f$Modal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
                opened: viewModalOpen,
                onClose: ()=>setViewModalOpen(false),
                title: (selectedFlow === null || selectedFlow === void 0 ? void 0 : selectedFlow.title) || '流程详情',
                size: "xl",
                children: selectedFlow && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stack$2f$Stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stack"], {
                    gap: "md",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Badge$2f$Badge$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                    color: getDifficultyColor(selectedFlow.difficulty),
                                    children: getDifficultyLabel(selectedFlow.difficulty)
                                }, void 0, false, {
                                    fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                                    lineNumber: 484,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                selectedFlow.totalTime && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Badge$2f$Badge$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                    variant: "light",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                                        gap: "xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconClock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconClock$3e$__["IconClock"], {
                                                size: 12
                                            }, void 0, false, {
                                                fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                                                lineNumber: 490,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            selectedFlow.totalTime
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                                        lineNumber: 489,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                                    lineNumber: 488,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                            lineNumber: 483,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                            children: selectedFlow.description
                        }, void 0, false, {
                            fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                            lineNumber: 497,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        selectedFlow.article && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Paper$2f$Paper$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Paper"], {
                            p: "md",
                            withBorder: true,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                size: "sm",
                                style: {
                                    whiteSpace: 'pre-wrap'
                                },
                                children: selectedFlow.article
                            }, void 0, false, {
                                fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                                lineNumber: 501,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                            lineNumber: 500,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        selectedFlow.steps && selectedFlow.steps.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Title$2f$Title$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
                                    order: 4,
                                    mb: "md",
                                    children: "流程步骤"
                                }, void 0, false, {
                                    fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                                    lineNumber: 509,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Timeline$2f$Timeline$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Timeline"], {
                                    children: selectedFlow.steps.map((step, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Timeline$2f$Timeline$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Timeline"].Item, {
                                            title: step.title,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                    size: "sm",
                                                    c: "dimmed",
                                                    children: step.description
                                                }, void 0, false, {
                                                    fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                                                    lineNumber: 513,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                step.estimatedTime && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                    size: "xs",
                                                    c: "dimmed",
                                                    mt: "xs",
                                                    children: [
                                                        "预计时间: ",
                                                        step.estimatedTime
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                                                    lineNumber: 515,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                                            lineNumber: 512,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                                    lineNumber: 510,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                            lineNumber: 508,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                    lineNumber: 482,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
                lineNumber: 475,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/features/flow-design/src/components/FlowDesignManager.tsx",
        lineNumber: 180,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(FlowDesignManager, "RbcS8s7iVwNlg6aW3nADwzCmtzw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$features$2f$flow$2d$design$2f$src$2f$hooks$2f$useFlowDesign$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFlowDesign"]
    ];
});
_c = FlowDesignManager;
var _c;
__turbopack_context__.k.register(_c, "FlowDesignManager");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/features/flow-design/src/components/FlowDesignViewer.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "FlowDesignViewer": ()=>FlowDesignViewer
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.2_@babel+core@7.28.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.2_@babel+core@7.28.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stack$2f$Stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mantine+core@8.2.4_@mantine+hooks@8.2.4_react@19.1.0__@types+react@19.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@mantine/core/esm/components/Stack/Stack.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mantine+core@8.2.4_@mantine+hooks@8.2.4_react@19.1.0__@types+react@19.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@mantine/core/esm/components/Group/Group.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Title$2f$Title$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mantine+core@8.2.4_@mantine+hooks@8.2.4_react@19.1.0__@types+react@19.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@mantine/core/esm/components/Title/Title.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mantine+core@8.2.4_@mantine+hooks@8.2.4_react@19.1.0__@types+react@19.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@mantine/core/esm/components/Text/Text.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mantine+core@8.2.4_@mantine+hooks@8.2.4_react@19.1.0__@types+react@19.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@mantine/core/esm/components/Button/Button.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Card$2f$Card$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mantine+core@8.2.4_@mantine+hooks@8.2.4_react@19.1.0__@types+react@19.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@mantine/core/esm/components/Card/Card.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Badge$2f$Badge$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mantine+core@8.2.4_@mantine+hooks@8.2.4_react@19.1.0__@types+react@19.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@mantine/core/esm/components/Badge/Badge.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ActionIcon$2f$ActionIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mantine+core@8.2.4_@mantine+hooks@8.2.4_react@19.1.0__@types+react@19.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@mantine/core/esm/components/ActionIcon/ActionIcon.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Paper$2f$Paper$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mantine+core@8.2.4_@mantine+hooks@8.2.4_react@19.1.0__@types+react@19.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@mantine/core/esm/components/Paper/Paper.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mantine+core@8.2.4_@mantine+hooks@8.2.4_react@19.1.0__@types+react@19.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Timeline$2f$Timeline$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mantine+core@8.2.4_@mantine+hooks@8.2.4_react@19.1.0__@types+react@19.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@mantine/core/esm/components/Timeline/Timeline.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Anchor$2f$Anchor$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mantine+core@8.2.4_@mantine+hooks@8.2.4_react@19.1.0__@types+react@19.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@mantine/core/esm/components/Anchor/Anchor.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Progress$2f$Progress$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mantine+core@8.2.4_@mantine+hooks@8.2.4_react@19.1.0__@types+react@19.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@mantine/core/esm/components/Progress/Progress.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stepper$2f$Stepper$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mantine+core@8.2.4_@mantine+hooks@8.2.4_react@19.1.0__@types+react@19.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@mantine/core/esm/components/Stepper/Stepper.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconRoute$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconRoute$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.34.1_react@19.1.0/node_modules/@tabler/icons-react/dist/esm/icons/IconRoute.mjs [app-client] (ecmascript) <export default as IconRoute>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconClock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconClock$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.34.1_react@19.1.0/node_modules/@tabler/icons-react/dist/esm/icons/IconClock.mjs [app-client] (ecmascript) <export default as IconClock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconTarget$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconTarget$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.34.1_react@19.1.0/node_modules/@tabler/icons-react/dist/esm/icons/IconTarget.mjs [app-client] (ecmascript) <export default as IconTarget>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconTool$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconTool$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.34.1_react@19.1.0/node_modules/@tabler/icons-react/dist/esm/icons/IconTool.mjs [app-client] (ecmascript) <export default as IconTool>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconExternalLink$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.34.1_react@19.1.0/node_modules/@tabler/icons-react/dist/esm/icons/IconExternalLink.mjs [app-client] (ecmascript) <export default as IconExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconCheck$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.34.1_react@19.1.0/node_modules/@tabler/icons-react/dist/esm/icons/IconCheck.mjs [app-client] (ecmascript) <export default as IconCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconPlayerPlay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconPlayerPlay$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.34.1_react@19.1.0/node_modules/@tabler/icons-react/dist/esm/icons/IconPlayerPlay.mjs [app-client] (ecmascript) <export default as IconPlayerPlay>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconPlayerPause$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconPlayerPause$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.34.1_react@19.1.0/node_modules/@tabler/icons-react/dist/esm/icons/IconPlayerPause.mjs [app-client] (ecmascript) <export default as IconPlayerPause>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const FlowDesignViewer = (param)=>{
    let { flow, onStepComplete, onFlowComplete, readonly = false } = param;
    _s();
    const [activeStep, setActiveStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [completedSteps, setCompletedSteps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [isExecuting, setIsExecuting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const getDifficultyColor = (difficulty)=>{
        switch(difficulty){
            case 'easy':
                return 'green';
            case 'medium':
                return 'yellow';
            case 'hard':
                return 'red';
            default:
                return 'gray';
        }
    };
    const getDifficultyLabel = (difficulty)=>{
        switch(difficulty){
            case 'easy':
                return '简单';
            case 'medium':
                return '中等';
            case 'hard':
                return '困难';
            default:
                return '未知';
        }
    };
    const handleStepComplete = (step)=>{
        const newCompleted = new Set(completedSteps);
        newCompleted.add(step.id);
        setCompletedSteps(newCompleted);
        onStepComplete === null || onStepComplete === void 0 ? void 0 : onStepComplete(step.id);
        // 自动进入下一步
        if (activeStep < flow.steps.length - 1) {
            setActiveStep(activeStep + 1);
        } else {
            // 流程完成
            setIsExecuting(false);
            onFlowComplete === null || onFlowComplete === void 0 ? void 0 : onFlowComplete();
        }
    };
    const getProgress = ()=>{
        return completedSteps.size / flow.steps.length * 100;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stack$2f$Stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stack"], {
        gap: "lg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Paper$2f$Paper$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Paper"], {
                p: "lg",
                withBorder: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                        justify: "space-between",
                        mb: "md",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconRoute$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconRoute$3e$__["IconRoute"], {
                                        size: 32,
                                        color: "var(--mantine-color-teal-6)"
                                    }, void 0, false, {
                                        fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                                        lineNumber: 98,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Title$2f$Title$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
                                                order: 2,
                                                children: flow.title
                                            }, void 0, false, {
                                                fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                                                lineNumber: 100,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                c: "dimmed",
                                                children: flow.description
                                            }, void 0, false, {
                                                fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                                                lineNumber: 101,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                                        lineNumber: 99,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Badge$2f$Badge$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                        color: getDifficultyColor(flow.difficulty),
                                        children: getDifficultyLabel(flow.difficulty)
                                    }, void 0, false, {
                                        fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                                        lineNumber: 106,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    flow.totalTime && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Badge$2f$Badge$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                        variant: "outline",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                                            gap: "xs",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconClock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconClock$3e$__["IconClock"], {
                                                    size: 12
                                                }, void 0, false, {
                                                    fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                                                    lineNumber: 112,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                flow.totalTime
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                                            lineNumber: 111,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                                        lineNumber: 110,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    !readonly && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        leftSection: isExecuting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconPlayerPause$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconPlayerPause$3e$__["IconPlayerPause"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                                            lineNumber: 119,
                                            columnNumber: 44
                                        }, void 0) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconPlayerPlay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconPlayerPlay$3e$__["IconPlayerPlay"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                                            lineNumber: 119,
                                            columnNumber: 76
                                        }, void 0),
                                        onClick: ()=>setIsExecuting(!isExecuting),
                                        variant: isExecuting ? 'light' : 'filled',
                                        children: isExecuting ? '暂停执行' : '开始执行'
                                    }, void 0, false, {
                                        fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                                        lineNumber: 118,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                                lineNumber: 105,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    !readonly && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                                justify: "space-between",
                                mb: "xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                        size: "sm",
                                        fw: 500,
                                        children: "执行进度"
                                    }, void 0, false, {
                                        fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                                        lineNumber: 133,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                        size: "sm",
                                        c: "dimmed",
                                        children: [
                                            completedSteps.size,
                                            " / ",
                                            flow.steps.length,
                                            " 步骤完成"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                                        lineNumber: 134,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                                lineNumber: 132,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Progress$2f$Progress$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Progress"], {
                                value: getProgress(),
                                size: "lg",
                                radius: "md"
                            }, void 0, false, {
                                fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                                lineNumber: 138,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                        lineNumber: 131,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            flow.prerequisites && flow.prerequisites.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Card$2f$Card$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                withBorder: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Title$2f$Title$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
                        order: 4,
                        mb: "md",
                        children: "前置条件"
                    }, void 0, false, {
                        fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                        lineNumber: 146,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stack$2f$Stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stack"], {
                        gap: "xs",
                        children: flow.prerequisites.map((prereq, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                                gap: "xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconCheck$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconCheck$3e$__["IconCheck"], {
                                        size: 16,
                                        color: "var(--mantine-color-green-6)"
                                    }, void 0, false, {
                                        fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                                        lineNumber: 150,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                        size: "sm",
                                        children: prereq
                                    }, void 0, false, {
                                        fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                                        lineNumber: 151,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, index, true, {
                                fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                                lineNumber: 149,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                        lineNumber: 147,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                lineNumber: 145,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Card$2f$Card$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                withBorder: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Title$2f$Title$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
                        order: 4,
                        mb: "md",
                        children: "执行步骤"
                    }, void 0, false, {
                        fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                        lineNumber: 160,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    readonly ? // 只读模式：使用Timeline展示
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Timeline$2f$Timeline$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Timeline"], {
                        active: -1,
                        bulletSize: 24,
                        lineWidth: 2,
                        children: flow.steps.map((step, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Timeline$2f$Timeline$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Timeline"].Item, {
                                bullet: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                    size: "xs",
                                    children: index + 1
                                }, void 0, false, {
                                    fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                                    lineNumber: 168,
                                    columnNumber: 25
                                }, void 0),
                                title: step.title,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                        size: "sm",
                                        c: "dimmed",
                                        mb: "xs",
                                        children: step.description
                                    }, void 0, false, {
                                        fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                                        lineNumber: 171,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                                        gap: "xs",
                                        mb: "sm",
                                        children: [
                                            step.estimatedTime && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Badge$2f$Badge$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                size: "xs",
                                                variant: "outline",
                                                children: [
                                                    "预计 ",
                                                    step.estimatedTime
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                                                lineNumber: 177,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            step.difficulty && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Badge$2f$Badge$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                size: "xs",
                                                color: getDifficultyColor(step.difficulty),
                                                children: getDifficultyLabel(step.difficulty)
                                            }, void 0, false, {
                                                fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                                                lineNumber: 182,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                                        lineNumber: 175,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    step.resources && step.resources.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stack$2f$Stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stack"], {
                                        gap: "xs",
                                        mt: "xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                size: "sm",
                                                fw: 500,
                                                children: "相关资源："
                                            }, void 0, false, {
                                                fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                                                lineNumber: 190,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            step.resources.map((resource)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Anchor$2f$Anchor$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Anchor"], {
                                                    href: resource.url,
                                                    target: "_blank",
                                                    size: "sm",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                                                        gap: "xs",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconExternalLink$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconExternalLink$3e$__["IconExternalLink"], {
                                                                size: 12
                                                            }, void 0, false, {
                                                                fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                                                                lineNumber: 199,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            resource.title
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                                                        lineNumber: 198,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, resource.id, false, {
                                                    fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                                                    lineNumber: 192,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                                        lineNumber: 189,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    step.questions && step.questions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
                                        mt: "sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                size: "sm",
                                                fw: 500,
                                                mb: "xs",
                                                children: "检查要点："
                                            }, void 0, false, {
                                                fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                                                lineNumber: 209,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stack$2f$Stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stack"], {
                                                gap: "xs",
                                                children: step.questions.map((question, qIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                        size: "sm",
                                                        c: "dimmed",
                                                        children: [
                                                            "• ",
                                                            question
                                                        ]
                                                    }, qIndex, true, {
                                                        fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                                                        lineNumber: 212,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                                                lineNumber: 210,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                                        lineNumber: 208,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, step.id, true, {
                                fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                                lineNumber: 166,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                        lineNumber: 164,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)) : // 交互模式：使用Stepper展示
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stepper$2f$Stepper$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stepper"], {
                        active: activeStep,
                        onStepClick: setActiveStep,
                        allowNextStepsSelect: false,
                        children: flow.steps.map((step, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stepper$2f$Stepper$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stepper"].Step, {
                                label: "步骤 ".concat(index + 1),
                                description: step.title,
                                completedIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconCheck$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconCheck$3e$__["IconCheck"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                                    lineNumber: 234,
                                    columnNumber: 32
                                }, void 0),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Paper$2f$Paper$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Paper"], {
                                    p: "md",
                                    bg: "gray.0",
                                    mt: "md",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stack$2f$Stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stack"], {
                                        gap: "md",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Title$2f$Title$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
                                                        order: 5,
                                                        mb: "xs",
                                                        children: step.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                                                        lineNumber: 239,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                        size: "sm",
                                                        mb: "md",
                                                        children: step.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                                                        lineNumber: 240,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                                                        gap: "xs",
                                                        mb: "md",
                                                        children: [
                                                            step.estimatedTime && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Badge$2f$Badge$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                variant: "outline",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                                                                    gap: "xs",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconClock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconClock$3e$__["IconClock"], {
                                                                            size: 12
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                                                                            lineNumber: 246,
                                                                            columnNumber: 31
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        step.estimatedTime
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                                                                    lineNumber: 245,
                                                                    columnNumber: 29
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                                                                lineNumber: 244,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            step.difficulty && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Badge$2f$Badge$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                color: getDifficultyColor(step.difficulty),
                                                                children: getDifficultyLabel(step.difficulty)
                                                            }, void 0, false, {
                                                                fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                                                                lineNumber: 252,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                                                        lineNumber: 242,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                                                lineNumber: 238,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            step.resources && step.resources.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                        size: "sm",
                                                        fw: 500,
                                                        mb: "xs",
                                                        children: "相关资源："
                                                    }, void 0, false, {
                                                        fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                                                        lineNumber: 261,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stack$2f$Stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stack"], {
                                                        gap: "xs",
                                                        children: step.resources.map((resource)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Anchor$2f$Anchor$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Anchor"], {
                                                                href: resource.url,
                                                                target: "_blank",
                                                                size: "sm",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                                                                    gap: "xs",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconExternalLink$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconExternalLink$3e$__["IconExternalLink"], {
                                                                            size: 12
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                                                                            lineNumber: 271,
                                                                            columnNumber: 33
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        resource.title,
                                                                        resource.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                                            size: "xs",
                                                                            c: "dimmed",
                                                                            children: [
                                                                                "- ",
                                                                                resource.description
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                                                                            lineNumber: 274,
                                                                            columnNumber: 35
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                                                                    lineNumber: 270,
                                                                    columnNumber: 31
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, resource.id, false, {
                                                                fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                                                                lineNumber: 264,
                                                                columnNumber: 29
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                                                        lineNumber: 262,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                                                lineNumber: 260,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            step.questions && step.questions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                        size: "sm",
                                                        fw: 500,
                                                        mb: "xs",
                                                        children: "完成检查："
                                                    }, void 0, false, {
                                                        fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                                                        lineNumber: 287,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stack$2f$Stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stack"], {
                                                        gap: "xs",
                                                        children: step.questions.map((question, qIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                                size: "sm",
                                                                children: [
                                                                    "• ",
                                                                    question
                                                                ]
                                                            }, qIndex, true, {
                                                                fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                                                                lineNumber: 290,
                                                                columnNumber: 29
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                                                        lineNumber: 288,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                                                lineNumber: 286,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                                                justify: "flex-end",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    leftSection: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconCheck$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconCheck$3e$__["IconCheck"], {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                                                        lineNumber: 300,
                                                        columnNumber: 38
                                                    }, void 0),
                                                    onClick: ()=>handleStepComplete(step),
                                                    disabled: completedSteps.has(step.id),
                                                    variant: completedSteps.has(step.id) ? 'light' : 'filled',
                                                    children: completedSteps.has(step.id) ? '已完成' : '标记完成'
                                                }, void 0, false, {
                                                    fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                                                    lineNumber: 299,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                                                lineNumber: 298,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                                        lineNumber: 237,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                                    lineNumber: 236,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, step.id, false, {
                                fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                                lineNumber: 230,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                        lineNumber: 224,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                lineNumber: 159,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            flow.outcomes && flow.outcomes.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Card$2f$Card$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                withBorder: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Title$2f$Title$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
                        order: 4,
                        mb: "md",
                        children: "预期成果"
                    }, void 0, false, {
                        fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                        lineNumber: 319,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stack$2f$Stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stack"], {
                        gap: "xs",
                        children: flow.outcomes.map((outcome, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                                gap: "xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconTarget$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconTarget$3e$__["IconTarget"], {
                                        size: 16,
                                        color: "var(--mantine-color-blue-6)"
                                    }, void 0, false, {
                                        fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                                        lineNumber: 323,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                        size: "sm",
                                        children: outcome
                                    }, void 0, false, {
                                        fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                                        lineNumber: 324,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, index, true, {
                                fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                                lineNumber: 322,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                        lineNumber: 320,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                lineNumber: 318,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            flow.tools && flow.tools.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Card$2f$Card$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                withBorder: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Title$2f$Title$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
                        order: 4,
                        mb: "md",
                        children: "推荐工具"
                    }, void 0, false, {
                        fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                        lineNumber: 334,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stack$2f$Stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stack"], {
                        gap: "sm",
                        children: flow.tools.map((tool)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Paper$2f$Paper$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Paper"], {
                                p: "sm",
                                withBorder: true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                                    justify: "space-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
                                            style: {
                                                flex: 1
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                                                    gap: "xs",
                                                    mb: "xs",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconTool$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconTool$3e$__["IconTool"], {
                                                            size: 16
                                                        }, void 0, false, {
                                                            fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                                                            lineNumber: 341,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                            fw: 500,
                                                            children: tool.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                                                            lineNumber: 342,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Badge$2f$Badge$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                            size: "xs",
                                                            variant: "outline",
                                                            children: tool.category
                                                        }, void 0, false, {
                                                            fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                                                            lineNumber: 343,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                                                    lineNumber: 340,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                    size: "sm",
                                                    c: "dimmed",
                                                    children: tool.description
                                                }, void 0, false, {
                                                    fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                                                    lineNumber: 347,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                                            lineNumber: 339,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Anchor$2f$Anchor$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Anchor"], {
                                            href: tool.url,
                                            target: "_blank",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ActionIcon$2f$ActionIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionIcon"], {
                                                variant: "light",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconExternalLink$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconExternalLink$3e$__["IconExternalLink"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                                                    lineNumber: 353,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                                                lineNumber: 352,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                                            lineNumber: 351,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                                    lineNumber: 338,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, tool.id, false, {
                                fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                                lineNumber: 337,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                        lineNumber: 335,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
                lineNumber: 333,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/features/flow-design/src/components/FlowDesignViewer.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(FlowDesignViewer, "P1I0Fa2ygiCg0i8S95Vuv0gCbQE=");
_c = FlowDesignViewer;
var _c;
__turbopack_context__.k.register(_c, "FlowDesignViewer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/features/flow-design/feature.config.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "flowDesignFeature": ()=>flowDesignFeature
});
const flowDesignFeature = {
    id: 'flow-design',
    name: '流程设计',
    description: '创建和管理结构化的执行流程，支持AI辅助生成',
    version: '1.0.0',
    status: 'stable',
    // 桌面应用配置
    desktop: {
        enabled: true,
        menuItems: [
            {
                label: '流程设计',
                path: '/flows',
                icon: 'IconRoute'
            }
        ],
        shortcuts: [
            {
                key: 'cmd+shift+f',
                action: 'create_flow',
                description: '创建新流程'
            }
        ],
        routes: [
            {
                path: '/flows',
                component: 'FlowDesignManager',
                exact: true
            },
            {
                path: '/flows/:id',
                component: 'FlowDesignViewer',
                exact: true
            }
        ]
    },
    // 官网展示配置
    website: {
        enabled: true,
        showcase: {
            title: '流程设计',
            subtitle: '结构化任务执行',
            description: '创建详细的执行流程，包含步骤、工具、资源和时间估算，支持AI辅助生成',
            features: [
                '步骤化流程设计',
                'AI辅助创建流程',
                '工具和资源管理',
                '时间估算和难度评级',
                '最佳实践提取',
                '团队协作分享'
            ],
            screenshots: [
                '/images/features/flow-design-manager.png',
                '/images/features/flow-design-creator.png',
                '/images/features/flow-design-viewer.png'
            ],
            demoVideo: '/videos/flow-design-demo.mp4'
        },
        pricing: {
            tier: 'pro',
            features: [
                '无限流程创建',
                'AI辅助生成',
                '团队协作',
                '高级分析'
            ]
        }
    },
    // API 配置
    api: {
        endpoints: [
            '/api/flows',
            '/api/flows/:id',
            '/api/flows/:id/steps',
            '/api/flows/:id/tools'
        ],
        permissions: [
            'flow:read',
            'flow:write',
            'flow:delete',
            'flow:share'
        ]
    },
    // 依赖配置
    dependencies: {
        ai: [
            'openai',
            'anthropic',
            'pollinations'
        ],
        ui: [
            '@mantine/core',
            '@tabler/icons-react'
        ],
        core: [
            '@my-platform/types'
        ]
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/features/flow-design/src/index.ts [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// Flow Design Feature - 流程设计功能模块
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$features$2f$flow$2d$design$2f$src$2f$components$2f$FlowDesignManager$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/features/flow-design/src/components/FlowDesignManager.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$features$2f$flow$2d$design$2f$src$2f$components$2f$FlowDesignViewer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/features/flow-design/src/components/FlowDesignViewer.tsx [app-client] (ecmascript)");
// Hooks
var __TURBOPACK__imported__module__$5b$project$5d2f$features$2f$flow$2d$design$2f$src$2f$hooks$2f$useFlowDesign$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/features/flow-design/src/hooks/useFlowDesign.ts [app-client] (ecmascript)");
// Feature configuration
var __TURBOPACK__imported__module__$5b$project$5d2f$features$2f$flow$2d$design$2f$feature$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/features/flow-design/feature.config.ts [app-client] (ecmascript)");
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/features/flow-design/src/index.ts [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$features$2f$flow$2d$design$2f$src$2f$components$2f$FlowDesignManager$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/features/flow-design/src/components/FlowDesignManager.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$features$2f$flow$2d$design$2f$src$2f$components$2f$FlowDesignViewer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/features/flow-design/src/components/FlowDesignViewer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$features$2f$flow$2d$design$2f$src$2f$hooks$2f$useFlowDesign$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/features/flow-design/src/hooks/useFlowDesign.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$features$2f$flow$2d$design$2f$feature$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/features/flow-design/feature.config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$features$2f$flow$2d$design$2f$src$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/features/flow-design/src/index.ts [app-client] (ecmascript) <locals>");
}),
"[project]/features/prompt-templates/src/components/PromptTemplateManager.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "PromptTemplateManager": ()=>PromptTemplateManager
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.2_@babel+core@7.28.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.2_@babel+core@7.28.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stack$2f$Stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mantine+core@8.2.4_@mantine+hooks@8.2.4_react@19.1.0__@types+react@19.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@mantine/core/esm/components/Stack/Stack.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mantine+core@8.2.4_@mantine+hooks@8.2.4_react@19.1.0__@types+react@19.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@mantine/core/esm/components/Group/Group.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Title$2f$Title$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mantine+core@8.2.4_@mantine+hooks@8.2.4_react@19.1.0__@types+react@19.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@mantine/core/esm/components/Title/Title.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mantine+core@8.2.4_@mantine+hooks@8.2.4_react@19.1.0__@types+react@19.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@mantine/core/esm/components/Text/Text.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mantine+core@8.2.4_@mantine+hooks@8.2.4_react@19.1.0__@types+react@19.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@mantine/core/esm/components/Button/Button.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Card$2f$Card$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mantine+core@8.2.4_@mantine+hooks@8.2.4_react@19.1.0__@types+react@19.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@mantine/core/esm/components/Card/Card.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Badge$2f$Badge$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mantine+core@8.2.4_@mantine+hooks@8.2.4_react@19.1.0__@types+react@19.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@mantine/core/esm/components/Badge/Badge.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ActionIcon$2f$ActionIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mantine+core@8.2.4_@mantine+hooks@8.2.4_react@19.1.0__@types+react@19.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@mantine/core/esm/components/ActionIcon/ActionIcon.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$TextInput$2f$TextInput$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mantine+core@8.2.4_@mantine+hooks@8.2.4_react@19.1.0__@types+react@19.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@mantine/core/esm/components/TextInput/TextInput.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Grid$2f$Grid$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mantine+core@8.2.4_@mantine+hooks@8.2.4_react@19.1.0__@types+react@19.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@mantine/core/esm/components/Grid/Grid.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Center$2f$Center$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mantine+core@8.2.4_@mantine+hooks@8.2.4_react@19.1.0__@types+react@19.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@mantine/core/esm/components/Center/Center.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mantine+core@8.2.4_@mantine+hooks@8.2.4_react@19.1.0__@types+react@19.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Paper$2f$Paper$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mantine+core@8.2.4_@mantine+hooks@8.2.4_react@19.1.0__@types+react@19.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@mantine/core/esm/components/Paper/Paper.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Divider$2f$Divider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mantine+core@8.2.4_@mantine+hooks@8.2.4_react@19.1.0__@types+react@19.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@mantine/core/esm/components/Divider/Divider.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Modal$2f$Modal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mantine+core@8.2.4_@mantine+hooks@8.2.4_react@19.1.0__@types+react@19.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@mantine/core/esm/components/Modal/Modal.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Textarea$2f$Textarea$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mantine+core@8.2.4_@mantine+hooks@8.2.4_react@19.1.0__@types+react@19.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@mantine/core/esm/components/Textarea/Textarea.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Select$2f$Select$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mantine+core@8.2.4_@mantine+hooks@8.2.4_react@19.1.0__@types+react@19.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@mantine/core/esm/components/Select/Select.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Tabs$2f$Tabs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mantine+core@8.2.4_@mantine+hooks@8.2.4_react@19.1.0__@types+react@19.1.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@mantine/core/esm/components/Tabs/Tabs.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconTemplate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconTemplate$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.34.1_react@19.1.0/node_modules/@tabler/icons-react/dist/esm/icons/IconTemplate.mjs [app-client] (ecmascript) <export default as IconTemplate>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconSearch$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconSearch$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.34.1_react@19.1.0/node_modules/@tabler/icons-react/dist/esm/icons/IconSearch.mjs [app-client] (ecmascript) <export default as IconSearch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconCopy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconCopy$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.34.1_react@19.1.0/node_modules/@tabler/icons-react/dist/esm/icons/IconCopy.mjs [app-client] (ecmascript) <export default as IconCopy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconEye$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconEye$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.34.1_react@19.1.0/node_modules/@tabler/icons-react/dist/esm/icons/IconEye.mjs [app-client] (ecmascript) <export default as IconEye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconEdit$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconEdit$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.34.1_react@19.1.0/node_modules/@tabler/icons-react/dist/esm/icons/IconEdit.mjs [app-client] (ecmascript) <export default as IconEdit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconPlus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconPlus$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.34.1_react@19.1.0/node_modules/@tabler/icons-react/dist/esm/icons/IconPlus.mjs [app-client] (ecmascript) <export default as IconPlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconRobot$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconRobot$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tabler+icons-react@3.34.1_react@19.1.0/node_modules/@tabler/icons-react/dist/esm/icons/IconRobot.mjs [app-client] (ecmascript) <export default as IconRobot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$notifications$40$8$2e$2$2e$4_$40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$ty_e67953665fd85d40faa3fac0efb2a8bc$2f$node_modules$2f40$mantine$2f$notifications$2f$esm$2f$notifications$2e$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@mantine+notifications@8.2.4_@mantine+core@8.2.4_@mantine+hooks@8.2.4_react@19.1.0__@ty_e67953665fd85d40faa3fac0efb2a8bc/node_modules/@mantine/notifications/esm/notifications.store.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
// 暂时注释掉PageLayout导入，直接使用Stack布局
// import { PageLayout } from '../../../apps/desktop/src/components/layout/PageLayout';
const mockTemplates = [
    {
        id: 1,
        title: '文章写作助手',
        description: '帮助您创作高质量的文章内容',
        category: '写作',
        template: '请帮我写一篇关于 {主题} 的文章，要求：\n1. 结构清晰，逻辑严谨\n2. 内容深入，观点独特\n3. 语言流畅，易于理解\n4. 字数控制在 {字数} 字左右'
    },
    {
        id: 2,
        title: '代码审查专家',
        description: '专业的代码审查和优化建议',
        category: '编程',
        template: '请审查以下代码并提供改进建议：\n\n```{编程语言}\n{代码内容}\n```\n\n请从以下角度分析：\n1. 代码质量和可读性\n2. 性能优化建议\n3. 安全性考虑\n4. 最佳实践建议'
    },
    {
        id: 3,
        title: '数据分析师',
        description: '专业的数据分析和洞察提取',
        category: '分析',
        template: '请分析以下数据并提供洞察：\n\n{数据描述}\n\n分析要求：\n1. 识别关键趋势和模式\n2. 提供数据驱动的洞察\n3. 给出可行的建议\n4. 用图表或可视化方式展示结果'
    },
    {
        id: 4,
        title: '翻译专家',
        description: '专业的多语言翻译服务',
        category: '翻译',
        template: '请将以下内容从 {源语言} 翻译成 {目标语言}，要求：\n1. 准确传达原文意思\n2. 符合目标语言表达习惯\n3. 保持原文的语气和风格\n\n原文：\n{待翻译内容}'
    },
    {
        id: 5,
        title: '学习助手',
        description: '帮助理解和学习复杂概念',
        category: '教育',
        template: '请帮我理解 {概念/主题}，要求：\n1. 用简单易懂的语言解释\n2. 提供具体的例子\n3. 指出重点和难点\n4. 给出学习建议\n\n我的背景：{学习背景}'
    }
];
const PromptTemplateManager = ()=>{
    _s();
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('全部');
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedTemplate, setSelectedTemplate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [viewModalOpen, setViewModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [createModalOpen, setCreateModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const categories = [
        '全部',
        '写作',
        '编程',
        '分析',
        '翻译',
        '教育'
    ];
    const filteredTemplates = mockTemplates.filter((template)=>{
        const matchesCategory = selectedCategory === '全部' || template.category === selectedCategory;
        const matchesSearch = template.title.toLowerCase().includes(searchTerm.toLowerCase()) || template.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });
    const handleCopyTemplate = (template)=>{
        navigator.clipboard.writeText(template);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$notifications$40$8$2e$2$2e$4_$40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$ty_e67953665fd85d40faa3fac0efb2a8bc$2f$node_modules$2f40$mantine$2f$notifications$2f$esm$2f$notifications$2e$store$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifications"].show({
            title: '复制成功',
            message: '模板已复制到剪贴板',
            color: 'green'
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stack$2f$Stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stack"], {
        gap: "lg",
        p: "md",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                justify: "space-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconTemplate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconTemplate$3e$__["IconTemplate"], {
                                size: 28,
                                color: "var(--mantine-color-green-6)"
                            }, void 0, false, {
                                fileName: "[project]/features/prompt-templates/src/components/PromptTemplateManager.tsx",
                                lineNumber: 103,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Title$2f$Title$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
                                        order: 2,
                                        children: "提示词模板库"
                                    }, void 0, false, {
                                        fileName: "[project]/features/prompt-templates/src/components/PromptTemplateManager.tsx",
                                        lineNumber: 105,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                        c: "dimmed",
                                        size: "sm",
                                        children: "精选的 AI 提示词模板，提升您的工作效率"
                                    }, void 0, false, {
                                        fileName: "[project]/features/prompt-templates/src/components/PromptTemplateManager.tsx",
                                        lineNumber: 106,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/features/prompt-templates/src/components/PromptTemplateManager.tsx",
                                lineNumber: 104,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/features/prompt-templates/src/components/PromptTemplateManager.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                leftSection: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconRobot$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconRobot$3e$__["IconRobot"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/features/prompt-templates/src/components/PromptTemplateManager.tsx",
                                    lineNumber: 112,
                                    columnNumber: 26
                                }, void 0),
                                variant: "gradient",
                                gradient: {
                                    from: 'green',
                                    to: 'teal'
                                },
                                children: "AI 生成"
                            }, void 0, false, {
                                fileName: "[project]/features/prompt-templates/src/components/PromptTemplateManager.tsx",
                                lineNumber: 111,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                leftSection: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconPlus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconPlus$3e$__["IconPlus"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/features/prompt-templates/src/components/PromptTemplateManager.tsx",
                                    lineNumber: 119,
                                    columnNumber: 26
                                }, void 0),
                                onClick: ()=>setCreateModalOpen(true),
                                children: "创建模板"
                            }, void 0, false, {
                                fileName: "[project]/features/prompt-templates/src/components/PromptTemplateManager.tsx",
                                lineNumber: 118,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/features/prompt-templates/src/components/PromptTemplateManager.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/features/prompt-templates/src/components/PromptTemplateManager.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$TextInput$2f$TextInput$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextInput"], {
                    placeholder: "搜索模板...",
                    value: searchTerm,
                    onChange: (e)=>setSearchTerm(e.currentTarget.value),
                    leftSection: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconSearch$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconSearch$3e$__["IconSearch"], {
                        size: 16
                    }, void 0, false, {
                        fileName: "[project]/features/prompt-templates/src/components/PromptTemplateManager.tsx",
                        lineNumber: 133,
                        columnNumber: 24
                    }, void 0),
                    style: {
                        flex: 1
                    }
                }, void 0, false, {
                    fileName: "[project]/features/prompt-templates/src/components/PromptTemplateManager.tsx",
                    lineNumber: 129,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/features/prompt-templates/src/components/PromptTemplateManager.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Tabs$2f$Tabs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tabs"], {
                value: selectedCategory,
                onChange: (value)=>setSelectedCategory(value || '全部'),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Tabs$2f$Tabs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tabs"].List, {
                    children: categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Tabs$2f$Tabs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tabs"].Tab, {
                            value: category,
                            children: category
                        }, category, false, {
                            fileName: "[project]/features/prompt-templates/src/components/PromptTemplateManager.tsx",
                            lineNumber: 142,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/features/prompt-templates/src/components/PromptTemplateManager.tsx",
                    lineNumber: 140,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/features/prompt-templates/src/components/PromptTemplateManager.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            filteredTemplates.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Card$2f$Card$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                shadow: "sm",
                padding: "xl",
                radius: "md",
                withBorder: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Center$2f$Center$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Center"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stack$2f$Stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stack"], {
                        align: "center",
                        gap: "md",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconTemplate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconTemplate$3e$__["IconTemplate"], {
                                size: 64,
                                color: "var(--mantine-color-gray-5)"
                            }, void 0, false, {
                                fileName: "[project]/features/prompt-templates/src/components/PromptTemplateManager.tsx",
                                lineNumber: 154,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Title$2f$Title$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
                                order: 3,
                                ta: "center",
                                children: "没有找到匹配的模板"
                            }, void 0, false, {
                                fileName: "[project]/features/prompt-templates/src/components/PromptTemplateManager.tsx",
                                lineNumber: 155,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                c: "dimmed",
                                ta: "center",
                                maw: 400,
                                children: "尝试调整搜索条件或选择其他分类"
                            }, void 0, false, {
                                fileName: "[project]/features/prompt-templates/src/components/PromptTemplateManager.tsx",
                                lineNumber: 156,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/features/prompt-templates/src/components/PromptTemplateManager.tsx",
                        lineNumber: 153,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/features/prompt-templates/src/components/PromptTemplateManager.tsx",
                    lineNumber: 152,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/features/prompt-templates/src/components/PromptTemplateManager.tsx",
                lineNumber: 151,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Grid$2f$Grid$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Grid"], {
                children: filteredTemplates.map((template)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Grid$2f$Grid$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Grid"].Col, {
                        span: {
                            base: 12,
                            md: 6,
                            lg: 4
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Card$2f$Card$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            shadow: "sm",
                            padding: "lg",
                            radius: "md",
                            withBorder: true,
                            h: "100%",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stack$2f$Stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stack"], {
                                gap: "sm",
                                h: "100%",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                                        justify: "space-between",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Badge$2f$Badge$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                            variant: "light",
                                            color: "blue",
                                            size: "sm",
                                            children: template.category
                                        }, void 0, false, {
                                            fileName: "[project]/features/prompt-templates/src/components/PromptTemplateManager.tsx",
                                            lineNumber: 169,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/features/prompt-templates/src/components/PromptTemplateManager.tsx",
                                        lineNumber: 168,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
                                        style: {
                                            flex: 1
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Title$2f$Title$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
                                                order: 4,
                                                mb: "xs",
                                                children: template.title
                                            }, void 0, false, {
                                                fileName: "[project]/features/prompt-templates/src/components/PromptTemplateManager.tsx",
                                                lineNumber: 175,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                size: "sm",
                                                c: "dimmed",
                                                mb: "sm",
                                                lineClamp: 2,
                                                children: template.description
                                            }, void 0, false, {
                                                fileName: "[project]/features/prompt-templates/src/components/PromptTemplateManager.tsx",
                                                lineNumber: 176,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Paper$2f$Paper$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Paper"], {
                                                p: "sm",
                                                bg: "gray.0",
                                                radius: "md",
                                                mb: "sm",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                    size: "xs",
                                                    c: "dimmed",
                                                    lineClamp: 4,
                                                    style: {
                                                        fontFamily: 'monospace'
                                                    },
                                                    children: template.template
                                                }, void 0, false, {
                                                    fileName: "[project]/features/prompt-templates/src/components/PromptTemplateManager.tsx",
                                                    lineNumber: 181,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/features/prompt-templates/src/components/PromptTemplateManager.tsx",
                                                lineNumber: 180,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/features/prompt-templates/src/components/PromptTemplateManager.tsx",
                                        lineNumber: 174,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Divider$2f$Divider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Divider"], {}, void 0, false, {
                                        fileName: "[project]/features/prompt-templates/src/components/PromptTemplateManager.tsx",
                                        lineNumber: 187,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                                        justify: "space-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                                                gap: "xs",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ActionIcon$2f$ActionIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionIcon"], {
                                                        variant: "light",
                                                        size: "sm",
                                                        onClick: ()=>{
                                                            // 导航到详情页面
                                                            if ("TURBOPACK compile-time truthy", 1) {
                                                                window.location.href = "/templates/".concat(template.id);
                                                            }
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconEye$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconEye$3e$__["IconEye"], {
                                                            size: 14
                                                        }, void 0, false, {
                                                            fileName: "[project]/features/prompt-templates/src/components/PromptTemplateManager.tsx",
                                                            lineNumber: 201,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/features/prompt-templates/src/components/PromptTemplateManager.tsx",
                                                        lineNumber: 191,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ActionIcon$2f$ActionIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionIcon"], {
                                                        variant: "light",
                                                        size: "sm",
                                                        onClick: ()=>{
                                                        // TODO: 编辑功能
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconEdit$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconEdit$3e$__["IconEdit"], {
                                                            size: 14
                                                        }, void 0, false, {
                                                            fileName: "[project]/features/prompt-templates/src/components/PromptTemplateManager.tsx",
                                                            lineNumber: 210,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/features/prompt-templates/src/components/PromptTemplateManager.tsx",
                                                        lineNumber: 203,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/features/prompt-templates/src/components/PromptTemplateManager.tsx",
                                                lineNumber: 190,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                size: "xs",
                                                leftSection: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconCopy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconCopy$3e$__["IconCopy"], {
                                                    size: 12
                                                }, void 0, false, {
                                                    fileName: "[project]/features/prompt-templates/src/components/PromptTemplateManager.tsx",
                                                    lineNumber: 216,
                                                    columnNumber: 36
                                                }, void 0),
                                                onClick: ()=>handleCopyTemplate(template.template),
                                                children: "复制"
                                            }, void 0, false, {
                                                fileName: "[project]/features/prompt-templates/src/components/PromptTemplateManager.tsx",
                                                lineNumber: 214,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/features/prompt-templates/src/components/PromptTemplateManager.tsx",
                                        lineNumber: 189,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/features/prompt-templates/src/components/PromptTemplateManager.tsx",
                                lineNumber: 167,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/features/prompt-templates/src/components/PromptTemplateManager.tsx",
                            lineNumber: 166,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, template.id, false, {
                        fileName: "[project]/features/prompt-templates/src/components/PromptTemplateManager.tsx",
                        lineNumber: 165,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/features/prompt-templates/src/components/PromptTemplateManager.tsx",
                lineNumber: 163,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Modal$2f$Modal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
                opened: viewModalOpen,
                onClose: ()=>setViewModalOpen(false),
                title: (selectedTemplate === null || selectedTemplate === void 0 ? void 0 : selectedTemplate.title) || '模板详情',
                size: "lg",
                children: selectedTemplate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stack$2f$Stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stack"], {
                    gap: "md",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Badge$2f$Badge$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                color: "blue",
                                children: selectedTemplate.category
                            }, void 0, false, {
                                fileName: "[project]/features/prompt-templates/src/components/PromptTemplateManager.tsx",
                                lineNumber: 239,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/features/prompt-templates/src/components/PromptTemplateManager.tsx",
                            lineNumber: 238,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                            children: selectedTemplate.description
                        }, void 0, false, {
                            fileName: "[project]/features/prompt-templates/src/components/PromptTemplateManager.tsx",
                            lineNumber: 242,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                    fw: 500,
                                    mb: "sm",
                                    children: "模板内容："
                                }, void 0, false, {
                                    fileName: "[project]/features/prompt-templates/src/components/PromptTemplateManager.tsx",
                                    lineNumber: 245,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Paper$2f$Paper$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Paper"], {
                                    p: "md",
                                    withBorder: true,
                                    bg: "gray.0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                        size: "sm",
                                        style: {
                                            whiteSpace: 'pre-wrap',
                                            fontFamily: 'monospace'
                                        },
                                        children: selectedTemplate.template
                                    }, void 0, false, {
                                        fileName: "[project]/features/prompt-templates/src/components/PromptTemplateManager.tsx",
                                        lineNumber: 247,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/features/prompt-templates/src/components/PromptTemplateManager.tsx",
                                    lineNumber: 246,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/features/prompt-templates/src/components/PromptTemplateManager.tsx",
                            lineNumber: 244,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                            justify: "flex-end",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                leftSection: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tabler$2b$icons$2d$react$40$3$2e$34$2e$1_react$40$19$2e$1$2e$0$2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconCopy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconCopy$3e$__["IconCopy"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/features/prompt-templates/src/components/PromptTemplateManager.tsx",
                                    lineNumber: 255,
                                    columnNumber: 30
                                }, void 0),
                                onClick: ()=>{
                                    handleCopyTemplate(selectedTemplate.template);
                                    setViewModalOpen(false);
                                },
                                children: "复制模板"
                            }, void 0, false, {
                                fileName: "[project]/features/prompt-templates/src/components/PromptTemplateManager.tsx",
                                lineNumber: 254,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/features/prompt-templates/src/components/PromptTemplateManager.tsx",
                            lineNumber: 253,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/features/prompt-templates/src/components/PromptTemplateManager.tsx",
                    lineNumber: 237,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/features/prompt-templates/src/components/PromptTemplateManager.tsx",
                lineNumber: 230,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Modal$2f$Modal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
                opened: createModalOpen,
                onClose: ()=>setCreateModalOpen(false),
                title: "创建提示词模板",
                size: "lg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stack$2f$Stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stack"], {
                    gap: "md",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$TextInput$2f$TextInput$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextInput"], {
                            label: "模板标题",
                            placeholder: "输入模板标题",
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/features/prompt-templates/src/components/PromptTemplateManager.tsx",
                            lineNumber: 276,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Textarea$2f$Textarea$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                            label: "模板描述",
                            placeholder: "描述这个模板的用途和特点",
                            minRows: 2,
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/features/prompt-templates/src/components/PromptTemplateManager.tsx",
                            lineNumber: 282,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Select$2f$Select$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                            label: "分类",
                            placeholder: "选择分类",
                            data: categories.filter((c)=>c !== '全部'),
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/features/prompt-templates/src/components/PromptTemplateManager.tsx",
                            lineNumber: 289,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Textarea$2f$Textarea$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                            label: "模板内容",
                            placeholder: "输入提示词模板内容，使用 {参数名} 表示可替换的参数",
                            minRows: 6,
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/features/prompt-templates/src/components/PromptTemplateManager.tsx",
                            lineNumber: 296,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                            justify: "flex-end",
                            mt: "md",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "light",
                                    onClick: ()=>setCreateModalOpen(false),
                                    children: "取消"
                                }, void 0, false, {
                                    fileName: "[project]/features/prompt-templates/src/components/PromptTemplateManager.tsx",
                                    lineNumber: 304,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mantine$2b$core$40$8$2e$2$2e$4_$40$mantine$2b$hooks$40$8$2e$2$2e$4_react$40$19$2e$1$2e$0_$5f40$types$2b$react$40$19$2e$1$2e$8_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    children: "创建模板"
                                }, void 0, false, {
                                    fileName: "[project]/features/prompt-templates/src/components/PromptTemplateManager.tsx",
                                    lineNumber: 307,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/features/prompt-templates/src/components/PromptTemplateManager.tsx",
                            lineNumber: 303,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/features/prompt-templates/src/components/PromptTemplateManager.tsx",
                    lineNumber: 275,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/features/prompt-templates/src/components/PromptTemplateManager.tsx",
                lineNumber: 269,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/features/prompt-templates/src/components/PromptTemplateManager.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(PromptTemplateManager, "2mN/xXnfbjKB8WJ5cMMnDThdJmk=");
_c = PromptTemplateManager;
var _c;
__turbopack_context__.k.register(_c, "PromptTemplateManager");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/features/prompt-templates/src/hooks/usePromptTemplate.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "usePromptTemplate": ()=>usePromptTemplate
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.2_@babel+core@7.28.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const usePromptTemplate = ()=>{
    _s();
    const [templates, setTemplates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$2_$40$babel$2b$core$40$7$2e$28$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "usePromptTemplate.useEffect": ()=>{
            loadTemplates();
        }
    }["usePromptTemplate.useEffect"], []);
    const loadTemplates = async ()=>{
        try {
            setLoading(true);
            // 这里应该调用实际的API
            // const templates = await dbApi.getPromptTemplates();
            // setTemplates(templates.data || []);
            // 临时使用空数组
            setTemplates([]);
        } catch (error) {
            console.error('Failed to load templates:', error);
            setError('加载模板失败');
        } finally{
            setLoading(false);
        }
    };
    const createTemplate = async (templateData)=>{
        try {
            // 这里应该调用实际的创建API
            console.log('Creating template:', templateData);
            await loadTemplates();
        } catch (error) {
            console.error('Failed to create template:', error);
            throw error;
        }
    };
    const updateTemplate = async (id, updates)=>{
        try {
            // 这里应该调用实际的更新API
            console.log('Updating template:', id, updates);
            await loadTemplates();
        } catch (error) {
            console.error('Failed to update template:', error);
            throw error;
        }
    };
    const deleteTemplate = async (id)=>{
        try {
            // 这里应该调用实际的删除API
            console.log('Deleting template:', id);
            await loadTemplates();
        } catch (error) {
            console.error('Failed to delete template:', error);
            throw error;
        }
    };
    return {
        templates,
        loading,
        error,
        loadTemplates,
        createTemplate,
        updateTemplate,
        deleteTemplate
    };
};
_s(usePromptTemplate, "m+5sgYk8xbf2bQqeGMGVoP/N+JA=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/features/prompt-templates/src/index.ts [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// Prompt Templates Feature
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$features$2f$prompt$2d$templates$2f$src$2f$components$2f$PromptTemplateManager$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/features/prompt-templates/src/components/PromptTemplateManager.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$features$2f$prompt$2d$templates$2f$src$2f$hooks$2f$usePromptTemplate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/features/prompt-templates/src/hooks/usePromptTemplate.ts [app-client] (ecmascript)");
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/features/prompt-templates/src/index.ts [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$features$2f$prompt$2d$templates$2f$src$2f$components$2f$PromptTemplateManager$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/features/prompt-templates/src/components/PromptTemplateManager.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$features$2f$prompt$2d$templates$2f$src$2f$hooks$2f$usePromptTemplate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/features/prompt-templates/src/hooks/usePromptTemplate.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$features$2f$prompt$2d$templates$2f$src$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/features/prompt-templates/src/index.ts [app-client] (ecmascript) <locals>");
}),
}]);

//# sourceMappingURL=features_45b4ff66._.js.map