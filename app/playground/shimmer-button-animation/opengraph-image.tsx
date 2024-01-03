import { ImageResponse } from 'next/og'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

export default async function Image() {
  const promptData = await fs.promises.readFile(
    path.join(fileURLToPath(import.meta.url), '../../../../public/fonts/Prompt-Regular.ttf')
  )

  const promptBoldData = await fs.promises.readFile(
    path.join(fileURLToPath(import.meta.url), '../../../../public/fonts/Prompt-Bold.ttf')
  )

  const monoData = await fs.promises.readFile(
    path.join(fileURLToPath(import.meta.url), '../../../../public/fonts/UbuntuMono-Regular.ttf')
  )

  return new ImageResponse(
    (
      <div
        style={{
          fontFamily: '"Prompt"',
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          paddingLeft: '4rem',
          paddingRight: '4rem',
          paddingBottom: '4rem',
          justifyContent: 'flex-end',
          backgroundColor: '#000000',
          backgroundImage: 'radial-gradient(circle at 25px 25px, lightgray 2%, transparent 0%)',
          backgroundSize: '50px 50px',
          color: 'white',
          fontSize: 80,
          gap: '2rem',
          fontWeight: 600,
        }}
      >
        <div style={{ marginTop: 40, maxWidth: '700px', lineHeight: '80%' }}>
          Shimmer Button Animation
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ fontSize: 32, fontWeight: 400, marginTop: 12 }}>
            A shimmer effect on hover using conic-gradient
          </div>
          <div
            style={{
              fontSize: 32,
              fontWeight: 400,
              marginTop: 12,
              fontFamily: 'UbuntuMono',
              color: 'cyan',
            }}
          >
            aang.dev
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 600,
      fonts: [
        {
          name: 'Prompt',
          weight: 400,
          data: promptData,
        },
        {
          name: 'Prompt',
          weight: 600,
          data: promptBoldData,
        },
        {
          name: 'UbuntuMono',
          weight: 400,
          data: monoData,
        },
      ],
    }
  )
}
