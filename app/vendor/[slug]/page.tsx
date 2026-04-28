import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Header from '@/app/components/Header'
import HamburgerMenu from '@/app/components/HamburgerMenu'
import Breadcrumb from '@/app/components/Breadcrumb'
import Supervisor from '@/app/components/Supervisor'
import ConsultationList from '@/app/components/ConsultationList'
import References from '@/app/components/References'
import vendorsData from '@/data/vendors.json'

type Vendor = {
  name: string
  slug: string
  buyRate: number
  minTime: number
  maxAmount: number
  features: string[]
  pros: string[]
  cons: string[]
  officialUrl: string
  hasPermit: boolean
}

const vendors: Vendor[] = vendorsData

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return vendors.map((v) => ({ slug: v.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const vendor = vendors.find((v) => v.slug === slug)
  if (!vendor) {
    return {
      title: '業者が見つかりません｜お金の選び方研究所',
      robots: { index: false, follow: false },
    }
  }
  return {
    title: `${vendor.name}の評判・口コミ｜先払い買取業者レビュー【2026年最新版】｜お金の選び方研究所`,
    description: `${vendor.name}の買取率${vendor.buyRate}%・最短${vendor.minTime}分入金・最大${(vendor.maxAmount / 10000).toFixed(0)}万円対応。実際の評判・口コミ・利用の流れ・安全性を徹底解説。`,
    robots: { index: false, follow: false },
  }
}

export default async function VendorPage({ params }: Props) {
  const { slug } = await params
  const vendor = vendors.find((v) => v.slug === slug)
  if (!vendor) notFound()

  const faqItems = [
    {
      q: `${vendor.name}は古物商許可を取得していますか？`,
      a: vendor.hasPermit
        ? `はい、${vendor.name}は古物商許可を取得しています。許可番号は公式サイトでご確認ください。`
        : `現時点では古物商許可の確認が取れていません。利用前に必ず公式サイトで確認してください。`,
    },
    {
      q: `${vendor.name}の入金スピードはどのくらいですか？`,
      a: `最短${vendor.minTime}分での入金に対応しています（査定完了後）。`,
    },
    {
      q: `${vendor.name}でいくらまで買取してもらえますか？`,
      a: `最大${(vendor.maxAmount / 10000).toFixed(0)}万円まで対応しています。金額は査定内容によって変わります。`,
    },
    {
      q: `${vendor.name}で先払い買取を申し込む方法は？`,
      a: `公式サイトまたはLINEから申込みできます。必要書類を用意してフォームから申請し、査定が完了次第入金されます。`,
    },
    {
      q: `${vendor.name}はキャンセルできますか？`,
      a: `入金後のキャンセルは基本的に難しく、キャンセル料が発生する場合があります。申込み前に必ず契約内容をご確認ください。`,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <HamburgerMenu />
      <Header />

      <Breadcrumb items={[
        { name: '業者一覧', url: '/comparison' },
        { name: vendor.name, url: `/vendor/${vendor.slug}` },
      ]} />

      <main className="container mx-auto px-4 py-8 max-w-3xl">
        {/* 注意喚起 */}
        <div className="bg-amber-50 border-2 border-amber-400 rounded-lg p-4 mb-6">
          <p className="text-sm text-gray-800">
            ⚠️ 本サイトは先払い買取サービスの利用を推奨するものではありません。あくまで情報提供と注意喚起を目的としており、取引の可否や判断は利用者ご自身の責任においておこなってください。
          </p>
        </div>

        {/* ヒーローセクション */}
        <section className="bg-white rounded-xl shadow-md p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
              {vendor.name.charAt(0)}
            </div>
            <div>
              <h1 className="text-2xl font-black text-gray-900">{vendor.name}</h1>
              {vendor.hasPermit && (
                <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">
                  古物商許可取得済み
                </span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="text-center bg-blue-50 rounded-xl py-3">
              <p className="text-2xl font-black text-blue-700">{vendor.buyRate}<span className="text-sm">%</span></p>
              <p className="text-[10px] text-gray-500 mt-1">最大買取率</p>
            </div>
            <div className="text-center bg-green-50 rounded-xl py-3">
              <p className="text-2xl font-black text-green-700">{vendor.minTime}<span className="text-sm">分</span></p>
              <p className="text-[10px] text-gray-500 mt-1">最短入金</p>
            </div>
            <div className="text-center bg-amber-50 rounded-xl py-3">
              <p className="text-2xl font-black text-amber-700">{(vendor.maxAmount / 10000).toFixed(0)}<span className="text-sm">万</span></p>
              <p className="text-[10px] text-gray-500 mt-1">最大買取額</p>
            </div>
          </div>

          {vendor.officialUrl !== '#' ? (
            <a
              href={vendor.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-colors"
            >
              {vendor.name}の公式サイトを見る →
            </a>
          ) : (
            <button
              disabled
              className="block w-full text-center bg-gray-300 text-gray-500 font-bold py-3 rounded-xl cursor-not-allowed"
            >
              公式サイト（準備中）
            </button>
          )}
        </section>

        {/* 特徴 */}
        <section className="bg-white rounded-xl shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">{vendor.name}の特徴</h2>
          <ul className="space-y-2">
            {vendor.features.map((f, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-blue-500 font-bold flex-shrink-0">✓</span>
                {f}
              </li>
            ))}
          </ul>
        </section>

        {/* メリット・デメリット */}
        <section className="bg-white rounded-xl shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">メリット・デメリット</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 rounded-lg p-4">
              <h3 className="font-bold text-green-700 mb-3 text-sm">メリット</h3>
              <ul className="space-y-2">
                {vendor.pros.map((p, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-green-500 flex-shrink-0">○</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 rounded-lg p-4">
              <h3 className="font-bold text-red-700 mb-3 text-sm">デメリット・注意点</h3>
              <ul className="space-y-2">
                {vendor.cons.map((c, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-red-400 flex-shrink-0">△</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 利用の流れ */}
        <section className="bg-white rounded-xl shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">利用の流れ</h2>
          <ol className="space-y-4">
            {[
              { step: 1, title: '申込み', desc: `公式サイトまたはLINEから申込み。最短1分で完了。` },
              { step: 2, title: '査定・入金', desc: `最短${vendor.minTime}分で査定完了、即日お振込み。` },
              { step: 3, title: '商品発送', desc: '入金確認後に商品券・ギフトカードを業者に発送。' },
            ].map((item) => (
              <li key={item.step} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                  {item.step}
                </div>
                <div>
                  <p className="font-bold text-gray-800 text-sm">{item.title}</p>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* 安全性情報 */}
        <section className="bg-white rounded-xl shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">安全性・信頼性</h2>
          <div className="space-y-3 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <span className={vendor.hasPermit ? 'text-green-600' : 'text-red-500'}>
                {vendor.hasPermit ? '✓' : '✗'}
              </span>
              <span>
                古物商許可 — {vendor.hasPermit ? '取得済み（公式サイトで番号確認推奨）' : '未確認（利用前に要確認）'}
              </span>
            </div>
            <p className="text-xs text-gray-500 bg-gray-50 rounded-lg p-3 leading-relaxed">
              ※当サイトの情報は各業者の公式サイト等の公開情報をもとに作成しています。適法性・安全性・将来にわたる健全な運営を保証するものではありません。利用前に必ず公式情報をご確認ください。
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white rounded-xl shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">{vendor.name}に関するよくある質問</h2>
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-blue-50 px-4 py-3">
                  <p className="font-bold text-sm text-blue-900">Q. {item.q}</p>
                </div>
                <div className="px-4 py-3">
                  <p className="text-sm text-gray-700">A. {item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 監修者情報 */}
        <Supervisor />

        {/* 相談窓口 */}
        <ConsultationList />

        {/* 出典 */}
        <References />

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-6 text-white text-center mb-8">
          <h2 className="text-xl font-bold mb-3">他の業者と比較する</h2>
          <p className="text-sm text-blue-100 mb-4">15社以上の先払い買取業者を買取率・スピード・安全性で比較</p>
          <Link
            href="/comparison"
            className="inline-block bg-white text-blue-700 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            業者比較ページへ →
          </Link>
        </section>
      </main>

      {/* フッター */}
      <footer className="bg-gray-800 text-white py-8 mt-4">
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
