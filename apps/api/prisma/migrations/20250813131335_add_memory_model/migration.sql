-- CreateTable
CREATE TABLE "public"."users" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "emailVerified" TIMESTAMP(3),
    "image" TEXT,
    "avatar" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."accounts" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "accounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."sessions" (
    "id" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."verificationtokens" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "public"."subscriptions" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "stripeCustomerId" TEXT NOT NULL,
    "stripeSubscriptionId" TEXT,
    "stripePriceId" TEXT,
    "status" TEXT NOT NULL,
    "tier" TEXT NOT NULL,
    "currentPeriodEnd" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "subscriptions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."api_keys" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "api_keys_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."usage" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "featureId" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "tokens" INTEGER,
    "cost" DOUBLE PRECISION,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "usage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."verification_codes" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "attempts" INTEGER NOT NULL DEFAULT 0,
    "used" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "verification_codes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."prompt_categories" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "prompt_categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."prompt_templates" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "parameters" JSONB NOT NULL,
    "article" TEXT NOT NULL,
    "isPublic" BOOLEAN NOT NULL DEFAULT false,
    "isBlocked" BOOLEAN NOT NULL DEFAULT false,
    "localOnly" BOOLEAN NOT NULL DEFAULT true,
    "syncedAt" TIMESTAMP(3),
    "authorId" TEXT NOT NULL,
    "usageCount" INTEGER NOT NULL DEFAULT 0,
    "rating" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "prompt_templates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."prompt_executions" (
    "id" TEXT NOT NULL,
    "templateId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "parameters" JSONB NOT NULL,
    "generatedPrompt" TEXT NOT NULL,
    "result" TEXT,
    "model" TEXT,
    "tokens" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "prompt_executions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."template_ratings" (
    "id" TEXT NOT NULL,
    "templateId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "comment" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "template_ratings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."tags" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "parentId" TEXT,
    "level" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."knowledge_frameworks" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "domain" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "isBuiltIn" BOOLEAN NOT NULL DEFAULT false,
    "isPublic" BOOLEAN NOT NULL DEFAULT false,
    "isBlocked" BOOLEAN NOT NULL DEFAULT false,
    "localOnly" BOOLEAN NOT NULL DEFAULT true,
    "syncedAt" TIMESTAMP(3),
    "authorId" TEXT NOT NULL,
    "usageCount" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "knowledge_frameworks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."knowledge_nodes" (
    "id" TEXT NOT NULL,
    "frameworkId" TEXT NOT NULL,
    "parentId" TEXT,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "content" TEXT,
    "questions" TEXT[],
    "urls" TEXT[],
    "position" JSONB,
    "level" INTEGER NOT NULL DEFAULT 0,
    "order" INTEGER NOT NULL DEFAULT 0,
    "expanded" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "knowledge_nodes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."flow_designs" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "article" TEXT NOT NULL,
    "difficulty" TEXT NOT NULL DEFAULT 'medium',
    "totalTime" TEXT,
    "isPublic" BOOLEAN NOT NULL DEFAULT false,
    "isBlocked" BOOLEAN NOT NULL DEFAULT false,
    "localOnly" BOOLEAN NOT NULL DEFAULT true,
    "syncedAt" TIMESTAMP(3),
    "authorId" TEXT NOT NULL,
    "usageCount" INTEGER NOT NULL DEFAULT 0,
    "prerequisites" JSONB NOT NULL,
    "outcomes" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "flow_designs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."flow_steps" (
    "id" TEXT NOT NULL,
    "flowId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "estimatedTime" TEXT,
    "difficulty" TEXT NOT NULL DEFAULT 'medium',
    "questions" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "flow_steps_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."flow_tools" (
    "id" TEXT NOT NULL,
    "flowId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "flow_tools_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."flow_step_tools" (
    "id" TEXT NOT NULL,
    "stepId" TEXT NOT NULL,
    "toolId" TEXT NOT NULL,

    CONSTRAINT "flow_step_tools_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."flow_resources" (
    "id" TEXT NOT NULL,
    "stepId" TEXT NOT NULL,
    "type" TEXT NOT NULL DEFAULT 'url',
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "flow_resources_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."memories" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "location" TEXT,
    "people" TEXT[],
    "tags" TEXT[],
    "emotions" TEXT[],
    "imageUrl" TEXT,
    "audioUrl" TEXT,
    "videoUrl" TEXT,
    "aiGenerated" BOOLEAN NOT NULL DEFAULT false,
    "visibility" TEXT NOT NULL DEFAULT 'private',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "memories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."_PromptTemplateToTag" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_PromptTemplateToTag_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "public"."_KnowledgeFrameworkToTag" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_KnowledgeFrameworkToTag_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "public"."_FlowDesignToTag" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_FlowDesignToTag_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "public"."users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "accounts_provider_providerAccountId_key" ON "public"."accounts"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "sessions_sessionToken_key" ON "public"."sessions"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "verificationtokens_token_key" ON "public"."verificationtokens"("token");

-- CreateIndex
CREATE UNIQUE INDEX "verificationtokens_identifier_token_key" ON "public"."verificationtokens"("identifier", "token");

-- CreateIndex
CREATE UNIQUE INDEX "subscriptions_userId_key" ON "public"."subscriptions"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "subscriptions_stripeCustomerId_key" ON "public"."subscriptions"("stripeCustomerId");

-- CreateIndex
CREATE UNIQUE INDEX "subscriptions_stripeSubscriptionId_key" ON "public"."subscriptions"("stripeSubscriptionId");

-- CreateIndex
CREATE UNIQUE INDEX "api_keys_key_key" ON "public"."api_keys"("key");

-- CreateIndex
CREATE INDEX "usage_userId_createdAt_idx" ON "public"."usage"("userId", "createdAt");

-- CreateIndex
CREATE INDEX "usage_featureId_createdAt_idx" ON "public"."usage"("featureId", "createdAt");

-- CreateIndex
CREATE INDEX "usage_userId_featureId_idx" ON "public"."usage"("userId", "featureId");

-- CreateIndex
CREATE INDEX "verification_codes_email_expiresAt_idx" ON "public"."verification_codes"("email", "expiresAt");

-- CreateIndex
CREATE INDEX "verification_codes_used_expiresAt_idx" ON "public"."verification_codes"("used", "expiresAt");

-- CreateIndex
CREATE UNIQUE INDEX "verification_codes_email_code_key" ON "public"."verification_codes"("email", "code");

-- CreateIndex
CREATE UNIQUE INDEX "prompt_categories_name_key" ON "public"."prompt_categories"("name");

-- CreateIndex
CREATE INDEX "prompt_templates_isPublic_usageCount_idx" ON "public"."prompt_templates"("isPublic", "usageCount");

-- CreateIndex
CREATE INDEX "prompt_templates_category_isPublic_idx" ON "public"."prompt_templates"("category", "isPublic");

-- CreateIndex
CREATE INDEX "prompt_templates_authorId_createdAt_idx" ON "public"."prompt_templates"("authorId", "createdAt");

-- CreateIndex
CREATE INDEX "prompt_templates_localOnly_syncedAt_idx" ON "public"."prompt_templates"("localOnly", "syncedAt");

-- CreateIndex
CREATE INDEX "prompt_executions_userId_createdAt_idx" ON "public"."prompt_executions"("userId", "createdAt");

-- CreateIndex
CREATE INDEX "prompt_executions_templateId_createdAt_idx" ON "public"."prompt_executions"("templateId", "createdAt");

-- CreateIndex
CREATE INDEX "prompt_executions_model_createdAt_idx" ON "public"."prompt_executions"("model", "createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "template_ratings_templateId_userId_key" ON "public"."template_ratings"("templateId", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "tags_name_parentId_key" ON "public"."tags"("name", "parentId");

-- CreateIndex
CREATE INDEX "knowledge_frameworks_isPublic_usageCount_idx" ON "public"."knowledge_frameworks"("isPublic", "usageCount");

-- CreateIndex
CREATE INDEX "knowledge_frameworks_domain_isPublic_idx" ON "public"."knowledge_frameworks"("domain", "isPublic");

-- CreateIndex
CREATE INDEX "knowledge_frameworks_authorId_createdAt_idx" ON "public"."knowledge_frameworks"("authorId", "createdAt");

-- CreateIndex
CREATE INDEX "knowledge_frameworks_localOnly_syncedAt_idx" ON "public"."knowledge_frameworks"("localOnly", "syncedAt");

-- CreateIndex
CREATE INDEX "knowledge_nodes_frameworkId_level_idx" ON "public"."knowledge_nodes"("frameworkId", "level");

-- CreateIndex
CREATE INDEX "knowledge_nodes_parentId_order_idx" ON "public"."knowledge_nodes"("parentId", "order");

-- CreateIndex
CREATE INDEX "flow_designs_isPublic_usageCount_idx" ON "public"."flow_designs"("isPublic", "usageCount");

-- CreateIndex
CREATE INDEX "flow_designs_difficulty_isPublic_idx" ON "public"."flow_designs"("difficulty", "isPublic");

-- CreateIndex
CREATE INDEX "flow_designs_authorId_createdAt_idx" ON "public"."flow_designs"("authorId", "createdAt");

-- CreateIndex
CREATE INDEX "flow_designs_localOnly_syncedAt_idx" ON "public"."flow_designs"("localOnly", "syncedAt");

-- CreateIndex
CREATE INDEX "flow_steps_flowId_order_idx" ON "public"."flow_steps"("flowId", "order");

-- CreateIndex
CREATE INDEX "flow_tools_flowId_category_idx" ON "public"."flow_tools"("flowId", "category");

-- CreateIndex
CREATE UNIQUE INDEX "flow_step_tools_stepId_toolId_key" ON "public"."flow_step_tools"("stepId", "toolId");

-- CreateIndex
CREATE INDEX "flow_resources_stepId_type_idx" ON "public"."flow_resources"("stepId", "type");

-- CreateIndex
CREATE INDEX "memories_userId_date_idx" ON "public"."memories"("userId", "date");

-- CreateIndex
CREATE INDEX "memories_userId_createdAt_idx" ON "public"."memories"("userId", "createdAt");

-- CreateIndex
CREATE INDEX "memories_date_idx" ON "public"."memories"("date");

-- CreateIndex
CREATE INDEX "memories_tags_idx" ON "public"."memories"("tags");

-- CreateIndex
CREATE INDEX "memories_emotions_idx" ON "public"."memories"("emotions");

-- CreateIndex
CREATE INDEX "memories_people_idx" ON "public"."memories"("people");

-- CreateIndex
CREATE INDEX "memories_location_idx" ON "public"."memories"("location");

-- CreateIndex
CREATE INDEX "_PromptTemplateToTag_B_index" ON "public"."_PromptTemplateToTag"("B");

-- CreateIndex
CREATE INDEX "_KnowledgeFrameworkToTag_B_index" ON "public"."_KnowledgeFrameworkToTag"("B");

-- CreateIndex
CREATE INDEX "_FlowDesignToTag_B_index" ON "public"."_FlowDesignToTag"("B");

-- AddForeignKey
ALTER TABLE "public"."accounts" ADD CONSTRAINT "accounts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."sessions" ADD CONSTRAINT "sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."subscriptions" ADD CONSTRAINT "subscriptions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."api_keys" ADD CONSTRAINT "api_keys_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."usage" ADD CONSTRAINT "usage_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."prompt_templates" ADD CONSTRAINT "prompt_templates_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."prompt_templates" ADD CONSTRAINT "prompt_templates_category_fkey" FOREIGN KEY ("category") REFERENCES "public"."prompt_categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."prompt_executions" ADD CONSTRAINT "prompt_executions_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "public"."prompt_templates"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."prompt_executions" ADD CONSTRAINT "prompt_executions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."template_ratings" ADD CONSTRAINT "template_ratings_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "public"."prompt_templates"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."template_ratings" ADD CONSTRAINT "template_ratings_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."tags" ADD CONSTRAINT "tags_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "public"."tags"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."knowledge_frameworks" ADD CONSTRAINT "knowledge_frameworks_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."knowledge_nodes" ADD CONSTRAINT "knowledge_nodes_frameworkId_fkey" FOREIGN KEY ("frameworkId") REFERENCES "public"."knowledge_frameworks"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."knowledge_nodes" ADD CONSTRAINT "knowledge_nodes_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "public"."knowledge_nodes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."flow_designs" ADD CONSTRAINT "flow_designs_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."flow_steps" ADD CONSTRAINT "flow_steps_flowId_fkey" FOREIGN KEY ("flowId") REFERENCES "public"."flow_designs"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."flow_tools" ADD CONSTRAINT "flow_tools_flowId_fkey" FOREIGN KEY ("flowId") REFERENCES "public"."flow_designs"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."flow_step_tools" ADD CONSTRAINT "flow_step_tools_stepId_fkey" FOREIGN KEY ("stepId") REFERENCES "public"."flow_steps"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."flow_step_tools" ADD CONSTRAINT "flow_step_tools_toolId_fkey" FOREIGN KEY ("toolId") REFERENCES "public"."flow_tools"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."flow_resources" ADD CONSTRAINT "flow_resources_stepId_fkey" FOREIGN KEY ("stepId") REFERENCES "public"."flow_steps"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."memories" ADD CONSTRAINT "memories_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_PromptTemplateToTag" ADD CONSTRAINT "_PromptTemplateToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."prompt_templates"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_PromptTemplateToTag" ADD CONSTRAINT "_PromptTemplateToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."tags"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_KnowledgeFrameworkToTag" ADD CONSTRAINT "_KnowledgeFrameworkToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."knowledge_frameworks"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_KnowledgeFrameworkToTag" ADD CONSTRAINT "_KnowledgeFrameworkToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."tags"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_FlowDesignToTag" ADD CONSTRAINT "_FlowDesignToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."flow_designs"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_FlowDesignToTag" ADD CONSTRAINT "_FlowDesignToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."tags"("id") ON DELETE CASCADE ON UPDATE CASCADE;
