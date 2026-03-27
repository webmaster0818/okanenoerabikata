import Link from 'next/link'
import Header from '@/app/components/Header'
import HamburgerMenu from '@/app/components/HamburgerMenu'
import Breadcrumb from '@/app/components/Breadcrumb'

// 全記事データ
const allArticles = [
  {
    id: '00',
    title: '先払い買取おすすめランキング【2026年最新版】｜安全な優良業者TOP4を徹底比較',
    slug: 'recommended-ranking-2026',
    category: 'ランキング・比較',
    badge: '🔥 2026年最新版'
  },
  {
    id: '01',
    title: '先払い買取とは？おすすめ業者や安全に即日現金化できる方法をご紹介',
    slug: 'what-is-advance-purchase',
    category: '基礎知識'
  },
  {
    id: '02',
    title: '先払い買取は審査なしでも借りられる？即日利用可能な厳選4社をご紹介',
    slug: 'no-screening',
    category: '利用条件'
  },
  {
    id: '03',
    title: '先払い買取の5chで話題の即日・爆速入金の先払い買取業者厳選4選をご紹介',
    slug: '5ch-latest',
    category: '口コミ・評判'
  },
  {
    id: '04',
    title: 'リセチケットの口コミ評判は？先払い買取現金優良業者を徹底解説',
    slug: 'reset-ticket',
    category: '業者詳細'
  },
  {
    id: '05',
    title: 'シープチケットの口コミ評判は？先払い買取現金優良業者を徹底解説',
    slug: 'sheep-ticket',
    category: '業者詳細'
  },
  {
    id: '06',
    title: 'タートルチケットの口コミ評判は？先払い買取現金優良業者を徹底解説',
    slug: 'turtle-ticket',
    category: '業者詳細'
  },
  {
    id: '07',
    title: 'チケットセンターの口コミ評判は？先払い買取現金優良業者を徹底解説',
    slug: 'ticket-center',
    category: '業者詳細'
  },
  {
    id: '08',
    title: '先払い買取で即日現金化！最短5分入金の優良業者4選を徹底解説',
    slug: 'instant',
    category: '利用条件'
  },
  {
    id: '09',
    title: '先払い買取で安全に現金化する方法｜優良業者の見分け方と注意点',
    slug: 'safe',
    category: '安全性・リスク'
  },
  {
    id: '10',
    title: '先払い買取優良業者の選び方｜安心できる4社と見極めポイント',
    slug: 'reliable',
    category: 'ランキング・比較'
  },
  {
    id: '12',
    title: '先払い買取の口コミ・評判は？利用者の声とトラブル事例を徹底調査',
    slug: 'reviews',
    category: '口コミ・評判'
  },
  {
    id: '14',
    title: '先払い買取業者を徹底比較！買取率・スピード・安全性で選ぶ最適な業者',
    slug: 'comparison',
    category: 'ランキング・比較'
  },
  {
    id: '15',
    title: '先払い買取は違法？合法との違いと違法業者の見分け方を徹底解説',
    slug: 'illegal',
    category: '安全性・リスク'
  },
  {
    id: '16',
    title: '先払い買取のトラブル事例と対処法｜被害を防ぐための完全ガイド',
    slug: 'trouble',
    category: '安全性・リスク'
  },
  {
    id: '18',
    title: '先払い買取の仕組みを徹底解説｜3ステップの流れと安全な利用方法',
    slug: 'mechanism',
    category: '基礎知識'
  },
  {
    id: '19',
    title: '先払い買取の詐欺手口と見分け方｜被害事例と対策完全ガイド',
    slug: 'scam',
    category: '安全性・リスク'
  },
  {
    id: '20',
    title: '先払い買取は危険？リスクと回避方法を徹底解説【2026年最新版】',
    slug: 'dangerous',
    category: '安全性・リスク'
  },
  {
    id: '21',
    title: '先払い買取のメリット・デメリット｜良い面・悪い面を両面解説【2026年最新版】',
    slug: 'merits-demerits',
    category: '基礎知識'
  },
  {
    id: '22',
    title: '先払い買取と後払い買取の違いを徹底比較｜どちらを選ぶべき？【2026年最新版】',
    slug: 'vs-deferred',
    category: '基礎知識'
  },
  {
    id: '23',
    title: '先払い買取でLINE完結の業者4選｜登録方法と注意点【2026年最新版】',
    slug: 'line',
    category: '利用条件',
    badge: '🆕 NEW'
  },
  {
    id: '24',
    title: '先払い買取で在籍確認なしの業者4選｜プライバシー重視の方へ【2026年最新版】',
    slug: 'no-employment-check',
    category: '利用条件',
    badge: '🆕 NEW'
  },
  {
    id: '25',
    title: '先払い買取で審査なし＆即日の業者4選｜最短5分入金【2026年最新版】',
    slug: 'no-screening-instant',
    category: '利用条件',
    badge: '🆕 NEW'
  }
]

// カテゴリー別に記事をグループ化
const categories = [
  '基礎知識',
  'ランキング・比較',
  '安全性・リスク',
  '利用条件',
  '業者詳細',
  '口コミ・評判'
]

export default function ArticlesListPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HamburgerMenu />
      <Header />

      {/* パンくずリスト */}
      <Breadcrumb items={[
        { name: '記事一覧', url: '/articles' }
      ]} />

      {/* メインコンテンツ */}
      <main className="container mx-auto px-4 py-8">
        {/* ページヘッダー */}
        <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            記事一覧
          </h1>
          <p className="text-gray-600">
            先払い買取に関する全{allArticles.length}記事を掲載しています。カテゴリー別に分類していますので、気になる記事をお探しください。
          </p>
        </div>

        {/* カテゴリー別記事リスト */}
        {categories.map((category) => {
          const categoryArticles = allArticles.filter(article => article.category === category)
          
          if (categoryArticles.length === 0) return null

          return (
            <section key={category} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-blue-600">
                {category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryArticles.map((article) => (
                  <Link 
                    key={article.id} 
                    href={`/articles/${article.slug}`}
                    className="block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-200 hover:border-blue-400"
                  >
                    {article.badge && (
                      <div className="mb-2">
                        <span className="inline-block text-xs font-semibold px-2 py-1 bg-red-100 text-red-600 rounded">
                          {article.badge}
                        </span>
                      </div>
                    )}
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                      {article.title}
                    </h3>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-sm text-gray-500">{category}</span>
                      <span className="text-blue-600 text-sm font-medium">
                        詳しく見る →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )
        })}
      </main>

      {/* フッター */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-400">
            © 2026 お金の選び方研究所 - 先払い買取比較メディア
          </p>
        </div>
      </footer>
    </div>
  )
}
