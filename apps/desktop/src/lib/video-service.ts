// 简易占位：预留视频生成接口，保持与 image/tts 相同的优先与兜底策略
export interface VideoRequest {
  prompt: string;
  model?: string;
  width?: number;
  height?: number;
  durationSeconds?: number;
}

export interface VideoResponse {
  url: string; // 返回视频地址（本地或远端）
}

export async function generateVideo(req: VideoRequest): Promise<VideoResponse> {
  // 将来接入：Google (Imagen Video) / Runway 等
  // 目前返回 Pollinations 兜底或占位空实现
  const fallbackUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(
    req.prompt
  )}?seed=42`;
  // 以静帧替代，前端可用作预览占位
  return { url: fallbackUrl };
}
