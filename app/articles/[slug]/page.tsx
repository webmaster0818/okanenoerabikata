import Link from 'next/link'
import { notFound } from 'next/navigation'
import fs from 'fs'
import path from 'path'

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

  // Markdownを簡易的にHTMLに変換（見出しと段落のみ）
  const htmlContent = content
    .split('\n')
    .map(line => {
      if (line.startsWith('# ')) {
        return `<h1 class="text-3xl font-bold mt-8 mb-4">${line.substring(2)}</h1>`
      } else if (line.startsWith('## ')) {
        return `<h2 class="text-2xl font-bold mt-6 mb-3">${line.substring(3)}</h2>`
      } else if (line.startsWith('### ')) {
        return `<h3 class="text-xl font-bold mt-4 mb-2">${line.substring(4)}</h3>`
      } else if (line.startsWith('#### ')) {
        return `<h4 class="text-lg font-semibold mt-3 mb-2">${line.substring(5)}</h4>`
      } else if (line.startsWith('**対策KW:**')) {
        return `<p class="text-sm text-gray-600 italic mb-4">${line}</p>`
      } else if (line.startsWith('**注意書き:**') || line.startsWith('**本記事は')) {
        return `<div class="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-4 my-4"><p class="text-sm font-semibold text-gray-800">${line.replace(/\*\*/g, '')}</p></div>`
      } else if (line.trim().startsWith('|')) {
        // テーブル行をそのまま返す（後でまとめて処理）
        return line
      } else if (line.trim() === '') {
        return '<br/>'
      } else if (line.trim().startsWith('-')) {
        return `<li class="ml-6 mb-1">${line.substring(1).trim()}</li>`
      } else {
        return `<p class="mb-4 leading-relaxed">${line}</p>`
      }
    })
    .join('\n')

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
        <article className="bg-white p-6 md:p-8 rounded-lg shadow-md prose prose-lg max-w-none">
          <div 
            dangerouslySetInnerHTML={{ __html: htmlContent }}
            className="article-content"
          />
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

      <style jsx global>{`
        .article-content h1,
        .article-content h2,
        .article-content h3,
        .article-content h4 {
          color: #1a1a1a;
        }
        
        .article-content p {
          color: #374151;
        }
        
        .article-content table {
          width: 100%;
          border-collapse: collapse;
          margin: 1.5rem 0;
        }
        
        .article-content th,
        .article-content td {
          border: 1px solid #e5e7eb;
          padding: 0.75rem;
          text-align: left;
        }
        
        .article-content th {
          background-color: #2563eb;
          color: white;
          font-weight: 600;
        }
        
        .article-content tr:nth-child(even) {
          background-color: #f9fafb;
        }
      `}</style>
    </div>
  )
}
