import Link from 'next/link'
import { notFound } from 'next/navigation'
import fs from 'fs'
import path from 'path'
import { remark } from 'remark'
import html from 'remark-html'
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
  },
  'ticket-center': {
    file: '07_チケットセンター.md',
    title: 'チケットセンターの口コミ評判は？先払い買取現金優良業者を徹底解説'
  },
  'instant': {
    file: '08_先払い買取_即日.md',
    title: '先払い買取で即日現金化！最短5分入金の優良業者4選を徹底解説'
  },
  'safe': {
    file: '09_先払い買取_安全.md',
    title: '先払い買取で安全に現金化する方法｜優良業者の見分け方と注意点'
  },
  'reliable': {
    file: '10_先払い買取_優良.md',
    title: '先払い買取優良業者の選び方｜安心できる4社と見極めポイント'
  },
  'ranking': {
    file: '11_先払い買取_ランキング.md',
    title: '先払い買取ランキング｜買取率・スピード別おすすめ業者TOP4'
  },
  'reviews': {
    file: '12_先払い買取_口コミ.md',
    title: '先払い買取の口コミ・評判は？利用者の声とトラブル事例を徹底調査'
  },
  'recommended': {
    file: '13_先払い買取_おすすめ.md',
    title: '先払い買取おすすめ業者4選！安全性と買取率で選ぶポイント'
  },
  'comparison': {
    file: '14_先払い買取_比較.md',
    title: '先払い買取業者を徹底比較！買取率・スピード・安全性で選ぶ最適な業者'
  },
  'illegal': {
    file: '15_先払い買取_違法.md',
    title: '先払い買取は違法？合法との違いと違法業者の見分け方を徹底解説'
  },
  'trouble': {
    file: '16_先払い買取_トラブル.md',
    title: '先払い買取のトラブル事例と対処法｜被害を防ぐための完全ガイド'
  }
}

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return Object.keys(articleMap).map(slug => ({ slug }))
}

async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(remarkGfm)
    .use(html, { sanitize: false })
    .process(markdown)
  return result.toString()
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
  let htmlContent = ''
  try {
    content = fs.readFileSync(filePath, 'utf-8')
    htmlContent = await markdownToHtml(content)
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
          
          {/* ナビゲーション */}
          <nav className="mt-4 border-t pt-4">
            <ul className="flex flex-wrap gap-4 text-sm">
              <li><Link href="/" className="text-gray-700 hover:text-blue-600">トップ</Link></li>
              <li><Link href="/comparison" className="text-gray-700 hover:text-blue-600">業者比較</Link></li>
              <li><Link href="/faq" className="text-gray-700 hover:text-blue-600">よくある質問</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* 記事本文 */}
        <article className="bg-white p-6 md:p-8 rounded-lg shadow-md">
          <div 
            className="prose prose-lg max-w-none markdown-content"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
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
    </div>
  )
}
