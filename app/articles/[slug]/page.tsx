import Link from 'next/link'
import { notFound } from 'next/navigation'
import fs from 'fs'
import path from 'path'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

// 記事のマッピング
const articleMap: Record<string, { file: string; title: string }> = {
  'what-is-advance-purchase': {
    file: '01_先払い買取とは.md',
    title: '先払い買取とは？おすすめ業者や安全に即日現金化できる方法をご紹介'
  },
  'no-screening': {
    file: '02_先払い買取_審査なし.md',
    title: '先払い買取は審査なしでも借りられる？即日利用可能な厳選4社をご紹介'
  },
  '5ch-latest': {
    file: '03_先払い買取_5ch最新.md',
    title: '先払い買取の5chで話題の即日・爆速入金の先払い買取業者厳選4選をご紹介'
  },
  'reset-ticket': {
    file: '04_リセチケット.md',
    title: 'リセチケットの口コミ評判は？先払い買取現金優良業者を徹底解説'
  },
  'sheep-ticket': {
    file: '05_シープチケット.md',
    title: 'シープチケットの口コミ評判は？先払い買取現金優良業者を徹底解説'
  },
  'turtle-ticket': {
    file: '06_タートルチケット.md',
    title: 'タートルチケットの口コミ評判は？先払い買取現金優良業者を徹底解説'
  }
}

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return Object.keys(articleMap).map(slug => ({ slug }))
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const article = articleMap[slug]

  if (!article) {
    notFound()
  }

  // 記事ファイルを読み込む
  const articlesDir = path.join(process.cwd(), 'articles')
  const filePath = path.join(articlesDir, article.file)
  
  let content = ''
  try {
    content = fs.readFileSync(filePath, 'utf-8')
  } catch (error) {
    console.error('Failed to read article:', error)
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <Link href="/" className="text-blue-600 hover:text-blue-800 mb-2 inline-block">
            ← トップページに戻る
          </Link>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            {article.title}
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* 記事本文 */}
        <article className="bg-white p-6 md:p-8 rounded-lg shadow-md">
          <div className="prose prose-lg max-w-none markdown-content">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {content}
            </ReactMarkdown>
          </div>
        </article>

        {/* 関連記事 */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">関連記事</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(articleMap)
              .filter(([key]) => key !== slug)
              .slice(0, 3)
              .map(([key, val]) => (
                <Link 
                  key={key}
                  href={`/articles/${key}`}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="font-bold text-lg line-clamp-2">
                    {val.title}
                  </h3>
                  <div className="mt-4 text-blue-600 text-sm font-semibold">
                    続きを読む →
                  </div>
                </Link>
              ))}
          </div>
        </section>
      </main>

      {/* フッター */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">© 2026 お金の選び方研究所 - 先払い買取比較サイト</p>
          <div className="mt-4 space-x-4 text-sm">
            <Link href="/privacy" className="hover:text-gray-300">プライバシーポリシー</Link>
            <Link href="/faq" className="hover:text-gray-300">よくある質問</Link>
            <Link href="/" className="hover:text-gray-300">トップページ</Link>
          </div>
        </div>
      </footer>

    </div>
  )
}
