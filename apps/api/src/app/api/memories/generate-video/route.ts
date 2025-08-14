import { NextResponse } from 'next/server';

// 410 Gone：根据规则，生成类接口不在服务端提供
export async function POST() {
  return NextResponse.json(
    {
      error:
        'This endpoint is deprecated. Video generation is handled on desktop only.',
    },
    { status: 410 }
  );
}
