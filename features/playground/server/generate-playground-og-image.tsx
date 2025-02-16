import { ImageResponse } from 'next/og'
import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

type PlaygroundOgImageOpts = {
  title: string
  description: string
}

export async function generatePlaygroundOgImage(props: PlaygroundOgImageOpts) {
  const promptData = await fs.readFile(
    path.join(fileURLToPath(import.meta.url), '../../../public/fonts/Prompt-Bold.ttf')
  )

  const promptBoldData = await fs.readFile(
    path.join(fileURLToPath(import.meta.url), '../../../public/fonts/Prompt-Bold.ttf')
  )

  const monoData = await fs.readFile(
    path.join(fileURLToPath(import.meta.url), '../../../public/fonts/UbuntuMono-Regular.ttf')
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
        <div style={{ marginTop: 40, maxWidth: '700px', lineHeight: '80%' }}>{props.title}</div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ fontSize: 32, fontWeight: 400, marginTop: 12 }}>{props.description}</div>
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
